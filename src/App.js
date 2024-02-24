import { Component } from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hello world!</h1>
      <FuncComp initNumber={2}></FuncComp>
      <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}

function FuncComp(props) {

  return ( 
    <div className="container">
      <h2>function style component</h2>
      <p>props Number: {props.initNumber}</p>
    </div>
  )
}

class ClassComp extends Component {
  state = {
    number: this.props.initNumber
  }
  render() {
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>props Number: {this.props.initNumber}</p>
        <p>state Number: {this.state.number}</p>
        <input 
          type='button'
          value='random'
          onClick={function() {
            this.setState({
              number: Math.random()
            })
          }.bind(this)} />
      </div>
    )
  }
}

export default App;
