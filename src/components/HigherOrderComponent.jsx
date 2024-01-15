import React, { Component } from "react";

class HigherOrderComponent extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entreprenuer", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }

  renderAll() {
    return this.state.userData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="li">
          <span>Id: {item.id}</span>
          <br />
          <span>Name : {item.name}</span>
          <br />
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
  }

  renderByType() {
    return this.state.userData
      .filter((user) => user.user_type == "Designer")
      .map((item) => (
        <React.Fragment key={item.id}>
          <li className="li">
            <span>Id: {item.id}</span>
            <br />
            <span>Name : {item.name}</span>
            <br />
            <span>User Type: {item.user_type}</span>
          </li>
        </React.Fragment>
      ));
  }

  renderByInitialLetter() {
    return this.state.userData
      .filter((user) => user.name[0] == "J")
      .map((item) => (
        <React.Fragment key={item.id}>
          <li className="li">
            <span>Id: {item.id}</span>
            <br />
            <span>Name : {item.name}</span>
            <br />
            <span>User Type: {item.user_type}</span>
          </li>
        </React.Fragment>
      ));
  }

  renderTotalYearsOfDesigners() {
    return (
      <>
        {this.state.userData
          .filter((user) => user.user_type == "Designer")
          .reduce((sum, item) => sum + item.years, 0)}
      </>
    );
  }

  render() {
    return (
      <>
        <h3>Display all items</h3>

        <ol>{this.renderAll()}</ol>

        <h3>Display based on user type</h3>

        <ol>{this.renderByType()}</ol>

        <h3>Filter all data starting with the letter J</h3>

        <ol>{this.renderByInitialLetter()}</ol>

        <h3>Find the total years of the designers</h3>

        <ul>{this.renderTotalYearsOfDesigners()}</ul>
      </>
    );
  }
}

export default HigherOrderComponent;
