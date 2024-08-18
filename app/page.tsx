import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="space-y-6 pb-8 md:pb-12 lg:py-32 py-14">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 font-bold">
              Welcome to Asram Wojak!
            </h1>
            <p className="text-lg md:text-xl mx-auto mb-8 max-w-3xl">
              Dive into a vibrant world where helpful plugins and a friendly
              community await. Explore, collaborate, and thrive in a supportive
              SMP environment tailored for an engaging experience.
            </p>

            <div className="flex justify-center space-x-4">
              <a
                href="#server-ips"
                className="inline-block px-6 py-3 bg-white text-black hover:bg-neutral-300 rounded-md font-semibold transition duration-300"
              >
                Join Now!
              </a>
              <a
                href="#features"
                className="inline-block px-6 py-3 bg-neutral-900 text-white border border-neutral-500 hover:bg-neutral-800 rounded-md font-semibold transition duration-300"
              >
                Features
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="server-ips" className="py-14">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white">Server IPs</h2>
            <p className="text-lg md:text-xl mx-auto mt-4 max-w-2xl">
              Connect to Asram Wojak&apos;s server and join the adventure!
              <br />
              Connect to our server now on Java or Bedrock.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            {/* Minecraft Java */}
            <div className="border border-neutral-600 bg-neutral-950 rounded-lg shadow-lg p-6 flex-1 w-full md:w-1/3 lg:w-1/4">
              <div className="flex justify-center mb-4">
                <Image
                  src="/Java_Banner.webp"
                  alt="Minecraft Java Banner"
                  width={500}
                  height={100}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex items-center mb-4">
                <Image
                  src="/Java_Edition.webp"
                  alt="Minecraft Java"
                  width={48}
                  height={48}
                  className="mr-4"
                />
                <h3 className="font-bold text-2xl text-white">
                  Minecraft Java
                </h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-bold text-gray-300">Server IP:</p>
                <p className="text-lg font-medium text-gray-200">
                  play.asram-wojak.my.id
                </p>
                <p className="text-sm font-bold text-gray-300">Port:</p>
                <p className="text-lg font-medium text-gray-200">-</p>
              </div>
            </div>

            {/* Minecraft Bedrock */}
            <div className="border border-neutral-600 bg-neutral-950 rounded-lg shadow-lg p-6 flex-1 w-full md:w-1/3 lg:w-1/4">
              <div className="flex justify-center mb-4">
                <Image
                  src="/Bedrock_Banner.webp"
                  alt="Minecraft Bedrock Banner"
                  width={500}
                  height={100}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex items-center mb-4">
                <Image
                  src="/Bedrock_Edition.webp"
                  alt="Minecraft Bedrock"
                  width={48}
                  height={48}
                  className="mr-4"
                />
                <h3 className="font-bold text-2xl text-white">
                  Minecraft Bedrock
                </h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-bold text-gray-300">Server IP:</p>
                <p className="text-lg font-medium text-gray-200">
                  mc.asram-wojak.my.id
                </p>
                <p className="text-sm font-bold text-gray-300">Port:</p>
                <p className="text-lg font-medium text-gray-200">33669</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-14">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Features</h2>
            <p className="text-lg md:text-xl mx-auto mt-4 max-w-2xl">
              Discover the features that make Asram Wojak special and unique.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="border border-neutral-600 bg-neutral-950 rounded-lg shadow-lg p-6 w-full md:w-1/3 lg:w-1/4">
              <div className="flex justify-center mb-4">
                <Image
                  src="/Command_Block.webp"
                  alt="Command Block Image"
                  width={64}
                  height={64}
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Plugins</h3>
              <p className="text-slate-400">
                Enhance your gameplay with a range of custom plugins tailored to
                improve your server experience.
              </p>
            </div>

            <div className="border border-neutral-600 bg-neutral-950 rounded-lg shadow-lg p-6 w-full md:w-1/3 lg:w-1/4">
              <div className="flex justify-center mb-4">
                <Image
                  src="/Heart.webp"
                  alt="Heart Image"
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Friendly Community</h3>
              <p className="text-slate-400">
                Join a welcoming community where players help each other and
                build together.
              </p>
            </div>

            <div className="border border-neutral-600 bg-neutral-950 rounded-lg shadow-lg p-6 w-full md:w-1/3 lg:w-1/4">
              <div className="flex justify-center mb-4">
                <Image
                  src="/Compass.webp"
                  alt="Compass Image"
                  width={64}
                  height={64}
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Cross-Platform Support
              </h3>
              <p className="text-slate-400">
                Play with friends across different platforms, including
                Minecraft Java and Bedrock editions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
