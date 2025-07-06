import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h2 className="about-heading">About This App</h2>
      <p className="about-text">
        This is a simple React-based Todo List App. You can add and delete tasks.
        Your tasks are saved in your browser using <strong>localStorage</strong>, so they persist even after a refresh.
      </p>
      <p className="about-text">
        Navigation is handled using <strong>React Router</strong>, and Bootstrap is used for styling.
      </p>
    </div>
  );
}

export default About;
