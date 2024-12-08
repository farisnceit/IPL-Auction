import mongoose, { Schema, Document } from "mongoose";

// Define an interface representing a document in MongoDB
export interface IItem extends Document {
  name: string;
  description: string;
  price: number;
}

const ItemSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

const Item = mongoose.models.Item || mongoose.model<IItem>("Item", ItemSchema);

export default Item;
