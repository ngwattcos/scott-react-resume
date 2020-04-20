import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import { PDFViewer } from '@react-pdf/renderer';

import { SampleDoc } from './SampleDoc'
import { Resume, Experience } from './types';

const contacts = { email: 'sw754@cornell.edu', number: '732-306-1820', location: 'Holmdel, NJ' };
const links = [];

const courses = [
  'Computer Vision',
  'Machine Learning',
  'Honors Discrete Structures',
  'iOS Development',
  'Adv. Video Game Design',
  'Functiona. Progm.',
]


const experiences: Experience[] = [
  {
    company: 'Google',
    location: 'Mountain View, NY (Remote)',
    roles: [
      {
        title: 'Software Engineering Intern',
        summary: '...Coming soon!',
        period: { start: { month: '05', year: '2020' } },
        tags: ['iOS', 'Swift', 'Objective-C'].map(msg => { return { info: msg, color: 'LightGray' } })
      }
    ]
  },
  {
    company: 'Cornell Design & Tech Initiative',
    location: 'Ithaca, NY',
    roles: [
      {
        title: 'Technical Product Manager: Queue Me In',
        summary: 'Led development of Queue Me In, Cornell’s most popular office hours tracking app',
        details: ['Updated feature set and security after >200% surge in demand due to COVID-19 outbreak',
          'Reduced costs, improved security & UX by migrating from Node.js/Heroku to Firebase'],
        period: { start: { month: '01', year: '2020' } },
        tags: ['TypeScript', 'Firebase', 'React'].map(msg => { return { info: msg, color: 'LightGray' } })
      },
      {
        title: 'Backend Developer: EVE (formerly CUE)',
        summary: 'Developed backend features for EVE, a Cornell public event-hosting platform',
        details: ['Reduced Events API loading times by implementing pagination',
          'Increased security by migrating AWS S3 image uploads to the back-end via Boto'],
        period: { start: { month: '01', year: '2020' } },
        tags: ['TypeScript', 'Firebase', 'React'].map(msg => { return { info: msg, color: 'LightGray' } })
      }
    ]
  },
  {
    company: 'Flip Pay, Inc.',
    location: 'San Francisco, Ca',
    roles: [
      {
        title: 'Full-Stack Developer Intern',
        summary: 'Created functional back-end for Flip Pay with encryption & password authentication',
        details: [' Built support for “wallet” payments (Plaid/Dwolla), notifications, & rewards system',
          'Designed authenticated business user dashboard'],
        period: { start: { month: '06', year: '2019' } },
        tags: ['Node.js', 'MongoDB', 'Plaid', 'Dwolla', 'Heroku', 'Bootstrap'].map(msg => { return { info: msg, color: 'LightGray' } })
      },
      {
        title: 'iOS Developer Intern',
        summary: 'Created Flip Pay iOS client app for customers to pay vendors using Swift from scratch',
        details: ['Developed features for sending/adding/withdrawing cash & list connected bank accounts',
          'Secured funding from board of investors using demo app',
          'Published app to TestFlight & tested by dozens of users'],
        period: { start: { month: '06', year: '2019' } },
        tags: ['Swift', 'CocoaPods', 'Hydra'].map(msg => { return { info: msg, color: 'LightGray' } })
      }
    ]
  },
]

const resume: Resume = {
  name: 'Scott Wang',
  tagline: 'CS Student',
  contacts: contacts,
  links: [
    { image: '', url: 'linkedin.com/ngwattcos' },
    { image: '', url: 'github.com/ngwattcos' },
    { image: '', url: 'devpost.com/ngwattcos' },
  ],
  experiences: experiences,
  projects: [],
  education: {
    school: 'Cornell University',
    majors: [{ name: 'Computer Science', degree: 'B.S.' }],
    courses: courses,
    graduation: { month: '05', year: '2022' }
  },
  skills: [],
  hackathons: [],
  interests: [],
}

function App() {

  return (
    <div className="centered">
      <PDFViewer width="450" height="700">
        <SampleDoc {...resume} />
      </PDFViewer>
    </div>
  );
}



export default App;
