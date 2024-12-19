import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error ("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log ("conexão com o banco estabelecida com sucesso");
})

const app = express();
routes(app);

// app.get("/livros", async (req, res) => {
//     const listaLivros = await livro.find ({});
//     res.status(200).json(listaLivros);
// });

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("livro removido com sucesso");
});

export default app;