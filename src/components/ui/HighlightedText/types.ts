export interface HighlightedTextProps {
  text: string;
  className?: string;
  underlineClassName?: string;
  underlineStyle?: React.CSSProperties;
  variant?: 'gold' | 'silver';
}

export interface UnderlineStyles {
  background: string;
  boxShadow: string;
}