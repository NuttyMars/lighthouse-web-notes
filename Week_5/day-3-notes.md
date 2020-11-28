## PostgreSQL

### Data types
PostgreSQL supports the following data types:

1. Boolean
  - three possible values: true, false or null
  - use boolean or bool keyword to declare a column with the Boolean data type

2. Character types such as char, varchar, and text
  - three character data types: CHAR(n), VARCHAR(n), and TEXT
    a. CHAR(n) is the fixed-length character with space padded
    b. VARCHAR(n) is the variable-length character string - store up to n characters
    c. TEXT is the variable-length character string - theoretically, has unlimited length

3. Numeric types such as integer and floating-point number
  - two distinct types of numbers: integers, floating-point numbers
    1. three kinds of integers in PostgreSQL:
      a. SMALLINT - range from -32,768 to 32,767
      b. INT - range from -2,147,483,648 to 2,147,483,647
      c. SERIAL - same as integer except that PostgreSQL will automatically generate and populate values into the  column
    2. three main types of floating-point numbers:
      a. float(n) with a precision of at least n, up to a maximum of 8 bytes
      b. real/float8is a 4-byte floating-point number
      c. numeric or numeric(p,s) - a real number with p digits with s number after the decimal point

4. Temporal types such as date, time, timestamp, and interval
  - DATE stores the dates only
  - TIME stores the time of day values
  - TIMESTAMP stores both date and time values
  - TIMESTAMPTZ is a timezone-aware timestamp data type
  - INTERVAL stores periods of time

5. UUID for storing Universally Unique Identifiers
  - allows you to store Universal Unique Identifiers defined by RFC 4122, which guarantee a better uniqueness than SERIAL and can be used to hide sensitive data exposed to the public such as values of id in URL

6. Array for storing array strings, numbers, etc

7. JSON stores JSON data
  - two JSON data types: JSON and JSONB

8. hstore stores key-value pair

9. Special types such as network address and geometric data
  - box – a rectangular box
  - line – a set of points
  - point – a geometric pair of numbers
  - lseg – a line segment
  - polygon – a closed geometric
  - inet – an IP4 address
  - macaddr – a MAC address

### Actions
PostgreSQL provides you with many actions:

- Add a column
- Drop a column
- Change the data type of a column
- Rename a column
- Set a default value for the column
- Add a constraint to a column
- Rename a table

## Reference to data types:

- Primary key column:
  - Use the name id and then SERIAL PRIMARY KEY.
- Foreign key columns:
  - Add _id to the singular name of the column you are referencing.
  - If the primary key is SERIAL, then the foreign key should be INTEGER.
  - You also should create the foreign key with REFERENCES table_name(id) ON DELETE CASCADE.
- Names, emails, usernames and passwords can all be stored as VARCHAR(255). Students to cohorts would be cohort_id. The type would be INTEGER .
- Dates would use the DATE type. If we needed date and time, use TIMESTAMP.
- Numbers:
  - We will use INTEGER to represent most numbers. There are other sizes of integers as well.
  - SMALLINT -32,768 to 32,767 (thirty-two thousand)
  - INTEGER -2,147,483,648 to 2,147,483,647 (two billion)
  - BIGINT -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 (nine quintillion)
  - SERIAL 1 to 2,147,483,647 (auto incrementing)
- Dates, Phone Numbers & Currency
  - Become familiar with the ISO 8601 date formatting standard. The string '2018-02-12' uses this format to represent 'February 12th, 2018'. Year, month and then day. Dates should be stored consistently. Apply timezones and formatting when displayed to the user.
  - Store phone numbers as VARCHAR, there are so many possible formats. The number 214 748 3647 hits our INTEGER limit.
  - Store currency as an integer representing cents. Use a BIGINT if you need values over $21 million dollars.

## Data manipulation

- SELECT: get data from tables.
    SELECT column_name FROM table_name;

- INSERT: add rows to a table.
    INSERT INTO TABLE_NAME (column1, column2, column3,...columnN)  
    VALUES (value1, value2, value3,...valueN)
      (valueN+1, valueN+2, valueN+3,...valueNN);

- UPDATE: update rows within a table.
    UPDATE table_name
    SET column1 = value1, column2 = value2...., columnN = valueN
    WHERE [condition];
  !! you want to put a WHERE condition, because the change is permanent

- DELETE: delete rows from a table.
    DELETE FROM table_name
    WHERE [condition];
  !! you want to put a WHERE condition, otherwise you will delete the whole table

funct to get all h3s (in browser):
let array = Array.from(document.getElementsByTagName('h3'));
for(const obj of array) {
  console.log(obj.outerText); 
};

function to format the h3s (thanks to Kashif!):
const nameFormatter = function(str,num){
	let a = str.toLowerCase().split(' ’).join(‘_’)
	return `${num}_${a}.sql`
}
console.log(nameFormatter(‘Average Assistance Request Wait Time’,7))
