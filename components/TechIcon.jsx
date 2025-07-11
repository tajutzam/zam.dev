"use client";
import {
  SiReact,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiFramer,
  SiTypescript,
  SiLaravel,
  SiPhp,
  SiSpringboot,
  SiFlutter
} from "react-icons/si";

import Halo from "@/components/ui/Halo";

import clsx from "clsx";

export default function TechIcon() {
  return (
    <Halo>
      <div className="flex flex-col items-center justify-center gap-6 rounded-xl bg-secondaryA p-6 mb-8 lg:mb-0 text-center lg:p-16">
        <h1 className="pb-8 uppercase text-lg text-secondary">
          I love to work & have experience with
        </h1>
        <div className="flex gap-5">
          <SiLaravel className={clsx("w-[2.4rem] h-[2.4rem] text-red-500")} />
          <SiJavascript
            className={clsx("w-[2.4rem] h-[2.4rem] text-javascript")}
          />
          <SiPhp
            className={clsx("w-[2.4rem] h-[2.4rem] text-typescript")}
          />
          <SiTailwindcss
            className={clsx("w-[2.4rem] h-[2.4rem] text-tailwind")}
          />
          <SiSpringboot className={clsx("w-[2.4rem] h-[2.4rem] text-green-400")} />
          <SiFlutter
            className={clsx("w-[2.4rem] h-[2.4rem] text-blue-400")}
          />
        </div>
      </div>
    </Halo>
  );
}
