var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "To us, camping is all about finding those extra-special places to camp. Our team has spent years searching the UK for the very best campsites and glamping sites in England, Scotland and Wales (and throughout Europe too). Between this website and our guidebook series, you can discover our most-loved campsites. At Tent HQ, we don't judge campsites on the number of showers or electricity hook-ups. We're more interested in the location, the view, the ambience, and whether it allows campfires. We understand that different people are looking for different camping experiences; families need half-decent facilities and plenty of room for the kids, couples need peace and quiet, walkers want to explore straight from the tent, and who doesn't love glamping (luxury camping) every now and then in a yurt, tipi or treehouse! But whatever you're looking for, as long as you favour the characterful rather than the commercial, smaller rather than larger sites, and value location or views over pristine facilities, then you're in the right place for discovering the very best campsites in the UK, France and a growing list of other European countries."
    },
    {
        name: "Desert Mesa", 
        image: "https://farm4.staticflickr.com/3859/15123592300_6eecab209b.jpg",
        description: "To us, camping is all about finding those extra-special places to camp. Our team has spent years searching the UK for the very best campsites and glamping sites in England, Scotland and Wales (and throughout Europe too). Between this website and our guidebook series, you can discover our most-loved campsites. At Tent HQ, we don't judge campsites on the number of showers or electricity hook-ups. We're more interested in the location, the view, the ambience, and whether it allows campfires. We understand that different people are looking for different camping experiences; families need half-decent facilities and plenty of room for the kids, couples need peace and quiet, walkers want to explore straight from the tent, and who doesn't love glamping (luxury camping) every now and then in a yurt, tipi or treehouse! But whatever you're looking for, as long as you favour the characterful rather than the commercial, smaller rather than larger sites, and value location or views over pristine facilities, then you're in the right place for discovering the very best campsites in the UK, France and a growing list of other European countries."
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "To us, camping is all about finding those extra-special places to camp. Our team has spent years searching the UK for the very best campsites and glamping sites in England, Scotland and Wales (and throughout Europe too). Between this website and our guidebook series, you can discover our most-loved campsites. At Tent HQ, we don't judge campsites on the number of showers or electricity hook-ups. We're more interested in the location, the view, the ambience, and whether it allows campfires. We understand that different people are looking for different camping experiences; families need half-decent facilities and plenty of room for the kids, couples need peace and quiet, walkers want to explore straight from the tent, and who doesn't love glamping (luxury camping) every now and then in a yurt, tipi or treehouse! But whatever you're looking for, as long as you favour the characterful rather than the commercial, smaller rather than larger sites, and value location or views over pristine facilities, then you're in the right place for discovering the very best campsites in the UK, France and a growing list of other European countries."
    }
]

function seedDB(){
   //Remove all campgrounds
  Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
         //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }); 
    //add a few comments
}

module.exports = seedDB;
