import mongoose from "mongoose";

const schema = new mongoose.Schema({
    Event_Name: {
      type: String,
      required: true,
    },
    Url: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    Date: {
      type: String,
      required: true,
    },
    committeeName: {
      type: String,
      required: true,
    },
    // Image: {
    //   type: Boolean,
    //   required: true,
    //   default: false, // Assuming default is false
    // },
    // availability: {
    //   type: Boolean,
    //   required: true,
    //   default: true, // Assuming default is true
    // },
  });
  
  export const    Event = mongoose.model("Committee_Event", schema);
  