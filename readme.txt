=== Jupa - Typed Text ===
Contributors: jupa8
Tags: gutenberg, block, typed.js, typewriter, animation
Requires at least: 6.7
Tested up to: 7.1
Requires PHP: 7.4
Stable tag: 1.0.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

A Gutenberg block that animates text with a typewriter effect, powered by Typed.js.

== Description ==

Jupa Typed Text adds a block that types out one or more lines of text with a realistic typewriter animation, powered by [Typed.js](https://github.com/mattboldt/typed.js/). Each line is a regular paragraph block, so you can format text, add links, or use any inline formatting the editor already supports.

Simple and easy to use straight from the block inserter, with no configuration required to get started, yet fully customizable when you need it: typing speed, delays, cursor, looping, colors, typography, and even a callback for when the animation finishes.

= Features =

* Types through multiple lines in sequence, each one a normal paragraph block inside the editor.
* Configurable typing speed, backspacing speed, start delay, and delay before repeating.
* Toggle the blinking cursor, looping, smart backspace, and shuffle (random line order).
* `onComplete` callback: run a custom JavaScript function (`window.typed.onComplete.yourFunctionName`) once the animation finishes.
* Full color support (text, background, links) and typography controls (font size, line height) from the block sidebar, no custom CSS required.
* Each block instance gets a unique ID automatically, so duplicating or pasting the block never causes ID collisions.

= Usage =

1. Insert the "Typed Text" block from the inserter.
2. Write one or more lines of text; each paragraph inside the block becomes a line in the animation.
3. Open the block sidebar to adjust typing speed, delays, cursor, loop, smart backspace, and shuffle.
4. Optionally, set a function name under "Callbacks > On complete" and define `window.typed.onComplete.yourFunctionName` in your theme or plugin JavaScript to run code when the animation finishes.

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/jupa-typed-text` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the "Plugins" screen in WordPress.
3. Insert the "Typed Text" block from the block inserter.

== Frequently Asked Questions ==

= Can each line have different formatting? =

Yes. Each line is a standard paragraph block, so bold, italic, links, and other inline formatting work normally.

= How do I use the "On complete" callback? =

In the block sidebar, under "Callbacks > On complete", type a function name (for example `myCallback`). Then, in your theme or plugin JavaScript, define that function on `window.typed.onComplete` before the block's script runs:

`
window.typed = window.typed || {};
window.typed.onComplete = window.typed.onComplete || {};
window.typed.onComplete.myCallback = function () {
    // Runs once the typing animation finishes.
};
`

If loop is enabled, the callback runs every time the animation completes a cycle, not just once.

= What happens if I don't set an "On complete" function? =

Nothing extra happens; the animation just finishes and, if looping is enabled, starts again.

= Does this work in the Site Editor / FSE templates? =

Yes, it's a standard block with `apiVersion: 3` and works anywhere blocks are supported.

== Source Code ==

This plugin's `build/` directory contains a minified/compiled JavaScript bundle generated with `@wordpress/scripts` (webpack). The human-readable source is included in the `src/` directory of this plugin, and is also publicly available at:

https://github.com/jupa8712/jupa-typed-text

To regenerate the `build/` files from source: `npm install && npm run build`.

= Third-party libraries =

* [Typed.js](https://github.com/mattboldt/typed.js/) v3.0.0 — MIT License, Copyright (c) Matt Boldt. Bundled into `build/view.js` via the build step; source available at the link above.

== Changelog ==

= 1.0.0 =
* Initial standalone release, packaged from the Jupa Gutenberg Blocks collection.

== Upgrade Notice ==

= 1.0.0 =
Initial release.
