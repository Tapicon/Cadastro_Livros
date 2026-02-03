import pool from "../config/db.js";

export const listarCopias = async(req, res) =>{
    try{
        const result = await pool.query('SELECT * FROM "tbl_Copias"');
        return res.status(200).json(result.rows);
    } catch(err){
        console.log(err);
        return res.status(500).json({message:"Error: " + err});
    }
}
export const cadastrarCopias = async(req, res) =>{
    const { cod_copia, id_livro, disponivel } = req.body;
    if(!cod_copia || !id_livro){
        return res.status(400).json({message:"Error: Campos faltando"});
    }
    try{
        const query = 'INSERT INTO "tbl_Copias" (cod_copia, id_livro, disponivel) VALUES ($1, $2, $3) RETURNING *;'; //retorna json do que foi adicionado

        const values = [cod_copia, id_livro, disponivel ?? true]; // se não enviar, default = true
        const result = await pool.query(query,values);
        
        return res.status(201).json({message:"Sucesso: Copia cadastrada", result})
    } catch(err){
        console.log(err)
        if(err.code == 23505){
            return res.status(500).json({message:"ERRO: Copia já cadastrada"})
        }
        return res.status(500).json({message:"Error: Erro no cadastro"});
    }
}