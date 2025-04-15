import { useState } from 'react';
import { AddCategory, GifGrid } from './components/';

export const GifApp = () => {

	const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = ( newCategory ) => {
    
    if( categories.includes(newCategory) ) return;

    //setCategories( cat => [...cat, 'Naruto']);//Otra forma de hacerlo
    setCategories([newCategory, ...categories]);
  }
  

	return (
		<>
			{/* Titulo del Sitio */}
			<h1>GifApp</h1>

			{/* Input */}
      <AddCategory
        onNewCategory={ onAddCategory }
      />

			{/* Listado de gifs */}
      <ol>
        {
          categories.map(category => (
              <GifGrid key={category} category={category} />
          ))
        }
      </ol>
			{/* Gif Item */}
		</>
	);
};
