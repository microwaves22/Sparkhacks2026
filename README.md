**Pathfinder**
Pathfinder is an interactive, camera-themed web application designed to help users discover their dream careers through immersive, narrative-driven simulations. Instead of traditional, dry career quizzes, Pathfinder drops you into a "day-in-the-life" experience to see if a career path truly resonates with your professional mindset.

**Inspiration**
Our team realized that the modern job market often feels disconnected from the actual day-to-day reality of work. We built Pathfinder to bridge that gap, ensuring students and job seekers aren't "blind-sided" on their first day by providing a narrative simulation that feels emotionally grounded.

**Features**
- 3D Interactive Entry: A cinematic environment powered by Three.js where users interact with a virtual camera to choose their path.
- Narrative Simulations: Step into a "day-in-the-life" story based on your personal interests and professional mindset.
- State-Driven Flow: Seamless transitions between cinematic 3D scenes and interactive decision-making overlays.
- Empathetic UX: Focused on "testing identities" rather than just clicking options, with a specific focus on mental health and tone.

**Built With**
- Frontend: Next.js (App Router), React
- 3D Graphics: Three.js, React Three Fiber, Drei
- Styling: Tailwind CSS
- Backend/Deployment: Node.js, Aedify
- Language: TypeScript (TSX)

**Getting Started**
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

**Prerequisites**
Node.js (v18.x or higher recommended)
npm 

**Installation**
**Clone the repository:**

Bash
```
git clone https://github.com/your-username/pathfinder.git
cd pathfinder
```

**Install dependencies:**

Bash
```npm install```

**Run the development server:**

Bash
```npm run dev```

Open the application: Navigate to http://localhost:3000 in your browser to see the 3D environment in action.

**Challenges We Overcame**
State Orchestration: Managing complex transitions between 3D camera stages and UI story stages without breaking immersion.
Performance: Handling 3D asset loading in Next.js using strict client-side boundaries and Suspense to prevent hydration errors.
Tone & Pacing: Designing scenarios that felt respectful and grounded rather than "game-like," particularly for mental health career paths.
Experience: Over half the team were experiencing their first hacakthon.

**What's Next**
Expanded Career Library: Adding more diverse paths and deeper storylines.
Advanced Quiz Logic: Refining the initial assessment to provide even more personalized results.
Resource Integration: Connecting users directly to educational resources and next steps for their discovered paths.

**The Team**
Created for UIC SparkHacks 2026 by:
Judy Sabry
Minahil Rahimullah
Malika Syeda
Michelle Ye

**Links**
Youtube Demo: https://youtu.be/wJCHf886ekI 

Aedify: [Aedify Link](https://aedify.ai/console/projects/sparkhacks2026-4eabe4c5/services/ek654vtgtpp63z59t2vawzx2q/details/overview)

Devpost Project: [Pathfinder Story](https://devpost.com/software/pathfinder-y9zg01#updates)
