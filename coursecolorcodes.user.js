// ==UserScript==
// @name        Course Buckets color UNC Courses Page
// @namespace   Violentmonkey Scripts
// @match       https://crypto.cs.unc.edu/UNC_classes/*/*
// @grant       none
// @version     1.0
// @author      -
// @description 22/8/2024, 1:01:05 pm
// ==/UserScript==

(function() {
    'use strict';

    // Variables for string matching
    // const tandf = ["string1", "string2", "string3"];  // Replace with your strings for red tint
    // const sandh = ["string4", "string5", "string6"];  // Replace with your strings for blue tint
    // const appli = ["string7", "string8", "string9"];  // Replace with your strings for green tint

    var tandf = ["455", "537", "555", "576", "651", "662", "664", "722", "735", "737", "750", "752", "755", "766", "767", "777", "790-06", "790-58", "790-58", "790-72", "790-78", "790-78", "790-87", "790-90", "790-90", "790-95", "790-95", "790-99", "790-125", "790-125", "790-134", "790-134", "790-142", "790-142", "790-144", "790-183", "790-201"];


var sandh = ["520", "521", "523", "530", "535", "541", "630", "631", "633", "635", "720", "723", "730", "734", "740", "741", "744", "831", "832", "841", "590-136", "790-11", "790-42", "790-42", "790-52", "790-58", "790-58", "790-58", "790-62", "790-63", "790-84", "790-88", "790-88", "790-88", "790-88", "790-91", "790-91", "790-91", "790-91", "790-95", "790-95", "790-95", "790-132", "790-132", "790-132", "790-136", "790-136", "790-136", "790-138", "790-138", "790-149", "790-175", "790-180", "790-185"];

var appli = ["560", "572", "581", "585", "665", "683", "715", "768", "770", "775", "776", "781", "782", "870", "872", "875", "590-96", "590-125", "590-133", "590-134", "790-58", "790-58", "790-58", "790-59", "790-62", "790-62", "790-62", "790-62", "790-63", "790-63", "790-63", "790-72", "790-84", "790-87", "790-87", "790-87", "790-89", "790-93", "790-96", "790-96", "790-98", "790-98", "790-99", "790-99", "790-133", "790-133", "790-136", "790-139", "790-139", "790-139", "790-148", "790-149", "790-150", "790-158", "790-170", "790-170", "790-172", "790-172", "790-173", "790-173", "790-175", "790-177"];

    // Function to highlight the row based on string match
    function highlightRow(cell, row) {
        const cellText = cell.innerText.toLowerCase();

        if (tandf.some(str => cellText.replaceAll(" ", "").includes(str.toLowerCase()))) {
            row.style.backgroundColor = 'rgba(255, 0, 0, 0.3)'; // Red tint
        } else if (sandh.some(str => cellText.replaceAll(" ", "").includes(str.toLowerCase()))) {
            row.style.backgroundColor = 'rgba(0, 0, 255, 0.3)'; // Blue tint
        } else if (appli.some(str => cellText.replaceAll(" ", "").includes(str.toLowerCase()))) {
            row.style.backgroundColor = 'rgba(0, 255, 0, 0.3)'; // Green tint
        }
    }

    // Function to process the table when it is found
    function processTable(table) {
        const rows = table.querySelectorAll('tr');

        rows.forEach(row => {
            const cell = row.querySelector('td:nth-child(2)'); // Get the target column cell
            if (cell) {
                highlightRow(cell, row);
            }
        });
    }

    // Create a MutationObserver to detect when the table is added to the DOM
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.tagName === 'TABLE') {
                    const table = node.querySelector('body > table');
                    if (table) {
                        processTable(table);
                    }
                }
            });
        });
    });

    // Start observing the entire document
    observer.observe(document.body, { childList: true, subtree: true });
    processTable(document.querySelector('body > table'));
})();

