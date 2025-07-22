import { Separator } from "@base-ui-components/react";
import BaseLayout from "../components/layout/BaseLayout";
import Statistics from "../components/dashboard/statistics";
import DeviceStatus from "../components/dashboard/DeviceStatus";

export default function Dashboard() {
  return (
    <BaseLayout>
      <div className="p-4 ">
        <div className="mb-3">
          <div className="font-light text-sm py-2">overview</div>
          <div className="flex gap-3">
            <Statistics />
            <Statistics />
            <Statistics />
            <Statistics />
          </div>
        </div>
        <div className="mb-3">
          <div className="font-light text-sm py-2">favorites</div>
          <div className="flex gap-3">
            <DeviceStatus />
            <DeviceStatus />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
