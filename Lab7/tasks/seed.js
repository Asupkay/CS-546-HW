const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const recipes = data.recipes;

async function main() {
  try {
    const db = await dbConnection();
    await db.dropDatabase();
    const turduckin = await recipes.createRecipe("Turducken", ["Chicken", "Duck", "Turkey"], ["1. debone the turkey", "2. debone the duck", "3. debone the chicken", "4. put them all into eachother"]);
    console.log(turduckin);
    const id = turduckin._id;
    await recipes.postComment(id, "Me", "Wow great job at googling this");
    console.log("Done seeding database");
    console.log(await recipes.getAllRecipes());
    
    await db.close();
  } catch (e) {
    console.log(e);
  }
}

main();
