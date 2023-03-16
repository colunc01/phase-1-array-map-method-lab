const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// This function returns the entire string into proper case
function toTitleCase(str) 
{
  const arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) 
  {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const str2 = arr.join(" ");
  return str2; 
}

const titleCased = () => {
  console.log(tutorials);
  let newArr = [];
  // For loop that goes through each element of the Array (not the individual characters in a String)
  for (let i=0; i<tutorials.length; i++)
  {
    newArr[i] = toTitleCase(tutorials[i]);
  }
  return newArr;
  //return tutorials;
}
