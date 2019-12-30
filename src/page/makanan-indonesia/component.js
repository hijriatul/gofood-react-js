import React from 'react';
import Cards from '../../component/card';
import Data from '../../data/data-dummy';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Apps from '../../component/app-bar';
import { Container } from '@material-ui/core';

function ListMakanan() {
  return (
    <Container maxWidth="xs">
      <div>
        <Apps title="Kategory Indonesia Food" go back />
        {Data.map(item => {
          if (item.jenis == 'Indonesia Food')
            return (
              <Cards
                nama={item.nama}
                harga={item.harga}
                jenis={item.jenis}
                image={item.image}
              />
            );
        })}
      </div>
    </Container>
  );
}

export default ListMakanan;
