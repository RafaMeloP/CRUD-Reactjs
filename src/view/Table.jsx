import Row from "./Row";
import { Link } from "react-router-dom";

export default function Table(props) {
    return (
        <div>
            <h2 className="text-center mt-5">Lista de Funcionários</h2>
            <Link to="/save">
                <button className="btn btn-primary">Adicionar</button>
            </Link>
            <table className="table table-light table-hover mt-3">
                <thead className="text-center">
                    <tr>
                        <th>Primeiro Nome</th>
                        <th>Último Nome</th>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {props.funcionarios.map(funcionario => {
                        const funcionarioArray = Object.values(funcionario);
                        return (
                            <Row
                                funcionario={funcionarioArray}
                                deleteFuncionario={props.deleteFuncionario}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}