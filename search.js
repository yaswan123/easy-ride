function findBus() {
    const source = document.getElementById('source').value.toLowerCase();
    const destination = document.getElementById('destination').value.toLowerCase();
    let busNumbers = [];
    if (source === 'bus stand' && destination === 'vr siddhartha') {
        busNumbers = ['121', '1', '333', '255v', '10'];
    } else {
        const allBusNumbers = ['101', '202', '303', '404', '505', '606', '707', '808', '909'];
        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * allBusNumbers.length);
            busNumbers.push(allBusNumbers[randomIndex]);
        }
    }
    if (source && destination) {
        document.getElementById('result').innerHTML = `Buses available from ${source} to ${destination}: ${busNumbers.join(', ')}`;
    } else {
        document.getElementById('result').innerHTML = 'Please enter both source and destination.';
    }
}
