import React from 'react';

function Skills() {
  const skillsList = [
    'JavaScript',
    'React',
    'CSS',
    'HTML',
    'Node.js',
    'Python',
    'Git',
  ];

  return (
    <div>
      <h1>Skills</h1>
      <ul>
        {skillsList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;