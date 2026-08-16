import Link from "next/link";

import Image from "next/image";
import CheckItem from "./code-split/DoYou/CheckItem";

const DoYou = () => {
  return (
    <section className="relative my-8 flex items-center justify-center overflow-hidden rounded-3xl bg-muted px-6 py-32">
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/assets/owl.png"
          alt="Wisdom"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent" />

      <div className="relative z-10 w-full max-w-4xl rounded-3xl border border-border bg-card/80 p-8 text-center shadow-2xl backdrop-blur-xl md:p-16">
        <h2 className="mb-12 text-3xl font-extrabold text-foreground md:text-5xl">
          Do You...?
        </h2>

        <div className="grid md:grid-cols-1 gap-6 mb-12 text-left max-w-2xl mx-auto">
          <CheckItem text="Have a passion for law, ethics, and AI?" />
          <CheckItem text="Want hands-on experience solving real-world legal challenges?" />
          <CheckItem text="Dream of building AI-powered tools, platforms, or innovations?" />
          <CheckItem text="Value flexibility, learning, and contributing from anywhere, on your own schedule?" />
          <CheckItem text="Want to turn curiosity into real-world skills?" />
        </div>

        <div className="space-y-8">
          <h3 className="text-xl font-bold text-primary md:text-2xl">
            If YES, this is where your journey starts.
          </h3>
          <button className="cursor-pointer hover:scale-110  transform duration-100 ease-in-out">
            <Link
              href="https://hephaestus.international/internships/ethical-legal-research-intern"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border-none bg-gradient-to-r from-red-300 to-orange-400 px-12 py-4 text-lg font-bold text-white shadow-lg shadow-primary/25">
              JOIN US
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DoYou;
