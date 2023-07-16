import Link from "next/link";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import Image from "next/image";

function MeetupItem({ _id, image, title, address }) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image src={image} alt={title} width="0" height="0" sizes="100vw" className={classes.thumbnail} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <Link href={`/${_id}`}>
            <button>Show Details</button>
          </Link>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
