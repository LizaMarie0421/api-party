import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Nasa.css'

class Nasa extends Component {
    state = {
        date: '',
    }
    handleChange =(ev) => {
        this.setState({date: ev.target.value})
    }
    handleSubmit = (ev) =>{
        ev.preventDefault()
        this.props.history.push(`/Nasa/${this.state.date}`)
        this.setState({date: ''})
    }  

    render() {
        return (
            <div className='Nasa'>
            <img className='Nasa-Logo' src='http://vector.me/files/images/1/3/13605/nasa.png' alt='Nasa logo'/>
            <form onSubmit={this.handleSubmit}>
                <div>
                <input type='date' value={this.state.date} onChange={this.handleChange}/>
                </div>
                </form>
                <Route exact path ='/Nasa' render={() => <h3>Please enter a date to view</h3>} />
                <Route path='/Nasa/:date' />
            </div>
        )
    }
}

export default Nasa