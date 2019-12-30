import React from 'react';
import CardJenis from '../../component/card';
import Data from '../../data/data-dummy';
import Apps from '../../component/app-bar';
import { Container } from '@material-ui/core';

function ListMakananFast(props) {
  const {} = props;
  return (
    <Container maxWidth="xs">
      <div>
        <Apps title="Kategory Fast Food" go back />
        {Data.map(item => {
          if (item.jenis == 'Fast Food')
            return (
              <CardJenis
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

export default ListMakananFast;
