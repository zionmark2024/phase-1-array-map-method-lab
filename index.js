// Title case fungit add ction
const titleCased = () => {
  return tutorials.map((tutorial) => {
    const splittedArr = tutorial.split(" ");
    const capitalized = splittedArr.map(
      (str) => str.charAt(0).toUpperCase() + str.slice(1)
    );
    return capitalized.join(" ");
  });
};

// Example usage
console.log(titleCased());
 