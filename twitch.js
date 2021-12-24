// ==UserScript==
// @name Twitch Script
// @match https://www.twitch.tv/*
// @run-at document-start
// ==/UserScript==

let buttonClass = ".claimable-bonus__icon";

function clickChest()
{
	if(document.querySelector(buttonClass)) {
		document.querySelector(buttonClass).click();
	}
	setTimeout(clickChest,8000); // self invoking function along with setTimeout every 8 seconds
}
clickChest();
