import React from 'react';

export const Categories = ({ data, onCategorySelected }) => (
  <>
    {data.map((category, index) => (
      <CategoryItem
        key={`category-${index}`}
        id={category.id}
        name={category.name}
        onClick={onCategorySelected}
      ></CategoryItem>
    ))}
  </>
);

export const CategoryItem = ({ id, name, onClick }) => (
  <p onClick={() => onClick(id, name)}>{name}</p>
);

Categories.defaultProps = {
  data: [],
};
