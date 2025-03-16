import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

// Convert skills list to options format for react-select
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
].map(skill => ({ value: skill, label: skill }));

function CareerPredictor() {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [age, setAge] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSkillChange = (selectedOptions) => {
    setSelectedSkills(selectedOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Extract skill values and join with semicolon
    const skillsStr = selectedSkills.map(option => option.value).join(';');

    try {
      const response = await axios.post('http://localhost:5000/predict', {
        skills: skillsStr,
        age: age
      });
      setResult(response.data.Recommended_Career);
      setError(null);
    } catch (err) {
      console.error(err);
      const errorMsg = (err.response && err.response.data && err.response.data.error)
        ? err.response.data.error
        : err.message || "An unexpected error occurred.";
      setError("Error: " + errorMsg);
      setResult(null);
    }
  };

  return (
    <div>
      <h1>Career Predictor</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select Skills:</label>
          <br />
          <Select
            options={skillsOptions}
            isMulti
            value={selectedSkills}
            onChange={handleSkillChange}
            placeholder="Search and select skills..."
            closeMenuOnSelect={false}
          />
        </div>
        <div>
          <label>Age:</label>
          <br />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
          />
        </div>
        <button type="submit">Predict Career</button>
      </form>
      {result && <h2>Recommended Career: {result}</h2>}
      {error && <h3>{error}</h3>}
    </div>
  );
}

export default CareerPredictor;