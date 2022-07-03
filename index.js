import navigationSwitch from "./modules/switch.js";
import addBtnEvent from "./modules/addBtnEvent.js";
import { DateTime } from "../luxon.js";
export const titleInput = document.querySelector('.title-input');
export const authorInput = document.querySelector('.author-input');
export const addBtn = document.querySelector('.add-input');
export const listBtn = document.querySelector('.list-btn');
export const bookAddBtn = document.querySelector('.add-btn');
export const contactBtn = document.querySelector('.contact-btn');
export const timeElement = document.querySelector('.time');
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];
addBtnEvent();
navigationSwitch();
console.log(DateTime.now().c)
const date =` ${monthNames[DateTime.now().c.month - 1]} ${DateTime.now().c.day} ${DateTime.now().c.year}`
const time = `${DateTime.now().c.hour}:${DateTime.now().c.minute}`
timeElement.textContent = `${date}, ${time}`