const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     const con = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       findOneAndUpdate: false,
//       createIndexes: true,
//     });
//     console.log(`MongoDB connected:${con.connection.host}`);
//   } catch (err) {
//     console.log(err);
//     process.exit(1);
//   }
// };

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};

module.exports = connectDB;
