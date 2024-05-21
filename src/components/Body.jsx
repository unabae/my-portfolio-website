const buttonStyle = "text-sm bg-lime-600 text-black font-light py-2 px-6 rounded-full hover:bg-lime-800 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-opacity-50";

export default function Body({ srcImage, title, content }) {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full h-auto">
        <div className="h-auto w-full rounded-xl">
          <figure className="flex flex-col md:flex-row rounded-xl p-4 md:p-8">
            <img
              className="w-48 h-48 md:w-72 md:h-72 rounded-full md:rounded-lg mx-auto md:mx-0"
              src={srcImage}
              alt=""
            />
            <div className="pt-6 md:pt-0 md:pl-8 flex flex-col justify-center text-center md:text-left space-y-4">
              <blockquote>
                <h1 className="font-title font-bold text-white text-lg pb-4">
                  {title}
                </h1>
                <p className="font-title font-normal text-white text-sm">
                  {content}
                </p>
              </blockquote>
              <div className="h-10 w-full space-x-2">
                <button className={buttonStyle}>
                  HTML
                </button>
                <button className={buttonStyle}>
                  TAILWIND CSS
                </button>
                <button className={buttonStyle}>
                  REACT
                </button>
              </div>
            </div>
          </figure>
        </div>
        <div className="my-10 h-px w-full bg-slate-100"></div>
      </div>
    </div>
  );
}
