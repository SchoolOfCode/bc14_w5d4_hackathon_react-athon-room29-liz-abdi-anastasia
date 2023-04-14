- App
  - Input
    - text input
    - add to list button
  - List
    - List Item
      - item text
      - delete button
    - List Item
      - item text
      - delete button
    - List Item
      - item text
      - delete button
    - List Item
      - item text
      - delete button
        ...
    - import all the files within the main app first to link it 
    - try hard code for each file to test functionality and build from there
    - make a serperate folder called button and within that have a file called button.js
    - Delete button would go into input field
    - in list.js we will have an item and a delete button
    - in the app.js we will import everything (input field,list,button)
    - export within every folder made (input field, list, button)

    -------------------------------------------------------------------

- in the app.js:
  - import a useState hook from the input field text
  - initialise it with an empty state
  - create a function handleInput that takes what the user keys in and puts it in the input field

  - create a function handleAddToListButton that adds the input field text (setText)

  - use the .map to go though the array and display all the different items 

- in the input.js:
  - take in the input field text from the function handleInput and display it 

- in the button.js:
  - add onclick event handler that calls the function from the app.js  
  - we need to make sure that the input field is empty afterwards

- in the list.js:
  - display the li added from the input field text with the click of the addToListButton
  - create an empty data array
  - with every item that's added to the list, push it in the array
  - add onclick event handler to the deleteButton that removes the li element of the list item
  - one delete button for every item in the list
  - when button is clicked function is called to remove element from array
  - function in the app.js changes the array to display the list without element 
  - 

