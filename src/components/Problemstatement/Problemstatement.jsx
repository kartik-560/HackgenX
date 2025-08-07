import React, { useEffect, useRef } from 'react';
import { ScrollText, Building2, Leaf, Database } from 'lucide-react';
import { Target, AlertCircle, CheckCircle2 } from 'lucide-react';

import PropTypes from 'prop-types';

const ProblemStatementPropTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  objectives: PropTypes.arrayOf(PropTypes.string).isRequired,
  challenges: PropTypes.arrayOf(PropTypes.string).isRequired,
  outcomes: PropTypes.arrayOf(PropTypes.string).isRequired,
  track: PropTypes.string.isRequired,
};

const problemStatements = [
  {
    id: 1,
    title: "Smart Warehouse Space Optimization – AI-driven storage and inventory tracking",
    objectives: [
      "Develop an AI-driven solution that optimizes warehouse storage based on item dimensions, frequency of access, and available space, reducing retrieval time.",
      
    ],
    challenges: [
      "Efficient space utilization considering item size and movement frequency.",
      "Reducing retrieval time with AI-based predictive models.",
      "Implementing real-time tracking to update storage locations dynamically."
    ],
    outcomes: [
      "Optimized warehouse layout with AI-driven recommendations.",
      "Reduction in retrieval time and labor costs.",
      "Improved inventory accuracy and space utilization."
    ],
    track: "Track1: Smart Cities & Infrastructure Optimization"
  },
  {
    id: 2,
    title: "Smart Building Energy Optimization – AI-powered energy efficiency and control",
    objectives: [
      "Leverage AI to analyze real-time energy consumption data and automate HVAC, lighting, and utility controls to reduce costs and carbon footprint."
    ],
    challenges: [
      "Real-time monitoring of energy consumption.",
      "AI-based automation of energy-saving strategies.",
      "Integration with existing building management systems."
    ],
    outcomes: [
      "Reduced energy consumption",
      "Lower operational costs",
      "Improved building efficiency"
    ],
    track: "Track1: Smart Cities & Infrastructure Optimization"
  },
  {
    id: 3,
    title: "Automated Spill & Garbage Detection – AI-powered waste management",
    objectives: [
      "Develop a facility monitoring system using AI-powered CCTV cameras to detect spills, garbage, and maintenance issues, automatically assigning tasks to the cleaning crew."
    ],
    challenges: [
      "Real-time object detection for spills and garbage.",
      "Integration with facility management systems.",
      "Automating task assignments for cleaning crews."
    ],
    outcomes: [
      "AI-driven monitoring of cleanliness and maintenance issues.",
      "Faster response times for cleaning crews.",
      "Improved facility hygiene and operational efficiency."
    ],
    track: "Track2: Environmental Sustainability & AI Monitoring"
  },
  {
    id: 4,
    title: "Deforestation & Wildlife Tracking using AI – Remote sensing and conservation monitoring",
    objectives: [
      "Utilize satellite imagery and AI to monitor forest cover loss, illegal logging, and poaching activities."
    ],
    challenges: [
      "Processing large-scale satellite imagery.",
      "Detecting changes in forest cover and identifying illegal activities.",
      "Implementing a real-time alert system for authoritie"
    ],
    outcomes: [
      "AI-powered detection of deforestation and illegal activities.",
      "Improved monitoring and conservation efforts",
      "Real-time alerts for forest rangers and authorities."
    ],
    track: "Track2: Environmental Sustainability & AI Monitoring"
  },
  {
    id: 5,
    title: "Smart Pollution Control & Monitoring – AI + IoT for real-time air & water quality tracking",
    objectives: [
      "Develop an AI-powered system for real-time pollution detection. Integrate IoT sensors to monitor air and water quality while enabling automated alerts for authorities and citizens."
    ],
    challenges: [
      "Ensuring accurate detection in diverse environments",
      "Managing real-time data processing and analysis",
      "Reducing false alarms for better decision-making"
    ],
    outcomes: [
      "Faster response to pollution incidents",
      "Data-driven environmental policies",
      "Improved public health and ecosystem safety"
    ],
    track: "Track2: Environmental Sustainability & AI Monitoring"
  },
  {
    id: 6,
    title: "Smart & Sustainable E-Waste Management – Scalable solutions for responsible e-waste disposal",
    objectives: [
      "Develop a scalable and cost-effective system for formal e-waste collection and recycling. Promote public awareness and incentivize responsible e-waste disposal. Integrate AI and IoT solutions to optimize waste tracking, segregation, and resource recovery."
    ],
    challenges: [
      "Limited public participation due to lack of awareness and incentives.",
      "High costs and logistical challenges in setting up formal recycling infrastructure.",
      "Ensuring environmental and social responsibility in e-waste recycling processes."
    ],
    outcomes: [
      "Increased participation in formal e-waste recycling through awareness and incentives.",
      "Scalable and cost-effective e-waste management solutions accessible to all.",
      "Enhanced circular economy practices, reducing environmental and health hazards."
    ],
    track: "Track2: Environmental Sustainability & AI Monitoring"
  },
  {
    id: 7,
    title: "Automated Asset Lifecycle Management – AI-powered asset tracking and predictive maintenance",
    objectives: [
      "Develop a system that monitors asset depreciation, maintenance schedules, and procurement needs, helping businesses and government agencies optimize asset usage"
    ],
    challenges: [
      "Tracking asset condition and predicting maintenance needs.",
      "Automating procurement decisions based on asset lifecycle data.",
      "Ensuring integration with existing asset management systems."
    ],
    outcomes: [
      " AI-driven asset lifecycle predictions and maintenance alerts.",
      "Cost savings by optimizing asset procurement and maintenance.",
      "Improved decision-making with real-time asset analytics."
    ],
    track: "Track3: Intelligent Asset & Resource Management"
  },
  {
    id: 8,
    title: "Smart Budget Allocation System – Automated public budget allocation using data",
    objectives: [
      "Develop a data-driven budget allocation system for public projects, ensuring optimized and transparent resource distribution"
    ],
    challenges: [
      "Balancing funding across multiple sectors",
      "Integrating real-time data for accurate allocations",
      "Ensuring transparency in budget decisions"
    ],
    outcomes: [
      "Optimized resource allocation for public projects",
      "Reduced financial waste and mismanagement",
      "Enhanced decision-making through data insights"
    ],
    track: "Track3: Intelligent Asset & Resource Management"
  },
  {
    id: 9,
    title: " Enhancing Design Software with AI-Driven Interfaces  ",
    objectives: [
      "Integrate AI into design software to automate repetitive tasks, allowing designers to focus on creativity. The solution should support multiple input formats-text, speech, images, and design files-to generate or modify designs efficiently.  "
    ],
    challenges: [
      "Enabling AI to interpret diverse input formats, such as textual descriptions, voice commands, images, and CAD/BIM files.  ",
      " Ensuring seamless integration with existing design software. ",
      "Reducing manual intervention in repetitive design tasks. ",
      "Maintaining precision and adherence to industry-specific design standards.  "
    ],
    outcomes: [
      "AI-powered design automation, reducing manual workload. ",
      "Enhanced creativity by eliminating repetitive design tasks. ",
      " Improved efficiency in design-related industries. ",
      "Seamless integration of AI into existing design software."
    ],
    track: "Track3: Intelligent Asset & Resource Management"
  }
];

