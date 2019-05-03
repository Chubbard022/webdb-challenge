1. Explain the difference between RDBMS and SQL.
        1.   A relational database management system takes data and stores it into rows and columns. A RDBMS takes data and makes a unique relation that can be made into a table  which has rows which are individual entries. SQL can support a RDBMS but sense it’s a language that talks to the data with programming syntax, SQL can also be non relational such as graphs and other data models. The biggest difference between the two is that the RDBMS is limited to being a relation based where SQL can be either type.

1. Why do tables need a primary key?
        1. A primary key allows you to uniquely define a record within a table to ensure that each row can be identified specifically and if need be, such as when joining tables or referencing tables in a many to many table relation

1. What is the name given to a table column that references the primary key on another table.
    1.   A foreign key.

1. What do we need in order to have a many to many relationship between two tables.
    1. in order to have a relation between two many to many tables you have to introduce a third table that will hold foreign keys that represent the primary key that is in each of the other tables
