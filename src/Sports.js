import React, { Component } from 'react';
import { Header, Button, Segment } from 'semantic-ui-react'
import './App.css';

class Sports extends Component {

  state = {}
  componentDidMount() {
    this.setList();
  }

  setList = () => {
    let sports = [
      { id: 'ab123aa', name: 'Baseball' },
      { id: 'ab124aa', name: 'Golf' },
      { id: 'ab125aa', name: 'Hockey' },
      { id: 'ab126bb', name: 'Soccer' },
      { id: 'ab127bb', name: 'Football' },
      { id: 'ab128cc', name: 'Skiing' },
      { id: 'ab129dd', name: 'Ping Pong' },
      { id: 'ab130cc', name: 'Foosball' },
    ];
    this.setState({ sportList: sports})
  }

  handleclick = (e) => {
    e.preventDevault();
  }

  render() {
    return (
    <div>
    <Header as='h3'>
    Click on your least favorite sports below to delete them until you have three left
    </Header>
    <Segment>

    </Segment>
    <Button primary>Reset List!</Button>
    </div>
    );
  }
}

export default Sports;
