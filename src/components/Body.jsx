export default function Body({srcImage, title, content }) {
    

//   return (
//     <div className="px-10 my-10">
//       <div className="px-5 my-10 w-auto h-auto">
//         <div className= "sm:mt-0 md:mt-0 h-auto w-auto rounded-xl px-1">
//           <figure className="md:flex rounded-xl p-8 md:p-0">
//             <img
//               className="w-2/4 h-72 md:rounded-none rounded-full mx-auto"
//               src={srcImage}
//               alt=""
//             />
//             <div className="pt-6 w-2/4 md:p-8 text-center md:text-left space-y-4">
//               <blockquote>
//                 <h1 className="font-title font-bold text-white pb-6 text-lg">
//                   {title}
//                 </h1>
//                 <p className="font-title font-normal text-white text-sm">
//                   {content}
//                 </p>
//               </blockquote>
//               <div className="h-10 w-full bg-red-50"></div>
//             </div>
//           </figure>
//         </div>
//         <div className="my-10 h-px w-auto bg-slate-100"></div>
//       </div>
//     </div>
//   );
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
              <div className="h-10 w-full bg-red-50"></div>
            </div>
          </figure>
        </div>
        <div className="my-10 h-px w-full bg-slate-100"></div>
      </div>
    </div>
  );
  
}
