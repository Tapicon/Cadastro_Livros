import express from "express";
import cors from "cors";
import pessoaRoutes from './routes/routesPessoas.js'
const app = express();
app.use(cors());
app.use(express.json());

app.use("/pessoas", pessoaRoutes);

export default app