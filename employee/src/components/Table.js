// https://www.youtube.com/watch?v=BwWpG0cNFLU&ab_channel=CodingShiksha
// Class activity 19

// import React  from 'react';
import { Component } from 'react';
// import axios from 'axios';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: false,
    };
  }

  componentDidMouth() {
    fetch('https://randomuser.me/api/?results=20&nat=us')
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          items: response.results,
          loading: true,
        });
      });
  }

  render() {
    var { items, loading } = this.state;

    if (loading) {
      return (
        <div> Loading...</div>
        // <div className= "container">
        //         {items.map(item => (

        //             // <h1> {item.name.first} </h1>
        //             <img src= {item.picture.medium} alt= {item.name.first} />
        //         ))}

        //     </div>
      );
    } else {
      return (
        //   <div> data... </div>;

        <div className="container"> data...
          {items.map(item => (
            // <h1> {item.name.first} </h1>
            <img src={item.picture.medium} alt={item.name.first} />
          ))}
        </div>
      )
    }
  }
}

export default Table;
