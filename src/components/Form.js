import React, { Component } from 'react';
class Form extends Component {
    render() {
        return (
            <form className="card">
                <div className="card-header">
                    <p className="form-group">
                        <label className="form-label">Nome</label><br />
                        <input className="form-control" type = "text" />
                    </p>
                    <p>
                        <label className="form-label">Github</label><br />
                        <input className="form-control" type = "url" />
                    </p>
                    <p>
                        <button className="btn btn-primary">Enviar</button>
                    </p>
                </div>
            </form>
        )
    }
}
export default Form;