$scope.$on('userpick', function (event, targetName, targetType, eventData) {
  PTC.Metadata.fromId(targetName)
    .then((metadata) => {
      var pathId = JSON.parse(eventData).occurrence; // variable to pull the value for the occurrence property in the eventData JSON object from the model. Create variable for the currently selected part
      $scope.currentSelection = targetName + '-' + pathId;

      // create variables based on attribute names from Creo Illustrate for this model. use metadata.get to obtain the data from the JSON properties for this occurrence.
      var partName = metadata.get(pathId, 'Display Name');
      var timeStamp = metadata.get(pathId, 'epmdoc_createTimestamp');
      var partNumber = metadata.get(pathId, 'epmdoc_desc3');
      var surface = metadata.get(pathId, 'epmdoc_SurfaceArea');
      var type = metadata.get(pathId, 'epmdoc_businessType');

      // adds an ionic popup when a part is clicked. Show the part number and name of the selected object
      var popup = $ionicPopup.show({
        template: `<div>
      				  <h5> Part Name:  ${partName} </h5> 
      					   Part Type:  ${type} </br> 
                           Part No:    ${partNumber} </br> 
                           Created At: ${timeStamp} </br>
                           Surface Area: ${surface} 
                  </div>`,
        scope: $scope,
      });

      // create a function to close the popup and turn off shading. popup is the popup, refitems is the input for the part(s) that is being highlighted
      var closePopup = function (popup, refitems) {
        //The function returns a method for removing the popup from the screen and turns off the shader
        return function () {
          $scope.hilite(refitems, false); //using the input parts, set the hilite function to be false, removing the shading
          popup.close(); //apply the .close method, which removes a certain section of a selected object, to the popup variable
        };
      };

      $timeout(closePopup(popup, [$scope.currentSelection]), 7500); //call the $timeout service which will call the function for closing the popup after 2 seconds
    })
    .catch((err) => {
      console.log('metadata extraction failed with reason : ' + err);
    });
});
