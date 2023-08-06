import { HoverCard } from '@radix-ui/react-hover-card';
import { url } from 'inspector';
import Link from 'next/link';


interface CardPhaseProps {
  fase: string;
  title: string;
  description: string;
}

export const CardPhase: React.FC<CardPhaseProps> = ({ fase, title, description }) => (
  <div className="flex flex-col h-auto w-[353px] bg-cardPhase rounded-[10px]">
    <div className="mx-8 mb-14 mt-8">
      <h1 className="text-cardPhaseTitle font-medium text-2xl">
        {fase}
      </h1>
    </div>
    <div className="mx-8 mb-8">
      <h2 className="text-white font-bold text-4xl">
        {title}
      </h2>
    </div>
    <div className="mx-8 mb-8 text-white font-poppins font-normal text-base">
      <p>
        {description}
      </p>
    </div>
  </div>
);