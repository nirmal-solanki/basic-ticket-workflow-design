import { ITicket } from "../types/ticket";
import { model, Schema } from "mongoose";

const ticketSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    status: {
      type: Schema.Types.ObjectId,
      ref: "workflow",
      default: null,
    },
  },
  { timestamps: true }
);

export default model<ITicket>("tickets", ticketSchema);
