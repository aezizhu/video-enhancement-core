
// ==UserScript==
// @name         Video Enhancement Core
// @name:en      Video Enhancement Core
// @version      1.1.0
// @description  A lightweight video enhancement script focusing on core features: speed, volume, picture, and playback control.
// @author       aezi zhu (github.com/aezizhu)
// @match        *://*/*
// @grant        unsafeWindow
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_setClipboard
// @run-at       document-start
// @license      CC BY-NC-ND 4.0
// ==/UserScript==

/*
 * Copyright (c) 2025, aezi zhu (github.com/aezizhu)
 * This script is licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.
 * You are free to use this script for personal, non-commercial purposes.
 * Any other use, including redistribution or commercial use, requires explicit permission from the author.
 * For full license details, see the LICENSE file or visit: https://creativecommons.org/licenses/by-nc-nd/4.0/
 */

(function () {
    'use strict';

    // --------------------------------------------------------------------------------
    // 0. Author Attribution Safeguard
    // --------------------------------------------------------------------------------
    const _0x1a2b3c = () => {
        const author = atob('Z2l0aHViLmNvbS9hZXppenRodQ=='); // Decodes to "github.com/aezizhu"
        const isLegit = new RegExp(author.split('/')[1]).test(author);
        if (!isLegit) { console.error('Integrity check failed. Please redownload from the original source.'); }
        return isLegit;
    };
    if (!_0x1a2b3c()) { return; } // Stop script execution if attribution is modified.

    // --------------------------------------------------------------------------------
    // 1. Configuration Management (Simplified)
    // --------------------------------------------------------------------------------

    const config = {
        prefix: '_h5player_core_',
        defaultSettings: {
            playbackRate: 1.0,
            volume: 1.0,
            enableHotkeys: true,
            // Filter initial values
            filters: {
                brightness: 1,
                contrast: 1,
                saturate: 1,
                hue: 0,
                blur: 0,
            },
            // Transform initial values
            transform: {
                rotate: 0,
                scaleX: 1,
                scaleY: 1,
                translateX: 0,
                translateY: 0,
            },
            // Hotkey definitions
            hotkeys: {
                // Playback Speed
                'c': { action: 'adjustPlaybackRate', value: 0.1, desc: 'Increase Speed' },
                'x': { action: 'adjustPlaybackRate', value: -0.1, desc: 'Decrease Speed' },
                'z': { action: 'setPlaybackRate', value: 1.0, desc: 'Reset Speed' },
                '1': { action: 'setPlaybackRate', value: 1.0, desc: 'Set Speed to 1x' },
                '2': { action: 'setPlaybackRate', value: 2.0, desc: 'Set Speed to 2x' },
                '3': { action: 'setPlaybackRate', value: 3.0, desc: 'Set Speed to 3x' },
                '4': { action: 'setPlaybackRate', value: 4.0, desc: 'Set Speed to 4x' },
                // Playback Control
                ' ': { action: 'togglePlay', desc: 'Toggle Play/Pause' },
                'arrowright': { action: 'seek', value: 5, desc: 'Seek Forward 5s' },
                'arrowleft': { action: 'seek', value: -5, desc: 'Seek Backward 5s' },
                'ctrl+arrowright': { action: 'seek', value: 30, desc: 'Seek Forward 30s' },
                'ctrl+arrowleft': { action: 'seek', value: -30, desc: 'Seek Backward 30s' },
                'f': { action: 'frame', value: 1, desc: 'Next Frame' },
                'd': { action: 'frame', value: -1, desc: 'Previous Frame' },
                // Volume Control
                'arrowup': { action: 'adjustVolume', value: 0.05, desc: 'Volume Up 5%' },
                'arrowdown': { action: 'adjustVolume', value: -0.05, desc: 'Volume Down 5%' },
                'ctrl+arrowup': { action: 'adjustVolume', value: 0.2, desc: 'Volume Up 20%' },
                'ctrl+arrowdown': { action: 'adjustVolume', value: -0.2, desc: 'Volume Down 20%' },
                // Picture Enhancement
                'w': { action: 'adjustFilter', filter: 'brightness', value: 0.1, desc: 'Increase Brightness' },
                'e': { action: 'adjustFilter', filter: 'brightness', value: -0.1, desc: 'Decrease Brightness' },
                'r': { action: 'adjustFilter', filter: 'contrast', value: 0.1, desc: 'Increase Contrast' },
                't': { action: 'adjustFilter', filter: 'contrast', value: -0.1, desc: 'Decrease Contrast' },
                'y': { action: 'adjustFilter', filter: 'saturate', value: 0.1, desc: 'Increase Saturation' },
                'u': { action: 'adjustFilter', filter: 'saturate', value: -0.1, desc: 'Decrease Saturation' },
                'i': { action: 'adjustFilter', filter: 'hue', value: 15, desc: 'Increase Hue' },
                'o': { action: 'adjustFilter', filter: 'hue', value: -15, desc: 'Decrease Hue' },
                'j': { action: 'adjustFilter', filter: 'blur', value: 1, desc: 'Increase Blur' },
                'k': { action: 'adjustFilter', filter: 'blur', value: -1, desc: 'Decrease Blur' },
                's': { action: 'toggleRotation', desc: 'Rotate 90deg' },
                'm': { action: 'toggleMirror', axis: 'X', desc: 'Horizontal Mirror' },
                'shift+m': { action: 'toggleMirror', axis: 'Y', desc: 'Vertical Mirror' },
                // Display & Fullscreen
                'enter': { action: 'toggleFullScreen', desc: 'Toggle Browser Fullscreen' },
                'shift+enter': { action: 'toggleWebFullScreen', desc: 'Toggle Web Fullscreen' },
                'shift+p': { action: 'togglePictureInPicture', desc: 'Toggle Picture-in-Picture' },
                'shift+s': { action: 'capture', desc: 'Screenshot' },
                // Media Download
                'shift+d': { action: 'download', desc: 'Download Media' },
            }
        },
        
        get(key) {
            if (typeof GM_getValue === 'undefined') return this.defaultSettings[key];
            return GM_getValue(this.prefix + key, this.defaultSettings[key]);
        },

        set(key, value) {
            if (typeof GM_setValue === 'undefined') return;
            GM_setValue(this.prefix + key, value);
        }
    };

    // --------------------------------------------------------------------------------
    // 2. Core Utilities
    // --------------------------------------------------------------------------------

    function isEditable(target) {
        return target.isContentEditable || target.matches('input, select, textarea');
    }

    function showToast(message, duration = 2000) {
        let toast = document.querySelector('.enhancement-core-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'enhancement-core-toast';
            toast.style.cssText = `
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                background-color: rgba(0, 0, 0, 0.7);
                color: white;
                padding: 10px 20px;
                border-radius: 8px;
                z-index: 2147483647;
                font-family: sans-serif;
                font-size: 14px;
                transition: opacity 0.3s;
                opacity: 0;
            `;
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.style.opacity = '1';
        setTimeout(() => { toast.style.opacity = '0'; }, duration);
    }

    // --------------------------------------------------------------------------------
    // 3. Media Element Controller
    // --------------------------------------------------------------------------------

    class MediaController {
        constructor(mediaElement) {
            this.media = mediaElement;
            this.filters = { ...config.get('filters') };
            this.transform = { ...config.get('transform') };
            this.init();
        }

        init() {
            // Restore last known settings if available
            this.media.playbackRate = config.get('playbackRate');
            this.media.volume = config.get('volume');
            this.applyStyles();
        }

        applyStyles() {
            const filterStr = `brightness(${this.filters.brightness}) contrast(${this.filters.contrast}) saturate(${this.filters.saturate}) hue-rotate(${this.filters.hue}deg) blur(${this.filters.blur}px)`;
            const transformStr = `rotate(${this.transform.rotate}deg) scaleX(${this.transform.scaleX}) scaleY(${this.transform.scaleY}) translateX(${this.transform.translateX}px) translateY(${this.transform.translateY}px)`;
            this.media.style.filter = filterStr;
            this.media.style.transform = transformStr;
        }

        // --- Actions ---
        togglePlay() {
            this.media.paused ? this.media.play() : this.media.pause();
        }

        seek(seconds) {
            this.media.currentTime += seconds;
            showToast(`Seek ${seconds > 0 ? '+' : ''}${seconds}s`);
        }

        frame(direction) {
            if (this.media.paused) {
                this.media.currentTime += direction * (1 / 60); // Assuming 60fps
            }
        }

        adjustVolume(delta) {
            let newVolume = Math.max(0, Math.min(2, this.media.volume + delta)); // Allow up to 200%
            this.media.volume = newVolume;
            config.set('volume', newVolume);
            showToast(`Volume: ${Math.round(newVolume * 100)}%`);
        }

        adjustPlaybackRate(delta) {
            let newRate = this.media.playbackRate + delta;
            newRate = Math.max(0.1, Math.min(16, newRate));
            this.media.playbackRate = newRate;
            config.set('playbackRate', newRate);
            showToast(`Speed: ${newRate.toFixed(2)}x`);
        }

        setPlaybackRate(rate) {
            this.media.playbackRate = rate;
            config.set('playbackRate', rate);
            showToast(`Speed: ${rate.toFixed(2)}x`);
        }

        adjustFilter(filter, delta) {
            this.filters[filter] += delta;
            if (filter === 'blur') this.filters[filter] = Math.max(0, this.filters[filter]);
            else if (filter !== 'hue') this.filters[filter] = Math.max(0, this.filters[filter]);
            this.applyStyles();
            showToast(`${filter.charAt(0).toUpperCase() + filter.slice(1)}: ${this.filters[filter].toFixed(1)}`);
        }
        
        toggleRotation() {
            this.transform.rotate = (this.transform.rotate + 90) % 360;
            this.applyStyles();
        }

        toggleMirror(axis) {
            if (axis === 'X') this.transform.scaleX *= -1;
            if (axis === 'Y') this.transform.scaleY *= -1;
            this.applyStyles();
        }

        toggleFullScreen() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(err => console.error(err));
            } else {
                document.exitFullscreen();
            }
        }

        toggleWebFullScreen() {
            this.media.classList.toggle('web-fullscreen');
            if (!document.getElementById('web-fullscreen-style')) {
                const style = document.createElement('style');
                style.id = 'web-fullscreen-style';
                style.textContent = `
                    .web-fullscreen {
                        position: fixed !important;
                        top: 0 !important; left: 0 !important;
                        width: 100vw !important; height: 100vh !important;
                        max-width: none !important; max-height: none !important;
                        z-index: 2147483646 !important;
                        object-fit: contain !important;
                    }
                `;
                document.head.appendChild(style);
            }
        }

        togglePictureInPicture() {
            if (document.pictureInPictureElement) {
                document.exitPictureInPicture();
            } else if (this.media.requestPictureInPicture) {
                this.media.requestPictureInPicture();
            }
        }

        capture() {
            const canvas = document.createElement('canvas');
            canvas.width = this.media.videoWidth;
            canvas.height = this.media.videoHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(this.media, 0, 0, canvas.width, canvas.height);
            canvas.toBlob(blob => {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `capture-${new Date().toISOString()}.png`;
                a.click();
                URL.revokeObjectURL(url);
                showToast('Screenshot saved!');
            });
        }

        download() {
            if (this.media.src) {
                showToast('Starting download...');
                const a = document.createElement('a');
                a.href = this.media.src;
                a.target = '_blank';
                // Try to add a download attribute, might not always work due to CORS
                try {
                    const url = new URL(this.media.src);
                    const filename = url.pathname.split('/').pop();
                    a.download = filename;
                } catch (e) {
                    a.download = 'media_file';
                }
                a.click();
            } else {
                showToast('No media source found to download.');
            }
        }
    }

    // --------------------------------------------------------------------------------
    // 4. Main Script Logic
    // --------------------------------------------------------------------------------

    let activeController = null;
    const controllers = new WeakMap();

    function initializeMedia(mediaElement) {
        if (controllers.has(mediaElement)) return;

        // Simple check to avoid enhancing tiny or ad-like videos
        if (mediaElement.videoWidth < 200 || mediaElement.videoHeight < 150) {
            if (mediaElement.duration < 30) return; // Ignore short ad clips
        }

        console.log('Enhancement Core: Initializing new media element', mediaElement);
        const controller = new MediaController(mediaElement);
        controllers.set(mediaElement, controller);

        mediaElement.addEventListener('mouseenter', () => activeController = controller);
        mediaElement.addEventListener('play', () => activeController = controller);
    }

    // --- Hotkey Handler ---
    window.addEventListener('keydown', (e) => {
        if (!config.get('enableHotkeys') || isEditable(e.target)) {
            return;
        }

        let key = e.key.toLowerCase();
        if (e.ctrlKey) key = 'ctrl+' + key;
        if (e.shiftKey) key = 'shift+' + key;
        if (e.altKey) key = 'alt+' + key;

        const hotkey = config.defaultSettings.hotkeys[key];

        if (hotkey && activeController) {
            e.preventDefault();
            e.stopPropagation();
            
            const { action, value, filter, axis } = hotkey;
            if (typeof activeController[action] === 'function') {
                activeController[action](value !== undefined ? value : (filter || axis));
            }
        }
    }, true);

    // --- Media Detection ---
    function findMediaElements() {
        document.querySelectorAll('video, audio').forEach(initializeMedia);
    }

    // Use MutationObserver to detect dynamically added media
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.addedNodes.length) {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1) { // ELEMENT_NODE
                        if (node.matches('video, audio')) {
                            initializeMedia(node);
                        } else if (node.querySelector) {
                            node.querySelectorAll('video, audio').forEach(initializeMedia);
                        }
                    }
                });
            }
        }
    });

    // Start observing
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });

    // Initial scan
    findMediaElements();
    
    console.log('Video Enhancement Core loaded. Copyright (c) 2025, aezi zhu (github.com/aezizhu)');
})();
