Template.commendotion.helpers({
	dotion: function(){
		return products.find();
	},
	getImage: function(id){

            var img = images.findOne({_id:id});
            console.log(img);
            
            if(img){
                console.log(img.copies.images.key);
                return img.copies.images.key;
            }else{
                return;
            }
    }
});
Template.commendotion.onRendered(function () {

  var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 3,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 20,
    });

  
});