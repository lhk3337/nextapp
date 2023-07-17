import React from "react";
import classes from "./MeetupDetail.module.css";
import Image from "next/image";
const MeetupDetail = ({ image, title, address, description }) => {
  return (
    <section className={classes.detail}>
      <div className={classes.image}>
        <Image src={image} alt={title} width="0" height="0" sizes="100vw" className={classes.thumbnail} />
      </div>
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default MeetupDetail;
