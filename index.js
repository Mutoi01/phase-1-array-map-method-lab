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

const titleCased = () => {
  return tutorials.map((names) => {
    const tokens = names.split(" ");


    const returns = title.map((line) => {
      return line.replace(line.charAt(0), line.charAt(0).toUpperCase());
    });

    const response = returns.join(" ");
    return response;
  });
}
