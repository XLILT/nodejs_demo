'use strict';

import './style.css';
//import Icon from './u=1259008651,161387334&fm=27&gp=0.jpg';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');  
  element.innerHTML = 'Hello webpack';
  element.classList.add('hello');

  // var myIcon = new Image();
  // myIcon.src = Icon;
  //element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component()); 

if (module.hot) {    
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}
