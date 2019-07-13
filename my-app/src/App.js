import React, { Component } from "react";
import StrangerCard from "./components/StrangerCard";
import Wrapper from "./components/Wrapper";
import strangers from "./stranger.json";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

class App extends Component {
  
  state = {
    strangers
  };

  // orderChange = id => {

  //   const strangers = this.state.strangers.sort(stranger => stranger.id !== id);
  //   this.setState({ strangers })
  // }

  // scoreAdd = id => {

  // }

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
