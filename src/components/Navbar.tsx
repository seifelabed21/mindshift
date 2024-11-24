import React from 'react';
import { UserCircle, Mail, DollarSign } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 h-16 bg-white border-b border-sage-200 flex items-center justify-end px-6 ml-64 w-[calc(100%-16rem)]">
      <div className="flex items-center space-x-6">
        <button className="nav-btn">Guest Access</button>
        <button className="nav-btn flex items-center">
          <Mail className="w-4 h-4 mr-2" />
          Contact Us
        </button>
        <button className="nav-btn flex items-center">
          <DollarSign className="w-4 h-4 mr-2" />
          Pricing
        </button>
        {/* Update this to an anchor tag with the /login link */}
        <a
          href="/login"
          className="bg-sage-600 text-white px-4 py-2 rounded-lg hover:bg-sage-700 transition-colors flex items-center"
        >
          <UserCircle className="w-4 h-4 mr-2" />
          Login
        </a>
      </div>
    </nav>
  );
}