// Removed duplicate declaration of trackIcons

const tracks = [
  " Smart Cities & Infrastructure Optimization",
  "Environmental Sustainability & AI Monitoring",
  "Intelligent Asset & Resource Management"
];

const trackIcons = Object.fromEntries(
  tracks.map((track, index) => [
    `Track ${index + 1}: ${track}`,
    index === 0 ? <Building2 className="w-6 h-6" /> :
    index === 1 ? <Leaf className="w-6 h-6" /> :
    <Database className="w-6 h-6" />
  ])
);

function ProblemStatement() {
  const tracks = Array.from(new Set(problemStatements.map(p => p.track)));
  const trackRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, options);

    trackRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#1e293b] overflow-x-hidden scroll-smooth mt-[15vh]">
      <header className="bg-[#25d8de] shadow sticky top-0 ">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3">
            <ScrollText className="w-8 h-8 text-[#1e293b] animate-pulse" />
            <h1 className="text-3xl font-bold text-[#1e293b] text-center">Problem Statements</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="space-y-24">
            {tracks.map((track, trackIndex) => (
              <div
                key={track}
                ref={el => trackRefs.current[trackIndex] = el}
                className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
              >
                <div className="mb-12 flex justify-center">
                  <div className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25d8de] text-[#1e293b] shadow-xl">
                    {trackIcons[track]}
                    <h2 className="text-2xl font-bold">{track}</h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {problemStatements
                    .filter(problem => problem.track === track)
                    .map((problem) => (
                      <div
                        key={problem.id}
                        className="transform transition-all duration-500 hover:scale-[1.02]"
                      >
                        <div className="bg-[#0f172a] rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                          <div className="p-6">
                            <div className="flex items-center gap-4 mb-6">
                              <span className="flex items-center justify-center w-8 h-8 bg-[#25d8de] rounded-full text-[#1e293b] font-bold">
                                {problem.id}
                              </span>
                              <h2 className="text-2xl font-extrabold text-[#25d8de] tracking-tight leading-tight">
                                {problem.title}
                              </h2>
                            </div>

                            <div className="space-y-6">
                              <div className="transform transition-all duration-300 hover:translate-x-2">
                                <div className="flex items-center gap-2 mb-3">
                                  <Target className="w-5 h-5 text-[#25d8de]" />
                                  <h3 className="text-lg font-semibold text-[#25d8de]">Objectives</h3>
                                </div>
                                <ul className="list-disc list-inside text-white space-y-2">
                                  {problem.objectives.map((objective, index) => (
                                    <li key={index}>{objective}</li>
                                  ))}
                                </ul>
                              </div>

                              <div className="transform transition-all duration-300 hover:translate-x-2">
                                <div className="flex items-center gap-2 mb-3">
                                  <AlertCircle className="w-5 h-5 text-[#25d8de]" />
                                  <h3 className="text-lg font-semibold text-[#25d8de]">Key Challenges</h3>
                                </div>
                                <ul className="list-disc list-inside text-white space-y-2">
                                  {problem.challenges.map((challenge, index) => (
                                    <li key={index}>{challenge}</li>
                                  ))}
                                </ul>
                              </div>

                              <div className="transform transition-all duration-300 hover:translate-x-2">
                                <div className="flex items-center gap-2 mb-3">
                                  <CheckCircle2 className="w-5 h-5 text-[#25d8de]" />
                                  <h3 className="text-lg font-semibold text-[#25d8de]">Expected Outcomes</h3>
                                </div>
                                <ul className="list-disc list-inside text-white space-y-2">
                                  {problem.outcomes.map((outcome, index) => (
                                    <li key={index}>{outcome}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProblemStatement;