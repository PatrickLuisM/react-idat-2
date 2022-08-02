import React from 'react';
import { string } from 'prop-types';

export const CardHeader = ({ header }) => <div>{header}</div>;

CardHeader.protoType = {
  header: string.isRequired,
};
