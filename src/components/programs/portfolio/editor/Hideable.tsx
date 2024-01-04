interface HideableProps {
  active: boolean;
  children?: React.ReactNode;
}

const Hideable = (props: HideableProps) => {
  return (
    <div className={`${props.active ? "block" : "hidden"}`}>
      {props.children}
    </div>
  );
};

export default Hideable;
