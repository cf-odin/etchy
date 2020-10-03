// logging.js / 06/15/2020 / CF Logging Utility / Etch-A-Sketch
// Copyright 2020 Conrad A. Flescher. All rights reserved.


// This is a logging utility that only prints if "deb=true" query param
// is present in the url. It checks the entire url, not just the query string,
// because I am lazy.
const CF_DEBUG = (window.location.href.indexOf("deb=true") == -1) ? false : true;

const CFLog = function (tag, string, color) {
    // function params can't be modified, so we have to create a separate variable.
    colorModifiable = color;
    if (color == null) {
        colorModifiable = "purple"; //default color if no tag color present.
    }

    if (CF_DEBUG) {
        console.log(`%c [${tag}]`, `font-weight: bold; color: ${colorModifiable}`, string);
        // for event tags, use "orange" for warnings, and "red" for errors.
    }

}
