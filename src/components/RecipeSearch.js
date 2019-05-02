import React, { Component } from 'react'

export default class RecipeSearch extends Component {
  render() {

    const {value,
           handleSubmit,
           handleChange } = this.props;

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5 text-center">
              <h1 className="text-slanted text-capitalize">
                Search for Recipe with <strong className="text-danger">Food2Fork</strong>
              </h1>
              <form className="mt-4"
                    onSubmit={handleSubmit}>
                <label htmlFor="search">Type Recipes Separated by Comma</label>
                <div className="input-group">
                  <input type="text" 
                         name="search" 
                         placeholder="Apple, Chicken, Onions"
                         className="form-control"
                         value={value}
                         onChange={handleChange}
                         />
                  <div className="input-group-append">
                    <button type="submit" className="input-group-text bg-success text-white">
                       <i className="fa fa-search"></i>
                    </button>
                  </div>
                  {/* <button className="input-group-text bg-warning text-white ml-2"
                          onClick={}>
                      Reset
                  </button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
