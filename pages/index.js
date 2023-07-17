import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
export default function Home({ meetups }) {
  return (
    <>
      <Head>
        <title>Nextjs Meetup</title>
        <meta name="description" content="Browse a huge list of highly active nextjs meetup!" />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
}
// getServerSideProps은 req, res를 사용 가능하다.
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/meetup", {
    method: "GET",
  });
  const meetups = await response.json();

  return {
    props: {
      meetups: meetups.map((meetup) => ({ ...meetup })),
    },
    revalidate: 1,
  };
}
