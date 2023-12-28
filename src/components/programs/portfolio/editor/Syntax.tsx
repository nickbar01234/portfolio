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
  return function Braces({
    children,
    open,
    close,
  }: Props & { open: string; close: string }) {
    return (
      <>
        <span className={color}>{open}</span>
        {children}
        <span className={color}>{close}</span>
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
  Statement: function Syntax({
    children,
    className,
    delim = ";",
  }: Props & { delim?: string }) {
    const Comment = withTextColor("text-comment");
    return (
      <>
        {children}
        <Comment>{delim}</Comment>
      </>
    );
  },
  Text: withTextColor("text-text"),

  Paren1: withParenthesis("text-bracket-1"),
};

export default Syntax;
