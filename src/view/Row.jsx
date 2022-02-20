import { Link } from "react-router-dom";

export default function Row(props) {
    function getDeleteFuncionario() {
        props.deleteFuncionario(props.funcionario[0]);
    }
    return (
        <tr key={props.funcionario[0]}>
            <td>{props.funcionario[1]}</td>
            <td>{props.funcionario[2]}</td>
            <td>{props.funcionario[3]}</td>
            <td className="d-flex justify-content-evenly">
                <Link to={"/update/"+props.funcionario[0]}>
                    <button className="btn btn-success mx-2">Atualizar</button>
                </Link>
                <button className="btn btn-danger" onClick={getDeleteFuncionario}>Excluir</button>
            </td>
        </tr>
    );
}