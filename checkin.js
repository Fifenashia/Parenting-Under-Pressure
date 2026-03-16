console.log("script is connected");

// Get the dropdown, button, and result area from the page
const moodSelect = document.getElementById("moodSelect");
const getSupportBtn = document.getElementById("getSupportBtn");
const supportMessage = document.getElementById("supportMessage");

// Wait for the user to click the Get Support button
getSupportBtn.addEventListener("click", () => {
  // Save the selected dropdown value
  const selectedMood = moodSelect.value;

  // If nothing is selected, show a message and stop the function
  if (selectedMood === "") {
    supportMessage.innerHTML = "<p>Please choose a mood first.</p>";
    return;
  }

  // Fetch the moods.json file
  fetch("moods.json")
    .then((response) => {
      // Turn the JSON file into JavaScript data
      return response.json();
    })
    .then((data) => {
      // Use the selected mood value to find the matching object in the JSON
      const moodData = data[selectedMood];

      // If a match is found, display the content on the page
      if (moodData) {
        supportMessage.innerHTML = `
          <h3>${moodData.title}</h3>
          <p><strong>Validation:</strong> ${moodData.validation}</p>
          <p><strong>Try this:</strong> ${moodData.tip}</p>
          <p><strong>Reminder:</strong> ${moodData.reminder}</p>
          <p><strong>Next step:</strong> ${moodData.nextStep}</p>
        `;
      } else {
        // If no matching mood is found in the JSON
        supportMessage.innerHTML = "<p>Sorry, no support was found for that mood.</p>";
      }
    })
    .catch((error) => {
      // If the JSON file does not load, show an error message
      console.error("Error loading moods:", error);
      supportMessage.innerHTML = "<p>Something went wrong loading support content.</p>";
    });
});