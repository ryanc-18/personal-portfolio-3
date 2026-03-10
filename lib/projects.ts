export const projects = [
  {
    slug: 'personal-portfolio',
    title: 'PORTFOLIO WEBSITE',
    descriptionCard:
      "YOU'RE LOOKING AT IT! A PERSONAL PORTFOLIO WEBSITE BUILT WITH NEXT.JS AND TAILWIND CSS.",
    descriptionPage:
      'A minimalist portfolio website designed to present my projects, technical skills, and the motivation behind my software development journey. Built from scratch to demonstrate proficiency with modern web technologies while maintaining clean, user-focused design.',
    field: 'WEB DEVELOPMENT',
    role: 'FULL-STACK DEVELOPER',
    techStack: [
      { name: 'Next.js', category: 'FRAMEWORK' },
      { name: 'Tailwind CSS', category: 'STYLING' },
      { name: 'TypeScript', category: 'LANGUAGE' },
      { name: 'Vercel', category: 'DEPLOYMENT' },
      { name: 'GitHub', category: 'VERSION CONTROL' },
    ],
    mediaType: 'portfolio',
    mediaUrl: undefined,
  },
  {
    slug: 'grant-outcome-analysis',
    title: 'GRANT OUTCOME ANALYSIS TOOL',
    descriptionCard:
      'A DASHBOARD THAT ANALYSES THE OUTCOMES OF UNIVERSITY GRANTS, SUPPORTING INTERNAL REPORTING AND DECISION-MAKING.',
    descriptionPage:
      'This project involved creating a comprehensive dashboard for analyzing university grant outcomes. It aimed to support internal reporting and decision-making processes by providing valuable insights into grant performance.',
    field: 'WEB DEVELOPMENT',
    role: 'PRODUCT OWNER, BACKEND DEVELOPER',
    techStack: [
      { name: 'Next.js', category: 'FRAMEWORK' },
      { name: 'Tailwind CSS', category: 'STYLING' },
      { name: 'TypeScript', category: 'LANGUAGE' },
      { name: 'PostgreSQL', category: 'DATABASE' },
      { name: 'Docker', category: 'CONTAINERIZATION' },
      { name: 'GitHub', category: 'VERSION CONTROL' },
    ],
    mediaType: 'video',
    mediaUrl: '/videos/GAOTool.mp4',
  },
  {
    slug: 'taxi-game',
    title: 'TAXI GAME',
    descriptionCard: 'AN INTERACTIVE 2D TAXI SIMULATION GAME BUILT WITH JAVA.',
    descriptionPage:
      'An interactive 2D taxi simulation game developed in Java. The game challenges players to navigate a city, pick up passengers, and drop them off at their destinations while managing time and resources effectively.',
    field: 'OBJECT-ORIENTED PROGRAMMING',
    role: 'SOLO DEVELOPER',
    techStack: [{ name: 'Java', category: 'LANGUAGE' }],
    mediaType: 'video',
    mediaUrl: '/videos/ShadowTaxi-Trimmed.mp4',
  },
  {
    slug: 'traffic-sign-prediction',
    title: 'TRAFFIC SIGN PREDICTION',
    descriptionCard:
      'BUILT AND CRITICALLY ANALYSED SUPERVISED MACHINE LEARNING METHODS FOR CLASSIFYING GERMAN TRAFFIC SIGNS.',
    descriptionPage:
      'This project involved building and critically analyzing supervised machine learning methods for classifying German traffic signs. The goal was to develop a model that could accurately identify various traffic signs, contributing to advancements in autonomous driving and traffic safety.',
    field: 'MACHINE LEARNING',
    role: 'SOLO DEVELOPER',
    techStack: [
      { name: 'Python', category: 'LANGUAGE' },
      { name: 'TensorFlow', category: 'LIBRARY' },
      { name: 'scikit-learn', category: 'LIBRARY' },
      { name: 'NumPy', category: 'LIBRARY' },
      { name: 'Pandas', category: 'LIBRARY' },
    ],
    mediaType: 'image',
    mediaUrl: '/images/traffic-sign-prediction.png',
  },
  {
    slug: 'text-autocompletion',
    title: 'TEXT AUTOCOMPLETION',
    descriptionCard:
      'A TOOL THAT SUGGESTS COMPLETIONS FOR TEXT INPUTS, BUILT USING C.',
    descriptionPage:
      'A text autocompletion tool designed to suggest completions for text inputs. Built using C, this project focuses on efficient algorithms and data structures to provide fast and accurate suggestions based on user input.',
    field: 'ALGORITHMS AND DATA STRUCTURES',
    role: 'SOLO DEVELOPER',
    techStack: [{ name: 'C', category: 'LANGUAGE' }],
    mediaType: 'none',
    mediaUrl: '',
  },
];

//   {
//     slug: 'e-commerce-platform',
//     title: 'E-commerce Platform',
//     description:
//       'A full-stack e-commerce platform with user authentication and payment integration.',
//     techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
//     imageUrl: '/images/ecommerce.png',
//   },

//   <ProjectCard
//                     title="PORTFOLIO WEBSITE"
//                     description="YOU'RE LOOKING AT IT! A PERSONAL PORTFOLIO WEBSITE BUILT WITH NEXT.JS AND TAILWIND CSS."
//                     field="WEB DEVELOPMENT"
//                     role="FULL-STACK DEVELOPER"
//                   />
//                   <ProjectCard
//                     title="GRANT OUTCOME ANALYSIS TOOL"
//                     description="A DASHBOARD THAT ANALYSES THE OUTCOMES OF UNIVERSITY GRANTS, SUPPORTING INTERNAL REPORTING AND DECISION-MAKING."
//                     field="WEB DEVELOPMENT"
//                     role="BACKEND DEVELOPER"
//                   />
//                   <ProjectCard
//                     title="TAXI GAME"
//                     description="AN INTERACTIVE 2D TAXI SIMULATION GAME BUILT WITH JAVA."
//                     field="OBJECT-ORIENTED PROGRAMMING"
//                     role="SOLO DEVELOPER"
//                   />
//                   <ProjectCard
//                     title="TEXT AUTOCOMPLETION"
//                     description="A TOOL THAT SUGGESTS COMPLETIONS FOR TEXT INPUTS, BUILT USING C"
//                     field="ALGORITHMS AND DATA STRUCTURES"
//                     role="SOLO DEVELOPER"
//                   />
//                   <ProjectCard
//                     title="TRAFFIC SIGN PREDICTION"
//                     description="BUILT AND CRITICALLY ANALYSED SUPERVISED MACHINE LEARNING METHODS FOR CLASSIFYING GERMAN TRAFFIC SIGNS."
//                     field="MACHINE LEARNING"
//                     role="SOLO DEVELOPER"
//                      />
