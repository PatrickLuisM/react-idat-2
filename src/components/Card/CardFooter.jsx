import React from 'react';
import { node } from 'prop-types';

export const CardFooter = ({ children }) => <div>{children}</div>;

CardFooter.protoType = {
  children: node.isRequired,
};
