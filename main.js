// Pseudocode Plan

/*
when .open-modal-button is clicked:
    remove .hidden from .modal-overlay

when .close-modal-button is clicked:
    add .hidden to .modal-overlay

when .hamburger-button is clicked:
    if nav is hidden:
        remove .hidden from nav
    else:
        add .hidden to nav
*/

// ----------------------------------------

// Interactivity Snippets

$(document).ready(function() {

    // when .open-modal-button is clicked:
    $(".open-modal-button").on("click", function() {
        // action snippets
        $(".modal-overlay").removeClass("hidden");

    }); // click event

    // when .close-modal-button is clicked:
    $(".close-modal-button").on("click", function() {
        // action snippets
        $(".modal-overlay").addClass("hidden");

    }); //  click event

    // when .hamburger-button is clicked:
    $(".hamburger-button").on("click", function() {
        // action snippets
        if ($("nav").hasClass("hidden")) {
            $("nav").removeClass("hidden");
        } else {
            $("nav").addClass("hidden");
        }

    }); // click event

}); 
