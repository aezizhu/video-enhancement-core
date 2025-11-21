# Changelog

## [1.6.7] - 2025-11-21

### 🔥 Fixed
- **Baidu Netdisk Video Rotation Issue**
  - Fixed video appearing rotated/tilted on Baidu Netdisk (百度网盘)
  - Only apply CSS transforms when values differ from defaults
  - Prevents overriding site-native transforms while maintaining full functionality

- **Audio Element Compatibility**
  - Fixed crash when script encounters `<audio>` elements
  - Screenshot function now properly checks for video elements before attempting capture
  - Media filtering logic now correctly distinguishes between video and audio elements

### 🎯 Changes
- Enhanced `applyStyles()` to conditionally apply filters and transforms
- Improved media detection to handle both video and audio elements safely
- Better error messages for unsupported operations on audio elements
- **Robustness Improvements**:
  - Backported safer PiP and Screenshot handling from scriptG to main script
- **Persistence**:
  - Picture adjustments (brightness, contrast, rotation, etc.) now persist across page reloads (as documented)

---

## [1.6.6] - 2025-11-20

### 🔥 Fixed
- **Critical Fix: Input Interference on Reddit & Modern Sites**
  - Fixed keyboard input being blocked when typing in search fields and input boxes on pages with videos
  - Implemented Shadow DOM traversal to detect the true active element inside web components
  - Reddit search bar now properly allows text input without triggering video hotkeys
  - Other sites with Shadow DOM-based inputs are now fully supported

### 🎯 Changes
- Enhanced `isEditable()` function to penetrate Shadow DOMs
  - Now recursively checks `shadowRoot.activeElement` to find actual focused elements
  - Maintains backward compatibility with standard HTML inputs and contenteditable elements
  - Improved ARIA role detection for custom input components (searchbox, textbox, combobox)

### ✅ Testing
- Verified on Reddit search bar - typing now works correctly
- Video hotkeys remain functional when focus is on video or page body
- No regression on other websites (YouTube, Bilibili, etc.)

### 📝 Technical Details
Reddit's modern interface uses web components with Shadow DOM, causing `document.activeElement` to stop at the component wrapper instead of the actual input. The fix now drills down through Shadow DOM layers to locate the true focused element, ensuring accurate input detection.

---

## [1.6.5] - Previous Release
- Previous features and improvements
