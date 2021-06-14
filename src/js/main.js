import _ from 'lodash';
import HandleEvent from "./handle-event.js";

// Store user's selection in a array
const selection = [];

// Instance of HandleEvent which is listening all events from drag and drop
const startEvents = new HandleEvent(selection);

startEvents.load();
startEvents.drag();
startEvents.dragStart();
startEvents.dragEnd();
startEvents.dragOver();
startEvents.dragEnter();
startEvents.dragLeave();
startEvents.drop();
