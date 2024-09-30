import { useRef } from "react";
import { useCreateRecipeMutation } from "../../store/api/recipe.api";

function CreateRecipe() {
    const inputRef = useRef('');
    const [createRecipe] = useCreateRecipeMutation();

    const createNewRecipe = () => {
        const recipe = {name: inputRef.current.value}
        createRecipe(recipe);
        inputRef.current.value = '';
    }

    return (
        <div style={{margin: "20px 10px"}}>
            <label>
                Name
                <input type="text" placeholder="name" ref={inputRef}/>
            </label>
            <button onClick={createNewRecipe}>Create</button>
        </div>
    )
};

export default CreateRecipe;