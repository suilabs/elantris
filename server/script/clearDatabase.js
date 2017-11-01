import sqlite from 'sqlite3';

const sqlite3 = sqlite.verbose();

const db = new sqlite3.Database(process.argv[2]);

db.serialize(() => {
  db.run('DROP TABLE IF EXISTS Project_Image');
  db.run('DROP TABLE IF EXISTS ProjectType');
  db.run('DROP TABLE IF EXISTS Image');
  db.run('DROP TABLE IF EXISTS Project');
});
