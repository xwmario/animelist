/**
 * Created by leniglo on 01/01/16.
 */

Router.configure({
    layoutTemplate: 'mainLayout',
    loadingTemplate: 'loader',
    onBeforeAction: function() {
        GAnalytics.pageview();
        this.next();
    }
});

Router.route('/', {
    template: 'home',
    name: 'home',
    waitOn: function () {
        return Meteor.subscribe('myShows');
    },
    onBeforeAction: function () {
        if (!Meteor.user() && !Meteor.loggingIn())
            this.redirect('/login');
        this.next();
    }
});

Router.route('/login', {
    template: 'login',
    name: 'login',
    onBeforeAction: function () {
        if (Meteor.user())
            this.redirect('/');
        this.next();
    }
});

Router.route('/register', {
    template: 'register',
    name: 'register',
    onBeforeAction: function () {
        if (Meteor.user())
            this.redirect('/');
        this.next();
    }
});

