$scope.app.params.ForceHide = false; // Initial state of the ForceHide functionality

// Function to toggle ForceHide state
$scope.forceHideObject = function () {
  $scope.app.params.ForceHide = !$scope.app.params.ForceHide;

  // Update ForceHide property of the model widget
  $scope.setWidgetProp('model-1', 'ForceHide', $scope.app.params.ForceHide);
};
