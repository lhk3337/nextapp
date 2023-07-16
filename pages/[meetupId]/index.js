import React from "react";
import { DUMMY_MEETUPS } from "../index";

import MeetupDetail from "../../components/meetups/MeetupDetail";
// import { useRouter } from "next/router";
const MeetupDetails = ({ meetupData }) => {
  // const router = useRouter();
  // const { meetupId } = router.query;
  // const DETAIL_DUMMY_DATA = DUMMY_MEETUPS.find((value) => value.id === meetupId);

  return (
    <div>
      <MeetupDetail {...meetupData} />
    </div>
  );
};

export default MeetupDetails;

export async function getStaticPaths() {
  const response = await fetch("http://localhost:3000/api/meetup", {
    method: "GET",
  });
  const meetups = await response.json();
  const paths = meetups.map((event) => ({ params: { meetupId: event._id } }));
  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps(context) {
  const response = await fetch("http://localhost:3000/api/meetup", {
    method: "GET",
  });
  const meetups = await response.json();
  const meetupId = context.params.meetupId;

  const DETAIL_DUMMY_DATA = meetups.find((value) => value._id.toString() === meetupId);

  return {
    props: {
      meetupData: DETAIL_DUMMY_DATA,
    },
  };
}
