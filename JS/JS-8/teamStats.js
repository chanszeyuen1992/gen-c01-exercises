const team = {
    _players: [{
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
    }],
    _games: [{
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
    }],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(player);
    },
    addGames(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints,
        };
        this.games.push(game);
    }
}

team.addPlayer("Steph", "Curry", 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGames('Tony', 3, 4);
team.addGames('Mary', 6, 7);
team.addGames('Kenny', 9, 10);
console.log(team.games);