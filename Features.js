import React from 'react';
import './Features.css';

export default function Features() {
  const features = [
    { icon: '✅', title: 'Easy to Use', desc: 'Simple and intuitive interface.' },
    { icon: '📅', title: 'Stay Organized', desc: 'Manage all your tasks in one place.' },
    { icon: '⚡', title: 'Boost Productivity', desc: 'Focus on what matters most.' }
  ];
  return (
    <section className="features">
      {features.map((f, i) => (
        <div key={i} className="feature-card">
          <div className="icon">{f.icon}</div>
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </section>
  );
}
