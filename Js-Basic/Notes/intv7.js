// Throttling:

// Throttling is a technique that limits the rate at which a function can be executed. It ensures that the function is not called more than once within a specified time interval.
// It is useful for scenarios where you want to ensure a function is executed at most once per fixed time interval, regardless of how many times it is called during that interval.

function throttle(func, delay) {
    let lastExecutedTime = 0;
    return function(...args) {
      const now = Date.now();
      if (now - lastExecutedTime >= delay) {
        func.apply(this, args);
        lastExecutedTime = now;
      }
    };
  }
  
  const throttledFn = throttle(() => {
    console.log('Function throttled');
  }, 300); // Throttle for 300 milliseconds
  
  // Call throttled function multiple times in quick succession
//   throttledFn();
//   throttledFn();
//   throttledFn();
//   throttledFn();
//   throttledFn();
//   throttledFn();
//   throttledFn();
//   throttledFn();
//   throttledFn(); // Only one execution, spaced at least 300ms apart
  

//   Debouncing:

// Debouncing is a technique that delays the execution of a function until after a specified time period has elapsed since the last invocation of the function.
// It is commonly used to handle events that may fire rapidly, such as keystrokes in a search input or scroll events.
// With debouncing, the function will only be executed once, after a certain period of inactivity, even if it is called multiple times during that period.

function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  
  const debouncedFn = debounce(() => {
    console.log('Function debounced');
  }, 300); // Debounce for 300 milliseconds
  
  // Call debounced function multiple times in quick succession
  debouncedFn();
  debouncedFn();
  debouncedFn(); // Only one execution after 300ms of inactivity
  