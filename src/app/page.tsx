"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import Masonry from "react-masonry-css";
import Image from "next/image";
import imageBG from "../../public/lensybg.jpg";
import Logo from "../../public/LENSYLOGO.png";
import imgA from "../../public/pa.jpg";
import imgB from "../../public/wa.jpg";
import imgC from "../../public/pb.jpg";
import imgD from "../../public/wb.jpg";
import imgE from "../../public/wc.jpg";
import imgF from "../../public/pc.jpg";
import imgG from "../../public/pd.jpg";
import imgH from "../../public/pe.jpg";
import imgI from "../../public/wd.jpg";
import imgJ from "../../public/pf.jpg";
import imgK from "../../public/pg.jpg";
import imgL from "../../public/we.jpg";
import imgM from "../../public/wf.jpg";
import imgN from "../../public/ph.jpg";
import imgO from "../../public/pi.jpg";
import imgP from "../../public/wg.jpg";
import imgQ from "../../public/wh.jpg";
import imgR from "../../public/pj.jpg";
import imgS from "../../public/pk.jpg";
import imgT from "../../public/wi.jpg";
import imgU from "../../public/wj.jpg";
import imgV from "../../public/pl.jpg";
import imgW from "../../public/pm.jpg";
import imgX from "../../public/pn.jpg";
import imgY from "../../public/po.jpg";
import imgZ from "../../public/pp.jpg";
import imgAA from "../../public/pq.jpg";
import imgBB from "../../public/pr.jpg";
import imgCC from "../../public/ps.jpg";

