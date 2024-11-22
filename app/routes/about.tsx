import type { MetaFunction } from "@remix-run/node";

import { LayoutPage } from "~/layouts/page";

import recordPlayer from "~/images/recordplayer.jpg";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function About() {
  return (
    <LayoutPage className="flex flex-col items-center justify-center text-center">
      <section className="py-40 container">
        <h3 className="pt-6 text-4xl uppercase font-semibold leading-none">
          Making it. Together.
        </h3>
        <h2 className="pt-10 text-8xl uppercase font-semibold leading-none">
          This is really about ownership and value. Being able to say &quot;this
          is who I really am&quot;.
        </h2>
        <h2 className="pt-10 text-8xl uppercase font-semibold leading-none">
          Working with other artists to re-establish music as high art. True
          fine art, the way it was meant to be. Harnessing the power of your fan
          base to take back everything that makes you, you. Being a part of
          something good - something that takes you back to why you became an
          artist in the first place. Making the right sacrifices, for the things
          you value, not what someone else wants you to do.
        </h2>
        <h2 className="pt-10 text-8xl uppercase font-semibold leading-none">
          Maybe you want to take back your career and your voice. Maybe you want
          to launch a successful career as an artist. Maybe you want to turn a
          hobby into something more. Or maybe you have a creative project to
          share with the world. Whatever it is, the way you tell your story can
          make all the difference.
        </h2>
        <h2 className="pt-10 text-8xl uppercase font-semibold leading-none">
          Rise is here to help.
        </h2>
      </section>
      <section className="bg-white w-full">
        <div className="py-5">.</div>
      </section>
      <section className="px-20 bg-white overflow-hidden max-h-[76rem]">
        <img
          className="w-full h-full object-cover"
          src={recordPlayer}
          alt="Record Player"
        />
      </section>
      <section className="bg-white w-full">
        <div className="py-5">.</div>
      </section>
      <section className="py-10 container max-w-5xl">
        <p className="pt-6">
          RISE News Corporation is a news company that is responsible for the
          distribution of information related to the digital assets posted for
          sale on the METEX Securities Platform and additional information
          relating to the parties to whom the asset originally belongs.
        </p>
        <p className="pt-6">
          RISE does not post information about individual ownership of various
          digital assets and is solely involved in tracking the activities of
          the underlying physical asset with the intention of studying how
          artist activities contribute to their success, and what activities and
          information are related to the value of their
          artworks/music/entertainment.
        </p>
        <p className="pt-6">
          RISE intends to produce indexes on the basis of information collected
          from the Platform and other activities of artists as it conducts
          audits to understand the true value of various music / entertainment
          related products.
        </p>
        <p className="pt-6">
          RISE News Corporation does not provide investment advice regarding the
          digital assets or any music catalogues.
        </p>
      </section>
    </LayoutPage>
  );
}
