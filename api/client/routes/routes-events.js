//event
Router.route('/events', {
    name: 'events'
});
Router.route('/events/view/:_id', {
    name: 'viewevents',
    data:function(){
        return events.findOne({_id: this.params._id});
    }
});
Router.route('/events/edit/:_id', {
    name: 'editevents',
    data:function(){
        return events.findOne({_id: this.params._id});
    }
});