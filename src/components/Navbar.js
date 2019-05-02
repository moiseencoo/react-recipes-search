import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    const reset = this.props.resetToPopular;
    return (
        <nav className="navbar navbar-dark bg-dark">
            <button className="btn btn-success ml-auto"
                    onClick={reset}>
                See Popular Recipes
            </button>
        </nav>
    )
  }
}
