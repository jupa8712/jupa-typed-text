<?php

/**
 * Plugin Name:       Jupa - Typed Text
 * Description:       Gutenberg block that animates text with a typewriter effect using Typed.js.
 * Version:           1.0.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Jupa
 * Author URI:        https://www.jupa.co/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       jupa-typed-text
 */

if (!defined('ABSPATH')) {
	exit;
}

add_action('init', function () {
	register_block_type(__DIR__ . '/build');
});
