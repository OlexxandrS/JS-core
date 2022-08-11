/*
    Imagine we're making a weather app!
    
    We have a list of cities that the user wants to track.
    We also already have a temperatureService function which will take a city as a parameter and return a temparature.

    Implement the function below:
        - take the array of cities as a parameter
        - return an array of strings, which is a statement about the temperature of each city.
            For example, "The temperature in London is 10 degrees"
        - Hint: you can call the temperatureService function from your function
*/

function getTemperatureReport(cities) {
  // TODO
  let messages = [];
  // pavel: it would be better to have variable name `myArray` more meantingful, `messages` for example.
  let message = "";
  for (const city of cities) {
    message = `The temperature in ${city} is ${temperatureService(
      city
    )} degrees`;
    // messages = [...messages, message];
    messages.push(message);
    // pavel: using Array.push() method would work faster here, hence better performance
  }
  return messages;
}

/* ======= TESTS - DO NOT MODIFY ===== */

function temperatureService(city) {
  let temperatureMap = new Map();

  temperatureMap.set("London", 10);
  temperatureMap.set("Paris", 12);
  temperatureMap.set("Barcelona", 17);
  temperatureMap.set("Dubai", 27);
  temperatureMap.set("Mumbai", 29);
  temperatureMap.set("São Paulo", 23);
  temperatureMap.set("Lagos", 33);

  return temperatureMap.get(city);
}

test("should return a temperature report for the user's cities", () => {
  let usersCities = ["London", "Paris", "São Paulo"];

  expect(getTemperatureReport(usersCities)).toEqual([
    "The temperature in London is 10 degrees",
    "The temperature in Paris is 12 degrees",
    "The temperature in São Paulo is 23 degrees",
  ]);
});

test("should return a temperature report for the user's cities (alternate input)", () => {
  let usersCities = ["Barcelona", "Dubai"];

  expect(getTemperatureReport(usersCities)).toEqual([
    "The temperature in Barcelona is 17 degrees",
    "The temperature in Dubai is 27 degrees",
  ]);
});

test("should return an empty array if the user hasn't selected any cities", () => {
  expect(getTemperatureReport([])).toEqual([]);
});
