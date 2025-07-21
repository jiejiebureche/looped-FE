import React, { useRef, useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from 'raster-react';
import VinylAlbum from "./VinylAlbum";
import "/src/index.css";
import Squares from "./Squares";

const SectionSeparator = () => (
  <hr
    style={{
      border: "none",
      height: "1px",
      backgroundColor: "#000000",
      margin: "2rem 0",
    }}
  />
);

const Homepage = () => {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const updateScrollButtons = () => {
      setShowLeft(el.scrollLeft > 0);
      setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };

    updateScrollButtons();
    el.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24 pb-8 text-white">
      {/* Background Squares */}
      <div
        className="fixed inset-0 -z-[1] overflow-hidden"
        style={{ opacity: 0.4 }}
      >
        <div className="absolute inset-0">
          <div style={{ width: "100%", height: "100%" }}>
            <Squares
              speed={0.5}
              squareSize={25}
              direction="diagonal"
              borderColor="#530B73"
              hoverFillColor="#530B73"
            />
          </div>
        </div>
      </div>

      {/* New Album Releases */}
      <section className="mb-12">
        <h2
          className="font-pixelateddisplay text-2xl font-bold mb-4"
          style={{ color: "#530B73" }}
        >
          New Album Releases!
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[...Array(5)].map((_, i) => (
            <div key={i}>
              <VinylAlbum />
              <div className="mt-2 bg-black p-2 rounded-lg text-center">
                <p className="text-sm font-medium">Album Title</p>
                <p className="text-xs text-gray-400">Artist Name</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <SectionSeparator />

      {/* Popular Releases */}
      <section className="mb-12">
        <h2
          className="font-pixelateddisplay text-2xl font-bold mb-4"
          style={{ color: "#530B73" }}
        >
          Popular Releases
        </h2>

        <div className="relative">
          {showLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
            >
              <ChevronLeftIcon size={50} strokeWidth={0.25} color="#530B73" />
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto scrollbar-hide px-12"
          >
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="min-w-[160px] bg-black p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="shadow-lg shadow-black aspect-square">
                  <VinylAlbum />
                </div>
                <p className="mt-2 text-sm font-medium">Album Title</p>
                <p className="text-xs text-gray-400">Artist Name</p>
              </div>
            ))}
          </div>

          {showRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 "
            >
              <ChevronRightIcon size={50} strokeWidth={0.25} color="#530B73" />
            </button>
          )}
        </div>
      </section>
      <SectionSeparator />

      {/* Popular Reviews */}
      <section className="mb-12">
        <h2
          className="font-pixelateddisplay text-2xl font-bold mb-4"
          style={{ color: "#530B73" }}
        >
          Popular Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-black p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <p className="text-sm italic mb-2">
                “This album changed my life...”
              </p>
              <p className="text-xs text-gray-400">– Username</p>
            </div>
          ))}
        </div>
      </section>
      <SectionSeparator />

      {/* Popular Playlists */}
      <section className="mb-12">
        <h2
          className="font-pixelateddisplay text-2xl font-bold mb-4"
          style={{ color: "#530B73" }}
        >
          Popular Playlists
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="bg-black p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="h-24 bg-white rounded mb-2"></div>
              <p className="text-sm font-medium">Playlist Title</p>
              <p className="text-xs text-gray-400">By Username</p>
            </div>
          ))}
        </div>
      </section>
      <SectionSeparator />

      {/* Friend's Activities */}
      <section className="mb-12">
        <h2
          className="font-pixelateddisplay text-2xl font-bold mb-4"
          style={{ color: "#530B73" }}
        >
          Friend’s Activities
        </h2>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-black p-4 rounded-lg">
              <p className="text-sm">
                <span className="font-medium">FriendName</span> reviewed{" "}
                <span className="italic">Album Name</span>
              </p>
              <p className="text-xs text-gray-400">2 hours ago</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
