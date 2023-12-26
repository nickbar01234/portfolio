interface Props {
  children?: React.ReactNode;
  className?: string;
}

const withTextColor = (color: string) => {
  return function Syntax({ children, className = "" }: Props) {
    return <span className={`${color} ${className}`}>{children}</span>;
  };
};

const withParenthesis = (color: string) => {
  return function Braces({ children }: Props) {
    return (
      <>
        <span className={color}>(</span>
        {children}
        <span className={color}>)</span>
      </>
    );
  };
};

const Syntax = {
  Decl: withTextColor("text-decl"),
  Id: withTextColor("text-id"),
  Keyword: withTextColor("text-keyword"),
  Call: withTextColor("text-call"),
  Comment: withTextColor("text-comment"),
  String: withTextColor("text-active"),
  Text: withTextColor("text-text"),

  Paren1: withParenthesis("text-bracket-1"),
};

export default Syntax;
