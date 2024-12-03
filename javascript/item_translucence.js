// Function to set the translucence of an item
function setTranslucence(itemName, opacityValue) {
    var item = $scope.view.wdg[itemName];
    if (item) {
        item.opacity = opacityValue;
    } else {
        console.error("Item '" + itemName + "' not found.");
    }
}
// Example usage:
var itemName = 'itemName'; // Replace 'itemName' with the actual name 
var opacityValue = 0.5; // Adjust the opacity value as needed, between 0 (fully transparent) and 1 (fully opaque)
setTranslucence(itemName, opacityValue);
