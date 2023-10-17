import React from 'react'
import ReactDOM from 'react-dom/client'
import './Index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PokemonDetails from './Routes/PokemonDetails.jsx';
import Root from './Routes/Root.jsx';
import PokeList from './components/Pokemon/PokeList.jsx';
import MemoryGame from './components/MemoryGame/MemoryGame';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path:"/",
        element: <PokeList />

      },
      {
        path:"pokemon/:pokemonid",
        element: <PokemonDetails />
      },{
        path:"/game",
        element: <MemoryGame />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
