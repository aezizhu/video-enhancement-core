# Video Enhancement Core Script

**Author: aezi zhu (github.com/aezizhu)**

A lightweight userscript focused on providing core playback and picture enhancement features via hotkeys. It has no extra UI, offering a pure and efficient online video viewing experience.

---

## ✨ Features

This script is a stable, lightweight, and powerful control center for web videos.

- **Playback Speed Control**: Infinitely adjustable speed from 0.1x to 16x, with one-key switching for common speeds.
- **Precise Playback Control**: Easily play/pause, seek frame-by-frame, and jump forward/backward in various increments.
- **Volume Boost**: Supports up to 200% volume gain, ensuring you never miss a detail.
- **Full Picture Enhancement**: Real-time adjustment of video brightness, contrast, saturation, hue, and blur.
- **Geometric Transforms**: Supports 90-degree step rotation and horizontal/vertical mirroring.
- **Flexible Display Modes**: One-key toggle for web fullscreen, browser fullscreen, and Picture-in-Picture (PiP) mode.
- **Utilities**: Built-in video screenshot and media file download (experimental) functions.
- **Pure Hotkey Operation**: All functions are triggered by keyboard shortcuts for maximum efficiency.
- **Lightweight Design**: No graphical interface, resulting in extremely low resource consumption and excellent performance.
- **Broad Compatibility**: Works on nearly all websites using HTML5 `<video>` and `<audio>` elements.

## ⬇️ Installation

1.  First, you need a userscript manager for your browser. Any of these will work:
    *   [Tampermonkey](https://www.tampermonkey.net/) (Supports Chrome, Firefox, Edge, Safari)
    *   [Violentmonkey](https://violentmonkey.github.io/) (Supports Chrome, Firefox, Edge)
2.  With the manager installed, click the link below to install the script:
    *   **[Click to Install](https://github.com/aezizhu/video-enhancement-core/raw/main/script.core.js)**
3.  A new tab will open. Click the "Install" button.

## 📚 Usage Guide & Tutorial

This guide will walk you through how to use the script effectively.

### Getting Started

Once installed, the script works automatically. Simply navigate to any webpage containing an HTML5 video. To activate the controls, **hover your mouse cursor over the video player**. All controls are activated by keyboard shortcuts.

Most actions (like changing speed or volume) will show a small, temporary confirmation message on the screen, so you know your command has been received.

### Common Scenarios

Here are a few examples of how you might use the script in real situations:

**Scenario 1: Watching a Lecture or Tutorial**

> You're watching a long online course. The speaker is a bit slow, and you want to speed things up. You also need to occasionally jump back to review a concept.

- **Increase speed**: Press the `C` key repeatedly until you find a comfortable speed (e.g., 1.5x). The current speed will be displayed on screen.
- **Too fast?**: Press the `X` key to slow it down.
- **Reset speed**: Press the `Z` key to instantly return to the normal 1.0x speed.
- **Jump back**: Press the `←` key to go back 5 seconds. For a bigger jump, press `Ctrl` + `←` to go back 30 seconds.

**Scenario 2: Fixing a Dark or Quiet Video**

> You're trying to watch a video that was recorded in low light, and the audio is very quiet.

- **Increase Brightness**: Press the `W` key. The video will become brighter. If it's still too dark, press it again.
- **Adjust Contrast**: If the image looks washed out after increasing brightness, press `R` to increase the contrast.
- **Boost Volume**: Press the `↑` key to increase the volume. You can go past the website's 100% limit, up to 200%.

**Scenario 3: Multitasking or Immersive Viewing**

> You want to keep an eye on a video while working in another window, or you want to get rid of all browser distractions.

- **Picture-in-Picture (PiP)**: Press `Shift` + `P`. The video will pop out into a small, floating window that stays on top of all your other applications. You can drag it anywhere on the screen.
- **Web Fullscreen**: Press `Shift` + `Enter`. This makes the video fill the entire browser window, hiding other parts of the webpage.
- **True Fullscreen**: Press `Enter`. This makes the video fill your entire monitor.

### Full Hotkey Reference

Here is the complete list of available shortcuts.

#### Playback Control

| Hotkey | Function |
| :--- | :--- |
| `→` | Seek Forward 5 seconds |
| `←` | Seek Backward 5 seconds |
| `Ctrl` + `→` | Seek Forward 30 seconds |
| `Ctrl` + `←` | Seek Backward 30 seconds |
| `F` | Next Frame (when paused) |
| `D` | Previous Frame (when paused) |

#### Speed Control

| Hotkey | Function |
| :--- | :--- |
| `C` | Increase Speed by 0.1x |
| `X` | Decrease Speed by 0.1x |
| `Z` | Reset Speed to 1.0x |
| `1`, `2`, `3`, `4` | Set speed directly to 1x, 2x, 3x, 4x |

#### Volume Control

| Hotkey | Function |
| :--- | :--- |
| `↑` | Increase Volume by 5% |
| `↓` | Decrease Volume by 5% |
| `Ctrl` + `↑` | Increase Volume by 20% |
| `Ctrl` + `↓` | Decrease Volume by 20% |

#### Picture Adjustment

| Hotkey | Function |
| :--- | :--- |
| `W` / `E` | Increase / Decrease **Brightness** |
| `R` / `T` | Increase / Decrease **Contrast** |
| `Y` / `U` | Increase / Decrease **Saturation** |
| `I` / `O` | Increase / Decrease **Hue** |
| `J` / `K` | Increase / Decrease **Blur** |
| `S` | Rotate picture by 90 degrees |
| `M` | Flip horizontally (mirror) |
| `Shift` + `M` | Flip vertically (mirror) |

#### Display & Tools

| Hotkey | Function |
| :--- | :--- |
| `Enter` | Toggle Browser Fullscreen |
| `Shift` + `Enter` | Toggle Web Fullscreen |
| `Shift` + `P` | Toggle Picture-in-Picture (PiP) |
| `Shift` + `S` | Take a screenshot of the video |
| `Shift` + `D` | Download the media file (experimental) |

## 📜 License

This project is licensed under the **Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0) License**.

The author is **aezi zhu (github.com/aezizhu)**.

In simple terms, this means:

-   **Personal Use**: You are free to use, copy, and distribute this script for personal purposes.
-   **Attribution**: You must give appropriate credit to the author, **aezi zhu**, in any sharing or mention.
-   **No Derivatives**: You may not modify, transform, or build upon this work and distribute the modified material. This is to protect the integrity and originality of the code.
-   **Non-Commercial**: You may **not** use this script for any commercial purposes or for-profit activities.
-   **Commercial Inquiries**: If you wish to use this script for commercial purposes, you **must** contact the author, **aezi zhu**, to obtain a commercial license. This will require negotiation and payment.
-   **Usage Notification**: If you use parts of this script in your own project (even a free, personal one), you must notify the original author via email or by leaving a message on the project's homepage.

##  Disclaimer

This script is provided "as is", without warranty of any kind, express or implied. The author is not liable for any claim, damages or other liability arising from, out of or in connection with the software or the use or other dealings in the software.