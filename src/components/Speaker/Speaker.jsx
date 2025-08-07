// import React from "react";
// import image from "../../assets/s.jpg";
// import image1 from "../../assets/s1.jpg";
// const committeeMembers = [
//   {
//     name: "Mr. Saurabh Tiwari",
//     // title: "Organizer",
//     organization: `Vice President (India) (Tech  & Sales) –WFR Water Freedom Revolution ,St. Petersburg, Russi`,
//     image: image,
//   },
//   {
//     name: "",
//     // title: "",
//     organization: "",
//     image: image1,
//   },

// ];

// function Speaker() {
//   return (
//     // <div className="min-h-screen bg-[#0a0f2c] py-12 px-4 sm:px-6 lg:px-8">
//     //   <div className="max-w-7xl mx-auto">
//     //     <div className="mb-16 text-center">
//     //       <h1 className="text-4xl font-bold text-white">Speakers</h1>
//     //     </div>

//     //     <div className="relative bg-white py-12 rounded-xl shadow-lg">
//     //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-8">
//     //         {committeeMembers.map((member, index) => (
//     //           <div
//     //             key={index}
//     //             className="flex flex-col items-center text-center"
//     //           >
//     //             <div className="w-248 h-248 item-center rounded-full flex justify-center overflow-hidden border-4 border-[#0a0f2c] shadow-lg mb-4">
//     //               <img
//     //                 src={member.image}
//     //                 alt={member.name}
//     //                 className="w-full h-full object-cover"
//     //               />
//     //             </div>
//     //             <h3 className="text-lg font-semibold text-[#0a0f2c]">
//     //               {member.name}
//     //             </h3>
//     //             <p className="text-sm text-gray-600">{member.title}</p>
//     //             <p className="text-sm text-gray-600">{member.organization}</p>
//     //           </div>
//     //         ))}
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>

//     <div className="min-h-screen bg-[#0a0f2c] py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         <div className="mb-16 text-center">
//           <h1 className="text-4xl font-bold text-white">Speakers</h1>
//         </div>

//         <div className="relative bg-white py-12 mt-[20vh] rounded-xl shadow-lg">
//           {/* Centering the grid */}
//           <div className="flex justify-center">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-8">
//               {committeeMembers.map((member, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col items-center text-center"
//                 >
//                   {/* Properly centering the image */}
//                   <div className="w-48 h-48 mt-[-20vh] flex justify-center items-center rounded-full overflow-hidden border-4 border-[#0a0f2c] shadow-lg mb-4">
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="w-full h-full object-cover "
//                     />
//                   </div>
//                   <h3 className="text-lg font-semibold text-[#0a0f2c]">
//                     {member.name}
//                   </h3>
//                   <p className="text-sm text-gray-600">{member.title}</p>
//                   <p className="text-sm text-gray-600">{member.organization}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Speaker;

import React from "react";
import image from "../../assets/s.jpg";
import image1 from "../../assets/s1.jpg";
import image2 from "../../assets/s2.jpg";
const committeeMembers = [
  {
    name: "Mr. Saurabh Tiwari",
    organization:
      "Vice President (India) (Tech & Sales) –WFR Water Freedom Revolution, St. Petersburg, Russia",
    image: image,
  },
  {
    name: "Mr. Abhijeet Sharmaa",
    organization: "Chief Executive Officer at NITRRFIE Raipur",
    image: image1,
  },
  {
    name: "Rahul Karanagle",
    organization: `Principal Consultant and IT expert,
MIHAN,Nagpur`,
    image: image2,
  },
 

];

