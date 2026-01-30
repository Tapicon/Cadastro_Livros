import express from "express";
import cors from "cors";
import routesPessoas from './routes/routesPessoas.js'
import routesLivros from './routes/routesLivros.js'
import routesCopias from './routes/routesCopias.js'
const app = express();
app.use(cors());
app.use(express.json());

app.use("/pessoas", routesPessoas);
app.use("/livros", routesLivros)
app.use("/copias", routesCopias)
export default app