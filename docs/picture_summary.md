## Underground Ruins: Stack's Secret Realm — Art Asset Inventory Summary

### 1. Style Reference
| File name | Description | Dimensions |
|---|---|---|
| ruins-style-reference.webp | Ruins hall concept art: stone door, stone bricks, runes, stacked moon/sun/star blocks, and a floating sprite. Serves as the overall art-style reference and is not used in interactive scenes. | 1536×1024 |

### 2. Scene Backgrounds
| File name | Description | Dimensions |
|---|---|---|
| ruins-hall-bg.webp | Main scene background: stone-door hall, with an arched stone-door recess reserved on the right and open space on the left and center for the stack, character, and stairs. No characters/UI/text. | 1920×1080 |
| ruins-map-bg.webp | Top-down path-exploration map base: dark gray-blue stone surface, with a large flat open area in the center. Routes/nodes are all drawn dynamically by the program. | 1600×1000 |

### 3. Stone Door and Mechanisms
| File name | Description | Dimensions |
|---|---|---|
| stone-door-closed.png | Closed, heavy arched stone door; warm gray-blue stone; vertical seam in the middle; runes are unlit; transparent background. | 768×1024 |
| stone-door-open.png | Open stone door, with door panels sliding into the walls and warm golden passage light shining through the doorway; runes glow faintly. Anchors must align exactly with the closed version. | 768×1024 |
| switch-inactive.png | Inactive mechanism button: circular stone base with a dim cyan-blue diamond crystal in the center; no glow. | 256×256 |
| switch-active.png | Active mechanism: crystal glows warm gold, and patterns on the base emit cyan-blue light. The outer silhouette must exactly match the inactive version. | 256×256 |

### 4. Stackable Blocks (All 512×256, Rounded 2:1 Cuboids, Transparent Background)
| File name | Description |
|---|---|
| block-base.png | Base block: warm gray stone with a shield-shaped relief on the front and no text or decorative pattern. |
| block-moon.png | Moon-pattern block: warm gray stone with a pale cyan-blue crescent relief in the center. |
| block-sun.png | Sun-pattern block: warm gray stone with a golden yellow sun relief in the center (round core + 8 short rays). |
| block-star.png | Star-pattern block: warm gray stone with a teal five-pointed star relief in the center and a faint magical glow. |
| block-cracked.png | Cracked block: slightly darker color with a dark gray lightning-shaped crack in the center; the block remains intact, with no missing chunks. |

### 5. Magic Stairs
| File name | Description | Dimensions |
|---|---|---|
| magic-stairs.png | Three semi-transparent cyan-blue magic stone steps, rising progressively from lower left to upper right, with glowing edges; no character/platform/text. | 1024×768 |

### 6. Sprite Characters (All 512×512; Teal-green teardrop body, cream face, leaf antennae, small wings, gold diamond chest ornament, transparent background)
| File name | Description |
|---|---|
| sprite-idle.png | Idle pose: body angled slightly to the right, floating in a relaxed manner, smiling companionably. |
| sprite-guide.png | Explaining pose: one arm extended to the right and pointing to the top of the stack, head turned to the side, mouth open as if explaining. |
| sprite-thinking.png | Thinking pose: hand near the cheek, head tilted slightly, with a gentle, curious expression. |
| sprite-happy.png | Celebrating pose: both hands raised, wings spread, laughing happily with curved eyes. |

### 7. Path Map Nodes (All 256×256; Top-down Rounded Stone Base, Transparent Background)
| File name | Description |
|---|---|
| node-entrance.png | Entrance node: three progressively smaller stone steps with a faint cyan-blue glow. |
| node-hall.png | Hall node: circular floor emblem, with top-down silhouettes of four short stone pillars around it. |
| node-corridor.png | Standard corridor node: three floor tiles and stone wall edges on both sides; direction-neutral and reusable on either side. |
| node-dead-end.png | Dead-end node: a stone wall blocking the passage, with small round stones scattered at its base; no red X or danger symbols. |
| node-exit.png | Exit node: small archway with warm golden light shining from within and pale golden tiles at the entrance. |

### 8. Reward and Decorative Icons
| File name | Description | Dimensions |
|---|---|---|
| badge-stack-apprentice.png | Stack Apprentice completion badge: circular gold base, three small stacked stones, a cyan-blue five-pointed star engraved on the top stone, and a teal-green ribbon; no text. | 512×512 |
| magic-code-book.png | Magic code book: dark teal-green cover, cream pages, gold page corners and bookmark; pages contain geometric shapes only, with a floating cyan-blue light point in the center. | 512×512 |
| quest-scroll.png | Quest scroll: rolled-edge cream-colored paper, teal-green ribbon, central gold diamond seal; no text or paragraphs. | 256×256 |

### 9. Effect Textures
| File name | Description | Dimensions |
|---|---|---|
| fx-magic-glow.png | Mechanism glow: warm gold at the center transitioning outward to pale cyan-blue, smoothly fading to transparent; objects beneath remain visible through the glow. | 512×512 |
| fx-sparkle.png | Success sparkle: single rounded four-pointed star with a warm gold center and soft glow; reusable. | 128×128 |
| fx-dust.png | Landing dust: 3–5 soft, semi-transparent pale warm-gray puffs, spread horizontally in a flat shape to suggest a block landing gently. | 512×256 |

### Notes
All assets **must contain no text, code, buttons, arrows, routes, or UI**. Routes, highlights, top-of-stack markers, dialogs, buttons, and shadows are all implemented programmatically with React/SVG/CSS/Framer Motion.