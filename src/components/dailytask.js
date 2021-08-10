import React from 'react';
import dailyTaskManager2 from '../images/daily-task-manager.png'; // Tell webpack this JS file uses this image

console.log(dailyTaskManager2); // /logo.84287d09.png

function DTM() {
  // Import result is the URL of your image
  return <img src={dailyTaskManager2} alt="Logo" />;
}

export default DTM;