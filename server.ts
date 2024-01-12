import fs from 'fs';
import { createServer } from 'http';
const server = createServer();

server.on('request', (_req, res) => {
    const smallFile = './small.file';
    const bigFile = './big.file';

    const src1 = fs.createReadStream(smallFile);
    const src2 = fs.createReadStream(bigFile);

    // Pipe the first file
    src1.pipe(res, { end: false });

    // When the first file is done, start piping the second
    src1.on('end', () => {
        src2.pipe(res);
    });
});

server.listen(8000);
console.log('Listening on port 8000...')