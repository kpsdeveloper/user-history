Router.route('/popup', {
    name: 'popup',
    /*data:function(){
        var pop = popup.find({field:forum});
        return pop;
    },
    events:function(){
        var events = events.find({_id:pop});
    }*/
});
Router.route('/popup/view/:_id', {
    name: 'viewpopup',
    data:function(){
    	return popup.findOne({_id: this.params._id});
    }
});
Router.route('/popup/edit/:_id', {
    name: 'editpopup',
    data:function(){
    	return popup.findOne({_id: this.params._id});
    }
});