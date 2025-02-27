export const countryTransformer = (country) => {
  return {
    id: country.id,
    title: country.title,
    text: country.text,
    image: country.image,
    recipes: country.recipes
  }
}