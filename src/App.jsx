import React from 'react';
import './App.css';

const PriceCard = (props) => {
  const { title, price, features } = props;

  return (
    <div className="container">
      <div className="price-card">
        <h2 className="title">{title}</h2>
        <div className="price">${price === 0 ? 'Free' :`$${price}/month`}</div>
        <ul className="features">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
  );
};

function App() {
  const cardData = [
    {
      title: 'Free',
      price: 0,
      features: [
        '✓ $0/month',
        '✓ 50GB storage',
        '✓ unlimited public project',
        '✓ community access',
        '× unlimited private projects',
        '× dedicated phone support',
        '× free subdomain',
        '× monthly status reports',
      ],
    },
    {
      title: 'Plus',
      price: 9,
      features: [
        '✓ $9/month',
        '✓ 5 users',
        '✓ 50GB storage',
        '✓ community access',
        '✓ unlimited private projects',
        '✓ dedicated phone support',
        '✓ free subdomain',
        '× monthly status reports',
      ],
    },
    {
      title: 'Pro',
      price: 49,
      features: [
        '✓ $49/monthly',
        '✓ unlimited users',
        '✓ 50GB storage',
        '✓ unlimited public projects',
        '✓ community access',
        '✓ unlimited private projects',
        '✓ dedicated phone support',
        '✓ free subdomain',
        '✓ monthly status report',
      ],
    },
  ];

  return (
    <div className="App">
      {cardData.map((card, index) => (
        <PriceCard key={index} {...card} />
      ))}
    </div>
  );
}

export default App;