function Speaker() {
  return (
    // <div className="min-h-screen bg-[#0a0f2c] py-12 px-4 sm:px-6 lg:px-8">
    //   <div className="max-w-4xl mx-auto">
    //     <div className="mb-16 text-center">
    //       <h1 className="text-4xl font-bold text-white mb-[5vh]">Guest</h1>
    //     </div>

    //     <div className="relative bg-white py-12 pt-24 sm:pt-12 rounded-xl shadow-lg">
    //       <div className="flex flex-wrap justify-center gap-8 px-4 sm:px-8">
    //         {committeeMembers.map((member, index) => (
    //           <div
    //             key={index}
    //             className="flex flex-col items-center text-center w-full max-w-xs relative"
    //           >
    //             {/* Different positioning for mobile vs desktop */}
    //             <div
    //               className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[#0a0f2c] shadow-lg
    //                           mx-auto mb-6 sm:mb-0
    //                           sm:absolute sm:mt-[-17vh] sm:left-1/2 sm:transform sm:-translate-x-1/2"
    //             >
    //               <img
    //                 src={member.image}
    //                 alt={member.name || "Speaker"}
    //                 className="w-full h-full object-cover"
    //               />
    //             </div>
    //             {/* Content with proper spacing */}
    //             <div className="w-full sm:pt-24 pb-4">
    //               <h3 className="text-lg font-semibold text-[#0a0f2c] mb-2">
    //                 {member.name}
    //               </h3>
    //               <p className="text-sm text-gray-600 px-4">
    //                 {member.organization}
    //               </p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-[#1a2a5e] py-16 px-4">
      <div className="bg-[#1a2a5e] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Our Guest
          </h2>
        </div>
      </div>

      {/* <div className="relative bg-white py-12 pt-24 sm:pt-12 rounded-xl shadow-lg ">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="flex flex-wrap justify-center gap-8 px-4 sm:px-8">
            {committeeMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center w-full max-w-xs relative"
              >
                <div
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[#0a0f2c] shadow-lg 
                              mx-auto mb-6 sm:mb-0
                              sm:absolute sm:mt-[-17vh] sm:left-1/2 sm:transform sm:-translate-x-1/2"
                >
                  <img
                    src={member.image}
                    alt={member.name || "Speaker"}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="w-full sm:pt-24 pb-4">
                  <h3 className="text-lg font-semibold text-[#0a0f2c] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 px-4">
                    {member.organization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
 {/* <div className="relative bg-white py-12 pt-24 sm:pt-12 rounded-xl shadow-lg">
  <div className="max-w-7xl mx-auto px-6 sm:px-12">
    <div className="flex flex-wrap justify-center gap-8 px-4 sm:px-8">
      {committeeMembers.map((member, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center text-center w-full sm:w-1/2 lg:w-1/5 relative"
        >
       
          <div
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[#0a0f2c] shadow-lg 
                        mx-auto mb-4 sm:mb-0
                        sm:absolute sm:mt-[-17vh] sm:left-1/2 sm:transform sm:-translate-x-1/2"
          >
            <img
              src={member.image}
              alt={member.name || "Speaker"}
              className="w-full h-full object-cover"
            />
          </div>
        
          <div className="w-full sm:pt-24 pb-4">
            <h3 className="text-lg font-semibold text-[#0a0f2c] mb-2">
              {member.name}
            </h3>
            <p className="text-sm text-gray-600 px-4">
              {member.organization}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div> */}

<div className="relative bg-white py-12 pt-24 sm:pt-12 rounded-xl shadow-lg">
  <div className="max-w-7xl mx-auto px-6 sm:px-12">
    {/* Flex container ensuring 5 items per row */}
    <div className="flex flex-wrap sm:flex-nowrap justify-center gap-8 px-4 sm:px-8">
      {committeeMembers.map((member, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center text-center w-full sm:w-1/2 lg:w-1/5 relative"
        >
          {/* Image with Overlapping Effect */}
          <div
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[#0a0f2c] shadow-lg 
                        mx-auto mb-4 sm:mb-0
                        sm:absolute sm:mt-[-17vh] sm:left-1/2 sm:transform sm:-translate-x-1/2"
          >
            <img
              src={member.image}
              alt={member.name || "Speaker"}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name & Organization */}
          <div className="w-full sm:pt-24 pb-4">
            <h3 className="text-lg font-semibold text-[#0a0f2c] mb-2">
              {member.name}
            </h3>
            <p className="text-sm text-gray-600 px-4">
              {member.organization}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
  );
}

export default Speaker;
