interface MonitorProps {
  children?: React.ReactNode;
}

const Monitor = (props: MonitorProps) => {
  return (
    <div className="relative w-full h-full bg-bg rounded-md border-bg-highlight shadow-2xl shadow-comment border-8">
      {props.children}
    </div>
  );
};

export default Monitor;
