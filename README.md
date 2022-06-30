# Weather You Like It or Not

## About the Project

A crowd favourite amongst budding developers, the Weather App retrieves current weather data based on the user's search criteria and displays a weather card for each search. The application stores up to 10 cards at one time. There is also a motivational quote displayed at random each time the page refreshes, encouraging the user each time s/he conducts a weather search.

## How It Works

### Search and Display

The application takes the user's search input and calls an API search via WeatherStack. The return data is then added into an array, which is stored as a (cards) state in React. A .map function is called to map the state (containing array data), generating individual card/components for each item in the array. Each card contains selected information, including:

1. Weather icon
2. Location name
3. Country name
4. Current temperature
5. Weather description

The card/components automatically re-renders each time there is a change in the (cards) state.

### Delete

Clicking the bin icon triggers a filter function, taking the index of the card clicked as a parameter. The filter function then filters the existing array, removing the item with the specified index. The (cards) state is set to the resultant array, displaying the updated spread of cards.

### Tech Stack

The following tools/skills were used in developing this project:

1. HTML and DOM Manipulation
2. Javascript
3. Tailwind & CSS
4. React

## Wireframe

![wireframe](/public/wireframe.png)
