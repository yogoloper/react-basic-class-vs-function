import { Component, useState } from 'react';
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
  const [number, setNumber] = useState(props.initNumber);
  const [date, setDate] = useState((new Date()).toString());

  return ( 
    <div className="container">
      <h2>function style component</h2>
      <p>props Number: {props.initNumber}</p>
      <p>state Number: {number}</p>
      <p>date: {date}</p>
      <input 
        type='button'
        value='random'
        onClick={function() {
          setNumber(Math.random())
        }}
      />
      <input 
        type='button'
        value='date'
        onClick={function() {
          setDate((new Date()).toString())
        }}
      />
    </div>
  )
}

class ClassComp extends Component {
  state = {
    number: this.props.initNumber,
    date: (new Date()).toString()
  }
  render() {
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>props Number: {this.props.initNumber}</p>
        <p>state Number: {this.state.number}</p>
        <p>date: {this.state.date}</p>
        <input 
          type='button'
          value='random'
          onClick={function() {
            this.setState({
              number: Math.random()
            })
          }.bind(this)} />
                <input 
          type='button'
          value='date'
          onClick={function() {
            this.setState({
              date: (new Date()).toString()
            })
          }.bind(this)} />
      </div>
    )
  }
}

export default App;
