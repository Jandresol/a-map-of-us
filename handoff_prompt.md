I'm building a "National Girlfriend Day" gift game — a Champion Island–style walkable overworld with minigames tied to real memories. Continuing work from a prior Claude session. Here's the state:

**File**: I have a working HTML prototype (single file, self-contained, no build step) called `memory_map_prototype.html`. I'll upload it — please read it in full before making changes.

**What's built so far:**
- Title screen using my own pixel-art drawing as full-bleed background (base64-embedded PNG)
- Walkable overworld: arrow keys / WASD move a character around a fixed single-screen map (no camera scroll — everything fits in one static background, decided against tile-based scrolling)
- Character sprite: I drew real 20x20px pixel art frames (side A, side B for walk-cycle, up/back view, down/front view). Currently swapped OUT for labeled placeholder boxes ("SIDE A", "SIDE B", "UP (back)", "DOWN (front)") at my request, at a clean 3x scale (60px display) — this matches a 60px map grid so future tile art will align pixel-perfectly. I have the real sprite files if we want to swap them back in.
- 10 memory "pins" on the map: memory (matching game — fully built/playable), rollerskating, first movie, SF, NYC, bookstore, iHOP (first date), Harvard Art Museum, Halloween, Puerto Rico. Only "memory" is a real minigame right now; rest show a "not built yet" placeholder card.
- Walk-up-and-press-Enter interaction pattern for all pins (proximity detection + prompt bubble)
- Puerto Rico pin uses a crop of my real background art as its thumbnail

**Design decisions/constraints to respect:**
- She (the recipient) doesn't play video games — no fail states, no lives, no timers, no controls beyond arrow keys + Enter. ~10 minute total playtime target.
- Palette: warm dark background (#1c1926/#241f30 ink), gold (#d3a45c), rose/coral (#c9705a), teal (#4f8483), pink (#e4a6ab), cream paper (#f4ecd8)
- Fonts: Fraunces (serif headers), Caveat (handwritten-style captions/labels), Inter (UI chrome)
- She loves dress-up — there's a planned character-creator/wardrobe idea (outfits/accessories unlocked per completed memory) not yet built
- I'm drawing pixel art myself but with a mouse, not a stylus (my iPad Pencil is broken) — used Piskel for the sprite grid, works fine for mouse input
- Claude cannot generate pixel art images directly (no image-gen tool) — I provide art via upload, Claude builds game logic/mechanics/placeholder scaffolding around it

**What I still want built (placeholder-ready, art to be swapped in later):**
- Actual mechanics for the other 8-9 minigames (not just "coming soon" cards) — e.g. a draggable slider for rollerskating, a scrollable parallax scene for SF/NYC, a shelf-pick interaction for the bookstore, a dialogue/choice scene for iHOP, a spot-the-detail click game for the art museum, a costume-picker for Halloween, something shore/wave-themed for Puerto Rico
- The wardrobe/character-creator system (unlock outfit pieces as memory stops are completed)
- Possibly restoring the real sprite frames once more directional frames exist (currently only 1 frame each for up/down, 2 for side)

Please pick up from here — I'll attach the current HTML file next.
