import React from 'react';
import { node } from 'prop-types';

export const CardBody = ({ children }) => (
  <div>
    <p>Body</p>
    {children}
  </div>
);

CardBody.protoType = {
  children: node.isRequired,
};
