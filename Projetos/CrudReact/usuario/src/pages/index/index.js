import React, {Component} from "react";
import api from "../../services/service";
import {Link} from "react-router-dom";
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from "primereact/button";
import {Redirect} from 'react-router-dom';

export default class Usuarios extends Component {
    state = {
        usuarios: [],
        usuariosInfo: {},

    };

    componentDidMount() {
        this.loadUsuarios();
    }

    loadUsuarios = async (page = 1) => {
        const response = await api.get(`/usuarios`);
        const {docs, ...usuariosInfo} = response.data;
        this.setState({usuarios: docs, usuariosInfo, page});
    };

    prevPage = () => {
        const {page} = this.state;
        if (page === 1) return;

        const pageNumber = page - 1;
        this.loadUsuarios(pageNumber);
    }

    nextPage = () => {
        const {page, usuariosInfo} = this.state;
        if (page === usuariosInfo.pages) return;

        const pageNumber = page + 1;
        this.loadUsuarios(pageNumber);

    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            {
                this.state.usuarios.map(usuario => (
                    <Redirect to={`/usuarios/${usuario._id}`}/>
                ))
                return <Redirect to={`/usuarios/${usuario._id}`}/>
            }
        }
    }


    actionBodyTemplate(rowData) {
        return (
            <>
                {this.renderRedirect()}
                <Button icon="pi pi-pencil" label="Acessar" className="p-button-success p-mr-2"
                        onClick={() => this.setRedirect(rowData)}/>
            </>
        );
    }

    render() {
        const {usuarios, usuariosInfo, page} = this.state;
        return (
            <div className="datatable-crud-demo">
                <div className="card">

                    <DataTable ref={(el) => this.dt = el} value={this.state.usuarios}
                               dataKey="{id}" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                               paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                               currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
                               globalFilter={this.state.globalFilter}>


                        <Column headerStyle={{width: '3rem'}}></Column>
                        <Column field="nome" header="Nome" sortable></Column>
                        <Column field="matricula" header="Matricula" sortable></Column>
                        <Column field="ativo" header="Ativo" sortable></Column>
                        <Column body={this.actionBodyTemplate}></Column>
                    </DataTable>
                </div>
            </div>


        )
    }
}

