import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Wrapper from './components/Wrapper';
import Bar from './components/Bar'
import Card from './components/Card';
import Modal from './components/Modal';


class App extends Component {
  state = {
    people: [],
    filtered: [],
    favorite:"",
    favorites:[],
    isOpen: false
  }

  componentDidMount () {
    this.randomPeople();
    
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });

    this.favoriteInfo()
  }

  randomPeople = () => {

    localStorage.clear();

    axios.get("https://randomuser.me/api/?results=50").then((res) => {
      //console.log(res.data.results);

      this.setState({
        people: res.data.results,
        filtered: res.data.results,
        favorite: ""
      })
    })
  }

  filter = (condition) => {

    let people = this.state.people;
    let filtered = people

    switch(condition) {
      case "male":
        filtered = filtered.filter(function(person) {
          return person.gender === "male"
        })
        this.setState({
          filtered: filtered
        })
        break;
      case "female":
        filtered = filtered.filter(function(person) {
          return person.gender === "female"
        })
        this.setState({
          filtered: filtered
        })
        break;
      case "50Under":
        filtered = filtered.filter(function(person) {
          return person.dob.age < 50
        })
        this.setState({
          filtered: filtered
        })
        break;
      case "50Over":
        filtered = filtered.filter(function(person) {
          return person.dob.age > 50
        })
        this.setState({
          filtered: filtered
        })
        break;
      default:
        this.setState({
          filtered: people
        })
    }
  }

  handleSort = (condition) => {
    let people = this.state.filtered;
    let sortByName;


    switch(condition) {
      case "nameAsc":
        sortByName = people.sort(this.compareValues("name"))
        this.setState({
          filtered: sortByName
        })
        break;
      case "nameDesc":
        sortByName = people.sort(this.compareValues("name", "desc"))
        this.setState({
          filtered: sortByName
        })
        break;
      case "locationAsc":
        sortByName = people.sort(this.compareValues("location"))
        this.setState({
          filtered: sortByName
        })
        break;
      case "locationDesc":
        sortByName = people.sort(this.compareValues("location", "desc"))
        this.setState({
          filtered: sortByName
        })
        break;
      default:
        this.setState({
          filtered: people
        })
    }
    //console.log(sortByName)
  }

  compareValues = (key, order="asc") => {
    
    return function(a,b) {

      var varA;
      var varB;

      if(key === "name") {
        varA = a.name.first;
        varB = b.name.first;
      }
      else if(key === "location") {
        varA = a.location.state;
        varB = b.location.state;
      }

      let comparison = 0;

      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === "desc") ? (comparison * -1) : comparison
      )

    }
  }
  
  favorite = (condition) => {

    let storedFav = localStorage.getItem("email")
    
    storedFav = storedFav === null ? condition : storedFav += `, ${condition}`;
    //console.log(storedFav);
    localStorage.setItem("email", storedFav );
    
    this.setState({
      favorite: storedFav
    });

  };

  favoriteInfo = () => {
    const people = this.state.people;
    const favPeople = this.state.favorite;

    let fav = (favPeople === "") ? null : favPeople.split(", ")

    //console.log(fav)


    let favInfo = [];

    fav.forEach((favorites) => {
      //console.log(favorites)
      people.forEach((person) => {
        if (person.email === favorites) {
          //console.log(person)
          return favInfo.push(person)
        }
        
      })
    });

    //console.log(favInfo)
    this.setState({
      favorites: favInfo
    });
  };



  render() {
    return (
      <Wrapper>
        <Bar
          filter={this.filter}
          sort={this.handleSort} 
          reload={this.randomPeople}
          modal={this.toggleModal}
          favorites={this.state.favorite}
        />
        <Card 
          people={this.state.filtered}
          handleFavorite={this.favorite}
          favorite={this.state.favorite}
        />
        <Modal 
          show={this.state.isOpen}
          onClose={this.toggleModal}
          favorites={this.state.favorites}
        />
      </Wrapper>
    );
  };
};

export default App;
