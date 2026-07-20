/*learning date objects in javascript*/

// const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
// setInterval(() => {
//     const date = new Date();
// console.log(date);
// console.log(date.getFullYear()); 
// console.log(months[date.getMonth()]);
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// }, 10000);

/*this code will print the current date and time every second, along with the year, month, day, hours, minutes, and seconds. The output will look like this:
output:2026-07-20T04:38:43.963Z
2026
6
20
10
23
43*/

/*Learning Regular Expressions in JavaScript*/

/*regular expression is a pattern that is used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the exec() and test() methods of RegExp, and with the match(), matchAll(), replace(), search(), and split() methods of String.*/

/* regex starts and ends with a forward slash /pattern/flags. The pattern is the text of the regular expression, and the flags are optional parameters that can be used to modify the behavior of the regular expression.*/
/*The flags are:
g - global search
i - case-insensitive search

The symbols are:
. - matches any character except newline
* - matches the preceding character 0 or more times
+ - matches the preceding character 1 or more times
\w - matches any word character (alphanumeric & underscore)
\s - matches any whitespace character (spaces, tabs, line breaks)
\d - matches any digit (0-9)
^ - matches the beginning of a string
$ - matches the end of a string
[] - matches any one of the characters inside the brackets
() - groups multiple tokens together and creates a capture group
| - acts as a logical OR between expressions
? - matches the preceding character 0 or 1 time
*/
// let string = "The quick brown fox jumps over the lazy Dog. If the dog barked, was it really lazy?";

// let regex = /dog/gi; // g for global search, i for case-insensitive search
// const result = string.match(regex);
// console.log(result); // Output: ["dog", "dog"]

Array.prototype.forEach.call("a string", (chr) => {
  console.log(chr);
});
"a string".split("").forEach((chr) => {
  console.log(chr);
});