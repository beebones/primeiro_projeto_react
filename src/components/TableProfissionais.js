import React, { Component } from 'react';
class TableProfissionais extends Component {
    
    render() {
        console.log("PROPS:", this.props);
        return (
            <table className="table mt-5 mb-5">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Github</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.profissionais.map((profissional) => {
                        return (
                            <tr key={profissional.id}>
                                <td>{profissional.nome}</td>
                                <td>{profissional.github}</td>
                            </tr>
                        )
                    })}
                </tbody>               
            </table>
        )
    }
}
export default TableProfissionais;