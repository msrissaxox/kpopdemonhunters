# kpopdemonhunters

Overview
-
Small Next.js quiz app (K-POP Demon Hunters). The app shows a welcome screen, a sequence of questions, and a result screen that picks the top character (`Rumi`, `Mira`, `Zoey`, `Jinu`) based on per-option score maps.

Run
-
```bash
npm install
npm run dev
```

Open http://localhost:3000

Key files & responsibilities
-
- `src/app/page.tsx` — owner/controller. Holds primary state and functions:
  - State: `questionNum`, `currentQuestion`, `showWelcome`, `quizComplete`, `totalScores`.
  - Functions: `retrieveNextQuestion(questions)`, `handleAnswerClick(selectedScores)`, `calculateFinalResult()`, `handleRestart()`.
  - Renders: `Header`, `QuizWelcome` (when showing welcome), `Quiz` (active question), and `QuizEnd` (results).

- `components/Quiz.tsx` — presentational question UI. Props:
  - `question: QuestionData | null` — question and option text.
  - `questionIndex?: number` — (optional) index of current question.
  - `onAnswer: (selectedScores: Scores) => void` — called with the selected option's score map.
  - `onEndQuiz?: () => void` — called when user clicks "End Quiz" early.

- `components/QuizWelcome.tsx` — welcome screen. Props:
  - `onStartQuiz: () => void` — starts the quiz (calls into `page.tsx` to load first question).

- `components/BeginButton.tsx` — button used on welcome; prop `onAction: () => void`.

- `components/QuizEnd.tsx` — displays top match and `scores`. Props:
  - `result: string | null`, `scores: Scores`, `onRestart: () => void`.

Data shape
-
- `questions` (in `data/data.tsx`) — each question has `options`, and each option has a `scores` object: `{ Rumi: number, Mira: number, Zoey: number, Jinu: number }`. When a user selects an option, those values are added to the running `totalScores`.

State & scoring flow
-
1. User clicks "Begin" → `page.tsx` calls `retrieveNextQuestion()` and shows the first `Quiz`.
2. `Quiz` renders options; on click it extracts `option.scores` and calls `onAnswer(selectedScores)`.
3. `page.tsx`'s `handleAnswerClick` updates `totalScores` (adds per-character values), then advances to the next question.
4. When questions end or user clicks "End Quiz", `quizComplete` becomes true and `QuizEnd` is rendered. `calculateFinalResult()` sorts `totalScores` and returns the top character.

Design notes
-
- Single source of truth: app-level state is in `page.tsx`. Components receive needed data/handlers via props.
- If you need to support changing answers or undo, store each answer in an `answers[]` array and recompute totals from that array (recommended to avoid drift).
- Persistence: to survive reloads, persist `answers` or `totalScores` to `localStorage` (rehydrate on load).

Tech
-
- Next.js 13 (App Router)
- React + TypeScript
- Tailwind CSS for styling
- `next/font` for optimized fonts

Responsive & accessibility
-
- Components use responsive Tailwind classes; buttons are full-width on mobile for better tap targets.
- Consider adding `aria-*` attributes and keyboard focus states for further accessibility improvements.

If you want, I can:
- Move shared types (e.g., `Scores`) to `src/types.ts` and import them across components.
- Add `localStorage` persistence and hydration for `answers` / `totalScores`.
- Add character descriptions to `QuizEnd` for the top match.
