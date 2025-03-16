const CareerGrowthStatistics = () => {
    return (
      <div className="lg:col-span-1">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="bg-indigo-600 text-white rounded-t-xl px-6 py-4">
            <h2 className="text-xl font-semibold">Career Growth Statistics</h2>
            <p className="text-indigo-100 text-sm">Market trends for your recommended paths</p>
          </div>
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Projected Growth (2023-2028)</h3>
              <div className="space-y-4">
                {[
                  { title: "Technical Product Manager", growth: 24 },
                  { title: "Engineering Manager", growth: 18 },
                  { title: "Solution Architect", growth: 21 },
                  { title: "Tech Industry Average", growth: 15, color: "bg-gray-500" },
                ].map(({ title, growth, color = "bg-green-500" }, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">{title}</span>
                      <span className="text-sm font-medium text-green-600">+{growth}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className={`${color} h-2.5 rounded-full`} style={{ width: `${growth}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Regional Demand</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "Top Region", value: "San Francisco Bay Area" },
                  { label: "Remote Opportunities", value: "76% of Listings" },
                  { label: "Emerging Market", value: "Austin, TX" },
                  { label: "International Demand", value: "High" },
                ].map(({ label, value }, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3 text-center">
                    <span className="block text-xs text-gray-500 mb-1">{label}</span>
                    <span className="block text-sm font-semibold text-gray-800">{value}</span>
                  </div>
                ))}
              </div>
            </div>
  
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Salary by Experience</h3>
              <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-between">
                  {["Entry", "Mid", "Senior"].map((label, index) => (
                    <span key={index} className="bg-white px-2 text-xs text-gray-500">{label}</span>
                  ))}
                </div>
              </div>
              <div className="mt-4 space-y-4">
                {[
                  { title: "Technical Product Manager", range: ["$90k", "$180k+"], colors: "from-blue-300 via-blue-500 to-indigo-600" },
                  { title: "Engineering Manager", range: ["$110k", "$200k+"], colors: "from-green-300 via-green-500 to-green-700" },
                  { title: "Solution Architect", range: ["$115k", "$210k+"], colors: "from-purple-300 via-purple-500 to-purple-700" },
                ].map(({ title, range, colors }, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">{title}</span>
                    </div>
                    <div className={`w-full h-4 bg-gradient-to-r ${colors} rounded-md relative`}>
                      <div className="absolute inset-0 flex items-center justify-between px-2">
                        <span className="text-xs font-medium text-white">{range[0]}</span>
                        <span className="text-xs font-medium text-white">{range[1]}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            <div className="mt-6 text-center">
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center">
                View Detailed Market Analysis
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CareerGrowthStatistics;
  