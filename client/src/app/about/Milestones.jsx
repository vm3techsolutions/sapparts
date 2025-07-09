"use client";

export default function MilestoneTimeline() {
  const milestones = [
    { year: "2009", text: "Established" },
    { year: "2011", text: "ISO: 9001-2008" },
    { year: "2012", text: "INDIAN OEM Business", highlight: true },
    { year: "2014", text: "Seal Technology Centre" },
    { year: "2015", text: "SAP Parts Europe Gmbh.", highlightText: "Germany" },
    { year: "2016", text: "North America Distribution", highlightText: "Grizzly Seals" },
    { year: "2017", text: "Indian Defense Excellence Award" },
    { year: "2018", text: "Construction of New Factory" },
    { year: "2019", text: "Centrifugal Casting Foundry" },
    { year: "2021", text: "Innovation Award From", highlightText: "M&M" },
    { year: "2022", text: "Sintered (PM) Parts" },
    { year: "2023", text: "Quality Award", highlightText: "M&M" },
    { year: "2024", text: "Bushings and Bearings" },
    { year: "2025", text: "More Ahead...." },
  ];

  return (
    <section className="bg-white Section">
      <h2 className="Heading text-center ">Milestones</h2>

      <div className="relative overflow-x-auto py-40">
        <div className="flex justify-start items-center gap-8 min-w-[1400px]">
          {milestones.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center">
              {/* TOP label and line */}
              {index % 2 === 0 && (
                <>
                  <div className="absolute -top-24 flex flex-col items-center">
                    <div className="h-8 w-0.5 bg-yellow-400 mb-2" />
                    <div className="text-xs text-center text-gray-700 font-medium mb-8">
                      <p>{item.text}</p>
                      {item.highlightText && (
                        <p className="text-blue-700 font-semibold">{item.highlightText}</p>
                      )}
                    </div>
                  </div>
                </>
              )}

              {/* Circle */}
              <div
                className={`z-10 w-12 h-12 flex items-center justify-center rounded-full border-2 border-dotted  ${
                  item.highlight
                    ? "bg-yellow-400 text-white font-bold"
                    : "border-yellow-400 text-blue-700 font-semibold"
                }`}
              >
                {item.year}
              </div>

              {/* BOTTOM label and line */}
              {index % 2 !== 0 && (
                <>
                  <div className="absolute -bottom-24 flex flex-col items-center">
                    <div className="h-8 w-0.5 bg-yellow-400 mb-2" />
                    <div className="text-xs text-center text-gray-700 font-medium">
                      <p>{item.text}</p>
                      {item.highlightText && (
                        <p className="text-blue-700 font-semibold">{item.highlightText}</p>
                      )}
                    </div>
                  </div>
                </>
              )}

              {/* Horizontal connector */}
              {index < milestones.length - 1 && (
                <div className="absolute top-1/2 left-full w-8 h-0.5 bg-blue-500 z-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
