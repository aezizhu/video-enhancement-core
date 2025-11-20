# Changelog

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
