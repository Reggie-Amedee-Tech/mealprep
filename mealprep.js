const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
        get _appetizers() {
            if (typeof this.appetizers === 'string') {
                return 'thank you for putting in your order'
            }

        },
        set _appetizers(app) {
            if (typeof app === 'string') {
                this._courses.appetizers = app
            }

        },
        get _mains() {
            if (typeof this.mains === 'string') {
                return 'thank you for putting in your order'
            }

        },
        set _mains(main) {
            if (typeof main === 'string') {
                this._courses.mains = main
            }

        },
        get _desserts() {
            if (typeof this.desserts === 'string') {
                return 'thank you for putting in your order'
            }

        },
        set _desserts(des) {
            if (typeof des === 'string') {
                this._courses.desserts = des
            }

        }
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }

    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = { name: dishName, price: dishPrice }
        return this._courses[courseName].push(dish)
    },

    getRandomDishCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length)
        return dishes[randomIndex]
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishCourse('appetizers');
        const main = this.getRandomDishCourse('mains');
        const dessert = this.getRandomDishCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `You ordered a ${appetizer.name}, ${main.name}, and a ${dessert.name}! The total price of your purchase is ${totalPrice}`

    }


}

menu.addDishToCourse('appetizers', 'Rice Balls', 7.25);
menu.addDishToCourse('mains', 'Pasta', 12.00);
menu.addDishToCourse('desserts', 'Cannoli', 5.25)

console.log(menu.generateRandomMeal())