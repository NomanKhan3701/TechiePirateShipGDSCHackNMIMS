const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientOTPVerificationSchema = new Schema({
  userId: String,
  otp: String,
  createdAt: Date,
  expiresAt: Date,
});
const ClientOTPVerification = mongoose.model(
  "ClientOTPVerification",
  ClientOTPVerificationSchema
);
module.exports = ClientOTPVerification;
