import React from 'react';
import './style.css';
import { Button, Title, Categories, Image } from './components';

const categories = [
  { id: 1, name: 'Categoria 1' },
  { id: 2, name: 'Categoria 2' },
  { id: 3, name: 'Categoria 3' },
  { id: 4, name: 'Categoria 4' },
  { id: 5, name: 'Categoria 5' },
  { id: 6, name: 'Categoria 6' },
  { id: 7, name: 'Categoria 7' },
];

function App() {
  const textButton = 'Mi primer componenete 😎';
  const textTitle = 'Mi segundo componente 😋';
  function handleClick() {
    if (typeof onClick === 'funcyion') {
      onClick();
    }
    alert('Click al componente Button');
  }
  function handleCategorySelected(id, name) {
    alert('Categoria seleccionada' + id + '' + name);
  }
  return (
    <div>
      <Title value={textTitle} />
      <Button value={textButton} onClick={handleClick} />
      <Categories
        data={categories}
        onCategorySelected={handleCategorySelected}
      />
      <Image
        url="https://www.egames.news/__export/1649265025589/sites/debate/img/2022/04/06/top_5_cosas_que_debes_saber_antes_de_ver_la_temporada_2_de_the_rising_of_the_shield_hero.jpg_423682103.jpg"
        title="hola"
      />
    </div>
  );
}

export default App;
