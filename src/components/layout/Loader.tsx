interface LoaderProps {
  loading: boolean;
  children?: React.ReactNode;
}

const Loader = (props: LoaderProps) => {
  return (
    <>
      <div
        className={`h-full w-full flex justify-center items-center ${
          props.loading ? "block" : "hidden"
        }`}
      >
        <svg
          className="animate-spin h-20 w-20 text-text border-8 border-comment rounded-full border-t-text"
          viewBox="0 0 24 24"
        />
      </div>
      <div className={props.loading ? "hidden" : "h-full w-full block"}>
        {props.children}
      </div>
    </>
  );
};

export default Loader;
