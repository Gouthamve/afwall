var mongoose = require('mongoose');
// Create a new schema for our tweet data
var schema = new mongoose.Schema({
      tweet :{
      text: String, 
      truncated: Boolean, 
      in_reply_to_user_id: String, 
      in_reply_to_status_id: String, 
      favorited: Boolean, 
      source: String, 
      in_reply_to_screen_name: String, 
      in_reply_to_status_id_str: String, 
      id_str: String, 
      entities: {
            user_mentions: [
                  {
                        indices: [
                             Number
                        ], 
                        screen_name: String, 
                        id_str: String, 
                        name: String, 
                        id: String
                  }
            ], 
            urls: [ ], 
            hashtags: [ ]
      }, 
      contributors: String, 
      retweeted: Boolean, 
      in_reply_to_user_id_str: String, 
      place: String, 
      retweet_count: String, 
      created_at: String, 
      retweeted_status: {
            text: String, 
            truncated: Boolean, 
            in_reply_to_user_id: String, 
            in_reply_to_status_id: String, 
            favorited: Boolean, 
            source: String, 
            in_reply_to_screen_name: String, 
            in_reply_to_status_id_str: String, 
            id_str: String, 
            entities: {
                  user_mentions: [String ], 
                  urls: [ String], 
                  hashtags: [
                        {
                              text: String, 
                              indices: [
                                    Number
                              ]
                        }
                  ]
            }, 
            contributors: String, 
            retweeted: Boolean, 
            in_reply_to_user_id_str: String, 
            place: String, 
            retweet_count: String, 
            created_at: String, 
            user: {
                  notifications: String, 
                  profile_use_background_image: Boolean, 
                  statuses_count: String, 
                  profile_background_color: Number, 
                  followers_count: Number, 
                  profile_image_url: String, 
                  listed_count: Number, 
                  profile_background_image_url: String, 
                  description: String, 
                  screen_name: String, 
                  default_profile: Boolean, 
                  verified: Boolean, 
                  time_zone: String, 
                  profile_text_color: String, 
                  is_translator: Boolean, 
                  profile_sidebar_fill_color: String, 
                  location: String, 
                  id_str: Number, 
                  default_profile_image: Boolean, 
                  profile_background_tile: Boolean, 
                  lang: String, 
                  friends_count: Number, 
                  protected: Boolean, 
                  favourites_count: Number, 
                  created_at: String, 
                  profile_link_color: String, 
                  name: String, 
                  show_all_inline_media: Boolean, 
                  follow_request_sent: String, 
                  geo_enabled: Boolean, 
                  profile_sidebar_border_color: String, 
                  url: String, 
                  id: Number, 
                  contributors_enabled: Boolean, 
                  following: String, 
                  utc_offset: String
            }, 
            id: String, 
            coordinates: String, 
            geo: String
      }, 
      user: {
            notifications: String, 
            profile_use_background_image: Boolean, 
            statuses_count: Number, 
            profile_background_color: String, 
            followers_count: Number, 
            profile_image_url: String, 
            listed_count: Number, 
            profile_background_image_url: String, 
            description: String, 
            screen_name: String, 
            default_profile: Boolean, 
            verified: Boolean, 
            time_zone: String, 
            profile_text_color: String, 
            is_translator: Boolean, 
            profile_sidebar_fill_color: String, 
            location: String, 
            id_str: Number, 
            default_profile_image: Boolean, 
            profile_background_tile: Boolean, 
            lang: String, 
            friends_count: Number, 
            protected: Boolean, 
            favourites_count: Number, 
            created_at: String, 
            profile_link_color: String, 
            name: String, 
            show_all_inline_media: Boolean, 
            follow_request_sent: String, 
            geo_enabled: Boolean, 
            profile_sidebar_border_color: String, 
            url: String, 
            id: String, 
            contributors_enabled: String, 
            following: String, 
            utc_offset: String
      }, 
      id: String, 
      coordinates: String, 
      geo: String
}});

// Create a static getTweets method to return tweet data from the db
schema.statics.getTweets = function(callback) {

  var tweets = [];

  // Query the db, using skip and limit to achieve page chunks
  Tweet.find({},{limit: 68}).sort({date: 'desc'}).exec(function(err,docs){

    // If everything is cool...
    // if(!err) {
      // tweets = docs;  // We got tweets
      // tweets.forEach(function(tweet){
      //   tweet.active = true; // Set them to active
      // });
    // }

    // Pass them back to the specified callback
    callback(tweets);

  });

};

// Return a Tweet model based upon the defined schema
module.exports = Tweet = mongoose.model('Tweet', schema);