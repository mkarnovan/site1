"use strict"
const passport = require('koa-passport');
const GithubStrategy = require('passport-github').Strategy;
passport.use(new GithubStrategy({
    clientID: '96076a4375a15b530f43',
    clientSecret: '46614445894575d531045162ad2461fe79d9a4db',
    callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    let user = profile;
    return done(null, user);
  })
);
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});
module.exports = passport;
