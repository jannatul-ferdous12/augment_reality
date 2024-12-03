$scope.app.params.alwaysOnTop = false; // Initial state of always on top checkbox

// Function to toggle always on top state
$scope.toggleAlwaysOnTop = function () {
  $scope.app.params.alwaysOnTop = !$scope.app.params.alwaysOnTop;

  // Update rendering based on the checkbox state
  $scope.setWidgetProp("model-1", "alwaysOnTop", $scope.app.params.alwaysOnTop);
};
