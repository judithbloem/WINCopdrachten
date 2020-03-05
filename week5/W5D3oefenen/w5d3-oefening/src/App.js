import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: 0,
      gender: "",
      destination: "",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked
        })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <main>
        <form>
          <input
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            name="age"
            value={this.state.age}
            placeholder="Age"
            onChange={this.handleChange}
          />
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />{" "}
            Male
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />{" "}
            Female
          </label>
          <br />

          <select
            value={this.state.destination}
            onChange={this.handleChange}
            name="destination"
          >
            <option value="">Please choose a destination</option>
            <option value="Scotland">Scotland</option>
            <option value="Norway">Norway</option>
            <option value="Austria">Austria</option>
          </select>
          <br />
          <label>
            <input
              type="checkbox"
              name="isVegan"
              checked={this.state.isVegan}
              onChange={this.handleChange}
            />{" "}
            Vegan?
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="isKosher"
              checked={this.state.isKosher}
              onChange={this.handleChange}
            />{" "}
            Kosher?
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              checked={this.state.isLactoseFree}
              onChange={this.handleChange}
            />{" "}
            Lactose Free?
          </label>
          <br />

          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>
          Your name: {this.state.firstName} {this.state.lastName}
        </p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>
          Your dietary restrictions:
          <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
          <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
          <p>Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}</p>
        </p>
      </main>
    );
  }
}

export default App;
