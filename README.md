# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


In this Cap i used chakra css as this Css was easy to learn and implement

In this cap i have first used the end point for this CAP in the App.jsx where i have made the routes of like favourites, pokemon details with id giving the routes when i enter the page and in this Cap i have mostly used javascript codes.

In the main.jsx file i have implemented the background color for this Cap as grey for all the pages.

for this cap i have made three pages home which is / and the second is pokemonDetails which  is pokemon/:id and last isthe favourites page which i have made into cacth pokemon.

## homepage 

Some of the following features are highlighted in the implemented code; The code creates a React component to develop the Pokémon app and install Chakra UI and React Router. It retrieves Pokémon information from the PokéAPI and presents them including pagination and search system. The component saves state for the list of Pokémon, particular details, loading state, query and the current page. Submissions made are one Pokémon requisition at a time and the specific details are stored in a map. Guests are offered a search bar, navigation buttons or icons, and a link to the “Favorites” page. The individual Pokémon are shown with an image, the Pokémon name, weight, and height, and when one of the Pokémon is selected, it leads to a specific page that is all about that Pokémon.


## pokemon details page 


The listed code is providing a solution and creating a React component named PokemonDetails that will gather and present the particular details on a certain Pokémon according to its id given in the URL. It employs useState and useEffect hooks for behavioral and state-related operations. The component initializes a Pokémon’s object from the PokéAPI when the Pokémon’s mount, and covers loading and error statuses. They also give an overview of the Pokémon with the image and the name, its weight and height, basic statistics including progress bars, and an array of its move set. Initially only ten moves are displayed and all the options listed above can be selected to show all the moves.

Also included in this component is the navigation which has a button that leads to the home page and another that adds this Pokémon to a favorites list in the local storage. One thing to do is to alert the user if the Pokémon is already in the favorites list before adding it. There is a nice layout implemented for components to follow the responsive design and renders components from Chakra UI. View component uses a special hook, useFavoriteStore, for storing a collection of favorites.

## favourites page 

In the implemented code, a component called Favorites shows the list of favorite Pokémon, which is stored in the browser’s localStorage. It controls the state for the list of favorite Pokémon and the details for each, loading status, the search query, and the current page all with the help of useState and useEffect hooks. This component uses the list of favourite Pokemon saved in localStorage and fills the state on mount. It also retrieves information at the user level for each favorite Pokémon from PokéAPI.

In this component of the app, users are given a chance to browse through their preferred Pokémon using a search bar. Poképarade has the list of Pokémon with images and information about their weight and height; moreover, you can find the name, the button to remove the selected Pokémon from the list of favorites, and the Pokémon’s photo. It facilitates ways of scrolling through different pages of favourite Pokémon to ease user experience. The layout is made with Chakra UI components; the component interoperates with the useFavoriteStore custom hook to operate on the list of favorites. User is able to go to specific Pokémon views and also unfavorite the Pokémon.

## zustand for storing favourites

Other components include the Favorites component that has a list of favorite Pokémon stored in localStorage with useState and useEffect. It retrieves the favourite Pokémon information from the PokéAPI and offers functionalities for add, search, paginate and delete Pokémon from the database of favourite Pokémon. In each section, the image of the respective Pokémon, its name, weight, height, and a button to remove the chosen Pokémon is presented. Chakra UI is used for styling a component, and, for the favorites list, the useFavoriteStore hook has been developed with Zustand. Include functions to add and delete favorite Pokémon and have the capability of synchronizing the data and updating it in an optimal way.






