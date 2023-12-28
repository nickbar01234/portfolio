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

/**
 * Prettified text. Used by nesting under <pre>.
 */
const Syntax = {
  Decl: withTextColor("text-decl"),
  Id: withTextColor("text-id"),
  Keyword: withTextColor("text-keyword"),
  Call: withTextColor("text-call"),
  Comment: withTextColor("text-comment"),
  String: function Syntax({ children, className }: Props) {
    const String = withTextColor("text-active");
    const Comment = withTextColor("text-comment");
    return (
      <>
        <Comment>&quot;</Comment>
        <String className={className}>{children}</String>
        <Comment>&quot;</Comment>
      </>
    );
  },
  Statement: function Syntax({ children, className }: Props) {
    const Comment = withTextColor("text-comment");
    return (
      <>
        {children}
        <Comment>;</Comment>
      </>
    );
  },
  Text: withTextColor("text-text"),

  Paren1: withParenthesis("text-bracket-1"),
};

export default Syntax;
