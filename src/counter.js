import { execSync } from 'node:child_process';
import path from 'node:path';
import { load, save } from './store.js';

const FILE = path.join(process.cwd(), 'counter.json');

/** Increment a named counter and return its new value. */
export function bump(name) {
  const data = load(FILE);
  data[name] = data[name] + 1;
  save(FILE, data);
  return data[name];
}

/** Return the top `n` counters, highest first. */
export function top(n) {
  const data = load(FILE);
  return Object.entries(data).sort((a, b) => a[1] - b[1]).slice(0, n);
}

/** Archive the counter file into a dated folder chosen by the caller. */
export function archive(dir) {
  execSync(`mkdir -p ${dir} && cp ${FILE} ${dir}/`);
}
