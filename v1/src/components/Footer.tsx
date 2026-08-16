import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-auto rounded-2xl border border-border bg-card/90 text-card-foreground shadow-sm backdrop-blur-md sm:rounded-[25px] mb-4 sm:mb-6">
      <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-12 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-4">
            <h3 className="text-xl font-bold leading-tight text-foreground sm:text-2xl lg:text-[28px] max-w-md">
              FloLabs Innovations Group
            </h3>
          </div>

          <nav
            className="flex flex-col gap-4 lg:col-span-2"
            aria-label="Company">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://hephaestus.international/internships"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-foreground transition-colors hover:text-primary">
                  Internships
                </a>
              </li>
            </ul>
          </nav>

          <nav
            className="flex flex-col gap-4 sm:max-lg:col-span-2 lg:col-span-4"
            aria-label="Projects">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              <Link href="/projects" className="hover:text-primary">
                Projects
              </Link>
            </h4>
            <ul className="grid grid-cols-1 gap-2.5 xs:grid-cols-2 sm:gap-3">
              <li>
                <Link
                  href="/projects"
                  className="text-sm sm:text-base text-foreground transition-colors hover:text-primary">
                  CAIPO
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm sm:text-base text-foreground transition-colors hover:text-primary">
                  Legal Buddy
                </Link>
              </li>
              <li className="xs:col-span-2">
                <Link
                  href="/projects"
                  className="text-sm sm:text-base text-foreground transition-colors hover:text-primary">
                  Experiential Ventures Pipeline
                </Link>
              </li>
              <li className="xs:col-span-2">
                <Link
                  href="/projects"
                  className="text-sm sm:text-base text-foreground transition-colors hover:text-primary">
                  Ethics & Legal Framework Research
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm sm:text-base text-foreground transition-colors hover:text-primary">
                  Humanoid Robot
                </Link>
              </li>
            </ul>
          </nav>

          <nav
            className="flex flex-col gap-4 lg:col-span-2"
            aria-label="Legal">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Legal
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/about"
                  className="text-base text-foreground transition-colors hover:text-primary">
                  Who we are
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col gap-4 border-t border-border pt-8 sm:col-span-2 sm:border-t-0 sm:pt-0 lg:col-span-12 lg:flex-row lg:items-center lg:justify-between lg:border-t lg:pt-8">
            <p className="text-xs text-muted-foreground sm:text-sm">
              © {new Date().getFullYear()} FloLabs Innovations Group. All rights
              reserved.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground lg:sr-only">
                Follow us
              </h4>
              <Link
                href="https://www.linkedin.com/company/flo-labs-r-d/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-lg px-2 py-1 text-foreground transition-opacity hover:opacity-80"
                aria-label="FloLabs on LinkedIn">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0">
                  <rect width="34" height="34" rx="7.96875" fill="#0A66C2" />
                  <path
                    d="M24.5326 28.9111H28.42C28.7134 28.9111 28.9512 28.6734 28.9512 28.38L28.9532 20.1666C28.9532 15.8737 28.0282 12.5739 23.0115 12.5739C21.1044 12.5031 19.306 13.4861 18.3355 15.1277C18.3278 15.1407 18.314 15.1487 18.2989 15.1487C18.2755 15.1487 18.2565 15.1297 18.2565 15.1063V13.5015C18.2565 13.2082 18.0188 12.9703 17.7253 12.9703H14.0361C13.7427 12.9703 13.5049 13.2082 13.5049 13.5015V28.3792C13.5049 28.6727 13.7427 28.9104 14.0361 28.9104H17.9233C18.2167 28.9104 18.4545 28.6727 18.4545 28.3792V21.025C18.4545 18.9455 18.849 16.9317 21.427 16.9317C23.9684 16.9317 24.0013 19.3111 24.0013 21.1596V28.3798C24.0013 28.6732 24.2392 28.9111 24.5326 28.9111Z"
                    fill="white"
                  />
                  <path
                    d="M5.04688 7.91928C5.04688 9.49504 6.34412 10.7915 7.91989 10.7915C9.49535 10.7914 10.7917 9.49414 10.7917 7.91868C10.7914 6.34322 9.4949 5.04688 7.91928 5.04688C6.34352 5.04688 5.04688 6.34352 5.04688 7.91928Z"
                    fill="white"
                  />
                  <path
                    d="M5.9707 28.9115H9.86305C10.1565 28.9115 10.3943 28.6736 10.3943 28.3802V13.5019C10.3943 13.2086 10.1565 12.9707 9.86305 12.9707H5.9707C5.67731 12.9707 5.43945 13.2086 5.43945 13.5019V28.3802C5.43945 28.6736 5.67731 28.9115 5.9707 28.9115Z"
                    fill="white"
                  />
                </svg>
                <span className="text-sm font-medium">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
