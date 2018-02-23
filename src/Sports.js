import React, { Component } from 'react';
import { Header, Button, Image } from 'semantic-ui-react'
import './App.css';
import trash from './trash-10-48.jpg'


class Sports extends Component {

  state = {}

  componentWillMount() {
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

  handleClick = (e) => {
    e.preventDefault();
    let currentList = this.state.sportList
    let newList = currentList.filter(sport => sport.name != e.target.name)
    let deletedSport = document.getElementById(e.target.value)
    deletedSport.className = "animated"
    setTimeout( () => { this.setState({ sportList: newList }) },1000)
  }

  render() {
    let heading;
    if (this.state.sportList.length == 0) {
      heading = "Oh no, you deleted all the sports :("
    } else {
      heading = "Click on your least favorite sports below to delete them until you have three left"
    }
    return (
    <div>
      <Header className="instructions" as='h3'>
    {heading}
      </Header>

      <div className="listStage">
        <ul>

          {this.state.sportList.map( (sport) => (
            <li>
              <button
                type="button"
                className="listButton"
                key={sport.id}
                id={sport.id}
                name={sport.name}
                value={sport.id}
                onClick={this.handleClick}
              >{sport.name}</button></li>
            )
           )
          }
        </ul>
      </div>
      <Image className="trashcan" src={trash} size='small' />
      <div>
        <Button primary className="reset" onClick={this.setList}>Reset List!</Button>
      </div>
    </div>
    );
  }
}

export default Sports;
