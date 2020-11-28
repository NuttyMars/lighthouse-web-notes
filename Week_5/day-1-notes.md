## SQL

--> download .sql files from CLI
wget http://bit.ly/2Z0fN4t -O seeds/students.sql
  - this will download the students.sql file into the seeds folder from the URL http://bit.ly/2Z0fN4t

### Commands:
psql --- will connect to your default database

\q --- To quit PSQL service
\l --- LIST all databses I currently have
\c --- connect to specific database
  psql -d DATABASE_NAME -- will connect you to a specific database from the start
\dt --- Displays all the tables in our Database

\i filename.sql --- runs a file agains a db

DROP DATABASE database_name --- deletes all of the tables and data;
CREATE DATABASE datbase_name;

!! If query is large and will run over multiple rows (-> (END) shows up at the end of the query), press q to exit

## SQL JOINS

### Inner join:
If the foreign key is NULL, the row will not be included in the result of an INNER JOIN.

### Outer join:
- left = will return all matching results from the left table (even with NULL foreign key)
- right = will return all matching results from right table (even with NULL foreign key)
- full = will return all results for one of the tables, even when the join condition is not met. For any row where the condition was not met, a row is added with NULL data.