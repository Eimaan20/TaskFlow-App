import React from 'react';
import './Testimonials.css';

export default function Testimonials() {
  const reviews = [
    { name: 'Sara', text: 'TaskFlow changed my workflow completely!' },
    { name: 'Mike', text: 'So easy to stay on top of my deadlines.' },
    { name: 'Lena', text: 'Best productivity app I have used.' }
  ];
  return (
    <section className="testimonials">
      {reviews.map((r, i) => (
        <blockquote key={i}>
          <p>"{r.text}"</p>
          <footer>- {r.name}</footer>
        </blockquote>
      ))}
    </section>
  );
}
