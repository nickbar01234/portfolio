interface PopUpProps {
  children?: React.ReactNode;
  setDisplayPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopUp = (props: PopUpProps) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/6 h-4/6 bg-bg-variant shadow-lg shadow-comment rounded p-2 whitespace-nowrap z-50">
      <div className="flex gap-x-2">
        <i
          className="rounded-full h-2.5 w-2.5 bg-keyword cursor-pointer"
          onClick={() => props.setDisplayPopUp(false)}
        />
        <i className="rounded-full h-2.5 w-2.5 bg-variable cursor-pointer" />
      </div>
      {props.children}
    </div>
  );
};

export default PopUp;
