import React, { useState, useEffect } from 'react';
import { User, MessageSquare, ChevronRight, Send, CheckCircle, Circle, X } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

// Mock data for career paths - In a real app, this might also come from an API
const careerPaths = {
  'software-engineering': {
    title: 'Software Engineering',
    description: 'Master the art of building scalable software solutions',
    icon: '💻',
    checkpoints: [
      {
        title: 'Foundation',
        description: 'Learn programming basics, data structures, and algorithms',
        completed: true,
        skills: ['Python', 'Java', 'Data Structures', 'Algorithms'],
        resources: ['LeetCode', 'Coursera - Algorithms Specialization']
      },
      {
        title: 'Web Development',
        description: 'Master HTML, CSS, JavaScript, and modern frameworks',
        completed: true,
        skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js'],
        resources: ['MDN Web Docs', 'React Documentation']
      },
      {
        title: 'Backend Development',
        description: 'Learn server-side programming and databases',
        completed: false,
        skills: ['SQL', 'APIs', 'System Design', 'Cloud Services'],
        resources: ['AWS Documentation', 'PostgreSQL Tutorials']
      },
      {
        title: 'System Design',
        description: 'Understand scalable architecture and design patterns',
        completed: false,
        skills: ['Distributed Systems', 'Microservices', 'DevOps'],
        resources: ['System Design Primer', 'Martin Fowler\'s Blog']
      }
    ]
  },
  'data-science': {
    title: 'Data Science',
    description: 'Transform data into actionable insights',
    icon: '📊',
    checkpoints: [
      {
        title: 'Mathematics & Statistics',
        description: 'Master probability, statistics, and linear algebra',
        completed: false,
        skills: ['Probability', 'Statistics', 'Linear Algebra'],
        resources: ['Khan Academy', 'StatQuest']
      },
      {
        title: 'Programming',
        description: 'Learn Python and R for data analysis',
        completed: false,
        skills: ['Python', 'R', 'Pandas', 'NumPy'],
        resources: ['DataCamp', 'Kaggle Courses']
      },
      {
        title: 'Machine Learning',
        description: 'Understand ML algorithms and implementations',
        completed: false,
        skills: ['Scikit-learn', 'TensorFlow', 'Neural Networks'],
        resources: ['Fast.ai', 'Coursera ML Specialization']
      }
    ]
  }
};

function UserDash() {
  const [selectedPath, setSelectedPath] = useState('software-engineering');
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', content: 'Hello! How can I help you with your career journey today?' }
  ]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch user profile data from the backend
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3000/api/getUserProfile`, {
          method: 'GET',
          credentials: 'include', // Important for cookies to be sent
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }
        
        const data = await response.json();
        if (data.success) {
          setUser(data.user);
        } else {
          throw new Error(data.message || 'Failed to load user data');
        }
      } catch (err) {
        setError(err.message);
        toast.error('Error loading profile: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setChatMessages([
      ...chatMessages,
      { type: 'user', content: message },
      { type: 'bot', content: 'Thank you for your message. I\'m here to help with your career development!' }
    ]);
    setMessage('');
  };

  const selectedCareerPath = careerPaths[selectedPath];
  const completedCheckpoints = selectedCareerPath.checkpoints.filter(cp => cp.completed).length;
  const totalCheckpoints = selectedCareerPath.checkpoints.length;
  const progressPercentage = (completedCheckpoints / totalCheckpoints) * 100;

  // Show loading state while fetching user data
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your profile...</p>
        </div>
      </div>
    );
  }

  // Show error state if there was a problem fetching data
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <p className="text-red-500 text-xl mb-4">Error loading your profile</p>
          <p className="text-gray-600">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-center" />
      <div className="container mx-auto p-6">
        <div className="flex gap-6">
          {/* User Profile Section - Sticky */}
          <div className="w-1/4">
            <div className="sticky top-6 bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                  <User size={48} className="text-gray-600" />
                </div>
                <h2 className="text-xl font-bold">{user?.fullname || 'User'}</h2>
                <p className="text-gray-600">{user?.skills?.length > 0 ? user.skills[0] : 'Professional'}</p>
                <div className="w-full mt-6">
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-700">Progress Overview</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">Email: {user?.email}</p>
                    <p className="text-sm text-gray-600">Experience: {user?.experience || 0} years</p>
                    <p className="text-sm text-gray-600">Location: {user?.city ? `${user.city}, ${user.country}` : 'Not specified'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Career Path Section - Full Width */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                      {selectedCareerPath.icon} {selectedCareerPath.title}
                    </h2>
                    <p className="text-gray-600 mt-2">{selectedCareerPath.description}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-2xl font-bold text-blue-600">{Math.round(progressPercentage)}%</div>
                    <div className="text-sm text-gray-600">Complete</div>
                  </div>
                </div>
                
                <div className="flex gap-4 mb-6">
                  {Object.entries(careerPaths).map(([key, path]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedPath(key)}
                      className={`px-6 py-3 rounded-lg transition-all duration-200 ${
                        selectedPath === key
                          ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <span className="mr-2">{path.icon}</span>
                      {path.title}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                {selectedCareerPath.checkpoints.map((checkpoint, index) => (
                  <div key={index} className="relative pl-10">
                    <div className={`absolute left-0 top-2 ${
                      checkpoint.completed ? 'text-green-500' : 'text-gray-400'
                    }`}>
                      {checkpoint.completed ? <CheckCircle size={24} /> : <Circle size={24} />}
                    </div>
                    {index < selectedCareerPath.checkpoints.length - 1 && (
                      <div className="absolute left-3 top-8 w-0.5 h-24 bg-gray-200"></div>
                    )}
                    <div className={`rounded-xl p-6 transition-all duration-200 ${
                      checkpoint.completed 
                        ? 'bg-green-50 border border-green-100' 
                        : 'bg-white border border-gray-100 hover:shadow-md'
                    }`}>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{checkpoint.title}</h3>
                      <p className="text-gray-600 mb-4">{checkpoint.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">Key Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            {checkpoint.skills.map((skill, idx) => (
                              <span 
                                key={idx} 
                                className={`px-3 py-1 rounded-full text-sm ${
                                  user?.skills?.includes(skill) 
                                    ? 'bg-green-100 text-green-700' 
                                    : 'bg-blue-100 text-blue-700'
                                }`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">Resources</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {checkpoint.resources.map((resource, idx) => (
                              <li key={idx} className="flex items-center">
                                <ChevronRight size={16} className="text-blue-500 mr-1" />
                                {resource}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot Icon - Sticky */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isChatOpen && (
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          >
            <MessageSquare size={24} />
          </button>
        )}
      </div>

      {/* Chatbot Panel */}
      {isChatOpen && (
        <div className="fixed bottom-6 right-6 w-96 bg-white rounded-lg shadow-xl z-50">
          <div className="p-4 border-b flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageSquare className="text-blue-600" />
              <h2 className="text-lg font-semibold">Career Assistant</h2>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>

          <div className="h-96 p-4 overflow-y-auto space-y-4">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default UserDash;