import React from 'react';

const siswa = ['Fifit', 'Rere', 'Evan', 'Eval', 'Malicha', 'Yuan'];
class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        {siswa.map(item => {
          return <h1>{item}</h1>;
        })}
      </React.Fragment>
    );
  }
}

export default About;
