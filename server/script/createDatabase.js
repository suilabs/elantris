import sqlite from 'sqlite3';

const sqlite3 = sqlite.verbose();

const db = new sqlite3.Database(process.argv[2]);

db.serialize(() => {
  db.run(`
     CREATE TABLE ProjectType (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(256)
    )
  `);

  db.run(`
     CREATE TABLE Image (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      url TEXT,
      text TEXT
    )
  `);

  db.run(`
    CREATE TABLE Project_Image (
      rel_id INTEGER PRIMARY KEY AUTOINCREMENT,
      Project_id INTEGER,
      Image_id INTEGER,
      FOREIGN KEY(Project_id) REFERENCES Project(id),
      FOREIGN KEY(Image_id) REFERENCES Image(id)
    )
  `);

  db.run(`
     CREATE TABLE Project (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      key VARCHAR(256) UNIQUE,
      title TEXT,
      subTitle TEXT,
      coverImage TEXT,
      ProjectType_id INTEGER,
      FOREIGN KEY(ProjectType_id) REFERENCES ProjectType(id)
    ) 
  `);
});

db.close();

