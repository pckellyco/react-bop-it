
import { Component } from 'react';
import './App.css';
import background from "./images/background.jpeg"
import BopIt from "./components/BopIt"
import boom from "./images/boom.png"
import Twister from "./components/Twister"
import Puller from "./components/Puller"
import Flicker from "./components/Flicker"
import Spinner from "./components/Spinner"
import Bopper from "./components/Bopper"



class App extends Component {

  state = {
    correct: false
  }

  toggleCorrect = () => {
    this.setState({
      correct: true
    })
    setTimeout(()=> { this.setState({correct: false})}, 300)
  }

  render(){
    return (
      <div className="App" style={{ backgroundImage: `url(${this.state.correct ? boom : background})`,
      backgroundRepeat: "repeat" }}>
        
        <BopIt />
        <Twister />
        <Puller />
        <Flicker />
        <Spinner />
        <Bopper bopIt={this.toggleCorrect}/>
        
      </div>
    );
  }
}

export default App;
