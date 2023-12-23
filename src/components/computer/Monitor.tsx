interface MonitorProps {
  children?: React.ReactNode;
}

const Monitor = (props: MonitorProps) => {
  return (
    <div className="relative w-full h-full">
      <div className="relative bg-bg rounded-md border-[12px] border-bg-highlight shadow-2xl shadow-comment h-5/6 z-50">
        {props.children}
      </div>
      <div className="relative w-full flex justify-center z-10">
        <div className="w-32 h-32 bg-bg-highlight" />
      </div>
      <div className="relative w-full flex justify-center z-20">
        <div className="w-3/6 h-8 bg-bg-highlight shadow-2xl shadow-bg rounded-t-xl" />
      </div>
    </div>
  );
};

export default Monitor;
