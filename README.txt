Vuforia Studio AR project
File created by Jennifer Hensley, Team AR-2


This README is meant to help students who will work on this project in the future.

#################### Installation/Programs ###########################
- Vuforia Studio for Windows
- Vuforia View for mobile phones
- Creo Illustrate

################### Start a project ##################################

Open Vuforia Studio, create a resource that will be the model, upload the model file. Create buttons etc. by dragging
them into the 2D-View window (you can navigate between 2D and 3D view via button push). Styling can be applied in the CSS file which
can be found on the left panel of Vuforia Studio under "STYLES" and "Application".

############################### Model Bindings #######################

Programming language: javascript

Code for the following Bindings has been written and tested to be working:

Opacity (slider)                    - sets the transparency of a model
Scale (slider)                      - scales the model
Visibility (toggle)                 - switches the model's visibility on/off (does not work in sequences)
Current Step                        - shows the steps taken when the model moves
Sequence                            - an animation created with Creo Illustrate
Occluding (toggle)                  - a toggle that indicates the user has the physical model and hides the virtual one
Shader name                         - changes the visual style of a model (more detailed information in a separate file)
Force hides                         - Hides the model, this is especially useful for sequences

The following files are still to be created:
Item_Translucence                   - similar to opacity, but shows some light passing through transparent parts (e.g. glass)
Resource                            - an object that is connected to a model (detailed information in a separate file)



To connect the bindings to the models, in several cases a parameter has to be added.
- In the upper right corner under the small "DATA" heading, click on the green "+"- sign
- Name the parameter
- Drag the the parameter to the model and choose the correct binding name.

Writing the code:
The javascript code can be written in Home.js, however, we would suggest to do it in another IDE and then copy and paste it,
in order to have it saved somewhere and not have to search or rewrite it every time.

Usage of the bindings:
Once the function is written:
- Drag the corresponding item (e.g. button, slider, toggle) into the 2D View of the project in Vuforia Studio.
- To bind the function to the item, call the function in the bottom of item's properties.
- Make sure to check that the correct ID for each item and model is used. The IDs can be found when opening each item's properties.

Testing on the PC/Web:

- Save the project.
- Click the "Preview" button.
- Click "Open in browser window".
Note: In some cases the Preview works only in Microsoft Edge, however most of us have been able to use Chrome.

Testing with Vuforia View:
- Publish the project.
- Share the project.
- Open Vuforia View and scan the QR code that was provided when sharing.



####################### Sequences in CREO ILLUSTRATE #####################

In order to create a sequence another program has to be used (Creo Illustrate), these sequences can be imported into Vuforia Studio.

Prerequisite: The computer is connected to Tampere Universities eduVPN (not OpenVPN!).

- Open a .c3di file
- Click on "Animation" in the Menu bar on top of the page
- On the left, choose "Figure" and rename it to something that indicates what this sequence/animation does.
- Next to "Figure", click on "Step Editor".
- Click "Add New Step"
- To move a part, click on it and grab it to move it
- To rotate a part, choose "Transform" on top and then click the part you want to rotate. Grab the circle and move it around.

Preview:
- To view the animation of one step while editing, there is a play button right below the model.
- To get a Preview of the whole animation or choose the steps to preview in a separate window, click "Preview Sequence".
- In the Preview window use the dropdown menu under "Play" to choose "Play All"
- Click "Close Preview" on the top right to return to editing mode.

Saving the sequence and importing it to Vuforia Studio:
- Add Spatial "Target" and "Model" onto the Studio, then from the "Resource" property of the "Model" choose the .pvz file that has the sequence in it.
- Go to the 2D section and add "Select", "List", and 2 "Button" widgets to the canvas.
- Change the model name to clutch, this is named like this since the model is a clutch, and if it needs to be changed something more suitable
the javascript code should be changed accordingly.
- The sequence property of the model should be changed to and figure available.
- Name one of the buttons "Play All", and the other "Next Step" then bind the first button's click event to model with the play all binding and bind the second button's click event to model with the play binding.
- Bind the model's sequence list property to the "Select" widget.
- Add "goList(event, data);" function name to the Item Click event of the "List" widget. Then copy the javascript code of sequence into Home.js file and run the app.


#########################Publishing and Sharing#############################

- Save the project
- Click the "Publish" tab.
- log in, if asked to
- Share by using the "Share" tab. A QR-Code will be created.