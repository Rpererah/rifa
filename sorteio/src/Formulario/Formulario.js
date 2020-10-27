import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function Formulario() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [ehCadastro, setEhcadastro] = useState(true);

    const Submeter = async () => {

        if (ehCadastro) {
            // Codigo Cadastro
            const data = await axios.post('http://localhost:38000/usuarios/cadastro', { nome, email, senha },{withCredentials:true})
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
            console.log(data);
        } else {
            // Codigo Login
            const data = await axios.post('http://localhost:38000/usuarios/autentica', { email, senha },{withCredentials:true})
                .then(function (response) {
                    console.log(response.data);

                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    let campoNome = ehCadastro ? <div className="form-group">
        <label htmlFor="InputName">Nome:</label>
        <input type="text" onChange={text => setNome(text.target.value)} className="form-control" id="InputName" />
    </div> : '';

    return (
        <div className="Formulario">
            <div className="jumbotron">
                <h1 className="display-5">{ehCadastro ? "Cadastro" : "Login"}</h1>
            </div>
            <div className="container">


                <div className="row">
                    <div className="col">
                    <form >
                        {campoNome}
                        <div className="form-group">
                            <label htmlFor="InputEmail">Email:</label>
                            <input type="email" onChange={text => setEmail(text.target.value)} className="form-control" id="InputEmail" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputPassword">Senha:</label>
                            <input type="password" onChange={text => setSenha(text.target.value)} className="form-control" id="InputPassword" />
                        </div>
                        <br />
                        <button type="button" onClick={Submeter} className="btn btn-primary btn-lg btn-block">{ehCadastro ? "Cadastrar" : "Logar"}</button>
                        <br />
                        <button type="button" onClick={e => setEhcadastro(!ehCadastro)} className="btn btn-secondary btn-lg btn-block">Ir para {ehCadastro ? "Login" : "Cadastro"}</button>
                    </form>
                    </div>



                <div className="col" style={{borderStyle:"outset"}}>
                    <div style={{padding:'13%',borderStyle:"outset",textAlign:'center',margin:'13%'}}>
                    <p style={{justifyContent:'flex-end',alignContent:'center',alignItems:'center'}}>Seja Bem vindo ao Explosão de premios, acompanhe os sorteio compre nossas rifas e divirta-se</p>
                    </div>
                </div>




                </div>
            </div>
        </div>
    );
}

export default Formulario;