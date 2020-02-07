import React, { Component } from 'react';
import TableProfissionais from './TableProfissionais';
import Form from './Form';
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profissionais: [
                {
                    id: 1,
                    nome: "Wagner Venceslau",
                    github: "http://github.io/wagven"
                },
                {
                    id: 2,
                    nome: "Eduardo Rocha",
                    github: "http://github.io/eduroc"
                }
            ]
                
        }
    }
    render() { 
        console.log("STATE:", this.state)       
        return (            
            <div>
                <TableProfissionais profissionais = {this.state.profissionais} />
                <Form />
            </div>
        )
    }
}
export default App;