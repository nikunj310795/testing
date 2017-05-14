var express      =require('express'),
    app          =express(),
    bodyParser   =require('body-parser'),
    User=require("./models/user"),
    Campground= require('./models/campground'),
    Comment= require('./models/comment'),
    seedDB= require('./seeds'),
    mongoose     =require('mongoose'),
    passport=require("passport"),
    methodOverride=require('method-override'),
    LocalStrategy=require("passport-local"),
    flash=require("connect-flash");


var commentRoutes=require("./routes/comments"),
	campgroundsRoutes=require("./routes/campgrounds"),
	indexRoutes=require("./routes/index")

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');
app.use(express.static(__dirname+"/public"));
app.use(methodOverride("_method"))

//seedDB();  //Seed the database

//================================


app.use(require("express-session")({
	secret:"told You",
	resave:false,
	saveUninitialized:false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(function(req,res,next){
	res.locals.currentUser=req.user;
	res.locals.error= req.flash("error");
	res.locals.success= req.flash("success");
	next();
});



app.use("/",indexRoutes);
app.use("/campgrounds",campgroundsRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);


app.listen(3000,function(){
	console.log("Server has started");
});