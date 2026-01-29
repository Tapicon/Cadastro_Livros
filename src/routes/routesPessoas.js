import express from 'express'
import { listarPessoas, cadastrarPessoa } from '../controllers/cPessoas.js'

const router = express.Router()

router.get('/', listarPessoas)
router.post('/', cadastrarPessoa)

export default router