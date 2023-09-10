"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [responseImage, setResponseImage] = useState(null);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://api-inference.huggingface.co/models/proximasanfinetuning/fantassified_icons_v2",
        {
          headers: {
            Authorization: `Bearer `,
          },
          method: "POST",
          body: JSON.stringify(input),
        }
      );

      console.log("-----", process.env.SECRET);

      const result = await response.blob();
      console.log(result, "-==-");

      setLoading(false);
      setResponseImage(URL.createObjectURL(result));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDownload = () => {
    if (responseImage) {
      const a = document.createElement("a");
      a.href = responseImage;
      a.download = input + "_icon.png";
      a.click();
    }
  };

  return (
    <main className="flex py-16 justify-center items-center">
      <div className="">
        <div className="p-10">
          <h1 className="text-4xl">Avatar Creator</h1>
        </div>

        <div className="flex justify-center items-center flex-col">
          <p className="text-xl p-2"> Create your own Avatar</p>

          <div className="pt-4 pb-2">
            <label>Type the Avatar title of your choice.</label>
          </div>
          <div>
            <input
              className="text-black p-2 rounded-l-md"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter the title"
            />
            <button
              className="bg-zinc-200 text-slate-700 p-2 rounded-r-md"
              onClick={() => {
                handleGenerate();
              }}
            >
              GENERATE
            </button>
          </div>
        </div>

        <div className="py-16 flex justify-center items-center flex-col">
          {!loading ? (
            responseImage && (
              <>
                <div>
                  <Image
                    className="rounded-md"
                    src={responseImage}
                    alt={input}
                    width={300}
                    height={300}
                  />
                </div>
                <div className="py-8">
                  <button
                    className="bg-zinc-200 text-slate-700 p-2 rounded-md"
                    onClick={handleDownload}
                  >
                    Download {input}
                  </button>
                </div>
              </>
            )
          ) : (
            <p className="text-white">Loading...</p>
          )}
        </div>
      </div>
    </main>
  );
}
