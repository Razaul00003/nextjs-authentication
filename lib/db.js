import { MongoClient } from "mongodb";
export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://nextjs-auth:gAkTNOnxmDcdpOZM@cluster0.wsakd.mongodb.net/nextjs-auth?retryWrites=true&w=majority"
  );
  return client;
}
//nextjs-auth;
//gAkTNOnxmDcdpOZM
