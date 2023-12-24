interface DesktopItem {
  icon: React.ReactNode;
  name: string;
  onClick: (e: React.MouseEvent) => void;
}

const DesktopItem = (props: DesktopItem) => {
  return (
    <div
      className="flex flex-col gap-y-2 items-center text-center w-20 flex-grow-0 cursor-pointer hover:text-active"
      onClick={props.onClick}
    >
      {props.icon}
      <p className="w-full no-wrap text-ellipsis truncate">{props.name}</p>
    </div>
  );
};

export default DesktopItem;
