## 1. Project Scaffold (Phase 0) Prompt

```
Build the frontend scaffold for the “AlgoNavigator Data Structure Visualization Learning Platform” using Vite + React + TypeScript. Create the directory structure exactly as specified: src/app, src/components, src/engine, src/tutor, src/content, src/state, src/assets.
Configure ESLint + Prettier + Vitest, and add a .gitignore that excludes node_modules, dist, build artifacts, and .env. Implement a runnable blank React entry page; npm run dev must start successfully, and the lint and vitest test commands must complete without errors. Do not introduce an additional UI framework. Reserve global style variables for a dark underground-ruins theme.
```

## 2. Phase 1 Stack Animation Engine Prompt

### 2.1 Type and State Definitions

```
Define the StructureState type under src/state and implement the complete stack state model: the list of elements in the stack, an identifier for each element, pattern type (base/moon/sun/star/cracked), top-of-stack marker state, and animation phase (idle/pushing/popping/peeking). Update all state immutably. Calculate stack layout coordinates with a pure function; keep the block aspect ratio fixed at 2:1 and stack blocks vertically without gaps. Extract coordinate calculation into a standalone pure function that can be covered by unit tests and is not coupled to React or an animation library.
```

### 2.2 Stack Renderer

```
Implement StackRenderer under src/engine. Use D3 for data binding and layout calculations, and Framer Motion for block entrance (falling from above), exit (disappearing downward), and position transitions. Add a separate SVG arrow/marker at the top of the stack pointing to the current top block. The rendering layer only receives StructureState output coordinates and texture resources; it must not contain business logic. Import block textures from the resource index in src/assets, replacing the default placeholder rectangles.
```

### 2.3 Animation Stage and Controller

```
Implement an AnimationStage component with four controls: play, pause, single-step forward, and speed adjustment (0.5x/1x/2x/4x). Extract controller state into an independent pure hook; support advancing a step queue, freezing the frame while paused, and applying speed globally. Write hand-authored animation-step fixtures covering the complete state sequences for the three basic operations: push onto the stack, pop from the stack, and peek at the top. Demonstration animations must be playable without integrating a Python execution environment. Reserve an operation area on the left of the stage and space for a code panel on the right; use the ruins hall asset as the background.
```

### 2.4 Asset Mounting Components

```
Implement reusable components:
1. RuinsDoor: accepts a boolean opened value and switches between the closed/open stone-door textures with a cross-fade transition; keep the anchor fixed so it does not shift position.
2. RuinsSwitch: accepts a boolean active value and switches between inactive/active mechanism textures, with a CSS outer glow.
3. Sprite: accepts pose (idle/guide/thinking/happy) to switch sprite textures, with a floating up-and-down animation.
4. MagicStairs: fade in the stairs asset when the win condition is met; fully unmount it when hidden.
All components must have no business logic and only map state to textures and provide basic transition animations.
```

### 2.5 Unit Test Prompt

```
Complete the tests according to SPEC Section 9:
1. Pure mathematical tests for stack layout: verify block coordinates at every level after push and pop, including empty-stack and single-element-stack boundary cases.
2. AnimationStage controller tests: verify correct state transitions for play/pause/step/speed adjustment, without relying on actual Framer Motion rendering.
3. StackRenderer structural rendering tests: mock the animation library and verify the number, order, and texture type of blocks for a given StructureState.
4. App root component smoke test: verify the app mounts successfully without errors.
```

## 3. Phase 2 Python Code Execution Integration Prompt

### 3.1 Pyodide Worker Execution Bridge

```
Implement PyodideProvider and a dedicated Web Worker: load Pyodide lazily and show a progress indicator while loading. Set an execution timeout and a maximum number of single-step instructions; detect infinite loops/dead recursion. When a safeguard is triggered, safely terminate the Worker and restart a new Worker without requiring a page refresh. Extract exec-bridge logic into a pure module that can be tested directly in a Node environment: capture stdout/stderr and map Python exceptions to friendly English-language messages for students aged 8–14 (common cases such as syntax errors, index out of range, type errors, and popping from an empty stack), without exposing the raw stack trace.
```

### 3.2 Code Editor Panel

```
Implement CodeEditorPanel based on CodeMirror 6, with Run and Reset buttons and a preconfigured MyStack class skeleton. Students should only fill in the logic for the push/pop/peek methods. Include syntax highlighting for stack operations, automatic indentation, and basic error-line indicators in the editor. After execution, send the results back to the same StackRenderer used in Phase 1, ensuring that visualizations driven by live code exactly match the animation behavior of scripted demonstrations (as required by FR-4).
```

### 3.3 Stack Exercise Framework

