import React from 'react';
import './Pricing.css';

export default function Pricing() {
  const plans = [
    { name: 'Free', price: '$0', features: ['Basic Features'] },
    { name: 'Pro', price: '$9/mo', features: ['Everything in Free', 'Priority Support'] },
    { name: 'Team', price: '$29/mo', features: ['Everything in Pro', 'Team Collaboration'] }
  ];
  return (
    <section className="pricing">
      {plans.map((p, i) => (
        <div key={i} className="pricing-card">
          <h3>{p.name}</h3>
          <p className="price">{p.price}</p>
          <ul>
            {p.features.map((f, j) => <li key={j}>{f}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}
