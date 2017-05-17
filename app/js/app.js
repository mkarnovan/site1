angular.module('site', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
angular.module('site').controller('sliderCtrl', function ($scope) {
  var slides = $scope.slides = [];
  var currIndex = 0;
  $scope.sliders_no_wrap = false;
  $scope.active = 0;
  $scope.addSlide = function(ind) {
    slides.push({
      image: '//unsplash.it/' + ind + '/300',
      id: currIndex++
    });
  };
  for (var i = 0; i < 4; i++) {
  	var ind = Math.random() * (1000 - 600) + 600;
    $scope.addSlide(ind);
  }
});