const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI, {
      useUnifiedTopology: true,
      UseNewUrlParser: true,
      // useCreateIndex: true
    });
  } catch (err) {
    console.error(err);
  }
 };
// try{
//   const conn = await mongoose.connect(process.env.DATABASE_URI,{
//       //must add in order to not get any error masseges:
//       useUnifiedTopology:true,
//       useNewUrlParser: true,
//       useCreateIndex: true
//   })
//   console.log(`mongo database is connected!!! ${conn.connection.host} `)
// }catch(error){
//   console.error(`Error: ${error} `)
//   process.exit(1) //passing 1 - will exit the proccess with error
// }

module.exports = connectDB;
