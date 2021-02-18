import React, {Component} from "react";
import api from "../../services/service";
import {Link} from 'react-router-dom';
import './details.css';

export default class Usuario extends Component {
    state = {
        usuario: {
            nome: "",
            matricula: 0,
            ativo: "",
            endereco: {
                cidade: "",
                estado: ""
            }
        },
    };

    async componentDidMount() {
        const {id} = this.props.match.params;
        const response = await api.get(`/usuarios/${id}`);
        this.setState({usuario: response.data});
    }

    render() {
        const {usuario} = this.state;

        if (usuario.ativo) {
            usuario.ativo = "Usuário Ativo";
        } else {
            usuario.ativo = "Usuário Inativo";
        }
        return (
            <div className="usuario-info">
                <h1>{usuario.nome}</h1>
                <h1>{usuario.matricula}</h1>
                <h1>{usuario.ativo}</h1>
                <h1>{usuario.endereco.cidade}</h1>
                <h1>{usuario.endereco.estado}</h1>
                <br/>
                <Link to={`/`}>Voltar</Link><br/>
                <Link to={`/EditarUsuario/${usuario._id}`}>Editar</Link><br/>
                <Link to={`/DeletarUsuario/${usuario._id}`}>Deletar</Link><br/>

            </div>
        )
    }

}