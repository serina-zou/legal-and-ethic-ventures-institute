import Link from "next/link";
import logo from "../../../../public/logo.svg";
import Image from "next/image";
const JoinUs = () => {
  return (
    <section className="my-5 border-y border-border bg-muted px-6 py-10 text-center">
      <h2 className="text-5xl font-extrabold mb-8 text-foreground">
        Join Us on This Journey
      </h2>
      <div className="mb-10 flex flex-col gap-5 text-[20px] text-foreground">
        <p className="text-[#F2784B]">
          Take action. Make impact. Lead responsibly.
        </p>

        <p>
          Every challenge is an opportunity to learn, innovate, and push
          boundaries.
        </p>
        <p>
          Here, legal rigor meets ethical responsibility. Curiosity meets
          initiative. Ideas meet execution.
        </p>
        <p>
          <span className="text-[#F2784B]">Together</span>, we don't just react
          to change...
        </p>

        <p>We drive it.</p>

        <p>Here, at Legal & Ethics Ventures Institute</p>

        <p>
          {" "}
          <span className="text-red-500 font-extrabold">
            Advance your career
          </span>
          . Be at the center of the future.
        </p>

        <Image
          src={logo}
          alt="Legal & Ethics Ventures Institute"
          width={50}
          height={50}
          className="h-12 w-auto object-contain my-5 "
          priority
        />
      </div>

      <div className="flex justify-center gap-8">
        {/* <button className="text-[22px] cursor-pointer font-bold hover:scale-110 hover:text-[#F2784B] transform duration-200 ease-in-out">
          <Link href="/contact">Talk to Us</Link>
        </button> */}
        <button className="cursor-pointer rounded-full border border-border bg-card px-6 py-2 text-[22px] font-bold text-foreground outline-none transition-transform duration-200 ease-in-out animate-pulse hover:scale-110 hover:text-primary">
          <Link
            href="https://hephaestus.international/internships/ethical-legal-research-intern"
            target="_blank"
            rel="noopener noreferrer">
            Apply Now
          </Link>
        </button>
      </div>
    </section>
  );
};

export default JoinUs;
