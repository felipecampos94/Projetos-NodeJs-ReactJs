import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import classNames from 'classnames';
import {RadioButton} from 'primereact/radiobutton';
import {Panel} from 'primereact/panel';

class CriarUsuario extends Component {
    constructor() {
        super();

        this.state = {
            usuario: {
                nome: "",
                matricula: 0,
                ativo: "true",
                endereco: {
                    cidade: "",
                    estado: ""
                }
            },
            redirect: false,
        }
    }

    render() {
        const {redirect} = this.state;
        if (redirect) {
            return <Redirect to="/"/>
        } else {
            return (
                <div>
                    <Panel header="Criar Usuário">
                        <form onSubmit={this.handleSubmit}>
                            <div className="p-field">
                                <label htmlFor="nome">Name</label>
                                <InputText id="nome" value={this.state.usuario.nome}
                                           onChange={(e) => this.onInputChange(e, 'nome')} required autoFocus
                                           className={classNames({'p-invalid': this.state.submitted && !this.state.usuario.nome})}/>
                                {this.state.submitted && !this.state.usuario.nome &&
                                <small className="p-invalid">O campo Nome é obrigatório.</small>}
                            </div>
                            <div className="p-field">
                                <label htmlFor="matricula">Matricula</label>
                                <InputText id="matricula" value={this.state.usuario.matricula}
                                           onChange={(e) => this.onInputChange(e, 'matricula')} required
                                />
                            </div>
                            <div className="p-field">
                                <label htmlFor="cidade">Cidade</label>
                                <InputText id="cidade" value={this.state.usuario.endereco.cidade}
                                           onChange={(e) => this.onInputChangeEndereco(e, 'cidade')} required
                                           minLength="2" maxLength="50"/>
                            </div>
                            <div className="p-field">
                                <label htmlFor="estado">Estado</label>
                                <InputText id="estado" value={this.state.usuario.endereco.estado}
                                           onChange={(e) => this.onInputChangeEndereco(e, 'estado')} required
                                           minLength="2" maxLength="2"/>
                            </div>

                            <div className="p-field">
                                <label className="p-mb-3">Ativo</label>
                                <div className="p-formgrid p-grid">
                                    <div className="p-field-radiobutton p-col-6">
                                        <RadioButton id="ativo" name="ativo" value="true"
                                                     onChange={this.handleInputChange}
                                                     checked={this.state.usuario.ativo === 'true'}/>
                                        <label htmlFor="ativo">Ativo</label>
                                    </div>
                                    <div className="p-field-radiobutton p-col-6">
                                        <RadioButton id="inativo" name="ativo" value="false"
                                                     onChange={this.handleInputChange}
                                                     checked={this.state.usuario.ativo === 'false'}/>
                                        <label htmlFor="inativo">Inativo</label>
                                    </div>
                                </div>
                            </div>

                            <Button label="Submit" type="submit" icon="pi pi-check"/>


                            {/*<div className="usuario-insert">*/}
                            {/*    <label>*/}
                            {/*        <input type="radio" name="ativo" value="true"*/}
                            {/*               checked={this.state.usuario.ativo === "true"}*/}
                            {/*               onChange={this.handleInputChange}/>*/}
                            {/*        Ativo*/}
                            {/*    </label>*/}

                            {/*    <label>*/}
                            {/*        <input type="radio" name="ativo" value="false"*/}
                            {/*               checked={this.state.usuario.ativo === "false"}*/}
                            {/*               onChange={this.handleInputChange}/>*/}
                            {/*        Inativo*/}
                            {/*    </label>*/}
                            {/*</div>*/}

                            {/*<div className="usuario-insert">*/}
                            {/*    <label htmlFor="nome">Nome</label>*/}
                            {/*    <br/>*/}
                            {/*    <input type="text" id="nome" name="nome" placeholder="Insira aqui o seu nome"*/}
                            {/*           minLength="3" maxLength="100" required value={this.state.usuario.nome}*/}
                            {/*           onChange={this.handleInputChange}/>*/}
                            {/*</div>*/}

                            {/*<div className="usuario-insert">*/}
                            {/*    <label htmlFor="matricula">Matricula</label>*/}
                            {/*    <br/>*/}
                            {/*    <input type="number" id="matricula" name="matricula"*/}
                            {/*           placeholder="Insira a sua matricula aqui"*/}
                            {/*           min="1" max="9999" required value={this.state.usuario.matricula}*/}
                            {/*           onChange={this.handleInputChange}/>*/}
                            {/*</div>*/}

                            {/*<div className="usuario-insert">*/}
                            {/*    <label htmlFor="cidade">Cidade</label>*/}
                            {/*    <br/>*/}
                            {/*    <input type="text" id="cidade" name="cidade" placeholder="Insira a cidade"*/}
                            {/*           minLength="3" maxLength="100" required value={this.state.usuario.endereco.cidade}*/}
                            {/*           onChange={this.handleInputChangeEndereco}/>*/}
                            {/*</div>*/}

                            {/*<div className="usuario-insert">*/}
                            {/*    <label htmlFor="estado">Estado</label>*/}
                            {/*    <br/>*/}
                            {/*    <input type="text" id="estado" name="estado" placeholder="Insira o estado"*/}
                            {/*           minLength="2" maxLength="2" required value={this.state.usuario.endereco.estado}*/}
                            {/*           onChange={this.handleInputChangeEndereco}/>*/}
                            {/*</div>*/}


                        </form>
                    </Panel>
                </div>
            )
        }
    }

    onInputChange(e, name) {
        const val = (e.target && e.target.value) || '';
        let usuario = {...this.state.usuario};
        usuario[`${name}`] = val;

        this.setState({usuario});
    }

    onInputChangeEndereco(e, name) {
        const val = (e.target && e.target.value) || '';
        let usuario = {...this.state.usuario};
        usuario.endereco[`${name}`] = val;

        this.setState({usuario});
    }

    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(prevState => ({
            usuario: {...prevState.usuario, [name]: value}
        }));
    };

    handleInputChangeEndereco = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(prevState => {
            const usuario = {...prevState.usuario};
            usuario.endereco[name] = value;
            return {usuario};
        })
    };

    handleSubmit = event => {
        fetch("http://localhost:4000/sistema/usuarios", {
            method: "post",
            body: JSON.stringify(this.state.usuario),
            headers: {
                "Content-Type": "application/json"
            }

        })

            .then(data => {
                if (data.ok) {
                    this.setState({redirect: true});
                }
            })

        event.preventDefault();

    }

}

export default CriarUsuario;