import React from 'react';
import { render } from 'react-dom';
import './images/React.png';
import './images/Angular.png';
import './images/Vue.png';
import './images/Next.png';
import './images/Nuxt.png';
import './images/Oracle.png';
import './images/ElasticSearch.png';
import './images/Cassandra.png';
import './images/MySQL.png';
import './images/MongoDB.png';
import './images/Less.png';
import './images/SCSS.png';
import './images/Stylus.png';
import './images/PostCSS.png';
import './images/Babel.png';
import './images/TypeScript.png';
import './images/CoffeeScript.png'; 

class Button extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.randomState = this.randomState.bind(this);
    this.state = { random: "None", randomDB: "None", CSSPre: "None", JSPre: "None", AnimationLibary: "None", isOnrandom: true, textIsOnRandom: "False", isOnrandom2: true, textIsOnRandom2: "False", isOnrandom3: true, textIsOnRandom3: "False", isOnrandom4: true, textIsOnRandom4: "False", image: null, image2: null, image3: null, image4: null};
    // this.onKeyUp = this.onKeyUp.bind(this);
  }

  randomState() {
    this.setState({isOnrandom: !this.state.isOnrandom, textIsOnRandom: this.state.isOnrandom.toString().charAt(0).toUpperCase()+this.state.isOnrandom.toString().slice(1)});
    console.log(this.state.isOnrandom);
    console.log(this.state.isOnrandom.toString())
    console.log(this.state.textIsOnRandom);
  }

  randomState2() {
    this.setState({isOnrandom2: !this.state.isOnrandom2, textIsOnRandom2: this.state.isOnrandom2.toString().charAt(0).toUpperCase()+this.state.isOnrandom2.toString().slice(1)});
    console.log(this.state.isOnrandom2);
    console.log(this.state.isOnrandom2.toString());
    console.log(this.state.textIsOnRandom2);
  }

  randomState3() {
    this.setState({isOnrandom3: !this.state.isOnrandom3, textIsOnRandom3: this.state.isOnrandom3.toString().charAt(0).toUpperCase()+this.state.isOnrandom3.toString().slice(1)});
    console.log(this.state.isOnrandom3);
    console.log(this.state.isOnrandom3.toString());
    console.log(this.state.textIsOnRandom3);
  }

  randomState4() {
    this.setState({isOnrandom4: !this.state.isOnrandom4, textIsOnRandom4: this.state.isOnrandom4.toString().charAt(0).toUpperCase()+this.state.isOnrandom4.toString().slice(1)});
    console.log(this.state.isOnrandom4);
    console.log(this.state.isOnrandom4.toString());
    console.log(this.state.textIsOnRandom4);
  }

  // randomState5() {
  //   this.setState({isOnrandom5: !this.state.isOnrandom5, textIsOnRandom5: this.state.isOnrandom5.toString().charAt(0).toUpperCase()+this.state.isOnrandom5.toString().slice(1)});
  //   console.log(this.state.isOnrandom5);
  //   console.log(this.state.isOnrandom5.toString());
  //   console.log(this.state.textIsOnRandom5  );
  // }

  handleClick() {
    
    if(this.state.isOnrandom) {
      var Framework = ["Angular", "React", "Vue", "Nuxt", "Next"]
      var randomFramework = Framework[Math.floor(Math.random()*Framework.length)]
      this.setState({random: randomFramework, image: "../src/images/" + randomFramework + ".png"})
    }

    // ReactTesting\src\images\React.png

    if(this.state.isOnrandom2) {
      var DB = ["Oracle", "ElasticSearch", "Cassandra", "MySQL", "MongoDB"]
      var randomDBVar = DB[Math.floor(Math.random()*DB.length)]
      this.setState({randomDB: randomDBVar, image2: "../src/images/" + randomDBVar + ".png"})
    }

    if(this.state.isOnrandom3) {
      var CSSPre = ["Less", "SCSS", "Stylus", "PostCSS"]
      var randomCSSPre = CSSPre[Math.floor(Math.random()*CSSPre.length)]
      this.setState({CSSPre: randomCSSPre, image3: "../src/images/" + randomCSSPre + ".png"})
    }
    if(this.state.isOnrandom4) {
      var JSPre  = ["Babel", "TypeScript", "CoffeeScript"]
      var randomJSPre  = JSPre[Math.floor(Math.random()*JSPre.length)]
      this.setState({JSPre: randomJSPre, image4: "../src/images/" + randomJSPre + ".png"})
    }

    // if(this.state.isOnrandom5) {
    //   var AnimationLibary = ["Three.JS", "Anime.JS", "Mo.JS", "Velocity", "Popmotion", "Vivus", "GreenSock.JS", "Scroll Reveal", "Kute.js", "Typed.js"]
    //   var randomAnimationLibary  = AnimationLibary[Math.floor(Math.random()*AnimationLibary.length)]
    //   this.setState({AnimationLibary: randomAnimationLibary})
    // }

    // const min = 1;
    // const max = 100;
    // const rand = min + Math.random() * (max - min);
    // this.setState({ random: this.state.random + rand });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Click</button>
        <ul>
          <li>{this.state.random} <button onClick={this.randomState.bind(this)}>{this.state.textIsOnRandom}</button> <img src={this.state.image}></img></li>
          <li>{this.state.randomDB} <button onClick={this.randomState2.bind(this)}>{this.state.textIsOnRandom2}</button> <img src={this.state.image2}></img></li>
          <li>{this.state.CSSPre} <button onClick={this.randomState3.bind(this)}>{this.state.textIsOnRandom3}</button> <img src={this.state.image3}></img></li>
          <li>{this.state.JSPre} <button onClick={this.randomState4.bind(this)}>{this.state.textIsOnRandom4}</button> <img src={this.state.image4}></img></li>
        </ul>
      </div>
    );
  }
}

export default Button;