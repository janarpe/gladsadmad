if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Accounts.ui.config({
  //passwordSignupFields: "USERNAME_ONLY"
  });

  Template.home.onRendered(function() {
    $('.parallax').parallax();
    $(".button-collapse").sideNav(); // TODO: when layout is used initialize on every page
  })

  Template.dashboard.onRendered(function () {
    console.log("hi");
    $('.parallax').parallax();
    $(".button-collapse").sideNav(); // TODO: when layout is used initialize on every page
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

