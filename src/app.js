import express from "express";
import cors from "cors";
import routesPessoas from './routes/routesPessoas.js'
import routesLivros from './routes/routesLivros.js'
const app = express();
app.use(cors());
app.use(express.json());

app.use("/pessoas", routesPessoas);
app.use("/livros", routesLivros)
export default app