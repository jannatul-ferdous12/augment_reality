$scope.app.params.move = 0;
$scope.app.params.sideMove = 0;
$scope.app.params.rotate = 0;

$scope.steps = {
    forward: 0,
    backward: 0,
  	right: 0,
  	left: 0,
    rotation: 0
};

// Function to update step counter based on movement type
function trackSteps(movementType) {
    switch (movementType) {
        case 'forward':
            $scope.steps.forward += 1;
            break;
        case 'backward':
            $scope.steps.backward += 1;
            break;
        case 'right':
            $scope.steps.right += 1;
            break;
        case 'left':
            $scope.steps.left += 1;
            break;
        case 'rotation+':
            $scope.steps.rotation += 1;
            break;
        case 'rotation-':
            $scope.steps.rotation -= 1;
            break;
        default:
            break;
    }
    updateStepText();
}



$scope.moveForward = function() {
  $scope.app.params.move +=0.2;
  trackSteps('forward');
};

$scope.moveBackward = function() {
  $scope.app.params.move -=0.2;
  trackSteps('backward');
};

$scope.moveRight = function() {
  $scope.app.params.sideMove -=0.2;
  trackSteps('right');
};

$scope.moveLeft = function() {
  $scope.app.params.sideMove +=0.2;
  trackSteps('left');
};

$scope.rotate = function() {
  $scope.app.params.rotate += 45;
  trackSteps('rotation+');
};

$scope.rotatemiinus = function() {
  $scope.app.params.rotate -= 45;
  trackSteps('rotation-');
};


// Function to update the text content
// Update text content of a Text widget with id 'stepTextWidget'
function updateStepText() {
  // Calculate rotation in degrees within the range of 0 to 360 degrees
  var rotationDegrees = ($scope.steps.rotation * 45) % 360;
  
  // Each step represents 45 degrees rotation
  // Ensure rotation is within the range of 0 to 360 degrees
  rotationDegrees = rotationDegrees < 0 ? 360 + rotationDegrees : rotationDegrees;
  $scope.view.wdg['stepTextWidget'].text = "Forward: " + $scope.steps.forward + ", Backward: " + $scope.steps.backward +  "\nRight: " + $scope.steps.right + ", Left: " + $scope.steps.left +"\nRotation: " + rotationDegrees + "°";

  // Show the widget
  $scope.view.wdg['stepTextWidget'].visible = true;

  // Hide the widget after 1.5 second
  $timeout(function() {
    $scope.view.wdg['stepTextWidget'].visible = false;
  }, 1500);
}