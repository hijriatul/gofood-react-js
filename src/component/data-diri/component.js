import React from 'react';

class Data extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Nama:{this.props.nama}</h1>
        <h1>Umur:{this.props.umur}</h1>
        <h1>Tanggal:{this.props.tanggal}</h1>
      </React.Fragment>
    );
  }
}

export default Data;
