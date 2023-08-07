import React from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';
import Image from 'next/image';
import Link from 'next/link';


interface HoverCardProps {
  iconSocialMedia: string;
  iconLeague: string;
  url: string;

}

export const HoverCards: React.FC<HoverCardProps> = ({ iconSocialMedia, iconLeague, url }) => (
  <HoverCard.Root>
    <HoverCard.Trigger asChild>
      <Link
        className="inline-block cursor-pointer rounded-full shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none focus:shadow-[0_0_0_2px_white]"
        href={url}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Image
          className="block h-[45px] w-[45px] rounded-full"
          src={iconSocialMedia}
          alt="Radix UI"
        />
      </Link>
    </HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content
        className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
        sideOffset={5}
      >
        <div className="flex flex-col gap-[7px]">
          <Image
            className="block rounded-full" width={60} height={60}
            src={iconLeague}
            alt="Logo da Echosec"
          />
          <div className="flex flex-col gap-[15px]">
            <div>
              <div className="text-black m-0 text-[15px] font-medium leading-[1.5]">Radix</div>
              <div className="text-black m-0 text-[15px] leading-[1.5]">@radix_ui</div>
            </div>
            <div className="text-black m-0 text-[15px] leading-[1.5]">
              Components, icons, colors, and templates for building high-quality, accessible UI.
              Free and open-source.
            </div>
            <div className="flex gap-[15px]">
              <div className="flex gap-[5px]">
                <div className="text-black m-0 text-[15px] font-medium leading-[1.5]">0</div>{' '}
                <div className="text-slate-900 m-0 text-[15px] leading-[1.5]">Following</div>
              </div>
              <div className="flex gap-[5px]">
                <div className="text-black m-0 text-[15px] font-medium leading-[1.5]">2,900</div>{' '}
                <div className="text-slate-900 m-0 text-[15px] leading-[1.5]">Followers</div>
              </div>
            </div>
          </div>
        </div>

        <HoverCard.Arrow className="fill-white" />
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
);