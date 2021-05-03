function getSleepHours(day) {
    day = day.toLowerCase();

    switch (day) {
        case 'monday':
            return 8;
            break;
        case 'tuesday':
            return 9;
            break;
        case 'wednesday':
            return 6;
            break;
        case 'thursday':
            return 7;
            break;
        case 'friday':
            return 6;
            break;
        case 'saturday':
            return 10;
            break;
        case 'sunday':
            return 11;
            break;
    }
}

console.log(getSleepHours('tuesday'));

function getActualSleepHours() {
    return getSleepHours('monday') +
        getSleepHours('tuesday') +
        getSleepHours('wednesday') +
        getSleepHours('thursday') +
        getSleepHours('friday') +
        getSleepHours('saturday') +
        getSleepHours('sunday');
}



function getIdealSleepHours(idealHours) {
    return idealHours *= 7;
}



console.log(getActualSleepHours());
console.log(getIdealSleepHours(8));

function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        return 'User got the perfect amount of sleep.';
    } else if (actualSleepHours > idealSleepHours) {
        return `The user got ${actualSleepHours - idealSleepHours} hours more than need.`;
    } else {
        return `The user slept ${actualSleepHours - idealSleepHours} less than need.`;
    }

}

console.log(calculateSleepDebt());