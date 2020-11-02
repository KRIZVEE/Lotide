# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @krizvee/lotide`

**Require it:**

`const _ = require('@krizvee/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: it returns the first item in the array
* `middle(...)`: it returns the the middle element in an array if array length is greater than 2 else it returns empty array. Also in even case it returns middle two elements.
* `tail(...)`: it returns all the item in the array except the first one
* `assertEqual(...)`: this methode compares actual with expected parameters
* `eqArrays(...)`: it return whether the two arrays are equal or not in a boolen format. It also works for only nesting of arrays.
* `assertArraysEqual(...)`: it return the equality of two arrays with appropriate message. It also works for only nesting of arrays.
* `without(...)`: it returnt he array without the second argument from the original array
* `flatten(...)`: it will flatten the nested array into a flat array
* `countOnly(...)`: it will count the presence of item within an array of strings based on the object specifying what to count
* `countLetters(...)`: it should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `letterPositions(...)`: it will return all the indices (zero-based positions) in the string where each character is found.
* `findKeyByValue(...)`: It will help us search for a key on an object where its value matches a given value.
* `eqObjects(...)`: it return whether the two objects are equal or not in a boolen format. It also works for only nesting of objects.
* `eqAssertObjects(...)`: it return the equality of two objects with appropriate message. It also works for only nesting of objects.
* `takeUntil(...)`: it will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
* `map(...)`: it works similar to built-in mao function under javascript
* `findKey(...)`: it takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
