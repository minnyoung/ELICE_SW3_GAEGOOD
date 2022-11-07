import { Schema } from "mongoose";

const OrderSchema = new Schema(
  {
    buyer: { type: Schema.Types.ObjectId, ref: "User", required: true },
    productList: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    ],
    countList: [{ type: Number, required: true }],
    // productList: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Product",
    //     required: true,
    //   },
    // ],
    // countList: [
    //   {
    //     type: Number,
    //     required: true,
    //   },
    // ],
    shippingStatus: {
      type: String,
      default: "배송준비중",
    },
    shippingPostCode: {
      type: String,
      required: true,
    },
    shippingStreetAddress: {
      type: String,
      required: true,
    },
    shippingExtraAddress: {
      type: String,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    recipientName: {
      type: String,
      required: true,
    },
    recipientPhoneNumber: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export { OrderSchema };
