import Daily from "../../../models/daily";
import db from "../../../lib/dbConnect"

export default async function handler(req, res) {
  
   if (req.method == "GET") {
    await db.connect()

    const daily = await Daily.find({}).sort({_id: -1})
        
    await db.disconnect();

    res.status(200).json({ daily });
    return;
   } else if (req.method == "POST") {
    await db.connect()

    console.log(req.body)

    const { title, body, date } = req.body

    const trans = await Daily.create({
        title,
        body,
        date,
    })
    await db.disconnect()

    res.status(201).json({ trans })
   } else {
    res.status(405).json({ error: "Only POST and GET methods are allowed"})
   }
}