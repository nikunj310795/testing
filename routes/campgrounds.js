
var express =require('express');
var router=express.Router();
var Campground=require("../models/campground");
var middleware=require("../middleware")  // automatically will require index.js


router.get('/',function(req,res){


	Campground.find({},function(err,campgrounds){
		if(err){
			console.log(err);
		} else {
			//console.log(campgrounds[0].comments);
			res.render("campgrounds/index",{campgrounds:campgrounds});
		}
	});

});

router.post('/',middleware.isLoggedIn,function(req,res){
	
	// campgrounds.push(camp);
	console.log(req.currentUser);
	var author={
		id:req.user._id,
		username:req.user.username
	}
	//console.log(author);
	var camp={name:req.body.name,price:req.body.price,image:req.body.image,description:req.body.description,author:author};
	//console.log(camp);
	Campground.create(camp, function(err,camp){
		if(err){
			console.log(err);
		} else {
			res.redirect('/campgrounds');
		}
	});	
});

router.get('/new',middleware.isLoggedIn,function(req,res){

	res.render('campgrounds/new');

});

router.get('/:id',function(req,res){

	Campground.findById(req.params.id).populate("comments").exec(function(err,foundCamp){
		if(err){
			console.log(err);
		} else {
			//console.log(foundCamp);
			res.render("campgrounds/show",{campground:foundCamp});
		}
	});
});



router.get('/:id/edit',middleware.checkCampgroundOwnership,function(req,res){
	Campground.findById(req.params.id, function(err,foundcamp){
			res.render('campgrounds/edit', {campground:foundcamp});

	});
});

router.put("/:id",middleware.checkCampgroundOwnership,function(req,res){

	Campground.findByIdAndUpdate(req.params.id,req.body.campground, function(err,updatedCamp){
		if(err){
			res.redirect('/campgrounds');
		} else {
			res.redirect("/campgrounds/"+req.params.id);
		}
	})

});

router.delete("/:id",middleware.checkCampgroundOwnership,function(req,res){
	Campground.findByIdAndRemove(req.params.id,function(err){
		if(err){
			res.redirect("/campgrounds");
		} else {
			res.redirect("/campgrounds");
		}
	});
});



module.exports=router;