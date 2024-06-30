"use client";

import React, { useState } from 'react';
import './ourFeatures.scss';

interface Feature {
  id: number;
  title: string;
  description?: string;
}

const FeaturesSection: React.FC = () => {
  const [expandedFeature, setExpandedFeature] = useState<number>(2);

  const features: Feature[] = [
    { id: 1, title: 'Visualizations of data and viewpoints' },
    { id: 2, title: 'Real-time conversation and discussion', description: 'We aim to nurture an environment where every voice is heard and valued through respectful discourse and active listening. Together, we can engage in deliberative democracy, weighing ideas and insights to reach well-informed agreements.' },
    { id: 3, title: 'Real-time problem solving', description: 'We aim to nurture an environment where every voice is heard and valued through respectful discourse and active listening. Together, we can engage in deliberative democracy, weighing ideas and insights to reach well-informed agreements.' },
    { id: 4, title: 'Real-time conversation and discussion' },
    { id: 5, title: 'Voting and rating options' },
    { id: 6, title: 'Embraces diverse perspectives' },
  ];

  return (
    <div className="features-section">
      <div className="features-content">
        <div className="features-column">
          <h2 className="heading">Our Features</h2>
          {features.map((feature) => (
            <div key={feature.id} className="feature-item">
              <div 
                className="feature-header"
                onClick={() => setExpandedFeature(expandedFeature === feature.id ? 0 : feature.id)}
              >
                <span className="feature-number">{String(feature.id).padStart(2, '0')}</span>
                <span className="feature-title">{feature.title}</span>
                <span className="feature-toggle">{expandedFeature === feature.id ? '-' : '+'}</span>
              </div>
              {expandedFeature === feature.id && feature.description && (
                <div className="feature-description">{feature.description}</div>
              )}
            </div>
          ))}
        </div>
        <div className="mockup-column">
          <div className="mockup">
            <div className="mockup-header">
              <span>Go to Rome on week...</span>
              <div className="mockup-icons">
                {/* Add icons here */}
              </div>
            </div>
            {/* <div className="mockup-content">
              <div className="decision-node">Go to Rome on weekend</div>
              <div className="decision-node">Stay extra day</div>
              <div className="decision-node">Visit another city</div>
              <div className="sub-decision">
                <div className="decision-node">Venice</div>
                <div className="decision-node">Florence</div>
                <div className="decision-node highlighted">Go to Turin</div>
              </div>
              <div className="decision-node">What to do in Turin?</div>
              <div className="sub-decision">
                <div className="decision-node">Egyptian museum</div>
                <div className="decision-node">Villa della Regina</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="footer">FreeDiscourse</div> */}
    </div>
  );
};

export default FeaturesSection;