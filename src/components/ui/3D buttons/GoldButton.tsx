import React from 'react';
import BaseButton, { BaseButtonProps } from './BaseButton';

const GoldButton: React.FC<BaseButtonProps> = (props) => {
  const goldStyles = `
    bg-[#B8860B] text-white
    before:bg-[#B8860B]
    hover:shadow-[0_8px_24px_rgba(184,134,11,0.4)]
    active:shadow-[0_4px_16px_rgba(184,134,11,0.3)]
  `;

  return (
    <BaseButton
      {...props}
      className={`${goldStyles} ${props.className || ''}`}
    />
  );
};

export default GoldButton;