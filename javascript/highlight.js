$scope.$on("userpick", function (event, targetName, targetType, eventData) {
  PTC.Metadata.fromId(targetName)
    .then((metadata) => {
      var pathId = JSON.parse(eventData).occurrence;
      $scope.currentSelection = targetName + "-" + pathId;

      // Highlight the chosen item and set the shader to true
      $scope.hilite([$scope.currentSelection], true);

      // Use $timeout to remove the highlight after 7 seconds
      $timeout(() => {
        $scope.hilite([$scope.currentSelection], false);
      }, 3000); // Delay in milliseconds (7 seconds = 7000 ms)
    })
    .catch((err) => {
      console.log("Metadata extraction failed with reason: " + err);
    });
});

// Highlighting function. Inputs are the selected part and a boolean for highlight
$scope.hilite = function (items, hilite) {
  // Iterate over each item in the input
  items.forEach(function (item) {
    // Set the properties of the TML 3D Renderer to highlight the selected item using a TML Text shader
    tml3dRenderer.setProperties(
      item,
      hilite === true
        ? {
            shader: "green",
            hidden: false,
            opacity: 0.9,
            phantom: false,
            decal: true,
          }
        : {
            shader: "",
            hidden: false,
            opacity: 1.0,
            phantom: false,
            decal: false,
          }
    );
  });
};
