import React, { Component } from 'react';
import './App.css';
const request = require('axios');
const API_URL = 'https://rickandmortyapi.com/api/character/'

function getdate(date) {
  date = date.slice(0, 4)
  switch (date) {
    case '2017':
      date = '2 years ago'
      break;
    default:
      break;
  }
  return date
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      character: [],
      showModal: false,
      loding: true,
    };
  }

  handleCloseModal(event) {
    if (event.target !== event.currentTarget) {
      return;
    }
    this.setState({
      showModal: false,
    });
  }

  showOnecharacter(id, event) {
    request.get(API_URL + id)
      .then(response => {
        console.log(response.data)


        this.setState({
          showModal: true,
          character: response.data
        })
      })
  }

  handleRequest() {

    this.setState({
      loding: true

    })
    request.get(API_URL)
      .then(response => {
        const characterResult = response.data.results
        console.log(characterResult)
        const mapcharacterResult = characterResult.map((result) => {
          console.log(result)
          return result

        })
        this.setState({
          characters: mapcharacterResult,
          loding: false

        })
      });
  }
  componentDidMount() {
    this.handleRequest()
  }

  render() {

    if (this.state.loding) {
      return (
        <div style={{ textAlign: 'center' }}>
          <img alt="spinner" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
        </div>
      )
    }
    const character = this.state.character
    const characters = this.state.characters
      .map((character) => (
        <div key={character.id} className="wrappInner" onClick={this.showOnecharacter.bind(this, character.id)}>
          <div className="nameImgHolder">
            <img alt="" src={character.image} />
            <div className="nameHolder">
              <h2>{character.name}</h2>
              <p>Id: {character.id} - Created: {getdate(character.created)}</p>
            </div>
          </div>
          <tabel className="caracterStat">
            <tr> <td>Status:</td> <td className="caracterValue">{character.status}</td></tr>
            <tr><td>Gender: </td><td className="caracterValue">{character.gender}</td></tr>
            <tr><td>Species: </td><td className="caracterValue">{character.species}</td></tr>
            <tr><td>Origin: </td><td className="caracterValue">{character.origin.name}</td></tr>
            <tr><td>Last location: </td><td className="caracterValue">{character.location.name}</td></tr>
          </tabel>
        </div>
      ))
    return (
      <div>
        <Header />
        {this.state.showModal && (
          <Modal
            handleCloseModal={this.handleCloseModal.bind(this)}
            id={character.id}
            name={character.name}
            status={character.status}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            species={character.species}
            location={character.location.name}
            created={character.created.slice(0, 4)}
          />)}
        <div className="wrappFlex">
          {characters}
        </div>
      </div>
    )
  }
}

export default App;

class Header extends Component {

  render() {
    return (
      <header className="header">
        <h1>THE RICK AND MORTY SHOW</h1>
      </header>

    )
  }

}

class Modal extends Component {
  render() {
    const { id, name, gender, status, origin, image, species, location, created } = this.props

    return (
      <div onClick={this.props.handleCloseModal.bind(this)} style={overlayStyles}>
        <div style={modalStyles}>
          <button style={{ float: 'right' }} onClick={this.props.handleCloseModal.bind(this)}>Close</button>
          <img alt="" src={image} />
          <p>Id: {id} Created: {created}</p>
          <tabel>

            <tr><td>Name:</td><td> {name}</td></tr>
            <tr><td>Status:</td> <td>{status}</td></tr>
            <tr><td>Gender: </td><td>{gender}</td></tr>
            <tr><td>Species:</td> <td>{species}</td></tr>
            <tr><td>Origin:</td> <td>{origin}</td></tr>
            <tr><td>Last location:</td> <td>{location}</td></tr>
          </tabel>
        </div>
      </div>
    )
  }
}

const modalStyles = {
  backgroundColor: 'rgb(0, 0, 0, 0.65)',
  borderRadius: '5px',
  maxWidth: '70vw',
  minHeight: '70vh',
  margin: ' 10px auto',
  padding: '30px',
  color: '#fff',
};
const overlayStyles = {
  position: 'fixed',
  zIndex: 1,
  left: 0,
  top: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgb(0, 0, 0, 0.3)',
}