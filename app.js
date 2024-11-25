let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let com = [".com,", ".net", ".us", ".io"];

pronoun.forEach((itempronoun) => {
  adj.forEach((itemadj) => {
    noun.forEach((itemnoun) => {
      com.forEach((itemcom) => {
        console.log(itempronoun + itemadj + itemnoun + itemcom);
      });
    });
  });
});
