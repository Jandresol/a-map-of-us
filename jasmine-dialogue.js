/* ---------- Choose-your-own-adventure: "Talk to Jasmine" ----------
   Three scenarios, cycled one per visit (talk to Jasmine again for the next one).
   Each scenario has 2 screens with 2-3 options each, and an ending that can
   vary based on earlier choices (not required to vary for every combo).
*/

const cyoaScenarios = [
  {
    id: 'ihop',
    screens: [
      {
        text: "It's your first date. You both squeezed in time between classes.",
        prompt: "What are you getting?",
        options: ['Blueberry pancakes', 'Sirloin tips', 'Hot chocolate']
      },
      {
        text: "The check comes.",
        prompt: "What do you do?",
        options: ['Let her get it', 'Split it', 'Insist, gently']
      }
    ],
    // same ending regardless of choices
    getEnding: () => "Jasmine was so pleased with this date her heart is doing a little dance."
  },
  {
    id: 'skate',
    screens: [
      {
        text: "You're both out rollerskating. Jasmine is trying to learn how to skate for the first time.",
        prompt: "What do you do?",
        options: ['Skate backward so she can hold your hands', 'Take it slow, hand in hand', 'Cheer her on from the side']
      },
      {
        text: "After taking a break, you both run back to the rink. What's playing?",
        prompt: null,
        options: ['An R&B throwback', 'Dirty South rap']
      }
    ],
    // ending varies based on screen 1's choice only
    getEnding: (choices) => {
      if (choices[0] === 0) {
        return "You both have a lovely time, hand in hand the whole way around.";
      }
      return "You both have a lovely time. By the last lap, she's not falling anymore.";
    }
  },
  {
    id: 'apples',
    screens: [
      {
        text: "You're at the orchard. New England autumn is beautiful, and Halloween is around the corner.",
        prompt: "What first?",
        options: ['Taste the sweet treats', 'Pick the apples', 'Look at the pumpkins']
      },
      {
        text: "She thinks she found a way to get a lower fare, by choosing a different stop.",
        prompt: "What do you do?",
        options: ['Let her try it', "Say the plan isn't going to work"]
      }
    ],
    // ending varies based on screen 2's choice only
    getEnding: (choices) => {
      if (choices[1] === 0) {
        return "Well, you made it home eventually, and saw a new town along the way.";
      }
      return "You had a great day apple picking.";
    }
  }
];

/* ---------- engine state ---------- */
let cyoaVisitCount = 0;      // how many times the player has talked to Jasmine
let cyoaScreenIndex = 0;     // which screen within the current scenario
let cyoaChoices = [];        // choices made so far in the current scenario

function talkToJasmine() {
  const sceneBody = document.getElementById('scene-body');

  // all scenarios done
  if (cyoaVisitCount >= cyoaScenarios.length) {
    sceneBody.innerHTML = `
      <h2>Jasmine</h2>
      <div class="tagline">that's all of them, for now</div>
      <div class="placeholder-note">You've been through every memory she has to share today.</div>
    `;
    document.getElementById('scene').classList.add('open');
    return;
  }

  const scenario = cyoaScenarios[cyoaVisitCount];

  // starting a new scenario fresh
  if (cyoaScreenIndex === 0 && cyoaChoices.length === 0) {
    renderScreen(scenario, 0);
  } else {
    renderScreen(scenario, cyoaScreenIndex);
  }
  document.getElementById('scene').classList.add('open');
}

function renderScreen(scenario, screenIdx) {
  const screen = scenario.screens[screenIdx];
  const sceneBody = document.getElementById('scene-body');

  const optionsHtml = screen.options
    .map((label, i) => `<button class="cyoa-option" onclick="chooseCyoaOption(${i})">${label}</button>`)
    .join('');

  sceneBody.innerHTML = `
    <div class="cyoa-text">${screen.text}</div>
    ${screen.prompt ? `<div class="cyoa-prompt">${screen.prompt}</div>` : ''}
    <div class="cyoa-options">${optionsHtml}</div>
  `;
}

function chooseCyoaOption(optionIndex) {
  const scenario = cyoaScenarios[cyoaVisitCount];
  cyoaChoices[cyoaScreenIndex] = optionIndex;

  const isLastScreen = cyoaScreenIndex === scenario.screens.length - 1;

  if (!isLastScreen) {
    cyoaScreenIndex++;
    renderScreen(scenario, cyoaScreenIndex);
  } else {
    // scenario finished, show ending
    const ending = scenario.getEnding(cyoaChoices);
    document.getElementById('scene-body').innerHTML = `
      <div class="cyoa-text">${ending}</div>
    `;
    // reset for next scenario, next visit
    cyoaVisitCount++;
    cyoaScreenIndex = 0;
    cyoaChoices = [];
  }
}

/* ---------- minimal CSS to pair with this (add to existing <style>) ----------
.cyoa-text{ font-family:'Fraunces', serif; font-size:1.1rem; line-height:1.4; margin-bottom:16px; }
.cyoa-prompt{ font-family:'Caveat', cursive; font-size:1.2rem; color:var(--rose); margin-bottom:10px; }
.cyoa-options{ display:flex; flex-direction:column; gap:8px; }
.cyoa-option{
  font-family:'Inter'; font-size:0.9rem; padding:10px 14px;
  background:var(--paper); border:2px solid var(--gold); border-radius:4px;
  cursor:pointer; text-align:left; color:var(--ink);
}
.cyoa-option:hover{ background:var(--gold); color:var(--paper); }
*/