Router.configure({
  layoutTemplate: 'main-layout'
});

Router.route('/', {
  template: 'home',
  onBeforeAction: function(){
    var currentUser = Meteor.userId();
    if(currentUser){
        this.render("dashboard");
    } else {
      this.next();
    }
  }
});

