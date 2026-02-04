import express from "express"
import { listarLivros, cadastrarLivro, deletarLivro } from "../controllers/cLivros.js"

const router = express.Router()

router.get('/', listarLivros)
router.post('/', cadastrarLivro)
router.delete('/', deletarLivro)
export default router