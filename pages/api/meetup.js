import { closeMongoDB, collectionMongoDB } from "../../libs/mongodb";
async function handler(req, res) {
  const meetupCollect = await (await collectionMongoDB("meetups")).find().toArray();
  res.status(200).json(meetupCollect);
}
export default handler;
