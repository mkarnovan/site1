"use strict"
const router = require('koa-router');
const  passport = require('./auth');
const  koa = require('koa');
const  app = koa();
function *reqlogger(next){
  yield next;
}
app.use(reqlogger);
app.use(passport.initialize());
app.use(router(app));
app.get('/', function *(){
  this.body = "This is root page";
});
const publicRouter = new router();
publicRouter.get('/auth/github', passport.authenticate('github', {scope: ['user','repo']}));
publicRouter.get('/auth/github/callback',
  passport.authenticate('github', {successRedirect:'/', failureRedirect: '/'})
);
app.use(publicRouter.middleware());
const securedRouter = new router();
function *authed(next){
  if (this.req.isAuthenticated()){
    yield next;
  } else {
    this.redirect('/auth/github');
  }
}
securedRouter.get('/app', authed, function *(){
  this.body = 'Thats done\n' + JSON.stringify(this.req.user, null, '\t');
});
app.use(securedRouter.middleware());
app.use(function *(){
  this.body = 'Hello World';
  });
app.listen(3000);
