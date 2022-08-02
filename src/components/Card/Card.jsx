import React from 'react';
import { CardFooter } from '../Card/CardFooter';
import { CardHeader } from '../Card/CardHeader';
import { CardBody } from '../Card/CardBody';
import { shape, number, string } from 'prop-types';

export const Card = ({ product, children }) => (
  <div>
    <CardHeader header={product.name} />
    <CardBody children={children} />
    <CardFooter>
      <a href="#">Comprar</a>
    </CardFooter>
  </div>
);

Card.propType = {
  product: shape({
    id: number.isRequired,
    name: string.isRequired,
    price: number.isRequired,
  }).isRequired,
};
