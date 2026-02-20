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
    supportMessage.textContent = messages[mood];
  });
}