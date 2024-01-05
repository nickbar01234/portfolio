import { getAppleHealth } from "@/app/api";
import { getAppleHealthResponse } from "@/app/api/google/drive/route.schema";
import { Loader } from "@/components/layout";
import React from "react";
import { z } from "zod";
import HealthStatistic from "./HealthStatistic";
import moment from "moment";

const AppleHealthProfile = () => {
  const [appleHealth, setAppleHealth] = React.useState<z.infer<
    typeof getAppleHealthResponse
  > | null>(null);

  React.useEffect(() => {
    getAppleHealth({ body: {} }, true).then((res) => setAppleHealth(res));
  }, []);

  return (
    <Loader loading={appleHealth === null}>
      <div className="h-full w-full bg-bg-highlight rounded p-6">
        <div className="h-full w-full flex flex-col justify-between gap-y-4 overflow-x-auto scrollbar">
          <div className="h-full w-full flex flex-col justify-evenly gap-y-2">
            <HealthStatistic
              header="Calories"
              color="text-keyword"
              progress={appleHealth?.calories ?? 0}
              goal={600}
              unit="cal"
            />
            <HealthStatistic
              header="Workout"
              color="text-call"
              progress={appleHealth?.workoutTime ?? 0}
              goal={30}
              unit="min"
            />
            <HealthStatistic
              header="Stand"
              color="text-decl"
              progress={appleHealth?.standHours ?? 0}
              goal={12}
              unit="hour"
            />
            <HealthStatistic
              header="Step"
              color="text-active"
              progress={appleHealth?.stepCount ?? 0}
              goal={12_000}
              unit="step"
            />
          </div>
          <div className="italic text-sm whitespace-nowrap">
            Last synced{" "}
            {moment(appleHealth?.lastModified).format("HH:MMa YYYY-MM-DD")}
          </div>
        </div>
      </div>
    </Loader>
  );
};

export default AppleHealthProfile;
