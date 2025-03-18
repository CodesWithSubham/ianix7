import clientPromise from "@/lib/mongodb";
import { redirect } from "next/navigation";


export default async function Page({ params }) {
  const alias = (await params).shortCode;

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_NAME);
  const collection = db.collection("shorturls");

  const doc = await collection.findOne({ alias });
  console.log(doc);
  if (doc) {
    //  redirect(doc.url)
  } else {
    // redirect(`${process.env.NEXT_PUBLIC_HOST}`)
  }

  return <div>My Post: {doc?.longUrl}</div>;
}
