document.querySelector(".products").addEventListener('click', (event) => {
    // console.log(event
    console.log(event.target.closest("SPAN")); // to check the closest element
    if(event.target.tagName === "SPAN"){   
        window.location.href += "/" + event.target.className;
     }

});

// Q6: What is Event Delegation ?


// Event delegation is a technique in JavaScript where instead of attaching event handlers directly to individual elements, you attach them to a parent element. This parent element then listens for events that bubble up from its descendants. When an event occurs on a descendant element, the event bubbles up to the parent element, where the event handler is executed. Event delegation leverages event propagation to handle events more efficiently, especially in cases where there are many elements that need event handling.


// Here's how event delegation works:

// 1. Attach Event Handler to Parent Element:
// You attach an event handler to a parent element that contains the child elements on which you want to handle events.

// 2. Check Event Target:
// When an event occurs, you check the event target to determine which descendant element triggered the event.

// 3. Handle Event:
// Based on the event target, you perform the appropriate action or execute the desired event handler.

// Event delegation offers several benefits:

// A. Efficiency: Instead of attaching event handlers to each individual element, you attach a single event handler to a parent element. This reduces the number of event handlers, improving performance and memory usage, especially for large DOM structures.

// B. Dynamic Elements: Event delegation works well with dynamically generated or added elements. Since the event handler is attached to a parent element, it automatically applies to any new child elements added later, even if they weren't present when the handler was initially attached.

// C. Simplicity: Event delegation simplifies event management, especially in complex applications with nested DOM structures. You only need to manage event handlers for a few parent elements rather than for every individual element.