## Databases

-> The first normal form (1NF) - remove repetitive data across columns by creating separate tables
-> The second normal form - remove repetitive data across rows by creating separate tables
-> link tables with keys - primary key / foreign key

## ERDs

If we create a DB holding information about the students of a class:

-> Entity - a table holding information that will repeat (the table 'student' will hold standard informtion that can be individualized)
  -> entity instance = each record or row in the table (each student)
  -> attribute = various characteristics about an individual entity (the columns)
  -> primary key = an attribute or group of attributes that uniquely identify an instance
    -> composit primary key = uses a combination of keys to create a unique identifier

-> Relationship - describes how one or more entities interact with each other
  -> cardinality = the count of instances that are allowed or are necessary between entity relationships
    - minimum = minimum number of instances that are required in a relationship
    - maximum = maximum number of instances that are allowed in a relationship
    - described by crow's foot notation

## SQL syntax

**Create a table:**
CREATE TABLE name (column_name COLUMN_DATA_TYPE PRIMARY KEY, column_name COLUMN_DATA_TYPE, ETC);

Insert data into the table:
INSERT INTO table_name VALUES (specific value based on the columns);

**Select data to view:**

Select specific content:
SELECT column_name FROM table_name;

Select all content / all content that matches specific conditions:
SELECT * FROM TABLE NAME --> will print all values
SELECT * FROM table_name ORDER BY column_name; -> will order content by specific column
SELECT * FROM table_name WHERE condition ORDER BY column_name;

**Aggregating data**

Add all values in a column:
SELECT SUM(column_name) FROM table_name;

Find the max value in a column:
SELECT MAX(column_name) FROM table_name;

Add all values in column2 grouped by attribute specified in column1:
SELECT column_name1 SUM(column_name2) FROM table_name GROUP BY column_name1;

### SELECT basics
- WHERE clause matches a specific result
- WHERE IN   - IN ALLOWS TO CHECK IF A NAME IS IN A LIST
- BETWEEN allows range checking
- WHERE column_name LIKE '...' (can use wildcard % to match unknown number of characters or _ to match a single character)
- WHERE column_name condition XOR condition = exclusive OR - shows results that match either of the conditions, but not both