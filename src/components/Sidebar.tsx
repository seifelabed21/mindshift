import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Brain, MessageCircle, GamepadIcon, Calendar, Lightbulb, ClipboardCheck } from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: ClipboardCheck, label: 'Assessment Quiz', path: '/assessment' },
  { icon: Brain, label: 'Mental Gym', path: '/gym' },
  { icon: MessageCircle, label: 'Anonymous Forum', path: '/forum' },
  { icon: GamepadIcon, label: 'Mindful Games', path: '/games' },
  { icon: Calendar, label: 'Online Consultation', path: '/consultation' },
  { icon: Lightbulb, label: 'Suggestions', path: '/suggestions' },
];

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-sage-50 border-r border-sage-200 fixed left-0 top-0 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-sage-800 mb-8">Serenity Steps</h2>
        <nav>
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center p-3 mb-2 text-sage-700 hover:bg-sage-100 rounded-lg transition-colors"
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}