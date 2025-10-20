---
title: "Length of last word"
description: "collab coding"
id: session08
---

# Length of Last Word

## Problem 
Enjoy a quick puzzle with string slicing.

Identify the last word in a sentence. Measure its length. Return 0 if no word is found.

You can implement this in **any language**. 


### Example inputs:
* "Hello World" -> 5
* "Learning is fun" -> 3

---

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
```

---

## Hints

<details>
<summary>Click to reveal hint 1</summary>

To trim trailing spaces, use the `.trim()` method on the string.

</details>

<details>
<summary>Click to reveal hint 2</summary>

To split the string into an array of words, use the `.split(' ')` method.

</details>

<details>
<summary>Click to reveal hint 3</summary>

Check if the words array is empty by checking if `words.length === 0`.

</details>

<details>
<summary>Click to reveal hint 4</summary>

To access the last element in an array, use `words[words.length - 1]`.

</details>