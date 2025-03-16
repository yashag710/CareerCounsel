import React, { useState } from "react";

const skillOptions = ["JavaScript", "React", "Node.js"];
const careerInterestOptions = [
  "Remote Work",
  "Leadership",
  "Work-Life Balance",
  "Entrepreneurship",
  "High Salary",
  "Social Impact",
];

const CareerPathForm = () => {
  const [currentField, setCurrentField] = useState("");
  const [experience, setExperience] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [careerInterests, setCareerInterests] = useState([]);
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const addSkill = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const removeSkill = (skill) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };

  const toggleCareerInterest = (interest) => {
    setCareerInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const allowedTypes = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (!allowedTypes.includes(file.type)) {
        alert("Please upload a PDF or DOCX file.");
        return;
      }
      setResume(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const userData = {
      currentField,
      experience,
      selectedSkills,
      careerInterests,
      resume: resume ? resume.name : "No file uploaded",
    };

    try {
      const response = await fetch("http://localhost:5000/api/update-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage("Career paths generated successfully!");
      } else {
        setMessage(result.error || "Something went wrong.");
      }
    } catch (error) {
      setMessage("Failed to connect to the server.");
    }

    setLoading(false);
  };

  return (
    <div id="career-path" className="min-h-screen w-full bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
              <div className="bg-blue-600 text-white rounded-t-xl px-6 py-4">
                <h2 className="text-xl font-semibold">Enter Your Career Details</h2>
              </div>

              <div className="p-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Current Field
                      </label>
                      <select
                        value={currentField}
                        onChange={(e) => setCurrentField(e.target.value)}
                        className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="">Select your current field</option>
                        <option>Technology</option>
                        <option>Healthcare</option>
                        <option>Finance</option>
                        <option>Education</option>
                        <option>Marketing</option>
                        <option>Manufacturing</option>
                        <option>Creative Arts</option>
                        <option>Student/Recent Graduate</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Years of Experience
                      </label>
                      <select
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="">Select experience level</option>
                        <option>0-1 years</option>
                        <option>2-3 years</option>
                        <option>4-7 years</option>
                        <option>8-10 years</option>
                        <option>10+ years</option>
                      </select>
                    </div>
                  </div>

                  {/* Skills Selection */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Key Skills</label>
                    <select
                      onChange={(e) => addSkill(e.target.value)}
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">Select a skill</option>
                      {skillOptions.map((skill) => (
                        <option key={skill} value={skill}>
                          {skill}
                        </option>
                      ))}
                    </select>

                    <div className="mt-2 flex flex-wrap gap-2">
                      {selectedSkills.map((skill) => (
                        <span key={skill} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {skill}
                          <button
                            type="button"
                            className="ml-1 text-blue-600 hover:text-blue-800"
                            onClick={() => removeSkill(skill)}
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button with Loading Animation */}
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition duration-200 flex items-center"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        "Generate Career Paths"
                      )}
                    </button>
                  </div>

                  {/* Status Message */}
                  {message && <p className="text-center text-lg font-semibold mt-4 text-gray-700">{message}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPathForm;
