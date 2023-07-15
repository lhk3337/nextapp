import { closeMongoDB, collectionMongoDB } from "../../libs/mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    await (await collectionMongoDB("meetups")).insertOne(data);
    await closeMongoDB();
    res.status(200).json({ ok: true });
  }
}
export default handler;
