
products = new Meteor.Collection('products');// collection products
categories = new Meteor.Collection('categories');// collection categories
shops = new Meteor.Collection('shops');
parent_tags = new Meteor.Collection('parent_tags');
tags = new Meteor.Collection('tags');
stats = new Mongo.Collection('stats');

images = new FS.Collection("images", {
    stores: [new FS.Store.FileSystem("images", {path:  Meteor.rootPath +"/newsafir/public/upload"})]
});
parentattr = new Mongo.Collection('parentattr');
attribute = new Mongo.Collection('attribute');
favorite = new Mongo.Collection('favorite');