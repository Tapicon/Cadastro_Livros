import pool from "../config/db.js";

export const listarLivros = async(req, res) => {
    try{
        const result = await pool.query('SELECT * FROM "tbl_Livros"');
        return res.status(200).json(result.rows);
    }catch(err){
        return res.status(500).json(err);
    }
}
export const cadastrarLivro = async(req, res) => {
    try{
        const { titulo_livro, autor_livro, cod_copia, isbn } = req.body;
        await pool.query(`INSERT INTO "tbl_Livros" (titulo_livro, autor_livro, isbn) VALUES ('${titulo_livro}', '${autor_livro}', '${isbn}')`);
        return res.status(201).json({message:`Livro ${titulo_livro} cadastrado com sucesso.`});
    } catch(err){
        console.log(err)
        if(err.code == 23505){
            return res.status(500).json({message:"ERRO: Livro já cadastrado"})
        }
        return res.status(500).json({message:`Erro no cadastro do livro`});
    }
}