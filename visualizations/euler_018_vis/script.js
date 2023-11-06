const pyramidValues = [[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]];

// Select the parent element
let container = document.getElementById("pyramidContainer");

// Loop through the array
pyramidValues.forEach(function (element) {
  // Create a new div
  let newDiv = document.createElement("brick");

  // Optionally set content or attributes
  newDiv.textContent = element; // Adds text to the div
  newDiv.className = "brick"; // Adds a class name

  // Append the new div to the container
  pyramidContainer.appendChild(newDiv);
});
