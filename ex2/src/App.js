import React from 'react';
import './Assests/Styles/App.css';
import Clock from './Components/Clock';
import ToDoList from './Components/ToDoList';
import Form from 'react-bootstrap/Form';

class App extends React.Component{

  constructor(){
    super()
    this.state ={
      currentUser: '1',
      profiles: []
    }
  }

  componentDidMount() {
    fetch('/json/profiles.json')
      .then(response => response.json())
      .then(res => {
        this.setState({profiles:res})
      })
  }

  render(){
    return (
      <div className="App">
        <Clock />
        <div className='radio-box m-4'>
            {this.state.profiles.map((profile, index) => {
              return (
                <Form.Check 
                  id={profile.id}
                  label={profile.name}
                  name='profile'
                  type='radio'
                  onChange={(e) => {
                    this.setState({currentUser: e.target.id})
                  }}
                  inline
                />)
            })}
          </div>
        <ToDoList user={this.state.currentUser}/>
      </div>
    );
  }
}

export default App;
