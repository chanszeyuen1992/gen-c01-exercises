const menu = {
    _course: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    get appetizers() {

    },
    set appetizers(appetizersIn) {

    },
    get _course() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        this._course[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        let dishes = this._courses[courseName];
        const dishIndex = Math.floor(Math.random() * 3)
        return dishIndex;
    },
    generateRandomMeal() {
        const appetizer
    }
}