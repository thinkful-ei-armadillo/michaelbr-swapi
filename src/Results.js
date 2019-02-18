import React, { Component } from 'react';

export default class Results extends Component{
    render(){
        // if(this.props.results.length === 0 && user has searched for something already){
        if(this.props.results.length === 0){
            return(
                <section className="results">
                    <p>No results from your search, please try again.</p>
                </section>
            )
        }
        return(
            <section className="results">
                <ul>
                    {this.props.results.map(result => {
                        return(
                            <li key={result.url}>
                                <h2>{result.name}</h2>
                            </li>
                        )
                    })}
                </ul>
            </section>
        )
    }
}