import type { LightGallery } from "lightgallery/lightgallery";
import LightGalleryComponent from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export default function Home() {
  const lightBoxRef = useRef<LightGallery | null>(null);
  const [selectedTab, setSelectedTab] = useState("all"); // Add state for selected tab

  const tabs = [
    {
      key: "all",
      display: "All Photos",
    },
    {
      key: "potrait",
      display: "Potrait",
    },
    {
      key: "wedding",
      display: "Wedding",
    },
  ];

  const images = [
    {
      image: imgA,
      type: "potrait",
    },
    {
      image: imgB,
      type: "wedding",
    },
    {
      image: imgC,
      type: "potrait",
    },
    {
      image: imgD,
      type: "wedding",
    },
    {
      image: imgE,
      type: "wedding",
    },
    {
      image: imgF,
      type: "potrait",
    },
    {
      image: imgG,
      type: "potrait",
    },
    {
      image: imgH,
      type: "potrait",
    },
    {
      image: imgI,
      type: "wedding",
    },
    {
      image: imgJ,
      type: "potrait",
    },
    {
      image: imgK,
      type: "potrait",
    },
    {
      image: imgL,
      type: "wedding",
    },
    {
      image: imgM,
      type: "wedding",
    },
    {
      image: imgN,
      type: "potrait",
    },
    {
      image: imgO,
      type: "potrait",
    },
    {
      image: imgP,
      type: "wedding",
    },
    {
      image: imgQ,
      type: "wedding",
    },
    {
      image: imgR,
      type: "potrait",
    },
    {
      image: imgS,
      type: "potrait",
    },
    {
      image: imgT,
      type: "wedding",
    },
    {
      image: imgU,
      type: "wedding",
    },
    {
      image: imgV,
      type: "potrait",
    },
    {
      image: imgW,
      type: "potrait",
    },
    {
      image: imgX,
      type: "potrait",
    },
    {
      image: imgY,
      type: "potrait",
    },
    {
      image: imgZ,
      type: "potrait",
    },
    {
      image: imgAA,
      type: "potrait",
    },
    {
      image: imgBB,
      type: "potrait",
    },
    {
      image: imgCC,
      type: "potrait",
    },
  ];

  const filteredImages =
    selectedTab === "all"
      ? images
      : images.filter((image) => image.type === selectedTab);

  return (
    <div className="h-full overflow-auto">
      <Image
        src={imageBG}
        alt="backgroundimage"
        placeholder="blur"
        className="fixed left-0 top-0 z-0 h-full"
      />
      <div className="fixed left-0 top-0 w-full h-full z-10 from-stone-900 bg-gradient-to-t"></div>
      <header className="fixed w-full z-20 top-0 flex justify-between items-center h-[90px] px-6 bg-black md:bg-transparent">
        <div className="flex p-3 items-center gap-1">
          <Image src={Logo} alt="logo" className="h-[50px] w-[50px]" />
          <h1 className="text-white font-semibold text-[16px]">ENSY</h1>
        </div>
        <Link
          href="#"
          className="rounded-3xl bg-white text-stone-900 text-[14px] px-3 py-2 font-medium hover:bg-opacity-90"
        >
          Get in Touch
        </Link>
      </header>

      {/* tabs */}
      <main className="relative pt-[110px] z-10">
        <div className="flex flex-col items-center h-full">
          <Tab.Group>
            <Tab.List className="flex items-center gap-6 md:gap-12">
              {tabs.map((tab) => (
                <Tab
                  key={tab.key}
                  className="uppercase p-2 text-base tracking-wide font-light outline-none"
                  onClick={() => setSelectedTab(tab.key)}
                >
                  {({ selected }) => (
                    <span
                      className={selected ? "text-white" : "text-stone-600"}
                    >
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="h-full max-w-[900px] w-full p-2 sm:p-4 my-6">
              <Tab.Panel className="overflow-auto">
                <Masonry className="flex gap-4" breakpointCols={2}>
                  {filteredImages.map((image, _i) => (
                    <Image
                      key={image?.image?.src}
                      src={image?.image}
                      alt="sampleimage"
                      className="my-4 cursor-pointer hover:opacity-90"
                      placeholder="blur"
                      onClick={() => {
                        lightBoxRef.current?.openGallery(_i);
                      }}
                    />
                  ))}
                </Masonry>
                <LightGalleryComponent
                  onInit={(ref) => {
                    if (ref) {
                      lightBoxRef.current = ref.instance;
                    }
                  }}
                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}
                  dynamic
                  dynamicEl={filteredImages.map((image) => ({
                    src: image?.image?.src,
                    thumb: image?.image?.src,
                  }))}
                ></LightGalleryComponent>
              </Tab.Panel>
              <Tab.Panel>
                <Masonry className="flex gap-4" breakpointCols={2}>
                  {filteredImages.map((image, _i) => (
                    <Image
                      key={image?.image?.src}
                      src={image?.image}
                      alt="sampleimage"
                      className="my-4 cursor-pointer hover:opacity-90"
                      placeholder="blur"
                      onClick={() => {
                        lightBoxRef.current?.openGallery(_i);
                      }}
                    />
                  ))}
                </Masonry>
                <LightGalleryComponent
                  onInit={(ref) => {
                    if (ref) {
                      lightBoxRef.current = ref.instance;
                    }
                  }}
                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}
                  dynamic
                  dynamicEl={filteredImages.map((image) => ({
                    src: image?.image?.src,
                    thumb: image?.image?.src,
                  }))}
                ></LightGalleryComponent>
              </Tab.Panel>
              <Tab.Panel>
                <Masonry className="flex gap-4" breakpointCols={2}>
                  {filteredImages.map((image, _i) => (
                    <Image
                      key={image?.image?.src}
                      src={image?.image}
                      alt="sampleimage"
                      className="my-4 cursor-pointer hover:opacity-90"
                      placeholder="blur"
                      onClick={() => {
                        lightBoxRef.current?.openGallery(_i);
                      }}
                    />
                  ))}
                </Masonry>
                <LightGalleryComponent
                  onInit={(ref) => {
                    if (ref) {
                      lightBoxRef.current = ref.instance;
                    }
                  }}
                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}
                  dynamic
                  dynamicEl={filteredImages.map((image) => ({
                    src: image?.image?.src,
                    thumb: image?.image?.src,
                  }))}
                ></LightGalleryComponent>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className="relative h-[60px] flex flex-col justify-center items-center z-20">
        <div className="flex items-center gap-2">
          <div className="flex gap-1 items-center">
            <Image
              src={Logo}
              alt="logo"
              className="h-[50px] md:h-[80px] w-[50px] md:w-[80px]"
            />
            <h1 className="text-white font-semibold text-[18px] md:text-[24px]">
              ENSY
            </h1>
          </div>
          <h1 className="text-white text-[16px] md:text-[18px]">PHOTOGRAPHY</h1>
        </div>
        <div>
          <p className="text-xs font-light font-roboto mb-7">
            &copy; {new Date().getFullYear()} stacksinEDEN inc
          </p>
        </div>
      </footer>
    </div>
  );
}
