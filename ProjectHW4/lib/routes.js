import {Profiles} from '../imports/api/profiles.js'

Router.route('/p/:_id', function () {
  var params = this.params; // { _id: "5" }
  var id = params._id; // "5"
  this.render("profile");
}, {
    name: 'profile'
});

Router.route('/new', function () {
  this.render("new");
});

Router.route('/example', function() {
  this.render("example")
});

Router.route('/', function() {
  this.render("home");
});
