import fs from 'node:fs';

/** Load a JSON store; returns {} when the file does not exist yet. */
export function load(file) {
  if (!fs.existsSync(file)) return {};
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

/** Persist the store atomically (write to a temp file, then rename). */
export function save(file, data) {
  const tmp = `${file}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2));
  fs.renameSync(tmp, file);
}
