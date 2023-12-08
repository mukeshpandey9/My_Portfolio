import app from "./app.js";
import connectDB from "./db/db.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    // Listening for error
    app.on("error", (error) => {
      console.log("Error in server!! \n\n", error);
    });

    // Listening for connection
    app.listen(port, () => {
      console.log("Server ⚙️  is running on port ", port);
    });
  })
  .catch((err) => {
    console.log("MongoDb Connection failed!! ", err);
  });
