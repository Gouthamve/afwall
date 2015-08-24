var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TheAugustFest live social wall by IoT HackDay' });
});

/*POST messages*/
router.post('/messages', function(req, res) {
 //console.log(req.body);
    res.sendFile(path.join(__dirname + '/messages.json'));

});

/* GET config . */
router.get('/config', function(req, res, next) {
  res.json(
{messageprovider:{
	type:"beam.messageprovider.APIMessageProvider",
	apimessageprovider:{
		pictures_only:false,
		api_request:{
			sources:[
				{"twitter.Search":{query:"#awesome",count:100}},
				{"instagram.TagMedia":{tag:"awesome",count:30}}
		      ],
			  filters:[{ExcludeRetweets:{}}]
			}
		}
	}
   ,view:{type:"beam.view.classic.ClassicView",
	   classic:{message_tag: "TheAugustFest",
		   show_instagram_logo:true,
		    message_prefix:"Tag your posts with",
			fake_swaps:true,
			swap_interval:500,
			licensed:true,
			branding_content:""
			}
			}
	}
);
});

router.get('/view/templates', function(req, res, next) {
  res.render('templates');
});
module.exports = router;
