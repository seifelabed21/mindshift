import React, { useState } from 'react';
import { Video, Users, Shield, Clock } from 'lucide-react';

const ConsultationPage = () => {
  const [consultationType, setConsultationType] = useState('online');

  return (
    <div className="pt-16 ml-64">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-sage-900 mb-6">Begin Your Healing Journey</h1>
          <p className="text-xl text-sage-700">
            Connect with experienced therapists in a safe, private space designed for your
            well-being.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Video className="w-12 h-12 text-sage-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Online Sessions</h3>
            <p className="text-gray-600">Connect from anywhere with our secure video platform.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Shield className="w-12 h-12 text-sage-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">100% Confidential</h3>
            <p className="text-gray-600">Your privacy and security are our top priorities.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Clock className="w-12 h-12 text-sage-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Free Trial Session</h3>
            <p className="text-gray-600">Start with a 30-minute consultation at no cost.</p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Book Your Session</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setConsultationType('online')}
                className={`p-4 rounded-lg border-2 ${
                  consultationType === 'online'
                    ? 'border-sage-600 bg-sage-50'
                    : 'border-gray-300'
                } flex items-center justify-center gap-2`}
              >
                <Video className="w-5 h-5" />
                Online Session
              </button>
              <button
                type="button"
                onClick={() => setConsultationType('inPerson')}
                className={`p-4 rounded-lg border-2 ${
                  consultationType === 'inPerson'
                    ? 'border-sage-600 bg-sage-50'
                    : 'border-gray-300'
                } flex items-center justify-center gap-2`}
              >
                <Users className="w-5 h-5" />
                In-Person Session
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sage-600"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sage-600"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What brings you here today?
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sage-600"
                placeholder="Briefly describe your needs..."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sage-600"
              />
              <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sage-600">
                <option>Morning (9AM - 12PM)</option>
                <option>Afternoon (12PM - 5PM)</option>
                <option>Evening (5PM - 8PM)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-sage-600 text-white py-3 rounded-lg hover:bg-sage-700 transition"
            >
              Schedule Free Consultation
            </button>
          </form>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Initial assessment of your needs</li>
              <li>• Discussion of therapy options</li>
              <li>• Personalized treatment plan</li>
              <li>• Flexible scheduling options</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Emergency Support</h3>
            <p className="text-gray-600 mb-4">
              If you're experiencing a mental health emergency, contact:
            </p>
            <p className="font-semibold">National Crisis Hotline</p>
            <p className="text-sage-600 font-bold">1-800-273-8255</p>
            <p className="text-sm text-gray-500">Available 24/7</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;
