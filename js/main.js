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
  $scope.imageTemplate = [];

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
    // Define imageTemplate
    $scope.imageTemplate = [];
    console.log($scope.imageTemplate);

    // Fadein transition for all pattern choices
    $('.image-choice.one')
    .removeClass('fadeOut')
    .addClass('animated bounceInUp');
    
    $('.image-choice.two')
	  .removeClass('fadeOut')
    .addClass('animated bounceInUp');
    
    $('.image-choice.three')
	  .removeClass('fadeOut')
    .addClass('animated bounceInUp');

    // On mouseenter and mouseleave show info
    $('.image-choice').on('mouseenter', function() {
    	var infoBox = $(this).find('.info');
    	var infoBoxActive = $(this).find('.info.active');    	
		  TweenLite.to(infoBox, 0.2, {bottom:"0px", ease:Linear.easeOut});
    });
    $('.image-choice').on('mouseleave', function() {
    	var infoBox = $(this).find('.info');
    	var infoBoxActive = $(this).find('.info.active');
		  
      if ($(infoBox).find('.tick-container .icon').hasClass('active')) {
        TweenLite.to(infoBox, 0.2, {bottom:"0px", ease:Linear.easeOut});
      } else {
        TweenLite.to(infoBox, 0.2, {bottom:"-100px", ease:Linear.easeOut});
      }
    });

    // Choose pattern and apply to array for pattern
    $('.image-choice').unbind('click').bind('click', function() {

    	var tick = $(this).find('.info .icon');
    	var info = $(this).find('.info');
    	
      if ($(this).hasClass('active')) {
        // Clear pattern selection
        $scope.imageTemplate = [];
        console.log($scope.imageTemplate);

        $(this).removeClass('active');

      } else {
        
        $('.image-choice').removeClass('active');
        $(this).addClass('active');
        

        // Make pattern selection
        if ($('.image-choice.one').hasClass('active')) {
          $scope.imageTemplate = '/img/patterns/pattern1-preview.jpg';
          $scope.imagePattern = '/img/patterns/pattern1.png';
        }
        if ($('.image-choice.two').hasClass('active')) {
          $scope.imageTemplate = '/img/patterns/pattern2-preview.jpg';
          $scope.imagePattern = '/img/patterns/pattern2.png';
        }
        if ($('.image-choice.three').hasClass('active')) {
          $scope.imageTemplate = '/img/patterns/pattern3-preview.jpg';
          $scope.imagePattern = '/img/patterns/pattern3.png';
        }
        console.log($scope.imageTemplate);

      }

      if ($(tick).hasClass('active')) {
			
      $('.image-choice .info .icon')
      .removeClass('active animated bounceIn')
      .addClass('hidden');

			$(tick)
			.removeClass('active animated bounceIn')
			.addClass('hidden');

    	} else {
        TweenLite.to('.image-choice .info', 0.2, {bottom:"-100px", ease:Linear.easeOut});
    		TweenLite.to(info, 0.2, {bottom:"0px", ease:Linear.easeOut});
        

  			$('.image-choice .info .icon')
  			.removeClass('active animated bounceIn')
  			.addClass('hidden');

  			$(tick)
  			.addClass('active animated bounceIn')
  			.removeClass('hidden');
      }

    });
    // Reset pattern on page three before loading page three
    $('#thirdPage .row').addClass('hidden').removeClass('animated bounceInLeft');   
  };  

  // FUNCTION FOR SLIDE THREE
  $scope.controllerSlideThree = function() {
    
    $timeout(function() {
      $scope.imagePattern;
      console.log($scope.imagePattern);
      // Animate in pagethree
      $('#thirdPage .row').removeClass('hidden').addClass('animated bounceInLeft');      
    });

    //$scope.imageTemplate;
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

