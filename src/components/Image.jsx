import React from 'react';
import { string } from 'prop-types';

export const Image = ({ url, title }) => <img src={url} alt={title} />;

Image.prototype = {
  url: string.isRequired,
  title: string.isRequired,
};
