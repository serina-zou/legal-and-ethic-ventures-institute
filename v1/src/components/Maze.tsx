// import Image from "next/image";
// import statue from "../../public/assets/statue.jpg";
// import openDoor from "../../public/assets/opendoor.jpg";

// const Maze = () => {
//   return (
//     <section className="py-5 my-10 rounded-[20px]  bg-gray-950  relative transition-colors duration-300 ">
//       <div className="w-full mx-auto ">
//         <p className="text-gray-200 text-lg text-center leading-relaxed mb-8 ">
//           Where the legal world is a maze...
//         </p>
//         <div className="grid  gap-8  dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl">
//           {/* The Maze (Left Side) */}
//           <div className="relative p-8  flex flex-col justify-center overflow-hidden">
//             <div className="absolute inset-0 z-0 opacity-80 rounded-[20px] overflow-hidden">
//               <Image src={statue} alt="Statue" fill className="object-cover" />
//             </div>
//             <div className="relative z-10 text-center">
//               <h3 className="text-3xl font-bold text-white mb-4">
//                 Breaking in shouldn't be harder than <br />
//                 <span className="text-[#F2784B]">learning...</span>
//               </h3>

//               <div className="text-gray-200 text-lg leading-relaxed mb-8 ">
//                 Doors are <span className="text-[#F2784B]">closed</span>.
//                 Opportunities are <span className="text-[#F2784B]">rare</span>.
//                 <p>
//                   Real practice?{" "}
//                   <span className="text-[#F2784B] tracking-[3px]">
//                     For the few...
//                   </span>
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* The Door (Right Side) */}
//           <div className="relative p-12 flex flex-col justify-center overflow-hidden ">
//             <div className="absolute inset-0 z-0 rounded-[20px] overflow-hidden">
//               <Image
//                 src={openDoor}
//                 alt="Open Door"
//                 fill
//                 className="object-cover opacity-60"
//               />
//               <div className="absolute inset-0 " />
//             </div>
//             <div className="relative z-10 text-center ">
//               <h3 className=" text-3xl font-bold text-white mb-4 tracking-[1px] leading-[50px]  ">
//                 We're here to{" "}
//                 <span className="text-[#F2784B]">widen the doors</span>, ignite{" "}
//                 <span className="text-[#F2784B]">hands-on experience</span>, and
//                 make it real ... All for you.
//               </h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Maze;

import Image from "next/image";
import statue from "../../public/assets/statue.jpg";
import openDoor from "../../public/assets/opendoor.jpg";

const Maze = () => {
  return (
    <section className="my-10 rounded-2xl border border-border bg-muted py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-gray-200 text-3xl md:text-4xl font-bold text-center mb-12">
          Where the legal world is a maze...
        </p>

        <div className="space-y-10">
          {/* Section 1 */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src={statue}
              alt="Statue"
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              quality={100}
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 " />

            <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
              <div className="max-w-xl">
                <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                  Breaking in shouldn't be harder than{" "}
                  <span className="text-[#F2784B]">learning...</span>
                </h3>

                <div className="text-gray-200 text-base md:text-lg space-y-2">
                  <p>
                    Doors are <span className="text-[#F2784B]">closed</span>.
                  </p>
                  <p>
                    Opportunities are{" "}
                    <span className="text-[#F2784B]">rare</span>.
                  </p>
                  <p>
                    Real practice?{" "}
                    <span className="text-[#F2784B] tracking-wider">
                      For the few...
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src={openDoor}
              alt="Open Door"
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              quality={100}
              className="object-cover"
            />

            <div className="absolute inset-0 " />

            <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
              <div className="max-w-2xl">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug">
                  We're here to{" "}
                  <span className="text-[#F2784B]">widen the doors</span>,
                  ignite{" "}
                  <span className="text-[#F2784B]">hands-on experience</span>,
                  and make it real — all for you.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maze;
