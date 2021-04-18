import React from "react";

export function Home() {
  return (
    <main class="pt-64">
      <div className="flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
        <div className="px-6">
          <div className="text-center mt-12">
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
              Jenna Stones
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500" />
              Los Angeles, California
            </div>
            <div className="mb-2 text-gray-700 mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-gray-500" />
              Solution Manager - Creative Tim Officer
            </div>
            <div className="mb-2 text-gray-700">
              <i className="fas fa-university mr-2 text-lg text-gray-500" />
              University of Computer Science
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
