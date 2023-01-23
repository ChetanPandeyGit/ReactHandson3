import React, { Component } from 'react'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            fullName: '',
            dept: '',
            rating: ''           
        }
        this.state.record = []
    }

    handleOnChange = e => {
        const { name, value } = e.target;
        this.setState({ ...this.state, [name]: value });
    }

    handleSubmit = e => {
        const { record } = this.state;
        e.preventDefault();
        const newRecord = { ...this.state, id: new Date().getTime().toString() }
        this.setState.record([...record, newRecord])
        this.setState({ fullName: '', dept: '',  rating: ''})
     }   
  render() {
    return (
        <>
        <form onSubmit={this.handleSubmit}>
  
          <label htmlFor="full-name">Name : </label>
          <input type="text" id="full-name" placeholder="Type name here.." autoComplete="off" value={this.state.fullName} name="fullName"  onChange={this.handleOnChange} />
          <br />
          <label htmlFor="dept">Department : </label>
          <input type="text" id="dept" placeholder="Type department here.." autoComplete="off" value={this.state.dept} name="dept" onChange={this.handleOnChange} />
          <br />
          <label htmlFor="rating">Rating : </label>
          <input type="number" id="rating" placeholder="Type rating here.." autoComplete="off" value={this.state.rating} name="rating" onChange={this.handleOnChange} />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <div id='output'>
          {
            this.state.record.map((item) => {
              const { id, fullName, dept, rating } = item;
              return (
                <div className="record-display" key={id}>
                  <p>Name : { fullName }  |  Department : { dept }  |  Rating : { rating }</p>
                  <p></p>
                  <p></p>
                </div>
              )
            })
          }
        </div>
      </>
    )
  }
}
