import React from 'react';

interface HighlightedTextProps {
  text: string;
  className?: string;
  underlineClassName?: string;
  underlineStyle?: React.CSSProperties;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({
  text,
  className = '',
  underlineClassName = '',
  underlineStyle
}) => {
  const defaultUnderlineStyle = {
    background: 'linear-gradient(to right, #B8860B 0%, #DCDCDC 100%)',
    boxShadow: '0 0 15px rgba(184,134,11,0.5), 0 0 30px rgba(184,134,11,0.3), 0 0 45px rgba(220,220,220,0.2)'
  };

  return (
    <span className="relative inline-block">
      <span className={`text-white font-bold ${className}`}>
        {text}
      </span>
      <span 
        className={`absolute -bottom-[2px] left-0 w-full h-[3px] rounded-[3px_1px] ${underlineClassName}`}
        style={{
          ...defaultUnderlineStyle,
          ...underlineStyle
        }}
      />
    </span>
  );
};

export default HighlightedText;