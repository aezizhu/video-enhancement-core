
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
    *   **[Click to Install](https://.../script.core.js)** (Replace this with the actual raw file link from your GitHub repo)
3.  A new tab will open. Click the "Install" button.

## ⌨️ How to Use (Hotkey Reference)

Hover your mouse over the target video to use the following hotkeys.

### Playback Control

| Hotkey | Function |
| :--- | :--- |
| `Space` | Toggle Play/Pause |
| `→` | Seek Forward 5 seconds |
| `←` | Seek Backward 5 seconds |
| `Ctrl` + `→` | Seek Forward 30 seconds |
| `Ctrl` + `←` | Seek Backward 30 seconds |
| `F` | Next Frame (when paused) |
| `D` | Previous Frame (when paused) |

### Speed Control

| Hotkey | Function |
| :--- | :--- |
| `C` | Increase Speed by 0.1x |
| `X` | Decrease Speed by 0.1x |
| `Z` | Reset Speed to 1.0x |
| `1`, `2`, `3`, `4` | Set speed directly to 1x, 2x, 3x, 4x |

### Volume Control

| Hotkey | Function |
| :--- | :--- |
| `↑` | Increase Volume by 5% |
| `↓` | Decrease Volume by 5% |
| `Ctrl` + `↑` | Increase Volume by 20% |
| `Ctrl` + `↓` | Decrease Volume by 20% |

### Picture Adjustment

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

### Display & Tools

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
