import React, { Component } from 'react'
import './Editor.css';

export default class Editor extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
            value: ''
        };
    this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event)=>{
        this.setState({
          value:event.target.value
        })
      }
  render() {return (
      <>
        <header className="Header">
          <h1>Kalvium Note Keeping App</h1>
        </header>
        <div className="flex flex-space-between" >
            <div className="Input" onSubmit={this.handleSubmit}>
                <h3>Input</h3>
                <textarea className="Input-text" onChange={this.handleChange}/>
            </div>
            <div className="Output">
                <h3>Pro Note</h3>
                <div className="Output-text">
                <div className="Color">{this.state.value}</div>
                </div>
            </div> 
        </div>               
      </>
       )
    }
}