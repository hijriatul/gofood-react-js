import React from 'react';
import Cards from '../../component/card';
import Data from '../../data/data-dummy';

function ListMakanan() {
  return (
    <div>
      {Data.map(item => {
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
  );
}

export default ListMakanan;
