require('express-namespace');

/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes/public.js')
  , adminRoutes = require('./routes/admin.js')
  , mongoose = require('mongoose');

var app = module.exports = express.createServer();

// Helpers
app.dynamicHelpers({
  session: function(req, res){
    return req.session;
  },
  flash: function(req, res) {
    return req.flash();
  }
});

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('db', mongoose.connect(process.env.MONGOHQ_URL) );
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({secret: 'knoetchalewelake1sd'}));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/volunteers', routes.volunteers);
app.get('/code_of_conduct', routes.codeOfConduct);
app.get('/board_of_directors', routes.boardOfDirectors);
app.get('/fields', routes.fields);
app.get('/lost_and_found', routes.lostAndFound);
app.get('/registration', routes.registration);
app.get('/sponsors', routes.sponsors);
app.get('/boosters', routes.boosters);
app.get('/calendar', routes.calendar);
app.get('/login', routes.login);
app.post('/login', routes.authenticate);
app.get('/logout', routes.logout);


app.namespace('/admin', function() {
  app.all('/*', adminRoutes.checkAuthentication);
    
  app.get('/board_of_directors', adminRoutes.adminBoardOfDirectors);
  
  app.get('/board_of_directors_edit/:id', adminRoutes.adminBoardOfDirectorsEdit);
  app.post('/board_of_directors_edit/:id', adminRoutes.adminBoardOfDirectorsUpdate);
  
  app.get('/board_of_directors_form', adminRoutes.adminBoardOfDirectorsForm);
  app.post('/board_of_directors_form', adminRoutes.adminBoardOfDirectorsCreate);
  
});


app.listen(process.env.PORT);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
