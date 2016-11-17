const React = require('react');

class Bomb extends React.Component {
  constructor(props){
    super();
    this.state = {
     secondsLeft: props.initialCount
    }
  }

  render() {
    let usermessage
        
    if (this.state.secondsLeft === 0)
       {usermessage= ('Boom!')}
     else {
      usermessage = (`${this.state.secondsLeft} seconds left before I go boom!`)
     }

    return (
      <div>
       {usermessage}
      </div>
    );
  }
}

module.exports = Bomb;
