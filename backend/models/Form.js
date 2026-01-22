import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 2,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 2,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      match: /^[0-9]{10}$/,
    },
    dob: {
      type: String,
      required: true,
    },
    college: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
      match: /^[0-9]{4}$/,
    },
    skills: String,
    experience: String,
  },
  {
    timestamps: true,
  },
);

const Form = mongoose.model("Form", formSchema);

export default Form;
