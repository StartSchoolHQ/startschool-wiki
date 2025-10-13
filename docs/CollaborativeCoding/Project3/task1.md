---
title: "Length of last word"
description: "collab coding"
id: session07
---

# Length of Last Word

## Problem 
Enjoy a quick puzzle with string slicing.

Identify the last word in a sentence. Measure its length. Return 0 if no word is found.

### Steps:
* Trim trailing spaces
* Split by spaces
* Pick the last word
* Return its length

### Example inputs:
* "Hello World" -> 5
* "Learning is fun" -> 3

## Sample code with blanks:
```javascript
function lengthLastWord(__________) {
  // 1) Trim trailing spaces
  let trimmedString = __________;
  
  // 2) Split the trimmed string
  let words = __________;
  
  // 3) Check if words array has length
  if (__________) {
    return 0;
  }
  
  // 4) Return length of last element in the array
  return words[__________].length;
}

// Fill in the blanks, then test:
console.log(lengthLastWord("Hello World")); // Expect 5
console.log(lengthLastWord("Learning is fun")); // Expect 3
console.log(lengthLastWord("     ")); // Expect 0