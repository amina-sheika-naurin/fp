import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gray-50 overflow-hidden">
      <div className="relative grid lg:grid-cols-[35%_65%] items-center min-h-screen">
        {/* Content Side */}
        <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 lg:py-0 max-w-3xl mx-auto lg:ml-auto lg:mr-16 text-center lg:text-left">
            <div className="space-y-6 animate-fadeInUp">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight text-gray-900 animate-slideInFromLeft">
                Engineering Excellence
                <span className="block mt-2 font-normal animate-slideInFromLeft animation-delay-300">Since 1987</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl font-light animate-slideInFromLeft animation-delay-500 mx-auto lg:mx-0">
                See how Fibroplast has advanced industrial piping and civil construction
              </p>
            </div>

            <div className="pt-8 animate-slideInFromLeft animation-delay-700">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 rounded-sm font-light hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg group text-base sm:text-lg"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* IBM Watson Timeline - Visible on all devices */}
          <div className="absolute inset-0 lg:relative flex items-center justify-center h-full pl-0 lg:pl-16 opacity-20 lg:opacity-100">
            <div className="relative w-full h-full">
              
              {/* Exact IBM Watson SVG Timeline */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <style>
                    {`
                      .ibm-timeline-path {
                        stroke-dasharray: 3000;
                        stroke-dashoffset: 3000;
                        animation: drawIBMPath 6s ease-in-out forwards;
                      }
                      @keyframes drawIBMPath {
                        to { stroke-dashoffset: 0; }
                      }
                      
                      .perpendicular-line {
                        stroke-dasharray: 300;
                        stroke-dashoffset: 300;
                      }
                      
                      .line-1 { animation: drawLine 0.8s ease-out 0.2s forwards; }
                      .line-2 { animation: drawLine 0.8s ease-out 1.2s forwards; }
                      .line-3 { animation: drawLine 0.8s ease-out 1.6s forwards; }
                      .line-4 { animation: drawLine 0.8s ease-out 1.8s forwards; }
                      .line-5 { animation: drawLine 0.8s ease-out 2.0s forwards; }
                      
                      @keyframes drawLine {
                        to { stroke-dashoffset: 0; }
                      }
                      
                      .timeline-text {
                        opacity: 0;
                      }
                      
                      .text-1 { animation: fadeInText 0.5s ease-out 0.7s forwards; }
                      .text-2 { animation: fadeInText 0.5s ease-out 1.7s forwards; }
                      .text-3 { animation: fadeInText 0.5s ease-out 1.8s forwards; }
                      .text-4 { animation: fadeInText 0.5s ease-out 2.0s forwards; }
                      .text-5 { animation: fadeInText 0.5s ease-out 2.2s forwards; }
                      
                      @keyframes fadeInText {
                        to { opacity: 1; }
                      }
                    `}
                  </style>
                  
                  {/* Gradient definitions for circle fills */}
                  <radialGradient id="blueGradient" cx="50%" cy="30%" r="60%">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </radialGradient>
                  
                  <radialGradient id="purpleGradient" cx="50%" cy="30%" r="60%">
                    <stop offset="0%" stopColor="#a78bfa" />
                    <stop offset="100%" stopColor="#7c3aed" />
                  </radialGradient>
                  
                  <radialGradient id="tealGradient" cx="50%" cy="30%" r="60%">
                    <stop offset="0%" stopColor="#34d399" />
                    <stop offset="100%" stopColor="#059669" />
                  </radialGradient>
                  
                  {/* Pattern for decorative elements */}
                  <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="2" fill="#3b82f6" opacity="0.3" />
                  </pattern>
                  
                  <pattern id="lines" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="7.5" x2="15" y2="7.5" stroke="#3b82f6" strokeWidth="1" opacity="0.2" />
                    <line x1="7.5" y1="0" x2="7.5" y2="15" stroke="#3b82f6" strokeWidth="1" opacity="0.2" />
                  </pattern>
                  
                  {/* Piping network pattern for industrial theme */}
                  <pattern id="pipingNetwork" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    {/* Horizontal pipes */}
                    <line x1="0" y1="20" x2="40" y2="20" stroke="#1e40af" strokeWidth="3" opacity="0.4" />
                    {/* Vertical pipes */}
                    <line x1="20" y1="0" x2="20" y2="40" stroke="#1e40af" strokeWidth="3" opacity="0.4" />
                    {/* Pipe joints */}
                    <circle cx="20" cy="20" r="4" fill="#3b82f6" opacity="0.6" />
                    {/* Flow direction arrows */}
                    <polygon points="30,18 34,20 30,22" fill="#06b6d4" opacity="0.5" />
                    <polygon points="18,10 20,6 22,10" fill="#06b6d4" opacity="0.5" />
                  </pattern>
                </defs>

                {/* Large concentric background circles for depth - IBM Watson style - positioned right with half visibility */}
                <circle cx="850" cy="300" r="700" fill="none" stroke="#000000" strokeWidth="2" opacity="0.6" />
                <circle cx="850" cy="300" r="500" fill="none" stroke="#000000" strokeWidth="2" opacity="0.5" />
                <circle cx="850" cy="300" r="300" fill="none" stroke="#000000" strokeWidth="1.5" opacity="0.45" />
                <circle cx="850" cy="300" r="100" fill="none" stroke="#000000" strokeWidth="1.5" opacity="0.4" />
                <circle cx="850" cy="300" r="100" fill="url(#blueGradient)" stroke="#3b82f6" strokeWidth="2" opacity="0.2" />
                
                {/* Simple, clean graphics inside the smallest circle */}
                <g opacity="0.4">
                  {/* Clean geometric pattern */}
                  <circle cx="850" cy="300" r="30" fill="none" stroke="#3b82f6" strokeWidth="1" />
                  <circle cx="850" cy="300" r="20" fill="none" stroke="#06b6d4" strokeWidth="1" />
                  <circle cx="850" cy="300" r="10" fill="none" stroke="#8b5cf6" strokeWidth="1" />
                  
                  {/* Simple connecting dots */}
                  <circle cx="820" cy="270" r="2" fill="#3b82f6" />
                  <circle cx="880" cy="270" r="2" fill="#06b6d4" />
                  <circle cx="880" cy="330" r="2" fill="#8b5cf6" />
                  <circle cx="820" cy="330" r="2" fill="#10b981" />
                </g>
                {/* <circle cx="850" cy="300" r="50" fill="none" stroke="#000000" strokeWidth="1" opacity="0.3" /> */}

                {/* Tilted timeline path - starts from x=20 where first dot is positioned */}
                <line
                  x1="20" y1="461.25"
                  x2="1900" y2="96"
                  stroke="#e5e7eb"
                  strokeWidth="4"
                />
                
                {/* Black active timeline path */}
                <line
                  x1="20" y1="461.25"
                  x2="1900" y2="96"
                  stroke="#000000"
                  strokeWidth="2"
                  className="ibm-timeline-path"
                  opacity={0.5}
                />

                {/* Fibroplast Timeline Milestones - starting from beginning of visible line */}
                
                {/* 2017 - HATTAN MODERN Operations */}
                <g>
                  <circle cx="20" cy="461.25" r="8" fill="#3b82f6" />
                  <circle cx="20" cy="461.25" r="12" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.6" />
                  {/* Perpendicular line from dot */}
                  <line x1="20" y1="461.25" x2="20" y2="510" stroke="#3b82f6" strokeWidth="2" className="perpendicular-line line-1" pathLength="100" />
                  <text x="25" y="525" textAnchor="start" className="fill-gray-800 text-lg font-semibold timeline-text text-1">2017</text>
                  <text x="25" y="543" textAnchor="start" className="fill-gray-600 text-sm timeline-text text-1">Hattan Modern</text>
                </g>

                {/* 2019 - Al-Ghail Engineering */}
                <g>
                  <circle cx="260" cy="415" r="6" fill="#6b7280" />
                  <line x1="260" y1="415" x2="260" y2="500" stroke="#6b7280" strokeWidth="2" className="perpendicular-line line-2" />
                  <text x="265" y="515" textAnchor="start" className="fill-gray-800 text-lg font-semibold timeline-text text-2">2019</text>
                  <text x="265" y="535" textAnchor="start" className="fill-gray-600 text-sm timeline-text text-2">Al-Ghail Engineering</text>
                </g>

                {/* 2021 - DUQM Entry */}
                <g>
                  <circle cx="460" cy="376" r="6" fill="#3b82f6" />
                  <line x1="460" y1="376" x2="460" y2="495" stroke="#3b82f6" strokeWidth="2" className="perpendicular-line line-3" />
                  <text x="465" y="505" textAnchor="start" className="fill-gray-800 text-lg font-semibold timeline-text text-3">2021</text>
                  <text x="465" y="525" textAnchor="start" className="fill-gray-600 text-sm timeline-text text-3">DUQM Entry</text>
                </g>

                {/* 2021 - DUQM EPC-1 */}
                <g>
                  <circle cx="660" cy="338" r="6" fill="#6b7280" />
                  <line x1="660" y1="338" x2="660" y2="470" stroke="#6b7280" strokeWidth="2" className="perpendicular-line line-4" />
                  <text x="665" y="480" textAnchor="start" className="fill-gray-800 text-lg font-semibold timeline-text text-4">2021</text>
                  <text x="665" y="500" textAnchor="start" className="fill-gray-600 text-sm timeline-text text-4">DUQM EPC-1</text>
                </g>

                {/* 2022 - 20km Pipeline */}
                <g>
                  <circle cx="850" cy="300.00" r="6" fill="#3b82f6" />
                  <line x1="850" y1="300" x2="850" y2="450" stroke="#3b82f6" strokeWidth="2" className="perpendicular-line line-5" />
                  <text x="855" y="460" textAnchor="start" className="fill-gray-800 text-lg font-semibold timeline-text text-5">2022</text>
                  <text x="855" y="480" textAnchor="start" className="fill-gray-600 text-sm timeline-text text-5">20km Pipeline</text>
                </g>                
              </svg>              
            </div>
          </div>
        </div>
    </section>
  );
}