app.controller("mainController", ["$scope", "photoFactory", function ($scope, photoFactory) {
    "use strict";
     $scope.photos = photoFactory.photos;
     $scope.addPhoto = photoFactory.addPhoto;   
     $scope.removePhoto = photoFactory.removePhoto;

        $scope.addPhoto = function() {
         var newPhoto = {
            name: $scope.name,
            type: $scope.type,
            location: $scope.location,
            image: $scope.image,
            ratings: [],
            averageRating: 0
        };
        photoFactory.addPhoto(newPhoto);
    }

}]);