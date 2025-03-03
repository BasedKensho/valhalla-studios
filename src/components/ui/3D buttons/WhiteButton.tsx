import React from 'react';
import BaseButton, { BaseButtonProps } from './BaseButton';

const WhiteButton: React.FC<BaseButtonProps> = (props) => {
  const whiteStyles = `
    bg-white text-[#0e0e0e]
    before:bg-white
    hover:shadow-[0_8px_24px_rgba(220,220,220,0.4)]
    active:shadow-[0_4px_16px_rgba(220,220,220,0.3)]
  `;

  return (
    <BaseButton
      {...props}
      className={`${whiteStyles} ${props.className || ''}`}
    />
  );
};

export default WhiteButton;