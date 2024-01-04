interface LoaderProps {
  loading: boolean;
  children?: React.ReactNode;
}

const Loader = (props: LoaderProps) => {
  if (props.loading) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <svg
          className="animate-spin h-20 w-20 text-text border-8 border-comment rounded-full border-t-text"
          viewBox="0 0 24 24"
        />
      </div>
    );
  } else {
    return <>{props.children}</>;
  }
};

export default Loader;
