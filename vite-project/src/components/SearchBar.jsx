import React from "react";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        city:""
    };
  this.onSearch=this.props.onSearch;
  this.handleChange= this.handleChange.bind(this)
  this.handleSubmit=this.handleSubmit.bind(this)
  }
  
  handleChange = (e) => {
    this.setState({
    city: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
        this.onSearch(this.state.city);
  }
   


  render() {
    const{city}=this.state
    return (
      <form className="form-inline my-2 my-lg-0" onSubmit={(e) => {
        e.preventDefault();
            this.onSearch(city);
      }}>
        <input
         class="form-control mr-sm-2"
          type="text"
          placeholder="Ciudad..."
          onChange={(e) => {
            this.setState({
            city: e.target.value
            })}}
        />
        <input class="btn btn-warning" type="submit" value="Agregar" />
      </form>
    );
  }
}