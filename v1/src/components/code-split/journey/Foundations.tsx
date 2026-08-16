// import React from "react";

// const Foundations = () => {
//   return (
//     <section className="flex flex-col justify-center items-center gap-6 ">
//       <h1 className="text-white text-2xl">Foundations: What We've Built</h1>
//       <p>
//         Before we map the road ahead... let's acknowledge the groundwork that
//         makes everything possible.
//       </p>

//       <div className="flex flex-col md:flex-row justify-center items-center gap-5  ">
//         {/* the first card  */}
//         <div className=" w-[32%]   gap-5 px-8 py-4 flex flex-col justify-center items-center border border-2 rounded-2xl border-amber-600 relative  ">
//           {" "}
//           <div className="absolute -top-3 bg-amber-600 rounded-full text-black flex justify-center items-center h-8 w-8 ">
//             1
//           </div>
//           <h2 className="text-white text-[20px] font-bold">
//             Legal Structures & Agreements
//           </h2>
//           <p>
//             Creating and reviewing scalable, clear, and reliable internal
//             frameworks that enable the business to operate efficiently and
//             confidently.
//           </p>
//         </div>

//         {/* the second card  */}
//         <div className=" w-[32%] gap-5 px-8 py-4 flex flex-col justify-center items-center border border-2 rounded-2xl border-amber-600 relative  ">
//           {" "}
//           <div className="absolute -top-3 bg-amber-600 rounded-full text-black flex justify-center items-center h-8 w-8 ">
//             2
//           </div>
//           <h2 className="text-white text-[20px] font-bold">
//             Data Governance & Compliance
//           </h2>
//           <p>
//             Establishing frameworks and processes to ensure information is
//             secure, consistent, and responsibly managed.
//           </p>
//         </div>
//         {/* the third card  */}
//         <div className=" w-[32%] gap-5 px-8 py-4 flex flex-col justify-center items-center border border-2 rounded-2xl border-amber-600 relative  ">
//           {" "}
//           <div className="absolute -top-3 bg-amber-600 rounded-full text-black flex justify-center items-center h-8 w-8 ">
//             3
//           </div>
//           <h2 className="text-white text-[20px] font-bold">
//             Research & Analysis{" "}
//           </h2>
//           <p>
//             Serving as the backbone of our work as we continuously conduct
//             deep-dive research into emerging regulations, industry best
//             practices, and competitive landscape to inform strategic decisions.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Foundations;

import React from "react";

const Foundations = () => {
  return (
    <section className="bg-muted px-5 py-10 text-foreground sm:px-6 md:py-12 lg:px-8 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Foundations: What We've Built
          </h1>
          <p className="mt-4 text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Before we map the road ahead... let's acknowledge the groundwork
            that makes everything possible.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {/* Card 1 */}
          <div className="group relative bg-gray-900/60 backdrop-blur-sm border border-amber-500 rounded-2xl px-6 py-8 md:px-8 md:py-10 shadow-lg shadow-amber-900/20 hover:shadow-amber-700/30 hover:border-amber-500 transition-all duration-300 flex flex-col items-center text-center min-h-[260px] md:min-h-[300px]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 shadow-amber-400 bg-amber-500 text-black font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg shadow-md border-2 border-amber-400/30">
              1
            </div>

            <h2 className="text-2xl font-bold mt-6 mb-4 text-amber-100">
              Legal Structures & Agreements
            </h2>
            <p className="text-gray-300 text-[18px]  leading-relaxed">
              Creating and reviewing scalable, clear, and reliable internal
              frameworks that enable the business to operate efficiently and
              confidently.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-gray-900/60 backdrop-blur-sm border border-amber-500 rounded-2xl px-6 py-8 md:px-8 md:py-10 shadow-lg shadow-amber-900/20 hover:shadow-amber-700/30 hover:border-amber-500 transition-all duration-300 flex flex-col items-center text-center min-h-[260px] md:min-h-[300px]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 shadow-amber-400 bg-amber-500 text-black font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg shadow-md border-2 border-amber-400/30">
              2
            </div>

            <h2 className="text-2xl font-bold mt-6 mb-4 text-amber-100">
              Data Governance & Compliance
            </h2>
            <p className="text-gray-300 text-[18px]  leading-relaxed">
              Establishing frameworks and processes to ensure information is
              secure, consistent, and responsibly managed.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-gray-900/60 backdrop-blur-sm border border-amber-500 rounded-2xl px-6 py-8 md:px-8 md:py-10 shadow-lg shadow-amber-900/20 hover:shadow-amber-700/30 hover:border-amber-500 transition-all duration-300 flex flex-col items-center text-center min-h-[260px] md:min-h-[300px] md:col-span-2 lg:col-span-1">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 shadow-amber-400 bg-amber-500 text-black font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg shadow-md border-2 border-amber-400/30">
              3
            </div>

            <h2 className="text-2xl font-bold mt-6 mb-4 text-amber-100">
              Research & Analysis
            </h2>
            <p className="text-gray-300 text-[18px]  leading-relaxed">
              Serving as the backbone of our work as we continuously conduct
              deep-dive research into emerging regulations, industry best
              practices, and competitive landscape to inform strategic
              decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foundations;
