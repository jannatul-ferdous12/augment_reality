$$scope.app.params.Occluding = false; // Initial state of the occluding functionality

// Function to toggle occluding state
$scope.toggleOccluding = function () {
  $scope.app.params.Occluding = !$scope.app.params.Occluding;

  // Update occluding property of the model widget
  $scope.setWidgetProp("model-1", "occlude", $scope.app.params.Occluding);
};