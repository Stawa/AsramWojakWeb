"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useEffect } from "react";
import FetchServer from "@/scripts/fetchServer";
import Flag from "react-world-flags";
import {
  FaUser,
  FaPaperPlane,
  FaSignal,
  FaCopy,
  FaCheck,
  FaEye,
} from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

const ClipboardButton: React.FC<{ text: string; buttonStyle: string }> = ({
  text,
  buttonStyle,
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`p-2 rounded-full transition-colors duration-300 ${buttonStyle}`}
      title="Copy to clipboard"
    >
      {copied ? (
        <FaCheck className="text-white" />
      ) : (
        <FaCopy className="text-white" />
      )}
    </button>
  );
};

export default function Home() {
  const [serverStatus, setServerStatus] = React.useState({
    isOnline: false,
    playerCount: 0,
    maxPlayer: 0,
    version: "Unknown",
    software: "Unknown",
  });
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchServerStatus() {
      setLoading(true);
      const data = await FetchServer();
      setServerStatus(data);
      setLoading(false);
    }
    fetchServerStatus();
  }, []);

  useEffect(() => {
    const smoothScroll = (e: MouseEvent) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLElement;
      const targetId = target.getAttribute("data-target");
      if (targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    const buttons = document.querySelectorAll('[data-target^="#"]');
    buttons.forEach((button) => {
      button.addEventListener("click", smoothScroll as EventListener);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", smoothScroll as EventListener);
      });
    };
  }, []);

  return (
    <>
      <div className="min-h-screen">
        <Navbar />

        <main>
          <section className="py-16 md:py-24 bg-gray-950 border-b-2 border-indigo-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-teal-900/20 opacity-30"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 leading-tight">
                  Asram Wojak
                </h1>
                <p className="text-xl mb-10 text-gray-300 leading-relaxed">
                  Join our vibrant community. Explore, collaborate, and thrive
                  in our engaging SMP environment.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <button
                    data-target="#server-ips"
                    className="group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
                  >
                    <span className="relative z-10">
                      <LuLogIn className="inline-block mr-2 mb-1" />
                      Join Server
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                  </button>
                  <button
                    data-target="#features"
                    className="group relative px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
                  >
                    <span className="relative z-10">
                      <FaEye className="inline-block mr-2 mb-1" />
                      View Features
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section
            id="server-ips"
            className="py-20 bg-gray-950 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-teal-900/20 opacity-30"></div>
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Server Status
              </h2>
              <div className="mb-8 text-center">
                <p className="text-lg text-gray-300">
                  Stay updated with our server&apos;s real-time status. Check
                  player count, version, and more.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {[
                  {
                    icon: (
                      <FaSignal
                        className={`h-10 w-10 ${
                          serverStatus.isOnline
                            ? "text-emerald-500"
                            : "text-rose-500"
                        }`}
                      />
                    ),
                    title: loading
                      ? "Loading..."
                      : serverStatus.isOnline
                        ? "Online"
                        : "Offline",
                    subtitle: "Server Status",
                    borderColor: "border-blue-600",
                  },
                  {
                    icon: <FaUser className="h-10 w-10 text-purple-400" />,
                    title: loading
                      ? "Loading..."
                      : `${serverStatus.playerCount} / ${serverStatus.maxPlayer}`,
                    subtitle: "Players Online",
                    borderColor: "border-purple-600",
                  },
                  {
                    icon: <FaPaperPlane className="h-10 w-10 text-pink-400" />,
                    title: loading ? "Loading..." : serverStatus.software,
                    subtitle: loading ? "Loading..." : serverStatus.version,
                    borderColor: "border-pink-600",
                  },
                  {
                    icon: <Flag code="ID" height="60" width="60" />,
                    title: "Indonesia",
                    subtitle: "Server Region",
                    borderColor: "border-red-600",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`bg-gray-900 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:bg-gray-800 border ${item.borderColor}`}
                  >
                    <div className="flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <p className="text-center text-xl font-medium text-blue-300">
                      {item.title}
                    </p>
                    <p className="text-center text-sm text-gray-500">
                      {item.subtitle}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-8">
                {/* Minecraft Java */}
                <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 rounded-2xl shadow-2xl p-8 border-2 border-blue-700 hover:border-blue-600 transition-all duration-300">
                  <div className="flex items-center mb-6 flex-wrap">
                    <Image
                      src="/Java_Edition.webp"
                      alt="Minecraft Java"
                      width={48}
                      height={48}
                      className="mr-4 mb-2 sm:mb-0"
                    />
                    <h3 className="font-bold text-2xl sm:text-3xl text-blue-400 tracking-wide">
                      Minecraft Java
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-opacity-70 transition-all duration-300">
                      <div className="mb-3 sm:mb-0">
                        <p className="text-sm font-semibold text-blue-400 mb-1">
                          Server IP:
                        </p>
                        <p className="text-lg font-medium break-all text-blue-200">
                          play.asram-wojak.my.id
                        </p>
                      </div>
                      <ClipboardButton
                        text="play.asram-wojak.my.id"
                        buttonStyle="bg-blue-700 hover:bg-blue-800 text-white rounded-lg px-4 py-2 transition-all duration-300 mt-2 sm:mt-0"
                      />
                    </div>
                    <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-opacity-70 transition-all duration-300">
                      <div className="mb-3 sm:mb-0">
                        <p className="text-sm font-semibold text-blue-400 mb-1">
                          Port:
                        </p>
                        <p className="text-lg font-medium text-blue-200">
                          Default
                        </p>
                      </div>
                      <ClipboardButton
                        text="Default"
                        buttonStyle="bg-blue-700 hover:bg-blue-800 text-white rounded-lg px-4 py-2 transition-all duration-300 mt-2 sm:mt-0"
                      />
                    </div>
                  </div>
                </div>

                {/* Minecraft Bedrock */}
                <div className="bg-gradient-to-br from-gray-900 via-teal-900 to-cyan-900 rounded-2xl shadow-2xl p-8 border-2 border-teal-700 hover:border-teal-600 transition-all duration-300">
                  <div className="flex items-center mb-6 flex-wrap">
                    <Image
                      src="/Bedrock_Edition.webp"
                      alt="Minecraft Bedrock"
                      width={48}
                      height={48}
                      className="mr-4 mb-2 sm:mb-0"
                    />
                    <h3 className="font-bold text-2xl sm:text-3xl text-teal-300 tracking-wide">
                      Minecraft Bedrock
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-opacity-70 transition-all duration-300">
                      <div className="mb-3 sm:mb-0">
                        <p className="text-sm font-semibold text-teal-300 mb-1">
                          Server IP:
                        </p>
                        <p className="text-lg font-medium break-all text-teal-100">
                          play.asram-wojak.my.id
                        </p>
                      </div>
                      <ClipboardButton
                        text="play.asram-wojak.my.id"
                        buttonStyle="bg-teal-700 hover:bg-teal-800 text-white rounded-lg px-4 py-2 transition-all duration-300 mt-2 sm:mt-0"
                      />
                    </div>
                    <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-opacity-70 transition-all duration-300">
                      <div className="mb-3 sm:mb-0">
                        <p className="text-sm font-semibold text-teal-300 mb-1">
                          Port:
                        </p>
                        <p className="text-lg font-medium text-teal-100">
                          19141
                        </p>
                      </div>
                      <ClipboardButton
                        text="19141"
                        buttonStyle="bg-teal-700 hover:bg-teal-800 text-white rounded-lg px-4 py-2 transition-all duration-300 mt-2 sm:mt-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="features"
            className="py-20 bg-gray-950 border-t-2 border-indigo-800 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-teal-900/20 opacity-30"></div>
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-2 text-teal-300">
                  Features
                </h2>
                <p className="text-lg md:text-xl mx-auto max-w-2xl text-gray-400">
                  Discover what makes Asram Wojak special and unique.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-900 rounded-lg shadow-lg p-6 border-2 border-teal-600 transition duration-300 hover:shadow-xl hover:bg-gray-800">
                  <div className="flex justify-center mb-6">
                    <Image
                      src="/Command_Block.webp"
                      alt="Command Block Image"
                      width={60}
                      height={60}
                      unoptimized
                      className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center text-teal-300">
                    Custom Plugins
                  </h3>
                  <p className="text-gray-400 text-center">
                    Enhance your gameplay with tailored plugins for an improved
                    server experience.
                  </p>
                </div>

                <div className="bg-gray-900 rounded-lg shadow-lg p-6 border-2 border-pink-600 transition duration-300 hover:shadow-xl hover:bg-gray-800">
                  <div className="flex justify-center mb-6">
                    <IoChatbubbleEllipsesSharp
                      className="text-pink-500 opacity-80 hover:opacity-100 transition-opacity duration-300"
                      size={60}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center text-pink-300">
                    Friendly Community
                  </h3>
                  <p className="text-gray-400 text-center">
                    Join a welcoming community where players help and build
                    together.
                  </p>
                </div>

                <div className="bg-gray-900 rounded-lg shadow-lg p-6 border-2 border-blue-600 transition duration-300 hover:shadow-xl hover:bg-gray-800">
                  <div className="flex justify-center mb-6">
                    <Image
                      src="/Compass.webp"
                      alt="Compass Image"
                      unoptimized
                      width={60}
                      height={60}
                      className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center text-blue-300">
                    Cross-Platform Support
                  </h3>
                  <p className="text-gray-400 text-center">
                    Play with friends across Minecraft Java and Bedrock
                    editions.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
