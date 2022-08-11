/*
    Imagine you are working on the Financial Times web site! They have a list of article titles stored in an array.

    The home page of the web site has a headline section, which only has space for article titles which are 65 characters or less.
    Implement the function below, which will return a new array containing only article titles which will fit.
*/
function potentialHeadlines(allArticleTitles) {
  // TODO
  let choosenArticles = [];
  for (const item of allArticleTitles) {
    if (item.length <= 65) {
      // pavel: using Array.push() method would be better practice here :)
      // choosenArticles = [...choosenArticles, item];
      choosenArticles.push(item);
    }
  }
  // pavel: if function returns something, then 'console.log' look like someone
  // missed to clean up their rubbish after themselves :)
  return choosenArticles;
}

/*
    The editor of the FT likes short headlines with only a few words!
    Implement the function below, which returns the title with the fewest words.
    (you can assume words will always be seperated by a space)
*/
function titleWithFewestWords(allArticleTitles) {
  const sorted = allArticleTitles.sort((a, b) => a.length - b.length);
  return sorted[0];
  // TODO
}

/*
    The editor of the FT has realised that headlines which have numbers in them get more clicks!
    Implement the function below to return a new array containing all the headlines which contain a number.
    (Hint: remember that you can also loop through the characters of a string if you need to)
*/
function headlinesWithNumbers(allArticleTitles) {
  // TODO
  // const arr = allArticleTitles; // there is no point to 'copy' array this way.
  // if you really need its copy use spread operator:
  // const allArticleTitlesCopy = [...allArticleTitles];
  // let newArt = [];

  // const numbers = "1234567890";
  // for (const sentence of arr) {
  //   let target = "";

  // can you check RegExp in JS, and replace everything you do inside 'for-loop' with
  // one-line code using regexp?
  //   for (const num of numbers) {
  //     if (sentence.includes(num)) {
  //       target = sentence; // if you do this
  // and then check target.lengh below
  // and that's only purpose of 'target' in your code
  // then you don't really need 'target' at all.
  // you can use 'sentence' without creating 'target' variable.
  //     }
  //   }

  //   if (target.length !== 0) {
  // newArt = [...newArt, target]; // use Array.push() method here.
  //     newArt.push(target);
  //   }
  // }
  // return newArt;

  let articleTitles = [];
  for (let i = 0; i < allArticleTitles.length; i++) {
    for (let j = 0; j < allArticleTitles[i].length; j++) {
      if (allArticleTitles[i] > 0 && allArticleTitles[i] < 9) {
        articleTitles.push(allArticleTitles[i]);
      }
    }
  }

  return articleTitles;
}

/*
    The Financial Times wants to understand what the average number of characters in an article title is.
    Implement the function below to return this number - rounded to the nearest integer.
*/
function averageNumberOfCharacters(allArticleTitles) {
  // TODO
  //const newArray = allArticleTitles; // this is not a new array :)
  // this is phisically the same array
  // but in another variable name.
  //let totalCharacter = 0;
  //let avg = 0;
  //for (const art of newArray) {
  //  totalCharacter += art.length;
  //}
  //avg = totalCharacter / newArray.length; // looks like you don;t really need this variable at all
  //return Math.round(avg); // you can return AVG value straigh away:
  // return Math.round(totalCharacter / newArray.length);
  let average;
  let sum = 0;

  for (let i = 0; i < allArticleTitles.length; i++) {
    sum += allArticleTitles[i].length;
  }
  average = Math.round(sum / allArticleTitles.length);
  return average;
}

/* ======= List of Articles - DO NOT MODIFY ===== */
const ARTICLE_TITLES = [
  "Streaming wars drive media groups to spend more than $100bn on new content",
  "Amazon Prime Video India country head: streaming is driving a TV revolution",
  "Aerospace chiefs prepare for bumpy ride in recovery of long-haul flights",
  "British companies look to muscle in on US retail investing boom",
  "Libor to take firm step towards oblivion on New Year's Day",
  "Audit profession unattractive to new recruits, says PwC boss",
  "Chinese social media users blast Elon Musk over near miss in space",
  "Companies raise over $12tn in 'blockbuster' year for global capital markets",
  "The three questions that dominate investment",
  "Brussels urges Chile's incoming president to endorse EU trade deal",
];
console.log(
  potentialHeadlines(ARTICLE_TITLES)
); /* ======= TESTS - DO NOT MODIFY ===== */

test("should only return potential headlines", () => {
  expect(new Set(potentialHeadlines(ARTICLE_TITLES))).toEqual(
    new Set([
      "British companies look to muscle in on US retail investing boom",
      "Libor to take firm step towards oblivion on New Year's Day",
      "Audit profession unattractive to new recruits, says PwC boss",
      "The three questions that dominate investment",
    ])
  );
});

test("should return an empty array for empty input", () => {
  expect(potentialHeadlines([])).toEqual([]);
});

test("should return the title with the fewest words", () => {
  expect(titleWithFewestWords(ARTICLE_TITLES)).toEqual(
    "The three questions that dominate investment"
  );
});

test("should only return headlines containing numbers", () => {
  expect(new Set(headlinesWithNumbers(ARTICLE_TITLES))).toEqual(
    new Set([
      "Streaming wars drive media groups to spend more than $100bn on new content",
      "Companies raise over $12tn in 'blockbuster' year for global capital markets",
    ])
  );
});

test("should return the average number of characters in a headline", () => {
  expect(averageNumberOfCharacters(ARTICLE_TITLES)).toEqual(65);
});
