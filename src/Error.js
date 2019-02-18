import React, { Component } from 'react';

export default class Error extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false,
            err: null,
            info: null
        }
    }
    static componentDidCatch(error, info){
        this.setState({
            hasError: true,
            err: error,
            info: info
        })
    }

    render(){
        if(this.state.hasError){
            return(
                <div>
                    <h1>Something went wrong.</h1>
                    <p>Error: {this.state.err.toString()}</p>
                </div>
            )
        }
        return this.props.children;
    }
}