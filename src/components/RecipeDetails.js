import React, { Component } from 'react';

import {recipe} from '../tempDetails';

export default class RecipeDetails extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            recipe,
            url: `https://tasty.p.rapidapi.com/recipes/detail?id=${this.props.id}`,
            headers: {
                "x-rapidapi-key": "6271836ef1msh0641ee6b2858da1p173825jsn74ba6a7f9b51",
                "x-rapidapi-host": "tasty.p.rapidapi.com"
            },

        }
    }

    async componentDidMount() {
        try{
        const data = await fetch(this.state.url, {headers: this.state.headers});
        const jsonData = await data.json();
        console.log(jsonData);
        this.setState({
            recipe: jsonData
        })
        } catch(error) {
        console.log(error);
        }
    }

    render() {
        console.log(this.state.recipe);
        const {handleIndex} = this.props;
        const {thumbnail_url, name, credits, instructions, renditions} = this.state.recipe
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <button onClick={() => handleIndex(1)} type="button" className="btn btn-warning mt-3 mb-5 text-capitalize">Back to Recipe List</button>
                            <img className="d-block w-100" src={thumbnail_url} alt="recipe"/>
                        </div>
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <h3 className="text-uppercase">{name}</h3>
                            <h6 className="text-warning text-capitalize text-slanted">provided by {credits[0]['name']}</h6>
                            {/* <a href={publisher_url} className="btn btn-primary mx-2 text-capitalize mt-2" target="_blank" rel="noopener noreferrer">publisher url</a>
                            <a href={source_url} className="btn btn-success mx-2 text-capitalize mt-2" target="_blank" rel="noopener noreferrer">Recipe Url</a> */}
                            <ul className="list-group mt-4">
                                <h2 className=" mb-4 mt-2">Instructions</h2>
                                {
                                    instructions.map((item, index) => {
                                        return (
                                            <li key={index} className="list-group-item text-slanted">{item.display_text}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
