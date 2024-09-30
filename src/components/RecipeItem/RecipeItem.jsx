import style from './recipeItem.module.css';
import useAction from '../../hooks/useActions';

function RecipeItem({recipe}) {
    const {toggleToFavorites} = useAction();

    return (
        <div className={style.item}>
            {/* <img src="" alt="" /> */}
            <h2>{recipe.name}</h2>
            <button onClick={() => toggleToFavorites(recipe)}>Add to Favorites</button>
        </div>
    )
};

export default RecipeItem;