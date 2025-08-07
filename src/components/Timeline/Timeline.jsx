import React from "react";
import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

function Timeline() {
  const timeline = [
    {
      date: "March 17, 2025",
      event: "Registration Opens & Problem Statements Go Live",
      description:
        "Hackathon begins with registrations, problem statements, team guidelines, and community buzz! 🚀",
    },
    {
      date: "April 5, 2025",
      event: "Registration Closes",
      description:
        "Registration closes, participants are verified, and confirmations are sent! ✅",
    },
    {
      date: "April 7, 2025",
      event: "Final PPT Submission Deadline",
      description:
        "Teams submit their solution PPTs, verified to ensure completeness before the deadline! 📂✅",
    },
    {
      date: "April  11, 2025",
      event: "Results Announcement",
      description:
        "Judging starts, results announced, and feedback shared! 🏆📢",
    },
    {
      date: "April 15, 2025",
      event: "Campus Arrival for Selected Teams",
      description:
        "Selected teams arrive on campus, with logistics arranged and orientation kicking off! 🎉🏫",
    },
    {
      date: "April 16, 2025",
      event: "Inauguration Ceremony & 24-Hour Coding Round Begins",
      description:
        "The hackathon officially begins with an opening ceremony, keynote speeches, and the 24-hour coding round starts! 💻🔥",
    },
    {
      date: "April 17, 2025",
      event: "Coding Round Ends, Submission & Result Announcements",
      description:
        "Teams submit their final projects, judges evaluate submissions, results are announced, followed by a Dinner and Gala Night! 🎉🍽️",
    },
    {
      date: "April 18, 2025",
      event: "Breakfast & Venue Vacate",
      description:
        "A farewell breakfast is served, participants network, and teams vacate the venue after an incredible hackathon experience! ☕🎊",
    },
  ];

  return (
    <section id="timeline" className="py-20 px-6 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Event Timeline
        </h2>
        <div className="space-y-6">
          {timeline.map((event, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg flex items-start gap-2"
            >
              <div className="flex items-center gap-3 min-w-[100px] sm:min-w-[200px]">
                <Clock className="text-purple-500" />
                <div>
                  <p className="text-white font-semibold">{event.time}</p>
                  <p className="text-gray-400">{event.date}</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {event.event}
                </h3>
                <p className="text-gray-400">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
