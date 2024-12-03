//code for using a slider to change the opacity (level of visibility) of a model.

$scope.adjustModelOpacity = function() {
    // get the slider value. make sure to adjust the slider-ID, here 'slider', but could be 'slider-1' etc.
    var sliderValue = $scope.view.wdg['slider'].value;

    // Calculate opacity based on slider value (assuming slider value ranges are set to be from 0 to 10)
    var opacity = sliderValue / 10;

    // Set the opacity of the model-1 object
    $scope.setWidgetProp('model-1', 'opacity', opacity);
};
