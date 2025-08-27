# Sticky Notes Dev Notes

## Priorities

Need at least 3/4 of the following:

1. Create a new note of the specified size at the specified position.
2. Change note size by dragging.
3. Move a note by dragging.
4. Remove a note by dragging it over a predefined "trash" zone

### Bonnus

1. Entering/editing note text.
2. Moving notes to front (in case of overlapping notes).
3. Saving notes to local storage (restoring them on page load).
4. Different note colors.
5. Saving notes to REST API. Note: you're not required to implement the API, you can mock it, but the mocks should be asynchronous.

## Requirements

1. Minimum screen resolution: 1024x768.
2. Support for: Latest versions of Google Chrome (Windows and Mac), Mozilla Firefox (all platforms), Microsoft Edge.
3. Language: Typescript.
4. React without stock components.
5. If your project requires building, provide the necessary instructions.

---

## Work Priority

- [*] Board/surface component built and styled
- [*] Click handler across board component surface
- [*] Differentiate click + hold from click actions
- [*] Setup "add" action as default on click event
- [*] Add unstyled sticky block on click coordinates
- [*] Handle drag sizing of sticky on "add" action
- [*] Sticky note component built and styled
- [*] Click/drag handler captured within stickies
- [ ] Handle drag resizing for sticky component
- [ ] Create trash area on board
- [*] Handle drag to move sticky
- [ ] Handle drop action over trash area
- [ ] Sticky JSON API for coordinates, size, colour, text
