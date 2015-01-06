cc = function(a) {console.log(a)}
var myApp = angular.module( 'myApp', [ 'ngAnimate' ] );

myApp.controller( 'mainCtrl', function( $scope, $timeout ) {
  $scope.currentIndex = 0;
  $scope.canScrollLeft = false;
  $scope.canScrollRight = true;

  $scope.data = [ {
    "date": "Friday",
    "grade": "A: I am a Fullstack Rails Web Developer. "
  }, {
    "date": "2014-12-13",
    "grade": "B: Passions - Javascript, Ruby, Rails"
  }, {
    "date": "2014-12-14",
    "grade": "C"
  }, {
    "date": "2014-12-15",
    "grade": "D"
  } ];

  $scope.scroll = function( direction ) {
    if ( direction == 'left' ) {
      $timeout( function() { // timeout to allow direction class to update before changing currentPage
        //decrement currentIndex (if possible)
cc($scope.currentIndex)
        if ( $scope.currentIndex !== 0 ) {
          $scope.direction = 'moveLeft';
          $scope.currentIndex--;
          $scope.canScrollRight = true;

          if ( $scope.currentIndex == 0 ) {
            $scope.canScrollLeft = false;
          }
        }
      }, 0 )
    } else if ( direction == 'right' ) {
      $timeout( function() { // timeout to allow direction class to update before changing currentPage
        //increment currentIndex (if possible)
        cc($scope.currentIndex)
        if ( $scope.data[ $scope.currentIndex + 1 ] ) {
          $scope.direction = 'moveRight';
          $scope.currentIndex++;
          $scope.canScrollLeft = true;

          if ( ( $scope.currentIndex ) === ( $scope.data.length - 1 ) ) {
            $scope.canScrollRight = false;
          }
        }

      }, 0 )

    }
  };
} );
