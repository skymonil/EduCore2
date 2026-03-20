import { Schema, model } from "mongoose";

const OrderSchema = new Schema({
  userId: String,
  userName: String,
  userEmail: String,
  orderStatus: { type: String, default: "pending" },
  paymentMethod: { type: String, default: "paypal" },
  paymentStatus: { type: String, default: "initiated" },
  orderDate: { type: Date, default: Date.now },
  paymentId: String,
  payerId: String,
  instructorId: String,
  instructorName: String,
  courseImage: String,
  courseTitle: String,
  courseId: String,
  coursePricing: String,
  // Idempotency support
  idempotencyKey: { type: String, unique: true, sparse: true },
  approvalUrl: { type: String, default: "" },
}, { timestamps: true });

export default model("Order", OrderSchema);
