//Parent Check-In

const moodSelect = document.getElementById(`moodSelect`);
const getSupportBtn = document.getElementById(`getSupportBtn`)
const supportMessage = document.getElementById(`supportMessage`);

if (moodSelect && getSupportBtn && supportMessage) {
    const messages = {
        overwhelmed:"Your system is overloaded. When everything feels urgent at once, your brain is trying to protect you from dropping something. Drop your shoulders. Inhale slowly through your nose for four. Exhale longer than you inhaled. Do that twice. Pick one thing for the next ten minutes. Let the rest of it wait.",
        angry:"Anger usually means something feels unfair, disrespected, or out of control. It’s information. Unclench your jaw. Press your feet into the floor. Slow your breath just enough to create space before you speak. If you need a script: ‘I need a minute to calm my body. We’ll talk in a moment.",
        sad:"Sadness doesn’t make you a bad parent. It means something matters to you. You are allowed to be human. Look around and name three neutral things you can see. Let your eyes focus. Let your breathing slow naturally. Lower the bar and choose connection over correction for 5minutes.",
        okay:"You’ve got enough capacity for one intentional move. One slow breath in. One slow breath out. Notice your posture. Notice one thing your child is doing right and say it out loud.",
        hopeful:"Hope means your nervous system feels safe enough to imagine change. Use that hope for one small connection moment—soft tone, eye contact, a kind word."
  };

getSupportBtn.addEventListener("click", () => {
  const mood = moodSelect.value;

  if (!mood) {
    supportMessage.textContent = "Pick the closest mood to get started 💛";
    return;
  }

  window.location.href = `emotions/${mood}.html`;
});
}


// Practice Scenarios

const scenarioButtons = document.querySelector(".scenario-buttons");
const sayThis = document.getElementById("sayThis");
const doThis = document.getElementById("doThis");
const whyThis = document.getElementById("whyThis");

if (scenarioButtons && sayThis && doThis && whyThis) {
  const scenarios = {
    tantrum: {
      say: "“You’re having a big feeling. I’m here. You’re safe.”",
      do: [
        "Get down to their level and soften your voice.",
        "Keep your words short. Less talking = less fuel.",
        "Hold the boundary: “I won’t let you hit. You can stomp.”",
        "When their body calms, offer a simple choice."
      ],
      why: "Kids can’t access logic when they’re flooded. Co-regulation first helps their brain return to safety so learning can happen."
    },
    backtalk: {
      say: "“I hear you’re frustrated. We can talk when we’re respectful.”",
      do: [
        "Pause before responding (2 breaths).",
        "Name the limit: “I won’t be spoken to that way.”",
        "Offer a redo: “Try again with a calmer voice.”",
        "If it escalates, step away briefly and return."
      ],
      why: "This teaches tone + respect without power struggles. A redo builds skills instead of shame."
    },
    transitions: {
      say: "“I’m going to help your body get ready to switch.”",
      do: [
        "Give a heads-up: 5 minutes, then 2 minutes.",
        "Use one clear next step: “Shoes on.”",
        "Offer a choice inside the boundary: “Walk or hop?”",
        "Praise progress, not perfection."
      ],
      why: "Transitions are hard because kids have to shift attention and control impulses. Predictability + choices reduce resistance."
    },
    siblings: {
      say: "“I won’t let you hurt each other. I’m going to help.”",
      do: [
        "Separate first, talk second.",
        "State the boundary: “No hitting. No name-calling.”",
        "Reflect each kid briefly (no courtroom).",
        "Coach a repair: “Tell them what you needed.”"
      ],
      why: "Safety comes first. When you reduce the heat, you can teach problem-solving and repair instead of reinforcing competition."
    },
    homework: {
      say: "“This feels hard. Let’s make it smaller.”",
      do: [
        "Break it into a tiny chunk (5 minutes or 3 problems).",
        "Sit nearby for support, not control.",
        "Ask: “Do you want help or a quiet body next to you?”",
        "Celebrate effort, then take a short break."
      ],
      why: "Avoidance usually means overwhelm or fear of failure. Making it smaller builds confidence and reduces shutdown."
    }
  };

  scenarioButtons.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-scenario]");
    if (!btn) return;

    const key = btn.dataset.scenario;
    const chosen = scenarios[key];

    sayThis.textContent = chosen.say;
    whyThis.textContent = chosen.why;

    doThis.innerHTML = "";
    chosen.do.forEach(step => {
      const li = document.createElement("li");
      li.textContent = step;
      doThis.appendChild(li);
    });
  });
}