import { AlanIcon } from "../icons/alan-icon";
import { ArcIcon } from "../icons/arc-icon";
import { CashAppIcon } from "../icons/cashapp-icon";
import { DescriptIcon } from "../icons/descript-icon";
import { LoomIcon } from "../icons/loom-icon";
import { MercuryIcon } from "../icons/mercury-icon";
import { OpenseaIcon } from "../icons/opensea-icon";
import { PitchIcon } from "../icons/pitch-icon";
import { RampIcon } from "../icons/ramp-icon";
import { RaycastIcon } from "../icons/raycast-icon";
import { RetoolIcon } from "../icons/retool-icon";
import { VercelIcon } from "../icons/vercel-icon";

export function Clients() {
  return (
    <>
      <p className="mb-12 text-center text-lg text-white md:text-xl">
        <span className="text-primary-text">
          Powering the world's best product teams.
        </span>
        <br className="hidden md:block" />
        From next-gen startups to established enterprises.
      </p>

      <div className="flex flex-wrap justify-around gap-x-6 gap-y-8 [&_svg]:max-w-[16rem] [&_svg]:basis-[calc(50%-12px)] md:[&_svg]:basis-[calc(16.66%-20px)]">
        <RampIcon />
        <LoomIcon className="hidden md:block" />
        <VercelIcon />
        <DescriptIcon className="hidden md:block" />
        <CashAppIcon />
        <RaycastIcon />
        <MercuryIcon />
        <RetoolIcon />
        <AlanIcon className="hidden md:block" />
        <ArcIcon className="hidden md:block" />
        <OpenseaIcon className="hidden md:block" />
        <PitchIcon className="hidden md:block" />
      </div>
    </>
  );
}
