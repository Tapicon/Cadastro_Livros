import express from "express"
import { listarCopias, cadastrarCopias } from "../controllers/cCopias.js"

const router = express.Router()

router.get('/', listarCopias)
router.post('/', cadastrarCopias)

export default router