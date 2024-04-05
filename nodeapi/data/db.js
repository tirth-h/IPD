import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect("mongodb+srv://bhavya:admin@cluster0.koiianz.mongodb.net/?retryWrites=true", {
      // dbname: "backendapi",
    })
    .then((c) => {
      console.log(`Database Connected ${c.connection.host}`);
    })
    .catch((err) => console.log(err));
};
