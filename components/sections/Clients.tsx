// "use client";

// import { useState, useEffect, useCallback } from "react";
// import { Quote } from "lucide-react";
// import Image from "next/image";


// const clients = [
//   { name: "Oman Oil", logo: "/oman-oil-logo.png" },
//   { name: "DUQM Refinery", logo: "/duqmrifeny-logo.png" },
//   { name: "LIWA Plastics", logo: "/liwaplastics-logo.png" },
//   { name: "Petrofac", logo: "/petrofac-logo.png" },
//   { name: "Daewoo", logo: "/daewoo-logo.png" },
//   { name: "Samsung", logo: "/samsung-logo.avif" }
// ];

// export default function Clients() {

//   return (
//     <section className=" bg-gray-50 justify-center  items-center pb-12 pt-[-100px]">
//       <div className="container">

//         {/* Client Logos */}
            
//             <div className="flex flex-wrap gap-4 justify-center items-center">
//             {clients.map((client, index) => (
//               <div
//                 key={index}
//                 className="flex items-center justify-center bg-white border border-gray-200 rounded-sm p-6 hover:border-gray-300 transition-colors duration-300 h-24 min-w-full md:min-w-[140px]"
//               >
//                 <Image
//                   src={client.logo}
//                   alt={`${client.name} logo`}
//                   width={120}
//                   height={60}
//                   className="object-contain max-h-16 max-w-full"
//                 />
//               </div>
//             ))}
//           </div>
//       </div>
//     </section>
//   );
// }