const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this._field = field;
    }

    print() {
        for (let i = 0; i < this._field.length; i++) {
            console.log(this._field[i].join(' '))
        }
    }

    playGame() {



        this.print(this._field)
        console.log('If there are no *, please retart the game!')
        let x;
        let y;
        for (let i = 0; i < this._field.length; i++) {
            for (let j = 0; j < this._field[i].length; j++) {
                if (this._field[i][j] === pathCharacter) {
                    y = i;
                    x = j;
                }
            }
        }

        do {
            const control = prompt('Where do you want to go? W->Up, S->Down D->right, A->left: ')
            if (control.toUpperCase() === 'W') {
                if (y === 0) {
                    console.log("You can't move up anymore")
                } else {
                    y -= 1
                }
            } else if (control.toUpperCase() === 'S') {
                if (y === (this._field.length - 1)) {
                    console.log("You can't move down anymore")
                } else {
                    y += 1
                }
            } else if (control.toUpperCase() === 'D') {
                if (x === (this._field[x].length - 1)) {
                    console.log("You can't move down anymore")
                } else {
                    x += 1
                }

            } else if (control.toUpperCase() === 'A') {
                if (x === 0) {
                    console.log("You can't move down anymore")
                } else {
                    x -= 1
                }
            } else {
                console.log('Please enter W,S,D,A!')
            }

            if (this._field[y][x] === hat) {
                console.log('You win!')
                break
            } else if (this._field[y][x] === hole) {
                console.log('You lose!')
                break
            } else {
                this._field[y][x] = pathCharacter;
                this.print(this._field);
            }
        } while (this._field[y][x] = pathCharacter)


    }

    static generateField(width, height, holesNum) {
        let newField = []
        for (let i = 0; i < height; i++) {
            newField.push([])
            for (let j = 0; j < width; j++) {
                newField[i].push(fieldCharacter)
            }
        }

        let pathX;
        let pathY;

        function pathCharLocation(width, height) {
            pathX = Math.floor(Math.random() * width)
            pathY = Math.floor(Math.random() * height)
            return newField[pathY][pathX] = pathCharacter;
        }
        pathCharLocation(width, height);

        let hatX = pathX;
        let hatY = pathY;

        function hatLocation(width, height) {
            while (hatX === pathX) {
                hatX = Math.floor(Math.random() * width);
            }
            while (hatY === pathY) {
                hatY = Math.floor(Math.random() * height);
            }
            return newField[hatY][hatX] = hat;
        }
        hatLocation(width, height);



        function holeLocation(width, height, holesNum) {
            for (let i = 0; i < holesNum; i++) {
                let holeX = hatX;
                let holeY = hatY;
                while (holeX === hatX) {
                    holeX = Math.floor(Math.random() * width);
                }
                while (holeY === hatY) {
                    holeY = Math.floor(Math.random() * height);
                }
                newField[holeY][holeX] = hole;
            }
            return newField;
        }
        holeLocation(width, height, holesNum)

        return newField;
    }

}

const myField = new Field(Field.generateField(10, 10, 7));

myField.playGame()