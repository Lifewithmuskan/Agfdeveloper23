import React from "react";

export default function ImageGrid() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <div className="grid grid-cols-3 gap-6">
     
        <div className="col-span-2">
          <div className="overflow-hidden group">
            <img
              src="./images/g2.jpg"
              alt="Big"
              className=" transition-all duration-500 group-hover:scale-105 group-hover:clip-auto w-full h-full object-cover"
            />
          </div>
        </div>

        
        <div className="flex flex-col gap-6">
          <div className="overflow-hidden group">
            <img
              src="./images/g3.png"
              alt="Small 1"
              className=" transition-all duration-500 group-hover:scale-105 group-hover:clip-auto w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden group">
            <img
              src="./images/g4.jpg"
              alt="Small 2"
              className=" transition-all duration-500 group-hover:scale-105 group-hover:clip-auto w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden group">
            <img
              src="./images/g1.png"
              alt="Small 3"
              className=" transition-all duration-500 group-hover:scale-105 group-hover:clip-auto w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

    
    </section>
  );
}
