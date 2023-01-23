import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

import { CheckBoxProps } from "./types";

export function CheckBox({ label }: CheckBoxProps) {
  return (
    <Checkbox.Root className="flex items-center gap-3 group">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
        <Checkbox.Indicator>
          <Check size={20} className="text-white" />
        </Checkbox.Indicator>
      </div>
      <span className="group group-data-[state=checked]:line-through group-data-[state=checked]:italic group-data-[state=checked]:text-zinc-400">
        {label}
      </span>
    </Checkbox.Root>
  );
}
