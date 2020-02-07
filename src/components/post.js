import React, { Component } from 'react';
class Post extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.titulo}</h1>
                <p>{this.props.texto}</p>
            </div>
        )
    }
}
export default Post;