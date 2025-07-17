/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

// Inventory flags
const hasTorch = true;
const hasMap = false;
const hasSword = true;
const hasCompass = true;

console.log("You wake up in a misty forest with a few supplies.");
console.log("In your bag: " + 
  (hasTorch ? "Torch " : "") + 
  (hasMap ? "Map " : "") + 
  (hasSword ? "Sword " : "") + 
  (hasCompass ? "Compass" : "")
);
console.log("\nYou see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'? ");

if (choice === "mountains") {
  if (hasTorch && hasCompass) {
    console.log("You safely climb through the dark and winding mountains with help from your compass.");
    console.log("Suddenly, a wild beast appears!");
    if (hasSword) {
      console.log("You bravely fight it off with your sword and survive!");
    } else {
      console.log("You try to run, but the beast catches you. Your journey ends here.");
    }
  } else if (hasTorch && !hasCompass) {
    console.log("You can see, but without a compass, you lose your way and circle back.");
  } else {
    console.log("It's too dark to proceed. You decide to turn back.");
  }
} else if (choice === "village") {
  if (hasMap || hasCompass) {
    console.log("You find your way to the village.");
    console.log("The villagers welcome you.");
    const helpVillagers = readline.question("Do you help them with a mysterious task? (yes/no) ");
    if (helpVillagers === "yes") {
      console.log("They reward you with a magical shield and tell you a secret about the forest.");
    } else {
      console.log("They become suspicious of you. You leave quickly.");
    }
  } else {
    console.log("Without a map or compass, you get lost in the woods outside the village.");
  }
} else {
  console.log("You wander in an unknown direction and eventually get lost.");
}


/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/