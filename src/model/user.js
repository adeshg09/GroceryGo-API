import mongoose from "mongoose";

// Base User Schema

const userSchema = new mongoose.Schema({
  name: { type: "string" },
  role: {
    type: "string",
    enum: ["Customer", "Admin", "Delivery Partner"], //ensure that no one but user with only this roles can use the app.
    required: true,
  },
  isActivated: { type: Boolean, default: false },
});

// Customer Schema

const CustomerSchema = new mongoose.Schema({
  ...userSchema.obj,
  phone: { type: Number, unique: true, required: true },
  role: { type: String, enum: ["Customer"], default: "Customer" },
  liveLocation: {
    latitude: { type: Number },
    longitude: { type: Number },
  },
  address: { type: String },
});

// Delivery Partner Schema

const DeliveryPartnerSchema = mongoose.Schema({
  ...userSchema.obj,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
  role: {
    type: String,
    enum: ["Delivery Partner"],
    default: "Delivery Partner",
  },
  liveLocation: {
    longitude: { type: Number },
    latitude: { type: Number },
  },
  address: { type: String },
  branch: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Branch",
  },
});

// Admin Schema

const AdminSchema = new mongoose.Schema({
  ...userSchema.obj,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["Admin"], default: "Admin" },
});

// exporting Schemas

export const Customer = mongoose.model("Customer", CustomerSchema);
export const DeliveryPartner = mongoose.model(
  "DeliveryPartner",
  DeliveryPartnerSchema
);
export const Admin = mongoose.model("Admin", AdminSchema);
