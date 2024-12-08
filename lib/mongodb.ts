/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose, { Connection } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!; // Type assertion to ensure it's defined

// Ensure Mongo URI exists in environment variables
if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect(): Promise<Connection> {
  // If a connection already exists, return it
  if (cached.conn) {
    return cached.conn;
  }

  // Otherwise, create a new promise to connect
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  // Wait for the connection promise to resolve and set the conn
  const mongooseInstance = await cached.promise;
  cached.conn = mongooseInstance.connection;
  return cached.conn;
}

export default dbConnect;
