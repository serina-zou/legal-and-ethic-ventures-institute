// const Initiatives = () => {
//   return (
//     <section className="rounded-[25px] bg-[#222]  py-4 px-4 my-10">
//       <div className="flex flex-col items-center gap-6 ">
//         <h2 className="text-white text-[43px] font-bold">
//           Initiatives: By the Numbers
//         </h2>
//         <p className="text-white text-lg text-center max-w-[590px] leading-[140%]">
//           Few of the many projects you can work on as soon as you join
//         </p>

//         <div className="bg-black/10 relative  rounded-[50px] p-20 w-full max-w-[1079px]">
//           <div className="flex  justify-between flex-row flex-wrap">
//             {/* Stat 1 */}
//             <div className="flex flex-col gap-7  ">
//               <h3 className="text-white text-[100px] font-medium italic leading-[95%] tracking-[-3px]">
//                 13
//               </h3>
//               <h4 className="text-2xl font-medium leading-[109%] tracking-[-1.2px] text-primary">
//                 Finished Projects
//               </h4>
//               <p className="text-xl font-normal text-muted-foreground">
//                 Completed initiatives that have laid the groundwork for
//                 innovation and operational clarity.
//               </p>
//             </div>

//             {/* Stat 2 */}

//             <div className="flex flex-col gap-7        ">
//               <h3 className="text-white text-[100px] font-medium italic leading-[95%] tracking-[-3px]">
//                 8+
//               </h3>
//               <h4 className="text-2xl font-medium leading-[109%] tracking-[-1.2px] text-primary">
//                 Active Projects
//               </h4>
//               <p className="text-xl font-normal text-muted-foreground">
//                 Currently underway, generating insights and supporting ongoing
//                 initiatives.
//               </p>
//             </div>
//             {/* Stat 3 */}
//             <div className="flex flex-col gap-7 ">
//               <h3 className="text-white text-[100px] font-medium italic leading-[95%] tracking-[-3px]">
//                 5
//               </h3>
//               <h4 className="text-2xl font-medium leading-[109%] tracking-[-1.2px] text-primary">
//                 Upcoming Projects
//               </h4>
//               <p className="text-xl font-normal text-muted-foreground">
//                 Upcoming initiatives we are preparing to explore.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Initiatives;

const Initiatives = () => {
  return (
    <section className="my-10 rounded-[25px] border border-border bg-muted px-4 py-10">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-center text-[43px] font-bold text-foreground">
          Initiatives: By the Numbers
        </h2>
        <p className="max-w-[590px] text-center text-lg leading-[140%] text-muted-foreground">
          Few of the many projects you can work on as soon as you join
        </p>

        <div className="w-full max-w-[1079px] rounded-[50px] border border-border bg-background/60 p-8 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly  gap-8   ">
            {/* Stat 1 */}
            <div className="flex flex-col gap-7 items-center w-full text-center ">
              <h3 className="text-[80px] font-medium italic leading-[95%] tracking-[-3px] text-foreground sm:text-[100px]">
                13
              </h3>
              <h4 className="text-2xl font-medium leading-[109%] tracking-[-1.2px] text-primary">
                Finalized Projects
              </h4>
              <p className="text-xl font-normal text-muted-foreground">
                Completed initiatives that have laid the groundwork for
                innovation and operational clarity.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col gap-7 items-center w-full text-center ">
              <h3 className="text-[80px] font-medium italic leading-[95%] tracking-[-3px] text-foreground sm:text-[100px]">
                8+
              </h3>
              <h4 className="text-2xl font-medium leading-[109%] tracking-[-1.2px] text-primary">
                Active Projects
              </h4>
              <p className="text-xl font-normal text-muted-foreground">
                Currently underway, generating insights and supporting ongoing
                initiatives.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col gap-7 items-center w-full text-center ">
              <h3 className="text-[80px] font-medium italic leading-[95%] tracking-[-3px] text-foreground sm:text-[100px]">
                5
              </h3>
              <h4 className="text-2xl font-medium leading-[109%] tracking-[-1.2px] text-primary">
                Planned Projects
              </h4>
              <p className="text-xl font-normal text-muted-foreground">
                Upcoming initiatives we are preparing to explore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
