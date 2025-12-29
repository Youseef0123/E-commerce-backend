import express from 'express';
import { connection } from './db/connections.js';
import { Bootstrap } from './src/modules/Bootstrap.js';
import { globalError } from './src/utils/globalError.js';
import AppError from './src/utils/AppError.js';
const app = express();
const port = process.env.PORT || 3000;




connection();
app.use(express.json()); 
Bootstrap(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use((req,res,next)=>{
  next(new AppError(`invalid route: ${req.originalUrl}`,404));
})

app.use(globalError) 

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});