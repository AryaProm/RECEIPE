import { recipes } from "./receipe.js";

document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("searchBar");
    const recipesContainer = document.getElementById("recipesContainer");

    function renderRecipes(filteredRecipes) {
        recipesContainer.innerHTML = ""; // Clear previous results

        filteredRecipes[0].forEach(recipe => {
            const recipeTile = document.createElement("div");
            recipeTile.classList.add("recipe-tile");
            recipeTile.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <h3>${recipe.name}</h3>
            `;

            // Redirect to recipe.html when clicked
            recipeTile.addEventListener("click", () => {
                window.location.href = `recipe.html?id=${recipe.id}`;
            });

            recipesContainer.appendChild(recipeTile);
        });
    }

    // Search functionality
    searchBar.addEventListener("input", () => {
        const query = searchBar.value.toLowerCase();
        const filteredRecipes = recipes.map(category =>
            category.filter(recipe =>
                recipe.name.toLowerCase().includes(query) ||
                recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query))
            )
        );

        renderRecipes(filteredRecipes);
    });

    renderRecipes(recipes); // Initial render
});
