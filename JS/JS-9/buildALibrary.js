class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    set isCheckedOut(newIsCheckedOut) {
        return this._isCheckedOut;
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }

    addRating(rating) {
        return this._ratings.push(rating);
    }
    getAverageRating() {
        this._ratings.reduce(function(acc, cur) { return (acc + cur) }, 0);
    }
}

class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director, title) {
        super(title);
        this._director = director;
    }
    get director() {
        return this._director;
    }

}

const historyOfEverything = new Book('A Short History of Nearly Everythin', 'Bill Bryson', 544)

console.log(historyOfEverything.title)

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut)

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.ratings)

const speed = new Movie('Jan de Bont', 'Speed', 116)
console.log(speed.title)
console.log(speed.director)
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.ratings)