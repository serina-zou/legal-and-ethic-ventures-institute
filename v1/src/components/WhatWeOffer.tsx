const WhatWeOffer = () => {
  return (
    <section className="mb-4 overflow-hidden rounded-[25px] border border-border bg-card py-16 px-4 sm:px-12">
      <h2 className="text-foreground text-[28px] font-bold mb-16 text-center">
        What We Offer
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {/* Card 01 */}

        <div className="group flex min-h-[153px] items-center justify-evenly rounded-[25px] border border-border bg-card p-6 transition-[min-height,box-shadow] duration-300 md:min-h-[160px] md:hover:min-h-[200px] md:hover:shadow-md">
          <span className="text-[80px] font-bold text-foreground sm:text-[100px]">
            01
          </span>
          <span className="max-w-[55%] text-pretty text-xl font-medium text-foreground sm:text-2xl">
            Hands-on client work
          </span>
        </div>

        {/* <div className="relative rounded-[25px] bg-card shadow-[5px_5px_3px_1px_rgba(78,78,78,0.1)] overflow-hidden p-6 h-[153px]">
          <div className="absolute top-[-40px] right-[-37px] w-[188px] h-[131px] bg-[#4B4E3F] rounded-[55px] blur-[50px]" />
          <div className="absolute bottom-12 left-[-37px] w-[188px] h-[131px] bg-purple-950/50 rounded-[55px] blur-[50px]" />
          <div className="relative flex items-center justify-evenly whitespace-nowrap">
            <span className="text-foreground text-[80px] sm:text-[100px] font-bold">
              01
            </span>
            <span className="text-transparent bg-gradient-to-r from-[#FFA4A4] to-[#BFFDFF] bg-clip-text text-xl sm:text-2xl font-medium">
              Hands-on client
              <br />
              work
            </span>
          </div>
        </div> */}

        {/* Card 02 */}

        <div className="group flex min-h-[153px] items-center justify-evenly rounded-[25px] border border-border bg-card p-6 transition-[min-height,box-shadow] duration-300 md:min-h-[160px] md:hover:min-h-[200px] md:hover:shadow-md">
          <span className="text-[80px] font-bold text-foreground sm:text-[100px]">
            02
          </span>
          <span className="max-w-[55%] text-pretty text-xl font-medium text-foreground sm:text-2xl">
            Compliance &amp; ethics training
          </span>
        </div>

        {/* Card 03 */}

        <div className="group flex min-h-[153px] items-center justify-evenly rounded-[25px] border border-border bg-card p-6 transition-[min-height,box-shadow] duration-300 md:min-h-[160px] md:hover:min-h-[200px] md:hover:shadow-md">
          <span className="text-[80px] font-bold text-foreground sm:text-[100px]">
            03
          </span>
          <span className="max-w-[55%] text-pretty text-xl font-medium text-foreground sm:text-2xl">
            Legal drafting, research &amp; strategy
          </span>
        </div>

        {/* Card 04 */}
        <div className="group flex min-h-[153px] items-center justify-evenly rounded-[25px] border border-border bg-card p-6 transition-[min-height,box-shadow] duration-300 md:min-h-[160px] md:hover:min-h-[200px] md:hover:shadow-md">
          <span className="text-[80px] font-bold text-foreground sm:text-[100px]">
            04
          </span>
          <span className="max-w-[55%] text-pretty text-xl font-medium text-foreground sm:text-2xl">
            AI tools for the modern legal world
          </span>
        </div>

        {/* Card 05 */}
        <div className="group flex min-h-[153px] items-center justify-evenly rounded-[25px] border border-border bg-card p-6 transition-[min-height,box-shadow] duration-300 md:min-h-[160px] md:hover:min-h-[200px] md:hover:shadow-md">
          <span className="text-[80px] font-bold text-foreground sm:text-[100px]">
            05
          </span>
          <span className="max-w-[55%] text-pretty text-xl font-medium text-foreground sm:text-2xl">
            Startup experience
          </span>
        </div>

        {/* Card 06 */}
        <div className="group flex min-h-[153px] items-center justify-evenly rounded-[25px] border border-border bg-card p-6 transition-[min-height,box-shadow] duration-300 md:min-h-[160px] md:hover:min-h-[200px] md:hover:shadow-md">
          <span className="text-[80px] font-bold text-foreground sm:text-[100px]">
            06
          </span>
          <span className="max-w-[55%] text-pretty text-xl font-medium text-foreground sm:text-2xl">
            Day-one impact on real projects
          </span>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
