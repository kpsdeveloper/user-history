Router.route('page', {
  path: '/page',
  template: 'page'
});
Router.route('/page/edit/:_id', {
    template: 'editpage',
	data:function(){
		return pages.findOne({_id: this.params._id});
	}
	
});