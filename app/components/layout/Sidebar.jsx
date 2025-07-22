import { Accordion } from "@base-ui-components/react";
import React from "react";
import { useNavigate } from "react-router";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-gray-50 ">
      <div className="font-bold text-4xl tracking-wider  h-16 flex items-center ">
        KLOUGE
      </div>

      <Accordion.Root>
        <Accordion.Item>
          <Accordion.Header>
            <Accordion.Trigger
              onClick={() => navigate("/dashboard")}
              className="pl-4 hover:bg-gray-300 group flex w-full cursor-pointer items-baseline justify-between gap-4 py-2 text-left font-medium focus-visible:outline-2 focus-visible:outline-blue-800 "
            >
              Dasboard
              {/* <PlusIcon className="mr-2 size-3 shrink-0 transition-all ease-out group-data-[panel-open]:scale-110 group-data-[panel-open]:rotate-45" /> */}
            </Accordion.Trigger>
          </Accordion.Header>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Header>
            <Accordion.Trigger
              onClick={() => navigate("/device")}
              className="pl-4 hover:bg-gray-300 group flex w-full cursor-pointer items-baseline justify-between gap-4 py-2 text-left font-medium focus-visible:outline-2 focus-visible:outline-blue-800 "
            >
              Device
              {/* <PlusIcon className="mr-2 size-3 shrink-0 transition-all ease-out group-data-[panel-open]:scale-110 group-data-[panel-open]:rotate-45" /> */}
            </Accordion.Trigger>
          </Accordion.Header>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Header>
            <Accordion.Trigger className="pl-4 hover:bg-gray-300 group flex w-full cursor-pointer items-baseline justify-between gap-4 py-2 text-left font-medium focus-visible:outline-2 focus-visible:outline-blue-800">
              Analytics
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden text-base text-gray-600 transition-[height] ease-out data-[ending-style]:h-0 data-[starting-style]:h-0">
            <Accordion.Header>
              <Accordion.Trigger className="pl-6 hover:bg-gray-300 group flex w-full cursor-pointer items-baseline justify-between gap-4 py-1 text-left font-medium focus-visible:outline-2 focus-visible:outline-blue-800">
                1 item
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Header>
              <Accordion.Trigger className="pl-6 hover:bg-gray-300 group flex w-full cursor-pointer items-baseline justify-between gap-4 py-1 text-left font-medium focus-visible:outline-2 focus-visible:outline-blue-800">
                1 item
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Header>
              <Accordion.Trigger className="pl-6 hover:bg-gray-300 group flex w-full cursor-pointer items-baseline justify-between gap-4 py-1 text-left font-medium focus-visible:outline-2 focus-visible:outline-blue-800">
                1 item
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Header>
              <Accordion.Trigger className="pl-6 hover:bg-gray-300 group flex w-full cursor-pointer items-baseline justify-between gap-4 py-1 text-left font-medium focus-visible:outline-2 focus-visible:outline-blue-800">
                1 item
              </Accordion.Trigger>
            </Accordion.Header>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}
