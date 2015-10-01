
Meteor.publish("pages", function () {
  return pages.find({});
});