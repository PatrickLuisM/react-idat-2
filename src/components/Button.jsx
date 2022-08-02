import React from 'react';
import { string, func } from 'prop-types';

// export const Button = ({ value }) => <button>{value}</button>;

export function Button({ value, onClick, htmlType }) {
  function handleClick() {
    if (typeof onClick === 'funcyion') {
      onClick();
    }
  }

  return (
    <button type={htmlType} onClick={handleClick}>
      {value}
    </button>
  );
}

Button.prototype = {
  htmlType: string,
  value: string,
  onClick: func,
};

Button.defaultProps = {
  htmlType: 'button',
};
