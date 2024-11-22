import type { MetaFunction } from "@remix-run/node";

import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { LayoutPage } from "~/layouts/page";

import mountains from "~/images/mountains.png";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <LayoutPage>
      <Hero />
      <Waitlist />
      <Quote />
      <Membership />
      <Subscribe />
    </LayoutPage>
  );
}

function Hero() {
  return (
    <>
      <div className="pt-24 flex items-center justify-center text-center w-full">
        <div className="w-full max-w-[25vw]">
          Data-backed news on artist activities and progress for artists,
          labels, rights holders, and investors. Expanding the artist horizon
          without beginning or end. With music, and irreversible technological
          progress.
        </div>
      </div>
      <div className="relative w-full mt-44 overflow-hidden">
        <div className="absolute text-hero top-0 left-0 z-0 text-nowrap uppercase hero-marquee">
          Grow. Succeed. Profit. Fine Art at its Finest. Grow. Succeed. Profit.
          Fine Art at its Finest. Grow. Succeed. Profit. Fine Art at its Finest.
          Grow. Succeed. Profit. Fine Art at its Finest. Grow. Succeed. Profit.
          Fine Art at its Finest. Grow. Succeed. Profit. Fine Art at its Finest.
          Grow. Succeed. Profit. Fine Art at its Finest.
        </div>
        <img className="relative w-full z-10" src={mountains} alt="hero" />
      </div>
    </>
  );
}

function Waitlist() {
  return (
    <section className="py-48 w-full flex flex-col justify-center items-center gap-16">
      <header className="flex flex-col justify-center items-center gap-4">
        <h1 className="uppercase text-8xl font-bold">Join the Waitlist</h1>
        <div>
          Only real updates and data on how artists are winning in today’s
          economy. Full launch coming soon.
        </div>
      </header>
      <div className="flex flex-col justify-center items-center gap-4">
        <Input type="email" placeholder="Email" className="h-10 w-[36rem]" />
        <Button variant="outline" className="h-12 uppercase px-16 py-6">
          Sign Up
        </Button>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="py-48 px-64 max-full flex flex-col items-center">
      <div className="max-w-[50vw]">
        <div className="text-7xl uppercase">
          “Whatever it is, the way you tell your story can make all the
          difference.”
        </div>
        <div className="mt-16">- RISE News Corporation</div>
      </div>
    </section>
  );
}

function Membership() {
  return (
    <section className="bg-white py-48 flex flex-col items-center">
      <div className="w-[50%]">
        <h1 className="text-black uppercase font-bold text-7xl">
          Membership Options
        </h1>
        <Accordion
          type="single"
          collapsible
          className="w-full text-black border-t border-black mt-16"
        >
          <AccordionItem value="artist">
            <AccordionTrigger className="uppercase font-semibold text-2xl">
              Artist
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              Current Artist, Singer-Songwriter, Performing Artist, New Artists
              wanting to collect information on artist activities and
              collaborate on building the world&apos;s most comprehensive artist
              activity database in the world. Just the facts - nothing else!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="investor">
            <AccordionTrigger className="uppercase font-semibold text-2xl">
              Investor
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              Artists, Labels, Publishers, Agents, Sponsors, and Fund Managers
              interested in receiving advanced data on artist activities to help
              make investment decisions on artists.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="artist-plus">
            <AccordionTrigger className="uppercase font-semibold text-2xl">
              Artist +
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="investor-plus">
            <AccordionTrigger className="uppercase font-semibold text-2xl">
              Investor +
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

function Subscribe() {
  return (
    <div className="py-32 text-nowrap text-[12rem] uppercase font-semibold subscribe-marquee">
      Subscribe Now 🎙️ Subscribe Now 🎙️ Subscribe Now 🎙️ Subscribe Now 🎙️
      Subscribe Now 🎙️ Subscribe Now 🎙️ Subscribe Now 🎙️ Subscribe Now 🎙️
    </div>
  );
}
