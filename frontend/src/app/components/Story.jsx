"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaCircleXmark } from "react-icons/fa6";
import { FiVolume2 } from "react-icons/fi";
import { FaPlay } from "react-icons/fa6";
import { TiArrowForwardOutline } from "react-icons/ti";
import { FiVolumeX } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { TbCopy } from "react-icons/tb";
import Link from "next/link";

function Story() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const urlToCopy =
      "https://www.fnp.com/?utm_source=Google&utm_medium=cpc&utm_campaign=21150229676&utm_adgroup=160562238156&utm_keyword=fnp&utm_device=c&utm_placement=&utm_network=g&gad_source=1&gclid=Cj0KCQjw99e4BhDiARIsAISE7P-ivig8CYCVfzf1jSD2RQR-AbX5fwf6mJdBJ8gVoJaZDBlmKdCKf9IaAnCmEALw_wcB";

    navigator.clipboard
      .writeText(urlToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  const videoElementRef = useRef([]);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [overlay, setOverlay] = useState(null);
  const [mutedStates, setMutedStates] = useState(Array(10).fill(true)); // Array to manage mute state for each video

  const videos = [
    {
      name: "/Videos/video1.mp4",
      watch: "1.3K",
      title: "send flowers",
      link: "/videos/send-flowers",
    },
    {
      name: "/Videos/video2.mp4",
      watch: "1.2K",
      title: "gift jewellery",
      link: "/videos/gift-jewellery",
    },
    {
      name: "/Videos/video3.mp4",
      watch: "900",
      title: "gift plants",
      link: "/videos/gift-plants",
    },
    {
      name: "/Videos/video4.mp4",
      watch: "750",
      title: "personalised birthday",
      link: "/videos/personalised-birthday",
    },
    {
      name: "/Videos/video5.mp4",
      watch: "1.5K",
      title: "send cakes",
      link: "/videos/send-cakes",
    },
    {
      name: "/Videos/video6.mp4",
      watch: "2.0K",
      title: "send flowers",
      link: "/videos/send-flowers",
    },
    {
      name: "/Videos/video7.mp4",
      watch: "850",
      title: "anniversary gifts",
      link: "/videos/anniversary-gifts",
    },
    {
      name: "/Videos/video8.mp4",
      watch: "1.1K",
      title: "personalised mugs",
      link: "/videos/personalised-mugs",
    },
    {
      name: "/Videos/video9.mp4",
      watch: "620",
      title: "birthday gifts",
      link: "/videos/birthday-gifts",
    },
    {
      name: "/Videos/video10.mp4",
      watch: "1.8K",
      title: "bhai dooj gifts",
      link: "/videos/bhai-dooj-gifts",
    },
  ];
  

  const handleVideoClick = (index, videoElement) => {
    setMutedStates((prevMutedStates) => {
      const updatedMutedStates = [...prevMutedStates];
      updatedMutedStates[index] = !updatedMutedStates[index]; // Toggle mute state for the clicked video

      // If the video was muted, play it unmuted; if it was unmuted, pause it.
      if (updatedMutedStates[index]) {
        videoElement.pause(); // Pause if muted
      } else {
        videoElement.play(); // Play if unmuted
      }
      return updatedMutedStates;
    });
  };

  return (
    <div className="px-5 md:px-12 ">
      <h3 className="mb-6 text-lg md:text-xl lg:text-2xl font-semibold">
        Joyfully Gifting Stories
      </h3>
      <section>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },

            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation]}
          navigation
          className="relative w-full container mx-auto"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index} className="flex justify-center relative">
              <div className="relative w-full">
                <video
                  src={video.name}
                  alt={`Slide ${index}`}
                  className="object-cover w-full h-auto lg:h-auto rounded-2xl shadow-md"
                  width={1000}
                  height={1000}
                  muted={mutedStates[index]}
                  onMouseEnter={() => setHoveredVideo(index)}
                  onMouseLeave={() => {
                    setHoveredVideo(null);
                  }}
                  onMouseOver={(e) => e.target.play()}
                  onMouseOut={(e) => {
                    e.target.pause();
                    e.target.currentTime = 0;
                  }}
                  loop
                  ref={(el) => (videoElementRef.current[index] = el)} // Assign the video element reference
                />

                {/* Forward Arrow in Top Right */}
                <div className="absolute bg-black opacity-70 py-1 px-3 top-3 left-10 rounded-lg flex gap-1 items-center">
                  <FaRegUser className="text-white text-sm" />
                  <span className="text-white font-semibold text-sm opacity-100">
                    {video.watch}
                  </span>
                </div>

                <TiArrowForwardOutline
                  className="absolute top-3 right-3 text-white w-7 h-7 z-10"
                  onClick={() => setOverlay(index)}
                />

                {/* Volume Icon */}
                {mutedStates[index] ? (
                  <FiVolumeX
                    className="absolute top-12 w-6 h-6 right-3 text-white z-10"
                    onClick={() =>
                      handleVideoClick(index, videoElementRef.current[index])
                    } // Call the handle click on volume icon
                  />
                ) : (
                  <FiVolume2
                    className="absolute top-12 w-6 h-6 right-3 text-white z-10"
                    onClick={() =>
                      handleVideoClick(index, videoElementRef.current[index])
                    } // Call the handle click on volume icon
                  />
                )}

                {/* Play Icon in Center */}
                <FaPlay
                  className={`absolute inset-0 m-auto text-white shadow-lg w-10 h-10 transition-opacity duration-300 flex justify-center items-center ${
                    hoveredVideo === index ? "opacity-0" : "opacity-100"
                  }`}
                  onClick={() =>
                    handleVideoClick(index, videoElementRef.current[index])
                  } // Call the handle click on play icon
                />

                <Link href={video.link} className="absolute z-50 text-nowrap bg-white bg-opacity-90 py-1 px-2 rounded-md bottom-5 left-1/2 transform -translate-x-1/2 text-xs font-bold shadow-md">
                  {video.title.toUpperCase()}
                </Link>
              </div>

              {/* Overlay Section */}
              {overlay === index && (
                <div className="fixed inset-0 bg-black opacity-70 z-40"></div>
              )}

              {overlay === index && (
                <div className="fixed inset-0 z-50 flex justify-center items-center">
                  <div className="bg-white px-9 py-5 rounded-lg shadow-lg">
                    <div className="">
                      <button
                        onClick={() => setOverlay(null)}
                        className="absolute right-10 -mt-4 rounded-full p-1 w-7 h-7 flex items-center justify-center text-slate-800 hover:text-slate-900 text-2xl z-50 "
                      >
                        <FaCircleXmark />
                      </button>
                      <h1 className="text-base font-semibold text-slate-800 mb-3 text-center">
                        Share via
                      </h1>
                      <div className="flex justify-center items-center relative gap-2">
                        <Link
                          target="_blank"
                          href="https://api.whatsapp.com/send?text=Hi%2C%20https%3A%2F%2Fwww.fnp.com%2F%3Futm_source%3DGoogle%26utm_medium%3Dcpc%26utm_campaign%3D21150229676%26utm_adgroup%3D160562238156%26utm_keyword%3Dfnp%26utm_device%3Dc%26utm_placement%3D%26utm_network%3Dg%26gad_source%3D1%26gclid%3DCj0KCQjw99e4BhDiARIsAISE7P-ivig8CYCVfzf1jSD2RQR-AbX5fwf6mJdBJ8gVoJaZDBlmKdCKf9IaAnCmEALw_wcB"
                        >
                          <img
                            src="/Images/icon/icon.webp"
                            width={900}
                            height={900}
                            className="w-full h-auto cursor-pointer"
                          />
                        </Link>
                        <div
                          className="bg-black text-white rounded-sm text-2xl p-1 cursor-pointer"
                          onClick={handleCopy}
                        >
                          <TbCopy />
                          {copied && (
                            <span className="text-sm ml-2">Copied!</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}

export default Story;
