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
    const { nome_pessoa, cpf_pessoa, datanasc } = req.body
    console.log(cpf_pessoa)
    try{
        await pool.query(`insert into "tbl_Pessoas" (nome_pessoa,cpf_pessoa,datanasc) values ('${nome_pessoa}','${cpf_pessoa}','${datanasc}')`)
        return res.status(201).json({message:`Usuário ${nome_pessoa} cadastrado com sucesso.`})
    } catch(err){
        console.log(err)
        if(err.code == 23505){
            return res.status(500).json({message:"ERRO: CPF já cadastrado"})
        }
        return res.status(500).json({message:err})
    }
}

//export const excluir pessoas