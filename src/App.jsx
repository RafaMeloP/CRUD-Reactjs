import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import Table from "./view/Table";
import Form from "./view/Form";

function App() {
  const [funcionario, setFuncionario] = useState([]);
  let history = useNavigate();
  
  useEffect(() => {
    fetchApi();
  }, [])

  function fetchApi(){
    setFuncionario([]);
    setTimeout(()=>{
      axios.get("https://api-cadastro-funcionario.herokuapp.com/funcionario")
      .then(response => setFuncionario(response.data));
    },800)
  }

  function saveFuncionario(firstName,lastName,email){
    axios.post("https://api-cadastro-funcionario.herokuapp.com/funcionario", {
      firstName,
      lastName,
      email
    }).then(history("/")).then(fetchApi());
  }
  function deleteFuncionario(id){
    axios.delete("https://api-cadastro-funcionario.herokuapp.com/funcionario/"+id)
    .then(fetchApi());
  }
  function updateFuncionario(id,firstName, lastName, email){
    axios.put("https://api-cadastro-funcionario.herokuapp.com/funcionario/"+id,{
      firstName,
      lastName,
      email
    }).then(history("/")).then(fetchApi());
  }

  return (
    <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={
              <Table funcionarios={funcionario} deleteFuncionario={deleteFuncionario} />
            } />
            <Route path="/save" element={<Form saveFuncionario={saveFuncionario} />} />
            <Route path="/update/*" element={<Form update={true} updateFuncionario={updateFuncionario} />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
