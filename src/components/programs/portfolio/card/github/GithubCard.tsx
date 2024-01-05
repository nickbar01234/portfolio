interface GithubCardProps {
  header: string;
  count: number;
}

const GithubCard = (props: GithubCardProps) => {
  return (
    <div className="p-3 rounded bg-bg w-full">
      <div className="flex flex-col gap-y-1">
        <span className="text-comment">{props.header}</span>
        <span className="text-2xl">{props.count}</span>
      </div>
    </div>
  );
};

export default GithubCard;
