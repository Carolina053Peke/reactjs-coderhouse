import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import './ItemCount.css'

export default class ItemCount extends Component {
    constructor() {
        super();

        this.state = {
            count: 0,
        };
    }

    handleIncrement = () => {
      this.setState({
        count: this.state.count + 1
      })
    };

    handleDecrement = () => {
      this.state.count > 0 
      && this.setState({
          count: this.state.count - 1
        })
    };

    render() {
        return (<div className="itemCount-Container">
            <h3>Contador

            </h3>
            <p className="itemCount-number">{this.state.count}</p>
            <div>
                <button type="button" className="btn btn-danger px-5 mr-5" onClick={this.handleIncrement}>+</button>
                <button type="button" className="btn btn-dark px-5" onClick={this.handleDecrement}>-</button>
            </div>
        </div>
        );
    }
}
