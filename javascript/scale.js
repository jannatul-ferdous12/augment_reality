//Function to adjust the scale of the model using a slider. Paste into the event "Value Changed"

$scope.adjustModelScale = function() {
    // Get the slider value. Make sure to use the correct slider ID.
    var sliderValue = $scope.view.wdg['slider-1'].value;

    // Calculate scale based on slider value (assuming slider value ranges from 0 to 10)
    var scale = sliderValue / 10;


    // Set the scale of the model-1 object using the app parameter
    $scope.app.params.scale = scale;

    // Set the scale of the model, use the correct model ID.
    $scope.setWidgetProp('model-1', 'scale', {x: scale, y: scale, z: scale});
};
