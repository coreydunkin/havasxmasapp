console.log('hello');

var app = angular.module( 'myApp', [] );


// Controller for slides
app.controller( 'MainCtrl', function( $scope, $interval, $timeout, $window, $http ) {
  
  // we control our app from here
  $scope.textBox = 'sometext';


});

app.directive("myDirective", function() {


var linkFn = function (scope, lElement, attrs, controller) {
// Set up slides

console.log('stephane');
console.log('asdd');
jQuery('body').addClass('boop');

$('#onepage').fullpage({
    // anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    easing: 'easeInQuart',
    easingcss3: 'ease',
    afterLoad: function(anchorLink, index){
        //using index
        if(index == 2){
        	controllerSlideTwo();
        }

        // //using anchorLink
        // if(anchorLink == 'secondSlide'){
        //     alert("Section 2 ended loading");
        // }
    }
});

  // Set up main nav
  // $.fn.fullpage.setAllowScrolling(false);

  $('a.btn.down').on('click', function() {

  	$.fn.fullpage.moveSectionDown();
  });

  function controllerSlideTwo() {
  	console.log('yeah');
  };
  scope.controllerSlideTwo = controllerSlideTwo;
};

return {
    restrict: 'A',
    link: linkFn
};
});

