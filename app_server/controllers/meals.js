var fs = require('fs');
var mealsData = JSON.parse(fs.readFileSync('./data/meals.json', 'utf-8'));

/* Get Meals Page */
const meals = (req, res) => {
    res.render('meals', { title: "Travlr Getaways", mealsData});
};

module.exports = {
    meals
};