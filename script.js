// Parent Check-In
// Grab the dropdown, button, and message area from checkin.html
const moodSelect = document.getElementById("moodSelect");
const getSupportBtn = document.getElementById("getSupportBtn");
const supportMessage = document.getElementById("supportMessage");

// Only run this section if all 3 elements exist on the page
if (moodSelect && getSupportBtn && supportMessage) {
  
  // This object stores a support message for each mood option
  const messages = {
    overwhelmed:
      "Your system is overloaded. When everything feels urgent at once, your brain is trying to protect you from dropping something. Drop your shoulders. Inhale slowly through your nose for four. Exhale longer than you inhaled. Do that twice. Pick one thing for the next ten minutes. Let the rest of it wait.",
    angry:
      "Anger usually means something feels unfair, disrespected, or out of control. It is information. Unclench your jaw. Press your feet into the floor. Slow your breath just enough to create space before you speak. If you need a script: 'I need a minute to calm my body. We will talk in a moment.'",
    sad:
      "Sadness does not make you a bad parent. It means something matters to you. You are allowed to be human. Look around and name three neutral things you can see. Let your eyes focus. Let your breathing slow naturally. Lower the bar and choose connection over correction for five minutes.",
    okay:
      "You have enough capacity for one intentional move. One slow breath in. One slow breath out. Notice your posture. Notice one thing your child is doing right and say it out loud.",
    hopeful:
      "Hope means your nervous system feels safe enough to imagine change. Use that hope for one small connection moment: a soft tone, eye contact, or a kind word."
  };
  
  // Listen for the user clicking the Get Support button
  getSupportBtn.addEventListener("click", () => {
    const mood = moodSelect.value;

  // If the user has not chosen a mood yet, show a prompt/Validate user input
    if (!mood) {
      supportMessage.textContent = "Pick the closest mood to get started.";
      return;
    }
  
    // Show the matching support message for the selected mood
    supportMessage.textContent = messages[mood];
  });
}

// Practice Scenarios

// Grab the dropdown and the areas where the support content will appear
const scenarioSelect = document.getElementById("scenarioSelect");
const scenarioIntro = document.getElementById("scenarioIntro");
const scenarioTips = document.getElementById("scenarioTips");
const scenarioWhy = document.getElementById("scenarioWhy");

// Only run this section if all scenario elements exist on the page
if (scenarioSelect && scenarioIntro && scenarioTips && scenarioWhy) {

  // This object stores the support content for each parenting scenario
  const scenarios = {
    tantrum: {
      intro:
        "Big feelings need safety first. Start by calming the moment instead of trying to fix everything at once.",
      tips: [
        "Get down to your child’s level and soften your voice.",
        "Use fewer words and focus on safety first.",
        "Hold the boundary calmly: 'I won’t let you hit. I’m here to help.'",
        "Wait for regulation before trying to teach or correct."
      ],
      why:
        "Children cannot learn well when they are overwhelmed. Co-regulation helps their brain return to safety before problem-solving."
    },
    backtalk: {
      intro:
        "Backtalk often shows frustration, overwhelm, or a need for control. You can stay calm and hold the limit at the same time.",
      tips: [
        "Pause before responding and take two slow breaths.",
        "Keep your voice steady and avoid matching your child’s intensity.",
        "Set the limit clearly: 'I will listen when we speak respectfully.'",
        "Offer a chance to try again with a calmer tone."
      ],
      why:
        "A calm response teaches respect more effectively than a power struggle. Boundaries and connection can work together."
    },
    transitions: {
      intro:
        "Transitions can be hard because children are being asked to stop, shift, and move before they feel ready.",
      tips: [
        "Give a simple warning before the transition: five minutes, then two.",
        "Use one clear next step instead of a long explanation.",
        "Offer a small choice inside the boundary, like 'walk or hop to the bathroom?'",
        "Notice and praise cooperation, even if it is incomplete."
      ],
      why:
        "Predictability and small choices help reduce resistance because they support regulation and a sense of control."
    },
    siblings: {
      intro:
        "Sibling conflict usually needs calm structure before problem-solving. Start by lowering the heat.",
      tips: [
        "Separate first if needed, then slow the moment down.",
        "State the boundary clearly: 'I won’t let you hurt each other.'",
        "Reflect each child’s feelings briefly without taking sides.",
        "Coach a repair or a better way to ask for what they need."
      ],
      why:
        "When children feel safe and heard, they are more able to practice repair, problem-solving, and emotional regulation."
    },
    homework: {
      intro:
        "Homework struggles are often about overwhelm, frustration, or fear of getting it wrong, not laziness.",
      tips: [
        "Break the task into a very small starting point.",
        "Stay nearby as support instead of hovering as control.",
        "Ask whether they want help, company, or a quick break first.",
        "Focus on effort and progress instead of perfection."
      ],
      why:
        "Making the task feel manageable reduces stress and helps the child build confidence instead of shutting down."
    }
  };

  // Listen for the user changing the dropdown selection
  scenarioSelect.addEventListener("change", () => {
  
    // Save the selected scenario value
    const key = scenarioSelect.value;

    // If no scenario is selected, reset the page to its default text
    if (!key) {
      scenarioIntro.textContent =
        "Choose a scenario above to see a few grounded ideas for responding with connection and care.";
      scenarioWhy.textContent = "The explanation will appear here.";
      scenarioTips.innerHTML = "<li>Pick a scenario to get started.</li>";
      return;
    }

    // Find the matching scenario data from the object
    const chosen = scenarios[key];

    // Update the intro and explanation text
    scenarioIntro.textContent = chosen.intro;
    scenarioWhy.textContent = chosen.why;

    // Clear out the old list items before adding new ones
    scenarioTips.innerHTML = "";

    // Loop through the tips array and create a new list item for each tip
    // Review forEach
    chosen.tips.forEach((tip) => {
      const li = document.createElement("li");
      li.textContent = tip;
      scenarioTips.appendChild(li);
    });
  });
}