import { api } from "./api";

export const recipeApi = api.injectEndpoints({
    endpoints: builder => ({
        getRecipes: builder.query({
            query: () => '/',
            providesTags: () => [{
                type: 'Recipe'
            }]
        }),
        createRecipe: builder.mutation({
            query: data => ({
                url: '/?sort=id&order=DESC',
                method: 'POST',
                body: data
            }),
            invalidatesTags: () => [{
                type: 'Recipe'
            }]
        })
    })
})

export const { useGetRecipesQuery, useCreateRecipeMutation} = recipeApi;

export const selectRecipeResults = recipeApi.endpoints.getRecipes.select();