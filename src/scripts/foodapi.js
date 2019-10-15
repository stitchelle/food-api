//making a call to database.json
console.log("First console.log")
fetch("http://localhost:8088/food")
    .then(foods => {
        console.log("foods", foods)
        //convert results of fetch request to json
        return foods.json()
    })

    .then(parsedFoods => {
        //display json data in the console
        console.table(parsedFoods)
    });
console.log("Last console.log")