/**
 * Created by Yibo on 8/26/2015.
 */
var hp = angular.module('yoApp');
hp.controller("HpCtrl", function ($scope, $http) {
      $scope.name = 'The Huffington Post';
  $scope.hpMedia  =   {};
  $scope.hpMedia.iframeComment  =   'Sites like The Huffington Post  have many articles and posts about the 2016 Election, but it is difficult to know all the topics covered and the sentiment behind the discussions in this large amount of unstructured data.';
  $scope.hpMedia.containerShow    =   true;
  $scope.hpMedia.analysisShow    =   false;
});
