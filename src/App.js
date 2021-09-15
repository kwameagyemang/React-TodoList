
import React, { Component } from 'react';
import Data from './conponents/Data'
import ToDoList from './conponents/ToDoLists';
import WeeklyToDos from './conponents/WeeklyToDos';
import './App.css'


export default class App extends Component {

	state = {
		data: Data,
    date: '',
    time:'',
    ToDo: '',
    location:'',
  weeklyTodos: []
	};

	handleChange = (event) => {
		console.log('Below is our event.target');
		this.setState({
			[event.target.id]: event.target.value
		});
	};

	// * ===== Handles our submit =====
	handleSubmit = (event) => {
		event.preventDefault();
		// console.log("event", event)
		const newItem = {
      date: this.state.date,
      time:this.state.time,
      ToDo: this.state.ToDo,
      location:this.state.location
		};
		console.log('we are inside handlesubmit this is our new item', newItem);

		// * adding our new item to our state products
		this.setState({
      date: '',
      time:'',
      ToDo: '',
      location:'',
			Data: [ newItem, ...this.state.data ]
			// * we can update multiple states in one setState()
		});
	};

	addToWeeklyToDos = (list) => {
    // * whatever item is, we are going to add it to our addToWeeklyToDos state
    console.log("hey we got here because you clicked on an item inside our ProductList component and this is the item we sent back to App.js from ToDoList", list)
		this.setState({
			weeklyTodos: [ list, ...this.state.weeklyTodos ]
		});
	};

	render() {
		return (
      <div className="container">
        <div className="app-wrapper">
          <div className='task-input'>
          <form id="form" onSubmit={this.handleSubmit}>
						<label htmlFor="date">Date: </label>
						<input type="text" value={this.state.date} onChange={this.handleChange} id="date" />
						<br />
						<label htmlFor="time">Time: </label>
						<input type="text" value={this.state.time} onChange={this.handleChange} id="time" />
						<br />
						<label htmlFor="ToDo">ToDo: </label>
            <input type="ToDo" value={this.state.ToDo} onChange={this.handleChange} id="ToDo" />
            <br />
            <label htmlFor="location">location: </label>
						<input
							type="text"
							value={this.state.location}
							onClick={() => this.setState({location: ''})}
              onChange={this.handleChange}
							id="location"
						/>
						<br />

						<input type="submit" />
					</form>
          </div>


					<div className="preview">
						<h2>NEW LIST</h2>
						<h3>{this.state.date}</h3>
						<h4>{this.state.time}</h4>
						<h5>{this.state.ToDo}</h5>
            <h5>{this.state.location}</h5>

					</div>
				</div>

				<div className="data-container">
					<div className="data">
						<h3 className="headline">Weekly List</h3>
						{

							this.state.data.map((data, index) => {
								return (
                <ToDoList key={index} data={data} handleAdd={this.addToWeeklyToDos} />
								);
							})}
          

					</div>

					<div>
						<h3 className="headline"></h3>
						<ul>
              {
                this.state.weeklyTodos.map((list, index) => {
                  return (
                    <WeeklyToDos key={index} list={list}/>
                  )
                })
              }
            </ul>
					</div>
				</div>
			</div>
		);
	}
}