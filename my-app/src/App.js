import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import strangers from "./stranger.json";

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
      <Wrapper>
        <Title>Stranger Things Clicky Game!</Title>
        {this.state.strangers.map(stranger => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={strangers.id}
            key={strangers.id}
            name={strangers.name}
            image={strangers.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
