import React, { Component } from 'react';

export default class Search extends Component{
    state = {
        query: '',
        qType: '',
        hasErr: false
    }
    
    handleInput = (term) => {
        this.setState({query: term})
        console.log(term)
    }
    
    handleSelect = (category) => {
        this.setState({qType: category})
        console.log(category)
        if(category !== ''){
            this.setState({hasErr: false})
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.qType === ''){
            this.setState({hasErr: true});
            return
        }
        const url = `https://swapi.co/api/${this.state.qType}/?search=${this.state.query}`;
        console.log(url)
        fetch(url)
            .then(res => {
                if(!res.ok){
                    return res.json().then(error => {
                        throw error
                    })
                }
                return res.json();
            })
            .then(res => {
                this.setResults(res.results);
            })
            .catch(err => alert(err.message));
    }

    setResults = (results) => {
        this.props.results(results);
    }

    render(){
        let errHtml;

        if(this.state.hasErr){
            errHtml = (
                <section className="results">
                    <p>Make sure you select a category, then try again.</p>
                </section>
            );
        }     
        return(
            <form className="searchForm" onSubmit={(e) => this.handleSubmit(e)}>
                <label>
                    Search: <input type="text" id="searchInput" placeholder='e.g. "Skywalker"' onChange={(e) => this.handleInput(e.target.value)} required/>
                </label>
                <label htmlFor="searchCat">Category: </label>
                <select className="searchCat" onChange={(e) => this.handleSelect(e.target.value)}>
                    <option value=''>--select one--</option>
                    <option value='people'>People</option>
                    <option value='films'>Films</option>
                    <option value='starships'>Starships</option>
                    <option value='vehicles'>Vehicles</option>
                    <option value='species'>Species</option>
                    <option value='planets'>Planets</option>
                </select>
                <button type="submit">Submit</button>
                {errHtml}
            </form>
        )
    }
}