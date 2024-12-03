// Toggling the visibility of a model

$scope.toggleVisibility = function() {
    // Get the current visibility status of the model
    var currentVisibility = $scope.view.wdg['model-1'].visible;

    // Toggle the visibility status
    $scope.setWidgetProp('model-1', 'visible', !currentVisibility);
};