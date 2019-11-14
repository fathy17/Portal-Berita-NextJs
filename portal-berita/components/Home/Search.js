import React, { Fragment, Component } from 'react';
import Router from 'next/router';
// import { withRouter } from "react-router";

class Search extends Component {
    state = {
        query: "",
    };

    handleInputChange = e => {
        e.preventDefault();
        this.setState(
            {
                query: this.search.value
            },
        );
    };

    handleSubmit = e => {
        Router.push(`/search/${this.state.query}`)
        this.setState(
            {
                query: ""
            }
        )
    }

    render() {
        return (
                <form type="submit" onSubmit={this.handleSubmit} style={{ width: '100%', backgroundColor: '#293462' }}>
                    <input placeholder="Search" ref={input => (this.search = input)} onChange={this.handleInputChange} type="text" style={{ paddingLeft:'30px', zIndex:'32', width:'100%', height: '50px', fontSize: '20px', backgroundColor: 'transparent', border: 'none', color: 'white' }} />
                </form>
        );
    }
}

// export default withRouter(Search);
export default Search