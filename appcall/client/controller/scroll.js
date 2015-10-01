
//Rendered Scrolling
Template.scroll.onRendered(function () {
  myScroll = new IScroll('#wrapper', {
		scrollbars: true,
		mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		fadeScrollbars: true
	});
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
}
);
//get product to list
Template.scroll.helpers({
	getProduct:function(){
		var result=products.find();
		
		return result;
	},
	getImage: function(id){

            var img = images.findOne({_id:id});
            //console.log(img);
            
            if(img){
                //console.log(img.copies.images.key);
                var obj= img.copies.images.key;
                
                return obj;
            }else{
                return;
            }
    }
})