import backdrop from "../assets/backdrop.png";
import my_image from "../assets/my_image.png";
import web_icon from "../assets/mdi_web.png";

export default function Header() {
  const heading2 =
    "text-white font-title font-light leading-10 sm:mx-0 md:mx-4 hover:text-lime-500";

  return (
    <>
      <header className="px-10 py-5 md:flex justify-between md:mt-14 xs:mt-5">
        <div className="w-3/5">
          <h1 className="text-white text-6xl font-semibold pb-5">HELLO!</h1>
          <h2 className="text-white text-5xl font-extralight">
            I'm Laurence, <br />a Web Developer
          </h2>
          <button
            className={
              heading2 +
              " bg-lime-600 px-6 m-6 rounded-full hover:text-lime-950"
            }
          >
            Let's Work
          </button>
        </div>
        <div className="relative w-full xs:mt-0">
          <img
            className="object-contain w-full h-full absolute xs:top-12 xs:right-10 sm:right-1 z-0"
            src={backdrop}
            alt="Backdrop"
          />
          <img
            className="object-contain w-full h-96 relative sm:bottom-6 xs:bottom-6 xs:right-8 sm:right-2 md:-right-1 z-10"
            src={my_image}
            alt="My Image"
          />
        </div>
      </header>
      <div className="relative xs:-mt-11 sm:-mt-11 md:-mt-11 px-10">
        <div className="h-auto w-auto px-10 bg-customBgGray rounded-xl border border-slate-500">
          <figure class="relative z-30 md:flex rounded-xl p-8 md:p-0">
            <img
              class="m-4 w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
              src={web_icon}
              alt=""
              width="384"
              height="512"
            />
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <h1 className="font-title font-bold text-white pb-6 text-lg">Web Developer</h1>
                <p className="font-title font-normal text-white text-sm">
                  With extensive experience in web development, I specialize in
                  creating modern and user-friendly websites. My skills include
                  HTML, CSS, JavaScript, and responsive design.
                </p>
              </blockquote>
            </div>
          </figure>
        </div>
      </div>
    </>
  );
}
