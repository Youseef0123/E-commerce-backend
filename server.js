import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { connection } from './db/connections.js';
import { Bootstrap } from './src/modules/Bootstrap.js';
import { globalError } from './src/utils/globalError.js';
import AppError from './src/utils/AppError.js';
const app = express();
const port = process.env.PORT || 3000;


// for upload
   


connection();
app.use(express.json()); 
app.use("/uploads",express.static("uploads"));
Bootstrap(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use((req,res,next)=>{
  next(new AppError(`invaliond route: ${req.originalUrl}`,404));
})

app.use(globalError) 

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});