import React, {Component} from "react";
import {Redirect, Link} from "react-router-dom";
import api from "../../services/service";

class DeletarUsuario extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usuario: {},
            redirect: false
        };
    }

    async componentDidMount() {
        const {id} = this.props.match.params;
        const response = await api.get(`/usuarios/${id}`);
        this.setState({usuario: response.data});
    }

    render() {
        const {redirect} = this.state;

        if (redirect) {
            return <Redirect to="/"/>;
        } else {
            return (
                <fieldset>
                    <legend>Deletar Usuario</legend>
                    <div className="usuario-delete">
                        <label htmlFor="nome">Nome</label>
                        <h5>{this.state.usuario.nome}</h5>
                        <p>Tem certeza que deseja deletar este registro?</p>

                        <button onClick={this.handleClick}>Remover</button>
                        <br/>
                        <Link to={`/`}>Voltar</Link>
                    </div>
                </fieldset>
            )
        };
    }

    handleClick = event => {
        const {id} = this.props.match.params;

        fetch(`http://localhost:4000/sistema/usuarios/${id}`, {
            method: "delete"
        })

            .then(data => {
                if (data.ok) {
                    this.setState({redirect: true});
                }
            })
        event.preventDefault();
    }
}

export default DeletarUsuario;