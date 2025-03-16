import axios from "axios";
import { useEffect, useState } from "react";

export default function ProdutosPage() {
    const [produtos, setProdutos] = useState([]);
    async function getProdutos() {
        const response = await axios.get('http://localhost:3000/produtos')
        console.log(response.data);
        setProdutos(response.data);
    };

    // useEffect(() => {
    //     getUsuarios();
    // }, []); para os usuários sempre serem carregados na tela assim que for aberta

    

    return (
        <div className="container">
            <h1>Livros</h1>
            <button className="btn btn-success" onClick={getProdutos}>Listar Livros</button>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Livro</th>
                        <th>Preço</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((item, indice) => (
                        <tr key={indice}>
                            <td>{item.livro}</td>
                            <td>{item.preco}</td>
                            <td>
                                <button className="btn btn-primary">Editar</button>
                                <button className="btn btn-danger">Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}