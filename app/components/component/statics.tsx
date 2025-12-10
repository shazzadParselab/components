'use client'

import { useState } from "react";

export default function Statics() {
  const [staticData, setStaticData] = useState([
    {
      id: 1,
      title: "50K+",
      description: "Products Customized Daily"
    },
    {
      id: 2,
      title: "3X",
      description: "Higher Conversion"
    },
    {
      id: 3,
      title: "10K+",
      description: "Global Merchants"
    },
    {
      id: 4,
      title: "40%",
      description: "Higher AOV"
    }
  ]);

  return (
    <section className="flex justify-center items-center w-full px-5 py-12 sm:py-20 min-h-[260px] h-full">

      <div className="flex flex-col items-center justify-center w-full gap-6 mx-auto">
        <h3 className="font-medium text-3xl text-center">Personalization Products, Scalable Growth</h3>

        <div className="w-full flex flex-row flex-wrap items-center justify-center gap-6">
          
          {staticData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:max-w-[250px] min-w-60 w-full items-center justify-center px-6 py-12 shadow-[0_30px_40px_0_rgba(186,188,255,0.15)] rounded-[20px] border border-[#EDEAFD]"
            >
              <h2 className="text-4xl font-medium">{item.title}</h2>
              <p className="text-base font-normal">{item.description}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
