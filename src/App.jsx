import Counter from "./components/Counter";
import RecipeItem from "./components/RecipeItem/RecipeItem";
import { useSelector } from "react-redux";
import User from "./components/User";
import { useGetRecipesQuery } from "./store/api/recipe.api";
import CreateRecipe from "./components/CreateRecipe/CreateRecipe";

const userId = 1;

function App() {
  const favorites = useSelector(state => state.favorites);
  const {isLoading, data = []} = useGetRecipesQuery(undefined, {
    skip: !userId
  });


  return (
    <>
       <User />
      <Counter />
      <CreateRecipe />
      {isLoading ? <h3>Loading....</h3> :
        data.map(item => <RecipeItem key={item.id} recipe={item}/>)
      }

      <h3>Favirites</h3>
      <ul>
        {favorites.map(item => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>

     
    </>
  )
}

export default App
