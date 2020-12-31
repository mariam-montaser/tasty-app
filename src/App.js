import React, { Component } from 'react';

import RecipeSearch from "./components/RecipeSearch";
import RecipesList from "./components/RecipesList";
import RecipeDetails from "./components/RecipeDetails";

import { recipes } from "./tempList";

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  state = {
    recipes: [],
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    base_url: 'https://tasty.p.rapidapi.com/recipes/list',
    headers:  {
		"x-rapidapi-key": "6271836ef1msh0641ee6b2858da1p173825jsn74ba6a7f9b51",
		"x-rapidapi-host": "tasty.p.rapidapi.com"
  },
  details_id: 6970,
  pageIndex: 1,
  search: '',
  query: '?from=0&size=20&q=',
  error: ''
  }

  async getRecipes() {
    try{
      const data = await fetch(this.state.url, {headers: this.state.headers});
      const jsonData = await data.json();
      console.log(jsonData);
      if(jsonData.results.length === 0) {
        this.setState(() => {
          return {error: 'Sorry , No Results For Your Search.'}
        })
      } else {
        this.setState({
          recipes: jsonData.results
        })
      }
    } catch(error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  displayPage = index => {
    switch (index) {
      case 1:
        return (<RecipesList value={this.state.search} recipes={this.state.recipes} handleDetails={this.handleDetails} handleChange={this.handleChange} handleSubmit={this.handleSubmit} error={this.state.error} />);
      case 0:
      return (<RecipeDetails id={this.state.details_id} handleIndex={this.handleIndex} />);
      default:
        break;
    }
  }


  handleIndex = index => {
    this.setState({
      pageIndex: index
    })
  }

  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id
    })
  }

  handleChange = event => {
    this.setState({
      search: event.target.value
    }, () => {
      // console.log(event.target.value);
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const {base_url, query, search} =this.state
    this.setState(() => {
      return {url: `${base_url}${query}${search}`, search: ''}
    }, () => {
      this.getRecipes(); 
    })

  }

  render() {
    console.log(this.state.recipes);
    return (
      <React.Fragment>
       {
         this.displayPage(this.state.pageIndex)
       }
      </React.Fragment>
      
    );
  }
}

export default App;
