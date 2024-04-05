import mongoose from "mongoose";

const schema = new mongoose.Schema({
    startDate: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    committeeName: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    fullDay: {
      type: Boolean,
      required: true,
      default: false, // Assuming default is false
    },
    // availability: {
    //   type: Boolean,
    //   required: true,
    //   default: true, // Assuming default is true
    // },
  });
  
  export const    Event = mongoose.model("Event", schema);
  