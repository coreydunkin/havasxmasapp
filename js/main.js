console.log('hello');

var app = angular.module( 'myApp', [] );

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

        // Set up main nav
        // $.fn.fullpage.setAllowScrolling(false);

        $('a.btn.down').on('click', function() {

          $.fn.fullpage.moveSectionDown();
        });
    };
    // return {
    //     restrict: 'A',
    //     scope: {
    //     },
    //     link: slideInit,
    //     controller:function($scope){
    //         console.info("enter directive controller");
    //         $scope.gallery = [];
    //         $scope.message = 'POOPY';



    //     }
    // };
});

// Controller for slides
app.controller( 'MainCtrl', function( $scope, $interval, $timeout, $window, $http ) {
  
  // we control our app from here
  $scope.textBox = 'sometext';

  // FUNCTION FOR SLIDE ONE
  $scope.controllerSlideOne = function() {
    console.info('Slide One');
  };

  // FUNCTION FOR SLIDE TWO
  $scope.controllerSlideTwo = function() {
    console.info('Slide Two');
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


