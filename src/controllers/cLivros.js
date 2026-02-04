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

export const deletarLivro = async(req, res) => {
    const { id_livro, isbn } = req.body;
    let values = [];
    try{
        if(!id_livro && !isbn){
            return res.status(400).json({message:"Campos não preenchidos"});
        }
        let query = `DELETE FROM "tbl_Livros" WHERE `;
        if(id_livro && isbn){
            query += "id_livro = $1 OR isbn = '$2'";
            values.push(id_livro,isbn);
        } else if (id_livro && !isbn){
            query += "id_livro = $1";
            values.push(id_livro);
        } else if(!id_livro && isbn){
            query += "isbn = '$1'";
            values.push(isbn);
        }
        const result = pool.query(query, values)
        res.status(202).json({message:`Livro ${isbn} deletado com sucesso.`});
    } catch(err){
        console.log(err)
        res.status(500).json({message:"Erro na exclusão do livro"})
    }
}