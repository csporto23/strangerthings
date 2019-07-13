import React, { Component } from "react";
import FriendCard from "./components/StrangerCard";
import Wrapper from "./components/Wrapper";
import strangers from "./stranger.json";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    strangers
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const strangers = this.state.strangers.filter(stranger => stranger.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ strangers });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
    <Navbar></Navbar>
    <Header></Header>
   <Wrapper>
        {this.state.strangers.map(strangers => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={strangers.id}
            key={strangers.id}
            name={strangers.name}
            image={strangers.image}
          />
        ))}
      </Wrapper>
      </div>
   
    );
  }
}

export default App;