```
Define the student code specification for MyStack. During execution, capture every push/pop operation in real time and reconstruct an animation sequence of StructureState values in the same format as the demonstrations. When student code changes stack elements, the renderer should automatically update texture types and positions. In an error state, switch the sprite to the thinking pose and show an error panel without interrupting the page.
```

### 3.4 Path-Backtracking Map Framework

```
Implement the stage for a branching-path exploration level: use the map base asset as the background; draw all nodes and connecting lines dynamically with SVG, and do not bake routes into the background image. Define node types (entrance/hall/corridor/deadEnd/exit) and reuse the resource index for node textures. Support: light-colored fill for visited nodes, a glowing cyan-blue outline for the current node, glowing connecting lines for the current path, and smooth character movement along the lines. Implement path backtracking: push nodes onto the path stack when a dead end is visited; when backtracking, pop nodes in sequence and move the character in reverse. Reuse the corresponding small map icons to display nodes in the stack.
```

### 3.5 Testing Requirements

```
Test exec-bridge pure logic in a Node environment: stdout capture, exception mapping, loop safeguard activation, and timeout detection. Unit-test Worker restart logic independently using a mock Worker. Pure-function tests for map node layout and stack backtracking state transitions must cover boundary cases.
```

## 4. Level Content and Teaching Interaction Prompts

### 4.1 Trial of Stones (LIFO Concept)

```
Implement the first level, Trial of Stones: initially show stacked blocks, then use demonstration animations to help students observe the last-in, first-out rule. The sprite explains the LIFO concept in the guide pose, with corresponding explanatory text in a panel. No code editing is required; this is a conceptual demonstration only. After completion, switch to the happy pose and trigger a sparkle effect.
```

### 4.2 Repair the Stairs (Hands-on push/pop)

```
Implement the second level, Repair the Stairs: given a target stack pattern order, students call push() to add blocks with specified patterns and pop() to remove incorrect top blocks until the target stack state is reached. Once validated, open the stone door and fade in the magic stairs. Have the sprite hop upward step by step along the stairs (position tween animation; do not create frame-by-frame sprite animation) and switch the mechanism to its active glowing state.
```

### 4.3 Branching Path Exploration (Stack Backtracking)

```
Implement the third level, Branching Path Exploration: randomly generate branching paths on the map. The character enters a branch; upon reaching a dead end, automatically push the path nodes onto a stack. During backtracking, pop the top stack node to return to the previous junction. Display a path stack panel on the right throughout, visualizing the room icons currently in the stack. Trigger the completion reward when the exit node is reached.
```

## 5. UI and Styling Prompt

```
Align the global theme colors with the assets: deep indigo #1a2438, slate blue #3b4a63, warm gray stone #b8a998, cyan-blue magic #4dd0e1, and warm gold mechanisms #f2c265. Use React DOM text for all headings, buttons, hints, and code labels; do not embed them in images. Style buttons with rounded stone-like CSS and a cyan-blue glowing outline on hover. Expand the dialog beside the sprite, with distinct styles for explanation, error, and success states. Create the character's ground shadow with a CSS elliptical gradient; do not generate a texture for it. Reserve space for HTML text labels on the left/bottom of the map; do not hard-code direction names.
```

## 6. Batch Asset Generation Prompts (Execute in Batches)

### Batch 1 (Required for Phase 1)

```
First, use the unified style prompt to generate ruins-style-reference.webp as the style reference. Use this image as the image-to-image reference for all subsequent assets, with a style weight of 0.8. Generate assets in this order: ruins hall background, closed/open stone doors, base/moon/sun/star/cracked blocks, idle sprite, inactive/active mechanism, and magic stairs. Variants of the same state must be edited from the finalized asset, keeping dimensions, anchors, and lighting perfectly aligned. Sprite assets must be genuine transparent PNGs; blocks must all be 512×256, the sprite 512×512, and mechanisms 256×256.
```

### Batch 2 (Required for Phase 2)

```
Generate the guide/thinking/happy poses based on the finalized idle sprite, keeping the body center, proportions, and colors consistent. Generate the map base and 5 map node icons. All nodes must be 256×256 and have exactly the same stone base appearance, differing only in the central pattern.
```

### Batch 3 (Phase 3 Polish, Non-blocking)

```
Generate a completion badge, magic code book, and quest scroll icons, as well as texture assets for glow, sparkles, and landing dust effects. Effect assets must have genuine transparency channels and naturally fading edges, and be suitable for overlaying on the scene without obscuring objects underneath.
```

## 7. Finalization and Deployment Prompt

```
Compress all assets consistently: convert backgrounds to WebP and reduce sprite PNG file sizes. Load only the ruins hall background and core blocks on the initial screen; lazy-load map, reward, and effect assets when entering their corresponding levels. Add alt text to all images
```
