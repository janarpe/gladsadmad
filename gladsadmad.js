if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Accounts.ui.config({
  //passwordSignupFields: "USERNAME_ONLY"
  });

  Template.home.rendered = function() {
    $('.parallax').parallax();
    $(".button-collapse").sideNav(); // TODO: when layout is used initialize on every page
  }

  Template.home.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.home.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

