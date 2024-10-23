import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButon from './chapter_08/ConfirmButton';
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook';


// chapter_03/Library
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Library />
//   </React.StrictMode>
// );


// chapter_04/Clock
// setInterval(() => {
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }, 1000);


//cpapter_05/CommentList
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <CommentList />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// chapter_06/NotificationList
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <NotificationList />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// chapter_07/Accommodate
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Accommodate />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// chapter_08/ConfirmButton
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ConfirmButon />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// chapter_09/LandingPage
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <LandingPage />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// chapter_10/AttendanceBook
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AttendanceBook />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
