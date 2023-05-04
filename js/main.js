// Function for Slide/Carousel

let slideIndex =1;
showSlides (slideIndex)

//Next/Previous controls
function plusSlides (n) {
    showSlides (slideIndex += n);
}

function currentSlide (n) {
    showSlides (slideIndex = n);
}


function showSlides (n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }

    slides [slideIndex-1].style.display = "block";
}



//API FETCHING
document.querySelector('#recipeSearch').addEventListener('click', searchRecipe)
let entry = ''

function searchRecipe () {
  const query = document.querySelector('.mainSearch').value
  entry = query
  getRecipe(query, 0)
}  

function exploreRecipes (explored) {
  entry = explored
  getRecipe(explored, 0)
}
////////////////////////// FUNCTION TO CLEAR DOM - PREVENT RESULT CONCATENATION
function clearPreviousResults () {
  const ingredientList = document.querySelector('#recipeIngredients')
  while (ingredientList.hasChildNodes()) {
    ingredientList.removeChild(ingredientList.firstChild);
  }
  const stepsList = document.querySelector('#recipeSteps')
  while (stepsList.hasChildNodes()) {
    stepsList.removeChild(stepsList.firstChild)
  }
}

function getRecipe (choice, resultIndex) {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=c421f3fdf1ae4af9954393e65ae71ece&query=${choice}&instructionsRequired=true&addRecipeInformation=true&includeIngredients`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          
          clearPreviousResults() // CLEARS PREVIOUS RESULTS FROM DOM

          if (data.results.length > 0) {
            document.querySelector('.noResults').style.display = 'none'

            document.querySelector('#recipeImg1').src = data.results[resultIndex].image
            document.querySelector('#recipeName1').innerText = data.results[resultIndex].title

            const recipeSteps = data.results[resultIndex].analyzedInstructions[0].steps
            recipeSteps.forEach(e => document.querySelector('#recipeSteps').appendChild(document.createElement('li')).textContent = e.step)

            const ingredientsListed = []
            recipeSteps.forEach(e => e.ingredients.forEach(e => ingredientsListed.push(e.name)))
            
            // Remove repeating ingredients from ingredientsListed & capitalizing first letter
            const newIngredientsListed = ingredientsListed.filter((e,i) => ingredientsListed.indexOf(e) == i)
            const finalIngredientsListed = []

            newIngredientsListed.forEach(e => {
              let eArr = e.split('')
              eArr[0] = eArr[0].toUpperCase()
              let eCapitalized = eArr.join('')
              finalIngredientsListed.push(eCapitalized)
            })
            finalIngredientsListed.forEach(e => document.querySelector('#recipeIngredients').appendChild(document.createElement('li')).textContent = e)

            if (resultIndex < 6) {
              ///// Images
              document.querySelector('.recipe2').src = data.results[(resultIndex+1)].image
              document.querySelector('.recipe3').src = data.results[(resultIndex+2)].image
              document.querySelector('.recipe4').src = data.results[(resultIndex+3)].image
              document.querySelector('.recipe5').src = data.results[(resultIndex+4)].image

              ///// Titles/Names
              document.querySelector('#recipeTitle2').innerText = data.results[(resultIndex+1)].title
              document.querySelector('#recipeTitle3').innerText = data.results[(resultIndex+2)].title
              document.querySelector('#recipeTitle4').innerText = data.results[(resultIndex+3)].title
              document.querySelector('#recipeTitle5').innerText = data.results[(resultIndex+4)].title

              /////ANCHOR IDs
              document.querySelector('.recipe2').id = (resultIndex+1)
              document.querySelector('.recipe3').id = (resultIndex+2)
              document.querySelector('.recipe4').id = (resultIndex+3)
              document.querySelector('.recipe5').id = (resultIndex+4)
              } else { 
                ///// Images
                document.querySelector('.recipe2').src = data.results[1].image
                document.querySelector('.recipe3').src = data.results[2].image
                document.querySelector('.recipe4').src = data.results[3].image
                document.querySelector('.recipe5').src = data.results[4].image

                ////// Titles/Names
                document.querySelector('#recipeTitle2').innerText = data.results[1].title
                document.querySelector('#recipeTitle3').innerText = data.results[2].title
                document.querySelector('#recipeTitle4').innerText = data.results[3].title
                document.querySelector('#recipeTitle5').innerText = data.results[4].title

                /////ANCHOR IDs
                document.querySelector('.recipe2').id = '1'
                document.querySelector('.recipe3').id = '2'
                document.querySelector('.recipe4').id = '3'
                document.querySelector('.recipe5').id = '4'
              }
              document.querySelector('.results').style.display = 'block'
              document.querySelector('.results').scrollIntoView({behavior: "smooth"})
            
            } else {
              // NO RESULTS FOR INVALID/UNAVAILABLE INGREDIENTS
              const noResults = document.querySelector('.noResults')
              while (noResults.hasChildNodes()) {
              noResults.removeChild(noResults.firstChild);
              }

              document.querySelector('.noResults').appendChild(document.createElement('p')).textContent = `Sorry We Couldn't Find Any Results For '${choice}'`
              document.querySelector('.noResults').style.display = 'block'
        }
        })
        .catch(err => {
        console.log(`error ${err}`)
        // ALSO DISPLAYS NO RESULTS FOR AVAILABLE BUT INCOMPLETE DATA
        const noResults = document.querySelector('.noResults')
              while (noResults.hasChildNodes()) {
              noResults.removeChild(noResults.firstChild);
              }

              document.querySelector('.noResults').appendChild(document.createElement('p')).textContent = `Sorry We Couldn't Find Any Results For '${choice}'`
              document.querySelector('.noResults').style.display = 'block'
        });
    }

// Explore Anchors
document.querySelector('#tofu').addEventListener('click', function(){exploreRecipes('tofu')})
document.querySelector('#quinoa').addEventListener('click', function(){exploreRecipes('quinoa')})
document.querySelector('#salmon').addEventListener('click', function(){exploreRecipes('salmon')})
document.querySelector('#avocado').addEventListener('click', function(){exploreRecipes('avocado')})

//Additional Results Anchors
document.querySelector('.recipe2').addEventListener('click', function() {getRecipe(entry, Number(document.querySelector('.recipe2').id))})
document.querySelector('.recipe3').addEventListener('click', function() {getRecipe(entry, Number(document.querySelector('.recipe3').id))})
document.querySelector('.recipe4').addEventListener('click', function() {getRecipe(entry, Number(document.querySelector('.recipe4').id))})
document.querySelector('.recipe5').addEventListener('click', function() {getRecipe(entry, Number(document.querySelector('.recipe5').id))})

/*
function clearPreviousResults () {
    const ingredientList = document.querySelector('#recipeIngredients')
    while (ingredientList.hasChildNodes()) {
      ingredientList.removeChild(ingredientList.firstChild);
    }
    const stepsList = document.querySelector('#recipeSteps')
    while (stepsList.hasChildNodes()) {
      stepsList.removeChild(stepsList.firstChild)
    }
}
*/
