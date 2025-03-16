import React from "react";

const CareerPathResults = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      {/* Header */}
      <div className="bg-indigo-600 text-white rounded-t-xl px-6 py-4 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Recommended Career Paths</h2>
          <p className="text-indigo-100 text-sm">
            Based on your technology background and interest in leadership
          </p>
        </div>
        <button className="bg-white text-indigo-600 px-3 py-1 rounded-lg text-sm font-medium hover:bg-indigo-50">
          Save Results
        </button>
      </div>

      <div className="divide-y divide-gray-200">
        {/* Career Paths */}
        {careerPaths.map((career, index) => (
          <div key={index} className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {career.title}
              </h3>
              <div className="flex items-center mt-2 md:mt-0">
                <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                  {career.match}
                </span>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {career.industry}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-600 mb-4">{career.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {/* Required Skills */}
                <div className="border border-gray-200 rounded-lg p-3">
                  <p className="text-sm font-medium text-gray-500 mb-1">
                    Required Skills
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {career.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Salary */}
                <div className="border border-gray-200 rounded-lg p-3">
                  <p className="text-sm font-medium text-gray-500 mb-1">
                    Avg. Salary Range
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    {career.salary}
                  </p>
                </div>

                {/* Transition Difficulty */}
                <div className="border border-gray-200 rounded-lg p-3">
                  <p className="text-sm font-medium text-gray-500 mb-1">
                    Transition Difficulty
                  </p>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                      <div
                        className={`h-2.5 rounded-full ${career.difficultyColor}`}
                        style={{ width: career.difficultyPercentage }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-500">
                      {career.difficultyLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
              <div className="flex flex-wrap gap-2">
                <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50">
                  See Required Skills
                </button>
                <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50">
                  View Roadmap
                </button>
              </div>
              <button className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700">
                Explore This Path
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-gray-50 rounded-b-xl flex justify-between items-center">
        <span className="text-sm text-gray-600">
          {careerPaths.length} career paths recommended based on your profile
        </span>
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          Explore More Paths
        </button>
      </div>
    </div>
  );
};

// Career Paths Data
const careerPaths = [
  {
    title: "Technical Product Manager",
    match: "High Match (91%)",
    industry: "Growth Industry",
    description:
      "The perfect bridge between your technical skills and leadership aspirations. Technical Product Managers guide product development from conception to launch.",
    skills: ["Technical Knowledge", "Product Strategy", "Stakeholder Management"],
    salary: "$105,000 - $150,000",
    difficultyLabel: "Medium",
    difficultyPercentage: "50%",
    difficultyColor: "bg-yellow-400",
  },
  {
    title: "Engineering Manager",
    match: "Good Match (82%)",
    industry: "Stable Demand",
    description:
      "Lead development teams while maintaining technical involvement. Engineering Managers balance people management with technical leadership.",
    skills: ["Technical Expertise", "Team Leadership", "Project Management"],
    salary: "$120,000 - $170,000",
    difficultyLabel: "Medium",
    difficultyPercentage: "65%",
    difficultyColor: "bg-yellow-400",
  },
  {
    title: "Solution Architect",
    match: "Good Match (78%)",
    industry: "High Growth",
    description:
      "Design and oversee implementation of complex technical solutions, ensuring systems meet both technical and strategic objectives.",
    skills: ["System Design", "Technical Leadership", "Business Analysis"],
    salary: "$130,000 - $180,000",
    difficultyLabel: "Hard",
    difficultyPercentage: "75%",
    difficultyColor: "bg-orange-400",
  },
];

export default CareerPathResults;
