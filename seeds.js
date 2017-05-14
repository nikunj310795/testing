var mongoose=require("mongoose"),
    Campground=require("./models/campground");
    Comment=require("./models/comment");


var data=[
	{
	name:"Hell's Kitchen",
	image:"https://doc.babylonjs.com/img/extensions/materials/lava.jpg",
	description:"blah blah blah blah Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmotempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
	name:"Pete's Dragon",
	image:"http://img10.deviantart.net/e984/i/2015/287/c/5/red_dragon_by_sandara-d6hpycs.jpg",
	description:"blah blah blah blah Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmotempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
	name:"Messy Place",
	image:"http://s3.amazonaws.com/kidzworld_photo/images/201221/52da8b2a-ddde-4c63-888f-83336f43a59a/gallery_messy%20room_gallery.jpg",
	description:"blah blah blah blah Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmotempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}

]


function seedDB(){
	Campground.remove({}, function(err){
		// if(err){
		// 	console.log(err);
		// }
		// console.log("Removed Campgrounds");
		// data.forEach(function(Camp){
		// 	Campground.create(Camp,function(err,campground){
		// 		if(err){
		// 			console.log(err);
		// 		} else {
		// 			console.log("Campground Created");
		// 			Comment.create({
		// 				text:"I wish it had internet",
		// 				author:"Homer"
		// 			},function(err,comment){
		// 				if(err){
		// 					console.log(err);
		// 				} else {
		// 					campground.comments.push(comment);
		// 					campground.save();
		// 					console.log("created new comment");

		// 				}
		// 			});
		// 		}
		// 	});
		// });
	});
	Comment.remove({}, function(err){

	});
}

module.exports=seedDB;