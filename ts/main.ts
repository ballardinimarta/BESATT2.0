import {Magazine, magazines, addMagazines, helpDialog} from './kop';
import {store, stores, addStoresHtml} from './butiker';
$(function () {
    
    openNav();
    addMagazines();
    helpDialog();
    addStoresHtml();
})

function openNav() {
    $("#navButton").on('click', () => {
        $("#sideNav").css("width", "100%");
        $("#navButton").css("display", "none");
    })
    $("#closeNavButton").on('click', () => {
        $("#sideNav").css("width", "0%");
        $("#navButton").css("display", "block");

    })
    
}

