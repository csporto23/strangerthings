import React, { Component } from "react";
import StrangerCard from "./components/StrangerCard";
import Wrapper from "./components/Wrapper";
import strangers from "./stranger.json";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    strangers
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
    <Navbar></Navbar>
    <Header></Header>
   <Wrapper>
        {this.state.strangers.map(strangers => (
          <StrangerCard
            image={strangers.image}
          />
        ))}
      </Wrapper>
      </div>
   
    );
  }
}

export default App;
