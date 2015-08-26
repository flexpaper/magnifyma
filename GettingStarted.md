#Getting started with the experiment page

# Getting Started #

Getting started with the experiment page is easy.

# Step One #

Checkout the code using SVN. This will give you all the main files you need to make it work.

  * magnify.html - HTML version of the experimental page.
  * magnify.js - Main JavaScript file for it to work.
  * magnify.png - PNG of the magnifying glass overlay.
  * map.jsp - Map JPG for the experimental page.
  * mootools-1.2.4-core.js - Runs on the MooTools framework.

# Step Two #

Place these files on your web server, or if you don't have a web server they can be placed in a directory and the HTML file can be called directly from there.

# Step Three #

Go into and edit the 'magnify.html' file which ever one your using, and change the following:

  * Line 9 - The background path of the magnify.png for the CSS ID '#magnify-glass' (if needed).
  * Line 40 - The iframe src location to be the exact same as the page called location.
  * Line 44 - Change the MooTools src location (if needed).
  * Line 45 - Change the 'magnify.js' src location (if needed).

This should allow for everything to work correctly.

# Step Four #

Call the 'magnify.html' in your Google Chrome browser. To start the magnifying glass and control it the following keys are available.

  * Shift + M - Start the magnifying glass. Or hide / show after been started.
  * Shift + G - Toggle glass
  * Shift + X - Zoom Out
  * Shift + Z - Zoom In