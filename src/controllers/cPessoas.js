import pool from '../config/db.js'
export const listarPessoas = async (req,res) => {
    try{
        const result = await pool.query('SELECT * FROM "tbl_Pessoas"')
        return res.json(result.rows)}
    catch(err){
        console.log(err)
        res.status(500).json({ erro: 'Erro ao buscar pessoas' })
    }
}

export const cadastrarPessoa = async (req, res) => {
    const { nome, cpf, dataNasc } = req.body
    try{
        const result = await pool.query(`insert into "tbl_Pessoas" (nome_Pessoa,cpf_Pessoa,dataNasc) values (${nome},${cpf},${dataNasc})`)
        return res.status(201).json(result)
    } catch(err){
        return res.status(500).json({message:err})
    }
}