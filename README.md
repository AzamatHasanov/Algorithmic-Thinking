# Algorithmic-Thinking

# JavaScript Data Operations

## Overview
This document provides explanations and implementations of basic JavaScript functions for handling data operations, including swapping variable values, checking if a number is odd or even, reversing text, and finding the minimum and maximum values in an array.

---

## 1. Swap Two Variables
**Function Name:** `numbesr(a, b)`

### **Description:**
This function swaps the values of two variables using a temporary variable.

### **Explanation:**
1. A temporary variable is used to store the initial value of one variable.
2. The values of the variables are swapped.
3. The new values are printed to the console.

---

## 2. Check if a Number is Odd or Even
**Function Name:** `eveOdd(num)`

### **Description:**
This function determines whether a given number is even or odd.

### **Explanation:**
1. The function checks if the number is divisible by 2.
2. If true, it prints "even"; otherwise, it prints "odd".

---

## 3. Reverse a String
**Function Name:** `change(textss)`

### **Description:**
This function reverses a given string.

### **Explanation:**
1. The string is converted into an array of characters.
2. The array is reversed.
3. The reversed array is joined back into a string.

---

## 4. Find the Minimum and Maximum in an Array
### **First Method: Using a Loop**
**Function Name:** `findMinMax(arr)`

### **Explanation:**
1. The first element is assigned as both minimum and maximum.
2. The array is iterated through, updating the min and max values accordingly.
3. The final min and max values are returned.

### **Bug Fix:**
- The loop should run while `a < arr.length` instead of `a <= arr.length` to prevent an undefined element access.

---

### **Second Method: Using `Math.min` and `Math.max`**
**Function Name:** `findMinMax2(arr)`

### **Explanation:**
1. The spread operator is used to pass all array elements into `Math.min` and `Math.max`.
2. These functions return the smallest and largest values, respectively.
3. The method is more concise and efficient than looping through the array.

---

