import express from "express"
import { listarLivros, cadastrarLivro } from "../controllers/cLivros.js"

const router = express.Router()

router.get('/', listarLivros)
router.post('/', cadastrarLivro)
export default router