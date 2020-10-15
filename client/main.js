// import { Template } from 'meteor/templating';

// import './main.html';

// Template.login.helpers({
//     getEmail() {
//         return Meteor.user().emails && Meteor.user().emails[0].address;
//     }
// });

// Template.login.events({
//     'click button.log-in'(event) {
//         event.preventDefault();
//         Meteor.loginWithFacebook({requestPermissions: ['public_profile', 'email']}, function(err){
//             if (err) {
//                 console.log('Handle errors here: ', err);
//             }else{
//                 console.log(Meteor.user())
//             }
//         });
//     },
//     'click button.log-out'(event) {
//         event.preventDefault();
//         Meteor.logout();
//     }
// });

import React from 'react';
import {Meteor} from 'meteor/meteor'
import {render} from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'
import App from "../imports/login";
// import './main.html';
Meteor.startup(() => {
  render(<App />, document.getElementById("root"));
});




