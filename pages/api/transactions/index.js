





import Transact from "../../../models/transact";
import db from "../../../lib/dbConnect"

export default async function handler(req, res) {
  
   if (req.method == "GET") {
    await db.connect()

    const transactions = await Transact.find({}).sort({_id: -1})
        
    await db.disconnect();

    res.status(200).json({ transactions });
    return;
   } else if (req.method == "POST") {
    await db.connect()

    console.log(req.body)

    const { name, type, amount, date } = req.body

    const trans = await Transact.create({
        name,
        type,
        amount,
        date,
    })
    await db.disconnect()

    res.status(201).json( {trans} )
   } else {
    res.status(405).json({ error: "Only POST and GET methods are allowed"})
   }
}