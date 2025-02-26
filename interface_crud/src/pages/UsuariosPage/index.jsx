import axios from "axios";
import { useEffect, useState } from "react";

export default function UsuariosPage() {
    const [usuarios, setUsuarios] = useState([]);
    async function getUsuarios() {
        const response = await axios.get('http://localhost:3000/usuarios')
        console.log(response.data);
        setUsuarios(response.data);
    }

    useEffect(() => {
        getUsuarios();
    }, []);

    return (
        <div className="container">
            <h1>Página de Usuários</h1>
            <button className="btn btn-success" onClick={getUsuarios}>Listar Dados</button>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((item, indice) => (
                        <tr key={indice}>
                            <td>{item.nome}</td>
                            <td>{item.email}</td>
                            <td>
                                <buttton className="btn btn-primary">Editar</buttton>
                                <buttton className="btn btn-danger">Excluir</buttton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}