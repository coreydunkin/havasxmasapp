console.log('hello');

var app = angular.module( 'myApp', [] );


// Controller for slides
app.controller( 'MainCtrl', function( $scope, $interval, $timeout, $window, $http ) {
  
  // we control our app from here
  $scope.textBox = 'sometext';
  // Background image for slide 2
  $scope.backimgOne = '/img/patterns/pattern1-preview.jpg';
  $scope.backimgTwo = '/img/patterns/pattern2-preview.jpg';
  $scope.backimgThree = '/img/patterns/pattern3-preview.jpg';

  // FUNCTION FOR SLIDE ONE
  $scope.controllerSlideOne = function() {
    console.info('Slide One');
    
    $('.hero-box')
    .removeClass('hidden')
    .addClass('animated bounceInLeft');
    
    $('.image-choice')
    .addClass('animated fadeOut');
  };

  // FUNCTION FOR SLIDE TWO
  $scope.controllerSlideTwo = function() {
    console.info('Slide Two');
    
    $('.image-choice.one')
    .removeClass('fadeOut')
    .addClass('animated fadeIn');
    
    $('.image-choice.two')
	.removeClass('fadeOut')
    .addClass('animated fadeIn');
    
    $('.image-choice.three')
	.removeClass('fadeOut')
    .addClass('animated fadeIn');

    $('.image-choice').on('mouseenter', function() {
    	var infoBox = $(this).find('.info');
    	var infoBoxActive = $(this).find('.info.active');    	
		TweenLite.to(infoBox, 0.2, {bottom:"0px", ease:Linear.easeOut});
    });
    $('.image-choice').on('mouseleave', function() {
    	var infoBox = $(this).find('.info');
    	var infoBoxActive = $(this).find('.info.active');
		TweenLite.to(infoBox, 0.2, {bottom:"-100px", ease:Linear.easeOut});
    });

    $('.image-choice').unbind('click').bind('click', function() {
    	console.log('click');
    	var tick = $(this).find('.info .icon');
    	var info = $(this).find('.info');
    	if ($(tick).hasClass('active')) {
			
			$(tick)
			.removeClass('active animated bounceIn')
			.addClass('hidden');
    	} else {

    		TweenLite.to(info, 0.2, {bottom:"0px", ease:Linear.easeOut});

			$('.image-choice .info .icon')
			.removeClass('active animated bounceIn')
			.addClass('hidden');

			$(tick)
			.addClass('active animated bounceIn')
			.removeClass('hidden');
    	}
    });

  };  

  // FUNCTION FOR SLIDE THREE
  $scope.controllerSlideThree = function() {
    console.info('Slide Three');
  };

  // FUNCTION FOR SLIDE FOUR
  $scope.controllerSlideFour = function() {
    console.info('Slide Four');
  };

});

// SETTING UP SLIDE FUNCTIONS
app.directive('mySlide', function () {

    var slideInit = function (scope, lElement, attrs, controller, element) {
      // Set up slides
    };
  
    return function (scope, element, attrs) {
      $('#onepage').fullpage({
          //Scrolling
          css3: true,
          scrollingSpeed: 700,
          easing: 'easeInQuart',
          easingcss3: 'ease',
          afterRender: function(){
                scope.controllerSlideOne();
          },
          afterLoad: function(anchorLink, index){
              //using functions for each slide
              if(index == 1){
                scope.controllerSlideOne();
              }
              if(index == 2){
                scope.controllerSlideTwo();
              }
              if(index == 3){
                scope.controllerSlideThree();
              }                                          
              if(index == 4){
                scope.controllerSlideFour();
              }
          }
      });

        $('a.btn.down').on('click', function() {

          $.fn.fullpage.moveSectionDown();
        });
    };

});

