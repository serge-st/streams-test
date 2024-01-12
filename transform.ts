import { Transform } from 'stream';

const transformer = new Transform({
  transform(chunk, _enc, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

process.stdin.pipe(transformer).pipe(process.stdout);