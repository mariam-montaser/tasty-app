import React, { Component } from 'react'

export default class RecipeSearch extends Component {
    render() {
        const {value, handleChange, handleSubmit} = this.props
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 col-md-8 mx-auto mt-5 text-center">
                            <h1 className="text-slanted">Search For Recipe With <strong className="text-danger">Tasty</strong></h1>
                            <form className="mt-4" onSubmit={handleSubmit} >
                                <label htmlFor="search text-capitalize">search for recipe</label>
                                <div className="input-group">
                                    <input type="text" name="search" className="form-control" id="search" placeholder="chicken,  soup" value={value} onChange={handleChange}  />
                                    <div className="input-group-append">
                                        <button type="submit" className="input-group-text bg-primary text-white i"><i className="fas fa-search"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
