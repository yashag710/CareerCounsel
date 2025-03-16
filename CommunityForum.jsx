import { useState } from "react";

const CommunityForum = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [search, setSearch] = useState("");
  const [showNewDiscussionForm, setShowNewDiscussionForm] = useState(false);
  const [newDiscussion, setNewDiscussion] = useState({
    title: "",
    description: "",
    tags: ""
  });
  
  const [discussions, setDiscussions] = useState([
    {
      id: 1,
      userInitials: "MC",
      title: "PINNED: Welcome to our community forum!",
      time: "1 week ago",
      description:
        "Welcome to the CareerPath Community Forum! This is a space for you to connect with peers, ask questions, and share insights about your career journey. Please review our community guidelines before posting.",
      tags: ["Announcement", "Community"],
      replies: 47,
      views: 1200,
      pinned: true,
    },
    {
      id: 2,
      userInitials: "RJ",
      title: "Best resources for learning data science in 2023",
      time: "Yesterday",
      description:
        "I'm looking to develop my skills in data science, particularly machine learning and AI. Can anyone recommend up-to-date courses, books, or bootcamps that would be valuable for someone with programming experience?",
      tags: ["Data Science", "Learning Resources", "AI & ML"],
      replies: 32,
      views: 876,
    },
    {
      id: 3,
      userInitials: "SL",
      title: "How to transition from marketing to UX design?",
      time: "2 hours ago",
      description:
        "I've been working in digital marketing for 5 years, but I'm really interested in UX design. Has anyone made this career switch successfully? What skills should I focus on developing?",
      tags: ["Career Change", "UX Design", "Marketing"],
      replies: 18,
      views: 423,
    },
  ]);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleStartNewDiscussion = () => {
    setShowNewDiscussionForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDiscussion({
      ...newDiscussion,
      [name]: value
    });
  };

  const handleSubmitDiscussion = (e) => {
    e.preventDefault();
    
    // Create a new discussion object
    const newDiscussionObj = {
      id: discussions.length + 1,
      userInitials: "ME", // Placeholder for current user
      title: newDiscussion.title,
      time: "Just now",
      description: newDiscussion.description,
      tags: newDiscussion.tags.split(',').map(tag => tag.trim()),
      replies: 0,
      views: 1,
      pinned: false
    };
    
    // Add new discussion to the discussions array
    setDiscussions([newDiscussionObj, ...discussions]);
    
    // Reset form and hide it
    setNewDiscussion({
      title: "",
      description: "",
      tags: ""
    });
    setShowNewDiscussionForm(false);
  };

  const filteredDiscussions = discussions.filter((discussion) =>
    discussion.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div id="community-forum" className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Community Forum</h1>
          <p className="text-gray-600">
            Connect with peers and experts to discuss career opportunities and challenges
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-0">
          {/* Left Sidebar - Guidelines and FAQ */}
          <div className="lg:w-1/3">
            {/* Community Guidelines Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
              <div className="bg-blue-600 text-white rounded-t-xl px-6 py-4">
                <h2 className="text-xl font-semibold">Community Guidelines</h2>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {[
                    "Be respectful to other community members. Harassment or bullying will not be tolerated.",
                    "Keep discussions relevant to career development, job opportunities, and professional growth.",
                    "Do not share personal contact information publicly. Use private messaging for personal exchanges.",
                    "No spam or promotional content without prior approval from moderators.",
                    "Respect intellectual property. Credit sources and do not plagiarize content.",
                  ].map((guideline, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{guideline}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                  >
                    View Complete Guidelines
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="bg-indigo-600 text-white rounded-t-xl px-6 py-4">
                <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    {
                      question: "How do I create a new discussion?",
                      answer:
                        'Click on the "Start New Discussion" button at the top of the forum page. Fill in the title, select the appropriate category, and add your content.',
                    },
                    {
                      question: "How can I get my question answered faster?",
                      answer:
                        "Make your questions specific, clear, and provide relevant details. Use appropriate tags to reach community members with expertise in that area.",
                    },
                    {
                      question: "Can I contact career counselors directly?",
                      answer:
                        'Yes, you can book a private session with any of our verified career counselors through the "Find a Counselor" section of the platform.',
                    },
                    {
                      question: "How do I report inappropriate content?",
                      answer:
                        'Click the "Report" button on any post or comment that violates our community guidelines. Our moderators will review and take appropriate action.',
                    },
                  ].map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                      <button
                        className="flex justify-between items-center w-full text-left"
                        onClick={() => toggleFAQ(index)}
                      >
                        <span className="font-medium text-gray-800">{faq.question}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 text-gray-500 transition-transform ${
                            openFAQ === index ? "rotate-180" : ""
                          }`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      {openFAQ === index && (
                        <div className="mt-2 text-gray-600 text-sm">{faq.answer}</div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                  >
                    View All FAQs
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Left Sidebar */}

          {/* Right Section - Discussion Forum */}
          <div className="lg:w-2/3 ml-5">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              {/* Header */}
              <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">Discussion Forum</h2>
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200 flex items-center"
                  onClick={handleStartNewDiscussion}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Start New Discussion
                </button>
              </div>

              {/* New Discussion Form */}
              {showNewDiscussionForm && (
                <div className="px-6 py-4 bg-blue-50 border-b border-blue-200">
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <p className="text-blue-700 font-medium">
                      Create a New Discussion
                    </p>
                    <button 
                      className="ml-auto text-blue-700 hover:text-blue-900" 
                      onClick={() => setShowNewDiscussionForm(false)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  
                  <form onSubmit={handleSubmitDiscussion}>
                    <div className="mb-4">
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                        Discussion Title
                      </label>
                      <input 
                        type="text" 
                        id="title"
                        name="title"
                        value={newDiscussion.title}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        placeholder="Enter a clear, specific title for your discussion"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      <textarea 
                        id="description"
                        name="description"
                        value={newDiscussion.description}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="4"
                        
                        required
                        placeholder="Provide details about your discussion topic, question, or insight"
                      ></textarea>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
                        Tags (comma separated)
                      </label>
                      <input 
                        type="text" 
                        id="tags"
                        name="tags"
                        value={newDiscussion.tags}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Career Change, Job Search, etc."
                      />
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 mr-2 hover:bg-gray-50"
                        onClick={() => setShowNewDiscussionForm(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                      >
                        Post Discussion
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Search Bar */}
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <input
                  type="text"
                  placeholder="Search discussions..."
                  className="pl-3 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              {/* Discussion List */}
              <div className="divide-y divide-gray-200">
                {filteredDiscussions.map((discussion) => (
                  <DiscussionCard key={discussion.id} discussion={discussion} />
                ))}
              </div>
            </div>
          </div>
          {/* End Right Section */}
        </div>
      </div>
    </div>
  );
};

const DiscussionCard = ({ discussion }) => {
  return (
    <div className={`p-6 hover:bg-gray-50 transition duration-150 ${discussion.pinned ? "bg-gray-50" : ""}`}>
      <div className="flex items-start">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold text-sm mr-4">
          {discussion.userInitials}
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-lg text-gray-800 hover:text-blue-600 flex items-center">
              {discussion.pinned && <span className="text-red-500 mr-2">📌</span>}
              <a href="#">{discussion.title}</a>
            </h3>
            <span className="text-xs text-gray-500">{discussion.time}</span>
          </div>
          <p className="text-gray-600 mt-2">{discussion.description}</p>
          <div className="mt-3 flex items-center flex-wrap gap-2">
            {discussion.tags.map((tag, index) => (
              <span key={index} className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-3 flex items-center text-sm text-gray-500 space-x-6">
            <div className="flex items-center">💬 <span className="ml-1">{discussion.replies} replies</span></div>
            <div className="flex items-center">👁 <span className="ml-1">{discussion.views} views</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityForum;