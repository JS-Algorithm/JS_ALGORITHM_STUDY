function rotateGear(gear, direction) {
    if (direction === 1) {
        const last = gear[gear.length - 1];
        gear.pop();
        gear.unshift(last);
    } else if (direction === -1) {
        const first = gear.shift();
        gear.push(first);
    }
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');
    const gears = input.slice(0, 4).map(line => line.split('').map(Number));
    const rotations = input.slice(5).map(line => line.split(' ').map(Number));

    for (const [gearIndex, direction] of rotations) {
        const rotatedGears = [gears[gearIndex - 1]];
        let directionCopy = direction;
        for (let i = gearIndex - 1; i < 3; i++) {
            if (gears[i][2] !== gears[i + 1][6]) {
                directionCopy *= -1;
                rotatedGears.push(gears[i + 1]);
            } else {
                break;
            }
        }
        directionCopy = direction;
        for (let i = gearIndex - 1; i > 0; i--) {
            if (gears[i][6] !== gears[i - 1][2]) {
                directionCopy *= -1;
                rotatedGears.unshift(gears[i - 1]);
            } else {
                break;
            }
        }

        for (const gear of rotatedGears) {
            rotateGear(gear, directionCopy);
            directionCopy *= -1;
        }
    }

    const totalScore = gears.reduce((score, gear, index) => {
        return score + (gear[0] === 1 ? 2 ** index : 0);
    }, 0);

    console.log(totalScore);
}

main();
