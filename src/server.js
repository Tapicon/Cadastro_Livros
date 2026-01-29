import dotenv from "dotenv";
dotenv.config();

const { default: app } = await import("./app.js"); 

const port = 3000;

app.listen(port, () => console.log('Variáveis carregadas:', process.env.DB_USER, process.env.DB_NAME));
