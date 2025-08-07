// import React from 'react';
// import pugarch from '../../assets/pugarch.jpg';
// import ipapo_logo from '../../assets/ipapo_logo.png';
// import Commenzy_black_logo from '../../assets/Commenzy_black_logo.png';
// import sipna from '../../assets/sipna_logo.png';

// function Sponsors() {
//   const sponsors = [
//     pugarch, ipapo_logo, Commenzy_black_logo, sipna,
//     pugarch, ipapo_logo, Commenzy_black_logo, sipna
//   ];

//   return (
//     <div className="overflow-hidden relative w-full">
//       <div className="bg-slate-900/50 py-12">
//         <div className="max-w-7xl mx-auto px-6 md:px-10">
//           <p className="text-center text-gray-400 mb-8">
//             Proudly Sponsored By
//           </p>

//           {/* Scrolling Container */}
//           <div className="relative w-full overflow-hidden">
//             <div className="flex gap-8 animate-scroll whitespace-nowrap">
//               {[...sponsors, ...sponsors].map((sponsor, index) => (
//                 <img
//                   key={index}
//                   src={sponsor}
//                   alt={`Sponsor ${index + 1}`}
//                   className="h-16 object-contain min-w-fit hover:grayscale-0 transition-all"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sponsors;

import React from "react";
import pugarch from "../../assets/pugarch_wbg.png";
import ipapo_logo from "../../assets/one-platform-2.png";
import Commenzy_black_logo from "../../assets/Commenzy.png";
import sipna from "../../assets/sipna_logo.png";
import AIX from "../../assets/AIX.png";
import SBI from "../../assets/SBI.png";
import CUB from "../../assets/CUB.png";

function Sponsors() {
  const topSponsors = [AIX, SBI, CUB];
  const bottomSponsors = [sipna, pugarch, ipapo_logo, Commenzy_black_logo];

  return (
    <div className="w-full bg-slate-900/50 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <p className="text-center text-gray-400 mb-8 text-xl font-semibold">
          Proudly Sponsored By
        </p>

        {/* Top Row - 3 Logos */}
        <div className="flex justify-center gap-12 mb-10 flex-wrap">
          {topSponsors.map((sponsor, index) => (
            <div
              key={`top-${index}`}
              className="h-24 w-44 flex items-center justify-center bg-white rounded-md shadow-md"
            >
              <img
                src={sponsor}
                alt={`Top Sponsor ${index + 1}`}
                className="h-22 w-40 object-contain max-h-full max-w-full"
              />
            </div>
          ))}
        </div>

        {/* Bottom Row - 4 Logos */}
    
        <div className="flex justify-center gap-10 flex-wrap">
          {bottomSponsors.map((sponsor, index) => (
            <div
              key={`bottom-${index}`}
              className="h-24 w-44 flex items-center justify-center bg-white rounded-md shadow-md"
            >
              <img
                src={sponsor}
                alt={`Bottom Sponsor ${index + 1}`}
                className={`object-contain ${
                  sponsor === ipapo_logo
                    ? "h-25 w-35" // Bigger IPAPO logo
                    : sponsor === sipna
                    ? "h-20 w-42" // Smaller SIPNA logo, centered with background around it
                    : "h-21 w-46" // Default size for others
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
