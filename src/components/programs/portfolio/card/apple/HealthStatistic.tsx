import { numberWithCommas } from "@/utils";

interface HealthStatisticProps {
  header: string;
  color: string;
  progress: number;
  goal: number;
  unit: string;
}

const HealthStatistic = (props: HealthStatisticProps) => {
  return (
    <div className="flex flex-col gap-y-1.5">
      <span>{props.header}</span>
      <span className="text-3xl font-bold">
        <span className={props.color}>{numberWithCommas(props.progress)}</span>
        <span className="text-bg">/{numberWithCommas(props.goal)}</span>
        <span className="text-bg text-lg">{props.unit}</span>
      </span>
    </div>
  );
};

export default HealthStatistic;
