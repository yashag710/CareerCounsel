import React from 'react';
import { 
  Home, 
  Users, 
  Calendar, 
  MessageSquare, 
  FileText, 
  Settings,
  Bell,
  Clock,
  Mail,
  DollarSign,
  Search,
  Edit
} from 'lucide-react';

function CounDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Sidebar */}
      <div className="w-72 bg-white p-6 border-r">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-2xl font-semibold">RC</span>
          </div>
          <h2 className="text-xl font-semibold">Dr. Rebecca Chen</h2>
          <p className="text-gray-600 text-sm">Technology Careers Specialist</p>
          <div className="mt-2">
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Online</span>
          </div>
          <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg flex items-center justify-center gap-2">
            <Edit size={16} /> Edit Profile
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-2">
          <a href="#" className="flex items-center gap-3 p-3 bg-indigo-50 text-indigo-600 rounded-lg">
            <Home size={20} />
            <span>Dashboard Overview</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg">
            <Users size={20} />
            <span>Client Management</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg">
            <Calendar size={20} />
            <span>Appointments</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg">
            <MessageSquare size={20} />
            <span>Messages</span>
            <span className="ml-auto bg-red-100 text-red-600 px-2 py-0.5 rounded-full text-xs">14</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg">
            <FileText size={20} />
            <span>Resources & Materials</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg">
            <Settings size={20} />
            <span>Settings</span>
          </a>
        </nav>

        {/* Quick Stats */}
        <div className="mt-8">
          <h3 className="text-xs font-semibold text-gray-500 mb-4">QUICK STATS</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-indigo-600">42</div>
              <div className="text-sm text-gray-600">Active Clients</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">12</div>
              <div className="text-sm text-gray-600">This Week</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">4.9</div>
              <div className="text-sm text-gray-600">Rating</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">$1.2k</div>
              <div className="text-sm text-gray-600">This Month</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-800">Counsellor Dashboard</h1>
        <p className="text-gray-600">Manage your clients, appointments, and messages</p>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-gray-600">Pending Requests</h3>
                <p className="text-2xl font-bold">14</p>
                <p className="text-green-600 text-sm flex items-center mt-2">
                  <span>↑ 12.5% from last week</span>
                </p>
              </div>
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Bell className="text-indigo-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-gray-600">Today's Sessions</h3>
                <p className="text-2xl font-bold">4</p>
                <p className="text-green-600 text-sm flex items-center mt-2">
                  <span>↑ 1 more than yesterday</span>
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Calendar className="text-green-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-gray-600">Unread Messages</h3>
                <p className="text-2xl font-bold">8</p>
                <p className="text-red-600 text-sm flex items-center mt-2">
                  <span>↓ 3 new since yesterday</span>
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Mail className="text-blue-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-gray-600">Earnings This Month</h3>
                <p className="text-2xl font-bold">$1,240</p>
                <p className="text-green-600 text-sm flex items-center mt-2">
                  <span>↑ 8.5% from last month</span>
                </p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <DollarSign className="text-yellow-600" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Client Requests Section */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Client Requests</h2>
            <div className="flex gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search requests..."
                  className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <select className="border rounded-lg px-4 py-2 bg-white">
                <option>All Types</option>
              </select>
            </div>
          </div>

          {/* Client Request Cards */}
          <div className="space-y-4">
            {/* Request Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">JD</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">John Doe</h3>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">New Client</span>
                    </div>
                    <p className="text-gray-600 text-sm">john.doe@example.com • (555) 123-4567</p>
                  </div>
                </div>
                <span className="text-gray-500 text-sm">Today, 09:42 AM</span>
              </div>

              <div className="mt-4 bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-900">Initial Career Assessment Request</h4>
                <p className="text-indigo-700 mt-1">
                  I'm currently working in finance but interested in transitioning to the tech industry. 
                  I have a background in data analysis and am interested in exploring product management or data science roles. 
                  Looking forward to your guidance!
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Career Transition</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Tech Industry</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Data Science</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={16} />
                    <span className="text-sm">Preferred time: Weekday evenings or weekends</span>
                  </div>
                  <button className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg">Message</button>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">Schedule Session</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CounDashboard;