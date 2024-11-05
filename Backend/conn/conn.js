const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(`${process.env.MONGO_URI}`)
    .then(() => console.log("This computer is connected to MongoDB and is actively updating data in the database"));
};
connectDB();
