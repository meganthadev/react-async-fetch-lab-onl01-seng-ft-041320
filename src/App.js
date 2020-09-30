<<<<<<< HEAD
import React from "react";

class App extends React.Component {

  state= {
    peopleInSpace: []
  }

  render(){
    return (
      <div>
        {this.state.peopleInSpace.map(person => person.name)}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(json => {
      this.setState({
        peopleInSpace: json.people
      })
    })
  }
}

export default App;
=======
import 'React', {Component} from 'react';


class App extends Component {
  
  
  state = {
    
  }
  
  componentDidMount {
    fetch(http://api.open-notify.org/astros.json)
    .then(res => res.json())
    .then(json => this.setState({data: json}))
  }
  
}
>>>>>>> 059fd580d57ccad241e45ac5e687354b33bb568a
