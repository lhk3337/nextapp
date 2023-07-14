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
  const paths = DUMMY_MEETUPS.map((event) => ({ params: { meetupId: event.id } }));
  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const DETAIL_DUMMY_DATA = DUMMY_MEETUPS.find((value) => value.id === meetupId);
  return {
    props: {
      meetupData: DETAIL_DUMMY_DATA,
    },
  };
}
