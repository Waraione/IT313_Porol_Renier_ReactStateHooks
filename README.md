# IT313 Lab Timer & Practice Tracker

## Project Description

The Lab Timer & Practice Tracker is a React Native application built
with Expo. It helps students record how many practice problems they
have solved and track the time spent on laboratory work.

## Features

- Displays the solved problem count.
- Increases the counter using the Solve +1 button.
- Resets the counter using the Reset button.
- Displays "Great job!" after solving five problems.
- Starts and pauses a stopwatch.
- Displays elapsed time in MM:SS format.
- Displays Running or Paused status.

## React Concepts Used

- useState: Stores the solved count and running state.
- useEffect: Controls the stopwatch interval.
- Cleanup function: Clears the interval with clearInterval.
- Conditional rendering: Displays the success message and timer status.
- Event handling: Responds to button presses.
- Lifting state up: Keeps shared state in LabScreen.
- Custom hook: useStopwatch contains the timer logic.

## Project Structure

- App.js: Application entry point.
- src/LabScreen.js: Parent screen and shared state.
- src/PracticeTracker.js: Practice counter.
- src/Stopwatch.js: Timer display.
- src/useStopwatch.js: Stopwatch custom hook.

## Requirements

- Node.js and npm
- Expo Go on a compatible mobile device

## How to Run

1. Clone or download this project.
2. Open the project folder in a terminal.
3. Install dependencies if needed:

   npm install

4. Start Expo:

   npx expo start

5. Scan the QR code with Expo Go, or open the project
   in a supported simulator.