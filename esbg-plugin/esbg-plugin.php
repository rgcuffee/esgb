<?php
/*
Plugin Name: East Siders Giving Back Plugin
Description: A WordPress plugin to load a React app.
Version: 0.1.0 (2025)
Author: Richard Cuffee
*/
 
function enqueue_react_app_plugin() {
    // Adjust the path to point to your plugin's directory
    $plugin_url = plugin_dir_url(__FILE__);
 
    // Enqueue the main CSS file
    wp_enqueue_style(
        'react-app-style',
        $plugin_url . 'build/static/css/main.38f7ced0.css',
        array(), // dependencies
        '1.0'
    );
 
    // Enqueue the main JavaScript file
    wp_enqueue_script(
        'react-app',
        $plugin_url . 'build/static/js/main.42d9d8b7.js',
       array('react', 'react-dom'), // dependencies
        '1.0',
        true // load in footer
    );
 
    // Localize script to pass data if needed
    wp_localize_script('react-app', 'wpData', array(
        'apiUrl' => esc_url_raw(rest_url('your-endpoint/v1/')),
    ));
}
add_action('wp_enqueue_scripts', 'enqueue_react_app_plugin');
 
// Optional: Add a shortcode to render the React app
function render_react_app_shortcode() {
    return '<div id="react-root"></div>';
}
add_shortcode('esgb-plugin', 'render_react_app_shortcode');