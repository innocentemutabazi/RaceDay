document.getElementById('register-button').addEventListener('click', function () {
    const ageInput = document.getElementById('age');
    const age = parseInt(ageInput.value);
    const registrationTime = document.getElementById('registration-time').value;

    let raceDetails = '';

    if (ageInput.value.trim() === '') {
        raceDetails = 'Please enter your age.';
    } else if (age < 0 || isNaN(age)) {
        raceDetails = 'Please enter a valid age.';
    } else if (age < 9) {
        raceDetails = 'Sorry, you are too young to participate.';
    } else if (age > 80) {
        raceDetails = 'Sorry, you are too old to participate.';
    } else {
        let raceNumber = Math.floor(Math.random() * 1000) + 1;

        if (age < 17) {
            raceNumber += 1000;
        }

        if (registrationTime === 'early') {
            raceDetails = `Your race number is ${raceNumber} and you will run at 9:00 a.m.`;
        } else if (registrationTime === 'late') {
            raceDetails = `Your race number is ${raceNumber} and you will run at 10:30 a.m.`;
        }
    }

    document.getElementById('race-details').textContent = raceDetails;
});
