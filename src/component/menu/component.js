import React from 'react';

class Menu extends React.Component {
  state = {
    menu: [
      {
        makanan: 'Mie Ayam',
        harga: 8000
      },
      {
        makanan: 'Bakso',
        harga: 10000
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <h1>Rere Mau Makan</h1>
        <h1>Makanan: {this.state.menu[0].makanan}</h1>
        <h1>Harga: {this.state.menu[0].harga}</h1>
      </React.Fragment>
    );
  }
}

export default Menu;
