import React, { useState } from "react";
import Select from 'react-select';
import axios from "axios";

const skillsOptions = [
  'Adobe XD',
  'C++',
  'CAD',
  'CSS',
  'Canva',
  'Circuit Design',
  'Content Writing',
  'Contracts',
  'Corporate Law',
  'Criminal Law',
  'Django',
  'Email Marketing',
  'Embedded Systems',
  'Encryption',
  'Ethical Hacking',
  'Express',
  'Figma',
  'Git',
  'Google Ads',
  'HTML',
  'Html',
  'Illustrator',
  'Java',
  'JavaScript',
  'Legal Research',
  'Litigation',
  'MATLAB',
  'Machine Learning',
  'Malware Analysis',
  'Manufacturing',
  'Material Science',
  'Medical Diagnosis',
  'MongoDB',
  'Network Security',
  'Node.js',
  'Pandas',
  'Pathology',
  'Patient Care',
  'Pharmacology',
  'Photoshop',
  'Power Systems',
  'Python',
  'R',
  'REST API',
  'React',
  'SEO',
  'SQL',
  'Social Media Marketing',
  'SolidWorks',
  'Statistics',
  'Surgery',
  'TensorFlow',
  'Thermodynamics',
  'UI/UX'
];

// Convert skillsOptions to the format needed for react-select
const skillSelectOptions = skillsOptions.map(skill => ({ value: skill, label: skill }));

const CareerPathForm = () => {
  const [currentField, setCurrentField] = useState("");
  const [age , setAge] = useState('');
  const [error , setError] = useState(null);
  const [result, setResult] = useState(null);
  const [experience, setExperience] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  // const [careerInterests, setCareerInterests] = useState([]);
  // const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Add this new handler for react-select
  const handleSkillChange = (selectedOptions) => {
    setSelectedSkills(selectedOptions);
  };

  // const toggleCareerInterest = (interest) => {
  //   setCareerInterests((prev) =>
  //     prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
  //   );
  // };

  // const handleResumeUpload = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const allowedTypes = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
  //     if (!allowedTypes.includes(file.type)) {
  //       alert("Please upload a PDF or DOCX file.");
  //       return;
  //     }
  //     setResume(file);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    // Extract skill values and join with semicolon
    const skillsStr = selectedSkills.map(option => option.value).join(';');

    try {
      const response1 = await axios.post('http://localhost:5000/predict', {
        skills: skillsStr,
        age: age
      });
      setResult(response1.data.Recommended_Career);
      setError(null);
      
    } catch (err) {
      console.error(err);
      const errorMsg = (err.response && err.response.data && err.response.data.error)
        ? err.response.data.error
        : err.message || "An unexpected error occurred.";
      setError("Error: " + errorMsg);
      setResult(null);
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

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Age
                      </label>
                      <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Enter your age"
                        className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  {/* Skills Selection */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Key Skills
                    </label>
                    <Select
                      isMulti
                      options={skillSelectOptions}
                      value={selectedSkills}
                      onChange={handleSkillChange}
                      placeholder="Search and select skills..."
                      closeMenuOnSelect={false}
                      className="rounded-lg"
                      classNamePrefix="select"
                    />
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
                {result && <h2>Recommended Career: {result}</h2>}
                {error && <h3>{error}</h3>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPathForm;
