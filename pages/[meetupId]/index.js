import React from "react";
import { DUMMY_MEETUPS } from "../index";

import MeetupDetail from "../../components/meetups/MeetupDetail";
import { useRouter } from "next/router";
const MeetupDetails = () => {
  const router = useRouter();
  const { meetupId } = router.query;

  const DETAIL_DUMMY_DATA = DUMMY_MEETUPS.find((value) => value.id === meetupId);

  return (
    <div>
      <MeetupDetail {...DETAIL_DUMMY_DATA} />
    </div>
  );
};

export default MeetupDetails;
