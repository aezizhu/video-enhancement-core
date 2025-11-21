# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview
This is a browser userscript for enhancing HTML5 video playback on any website. It provides keyboard-driven controls for playback speed, volume, picture adjustments (brightness, contrast, etc.), and display modes (fullscreen, PiP).

The project consists of two main script files:
- `script.core.js` - Main version with attribution safeguard
- `scriptG.core.js` - GreasyFork-compliant version (attribution safeguard removed)

## Development Workflow

### Version Management
- Version numbers are in three places that must be kept in sync:
  1. UserScript header `@version` comment (lines 5-6 in both scripts)
  2. CHANGELOG.md entries
- When releasing, update all three locations with the same version number

### Testing Changes
There is no automated test suite. Testing is manual:
1. Make changes to the script file(s)
2. Install/update in Tampermonkey or Violentmonkey
3. Test on multiple video sites (YouTube, Bilibili, Reddit are common test sites)
4. Pay special attention to:
   - Keyboard input in text fields shouldn't trigger video hotkeys
   - Hotkeys work when hovering over or playing video
   - Settings persist across page reloads

### Common Development Tasks

#### Adding a New Hotkey
1. Add hotkey definition to `config.defaultSettings.hotkeys` object (around line 68)
2. If new action needed, add method to `MediaController` class (starts line 201)
3. Update README.md hotkey reference table

#### Debugging Hotkeys
Enable debug mode in browser console: `window._debugHotkeys_ = true`
This logs all hotkey events and state changes.

#### Making Changes to Both Scripts
Changes need to be applied to both `script.core.js` and `scriptG.core.js`. The scripts are nearly identical except:
- `scriptG.core.js` has attribution safeguard removed (lines 30-39)
- Script name differs in UserScript header

## Architecture & Key Concepts

### Core Components

**1. Configuration System** (line 45)
- Centralized config object with default settings
- Uses GM_getValue/GM_setValue for persistence
- Stores: playback rate, volume, hotkey mappings, filter values, transform values

**2. MediaController Class** (line 201)
- One instance created per `<video>` or `<audio>` element
- Manages all enhancements for that media element
- Applies CSS filters and transforms for picture adjustments
- Handles playback rate restoration (videos often reset speed on load)

**3. Active Controller System** (line 514)
- Only one "active" controller receives hotkey commands
- Activated by: hovering video, playing video, focus event, or auto-activated for first video
- Stored in `activeController` variable with WeakMap of all controllers

**4. Hotkey System** (line 572)
- Data-driven: hotkey definitions in config map to action methods
- Listens on both `document` and `window` with capture phase
- Critical: `isEditable()` check prevents interference with text inputs
- Handles both keydown and keyup to prevent site-specific conflicts

**5. Media Detection** (line 689)
- **Prototype Hijacking** (line 549): Intercepts HTMLMediaElement.play/pause/load to catch all videos including Shadow DOM
- **MutationObserver** (line 695): Detects dynamically added videos
- Initial scan on page load

### Shadow DOM Handling
The `isEditable()` function (line 131) traverses Shadow DOM to detect true active element. This prevents hotkeys from firing when typing in modern web components (critical for Reddit, etc.).

### CSS Filters & Transforms
Applied via inline styles on video element:
- **Filters**: brightness, contrast, saturate, hue-rotate, blur
- **Transforms**: rotate, scaleX (horizontal mirror), scaleY (vertical mirror)

### Site-Specific Features
Web fullscreen has site-specific selectors (line 390) for YouTube, Bilibili, Douyin to click native buttons. Falls back to CSS-based fullscreen.

## Code Style & Conventions
- Use ES6+ features (classes, arrow functions, const/let)
- No external dependencies or build system
- Runs in userscript manager environment with Greasemonkey APIs
- Strict mode enabled
- Console logging for initialization and controller events

## Known Limitations
- Screenshot and download features don't work on all sites due to CORS
- Cannot enhance videos with DRM or certain anti-tampering protections
- Volume boost above 100% may cause audio distortion
- Web fullscreen fallback doesn't hide page chrome on all sites

## License & Attribution
Licensed under CC BY-NC-ND 4.0. Author: aezi zhu (github.com/aezizhu)
- No derivatives or commercial use without permission
- Must preserve attribution in any distribution
