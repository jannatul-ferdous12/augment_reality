// $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available

////////////////////////////////////////////
// This is the highest level function in this code and when the model that is being used loaded 
// the function calls:
// 1. populateList() -> it creates individual buttons for each step 
// 2. goList() -> when the step number of that model's sequence changes the
//    CURRENT_STEP value gets updated and sequence1 function gets called with that
//    step value. 
$rootScope.$on('modelLoaded', function () {
  $scope.populateList();

  $scope.goList = function (event, data) {
    //set the selected value to the current_step parameter
    $scope.app.params.CURRENT_STEP = data.value;
    $scope.sequence1($scope.app.params.CURRENT_STEP);
  };
});

// This is a function that creates buttons under the list widget that are connected to each step 
// of a sequence add or remove list values depending on the amount of step the model imported has.
//
$scope.populateList = function () {
  var listvalue = [
    {
      display: 'Step 1',
      value: 1,
    },
    {
      display: 'Step 2',
      value: 2,
    },
    {
      display: 'Step 3',
      value: 3,
    },
  ];

  // Change the 'list-1' if the widget id is something else
  console.log(listvalue);
  $scope.view.wdg['list-1']['list'] = listvalue;
  $scope.view.wdg['list-1']['label'] = 'display';
};


$scope.sequence1 = function (data) {
  $scope.$applyAsync(() => {
    // Change 'model-1' if the model id is something else than that
    angular.element(document.getElementById('model-1')).scope().reset();
  });
  //does not work synchronously
  //$scope.view.wdg['model-1']['currentStep']=1;
  //delay of .5 sec to be sure that all action are done
  $timeout(function () {
    $scope.$applyAsync(() => {
      // Change the clutch according to what is the downloaded model is name after
      $scope.setWidgetProp('clutch', 'currentStep', data);
    });
    //further delay for a 0.5 sec to be sure that the step is set and then play
    $timeout(function () {
      // Change the clutch according to what is the downloaded model is name after
      $scope.$root.$broadcast('app.view["Home"].wdg["clutch"].svc.play');
    }, 500);
  }, 500);
};

