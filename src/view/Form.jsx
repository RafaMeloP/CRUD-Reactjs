import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Form(props) {
    const [funcionario, setFuncionario] = useState({});
    const defaultFuncionario = {
        id: 0,
        firstName: "",
        lastName: "",
        email: ""
    };

    let id = useParams();
    id = Object.values(id)[0];

    useEffect(() => {
        setFuncionario(defaultFuncionario);
        if (props.update) {
            axios.get("https://api-cadastro-funcionario.herokuapp.com/funcionario/" + id)
                .then(response => setFuncionario(response.data));
        }
    }, [])

    function getNewFuncionario(e) {
        e.preventDefault();
        const fName = document.getElementById("fName").value;
        const lName = document.getElementById("lName").value;
        const email = document.getElementById("email").value;

        if (!(fName == "" || lName == "" || email == "")) {
            props.saveFuncionario(fName, lName, email);
        }
        else{
            const alert = document.querySelector("div.alert.alert-warning.alert-dismissible.fade.show.d-none");
            alert.classList.remove("d-none");
        }
    }
    function getUpdateFuncionario(e) {
        e.preventDefault();
        const fName = document.getElementById("fName").value;
        const lName = document.getElementById("lName").value;
        const email = document.getElementById("email").value;

        props.updateFuncionario(id, fName, lName, email);
    }
    return (
        <form>
            <h2 className="text-center mt-3">{props.update ? "Atualizar funcionário" : "Cadastrar novo funcionário"}</h2>
            <div class="alert alert-warning alert-dismissible fade show d-none" role="alert">
                <strong>Preencha todos os campos!</strong>
            </div>
            <div className="mb-3">
                <label htmlFor="fName" className="form-label">Primeiro Nome</label>
                <input type="text" className="form-control" id="fName" name="fName" defaultValue={
                    funcionario.firstName
                } required />
            </div>
            <div className="mb-3">
                <label htmlFor="lName" className="form-label">Último nome</label>
                <input type="lName" className="form-control" id="lName" name="lName" defaultValue={
                    funcionario.lastName
                } required />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" defaultValue={
                    funcionario.email
                } required />
            </div>
            <button className="btn btn-primary" onClick={
                props.update ? getUpdateFuncionario : getNewFuncionario
            }>Enviar</button>
        </form>
    );
}