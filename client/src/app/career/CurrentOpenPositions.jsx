"use client";
import React, { useEffect, useState } from "react";

export default function JobCards() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch("/data/career/CurrentOpenPosition.json");
      const data = await res.json();
      setJobs(data);
    };
    fetchJobs();
  }, []);

  return (
    <div className="Section bg-[#F6F8FC]/40">
      <h2 className="Heading text-center">
        Current Open Positions
      </h2>
      <p className="Paragraph text-center max-w-4xl mx-auto">
        Innovation is the USP of SAP Parts. Moreover it is our core value and we intend
        to proactively employ innovative thinking culture in all our operations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-10 gap-10 px-10">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] p-6  text-left"
          >
            <h3 className="text-[#0E509E] font-semibold text-lg mb-2">
              {job.title}
            </h3>
            <hr className="border-[#FACC48] mb-3" />
            <p className="text-sm text-gray-700 mb-1">
              <span className="font-medium">Location :</span> {job.location}
            </p>
            <p className="text-sm text-gray-700 ">{job.position}</p>
            <p className="text-sm text-gray-700 mb-4">{job.description}</p>
            <div className="flex justify-between items-center">
              <button className="bg-[#0E509E] text-white text-sm font-medium py-1 px-3 rounded hover:bg-[#FACC48]">
                Apply Now
              </button>
              <button className="text-[#FACC48] text-sm font-medium py-1 px-3 rounded hover:bg-[#0E509E] hover:text-white">
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
