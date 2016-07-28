const request = require('request');

console.log('Welcome!\n');

const getAnswer = {
    baseUrl: 'http://localhost:3000',
    url: '/answer',
    method: 'GET',
    json: true
};

request(getAnswer, (err, res, body) => {
    const answer = body;
    console.log(body);
    let i = 6;
    console.log(`Please input your number(${i}):`);

    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (input) => {

        const compare = {
            baseUrl: 'http://localhost:3000',
            url: '/compare',
            method: 'POST',
            json: true,
            body: {
                input: input,
                answer: answer
            }
        };

        request(compare, (err, res, body) => {

            if (body.length > 4) {
                console.log(body);
                console.log(`Please input your number(${i}):`);
            } else if (body === '4A0B') {
                console.log('Congratulations!');
                process.exit();
            } else {
                console.log(body);
                i--;
                if (i === 0) {
                    console.log('Game Over');
                    console.log(`Answer: ${answer}`);
                    process.exit();
                } else {
                    console.log(`Please input your number(${i}):`);
                }
            }
        });
    });
});