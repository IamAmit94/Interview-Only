# What is Event Propagation ?


Event propagation, also known as event bubbling and event capturing, is the process by which events are handled and passed through the DOM (Document Object Model) hierarchy in web browsers. When an event occurs on an element in the DOM, such as a click or keypress, it can trigger event handlers attached to that element as well as its ancestor elements. So Event propagation is a process of deciding when and in which direction the event will execute is EVENT PROPAGATION.

Event propagation consists of two phases:

1. Event Capturing (Capture Phase):

During the capture phase, the browser traverses the DOM from the root element down to the target element where the event occurred.

Event handlers attached to ancestor elements are executed first, working their way towards the target element.

2. Event Bubbling (Bubbling Phase): down to up approch(default behaviuor of event)

After the capture phase, during the bubbling phase, the browser traverses the DOM back up from the target element to the root element.

Event handlers attached to the target element and its ancestor elements are executed in sequence, bubbling up towards the root element.

Mentions are the some of the event which do not bubble
Focus events:

focus: Triggered when an element gains focus.
blur: Triggered when an element loses focus.
focusin: Similar to focus, but bubbles up through the DOM.
focusout: Similar to blur, but bubbles up through the DOM.
Mouse events:

mouseenter: Triggered when the mouse enters the boundaries of an element. This event does not bubble.
mouseleave: Triggered when the mouse leaves the boundaries of an element. This event does not bubble.
mouseover: Similar to mouseenter, but bubbles up through the DOM.
mouseout: Similar to mouseleave, but bubbles up through the DOM.
Scroll events:

scroll: Triggered when an element's scroll position changes.
Input events: