import { MongoClient, ServerApiVersion } from "mongodb";
// const uri =
//   "mongodb+srv://faris872010:<db_password>@cluster0.winda.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const dbConnect = new MongoClient(process.env.MONGODB_URI!, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default dbConnect;
