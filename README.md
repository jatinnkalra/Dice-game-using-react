This is a simple Dice Game built using React. The game allows users to select a number, roll a dice, and earn or lose points based on the result. It is a beginner-friendly project focused on React concepts like components, props, state management, and conditional rendering.

Features
Start screen with "Play Now" button
Select a number between 1 to 6
Roll a dice by clicking the dice image
Score increases if selected number matches dice number
Score decreases by 2 if guess is wrong
Reset score functionality
Show/Hide game rules
Simple and responsive UI using CSS Modules
Project Structure

The project contains two main screens:

DicePageOne
This is the starting screen of the game. It shows a welcome UI and a Play Now button. When clicked, it starts the game.

DicePageTwo
This is the main game screen. It contains:

Score display
Number selection (1 to 6)
Dice rolling logic
Reset button
Rules section
How the Game Works

First, the user selects a number from 1 to 6. Then the user clicks on the dice image to roll it. A random number between 1 and 6 is generated.

If the selected number matches the dice number, the score increases by the dice value. If it does not match, 2 points are deducted from the score. The user can also reset the game anytime or view the rules.

Technologies Used
React (Functional Components)
useState Hook
CSS Modules
JavaScript (ES6+)
