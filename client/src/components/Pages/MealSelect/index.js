import React, { Component } from "react";
import API from "../../../utils/API";
import Card from "../../Partials/Card/Card";

class MealSelect extends Component {
  state = {
    search: "",
    categories: [],
    results: [],
    error: "",
    
  };

  // When the component mounts, get a list of all available base categoires and update this.state.categories
  componentDidMount() {
    API.getBaseCategories()
      .then(res => this.setState({ categories: res.data.meals }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getMealOfType(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.meals);
        }
        this.setState({ results: res.data.meals, error: "" });
      })
      .catch(err => this.setState({ error: err.meals }));
  };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Category!</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            categories={this.state.categories}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default MealSelect;
