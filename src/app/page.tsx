"use client";

import { FeaturedIcon } from "@app/components/Icons";
import Footer from "./Footer";
import Header from "./Header";
import WhyUs from "./templates/WhyUs";
import TopPlaylists from "./templates/TopPlaylists";
import Featured from "./templates/Featured";
import Producers from "./templates/Producers";

export default function Home() {

  return (
    <>
      <Header />
      <div className="container">
        <Featured />
        <WhyUs />
        <TopPlaylists />
        <Producers />
      </div>
      <div className="container">
        <div className="flex flex-col gap-2 py-10">
          <div className="flex justify-center">
            <FeaturedIcon className="h-8 w-8 " />
          </div>
          <div className="text-center">Made with MusicGPT’s AI Technology</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
