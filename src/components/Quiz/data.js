// data.js
export const categories = [
  {
    name: 'Programming',
    subjects: [
      {
        name: 'React',
        quizzes: [
          { id: 1, title: 'React Basics',   description: 'Props, State & Lifecycle',   questions: 10 },
          { id: 2, title: 'Hooks Deep Dive', description: 'useEffect, useContext etc.', questions: 12 },
          // …
        ]
      },
      {
        name: 'Node.js',
        quizzes: [
          { id: 3, title: 'Node Fundamentals',   description: 'Event Loop & Streams', questions: 8 },
          { id: 4, title: 'Express & Middleware', description: 'Building REST APIs',   questions: 15 },
        ]
      },
      {
        name: 'NestJS',
        quizzes: [
          { id: 5, title: 'NestJS Foundations', description: 'Modules & Controllers', questions: 9 },
          { id: 6, title: 'Advanced NestJS',    description: 'Guards & Interceptors', questions: 11 },
        ]
      }
    ]
  },
  {
    name: 'IT',
    subjects: [
      { name: 'Networking',   quizzes: [ /* … */ ] },
      { name: 'Cybersecurity',quizzes: [ /* … */ ] }
    ]
  },
  {
    name: 'Engineering',
    subjects: [
      { name: 'Electrical',   quizzes: [ /* … */ ] },
      { name: 'Mechanical',   quizzes: [ /* … */ ] }
    ]
  }
];
