package main

import (
	"database/sql"
	"log"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	//acess DB
	db, errOpen := sql.Open("mysql", "eziel:ezielEZIEL-10@tcp(localhost:3306)/expenses")

	if errOpen != nil {
		log.Fatal(errOpen.Error())
	}
	//erros
	dbPing := db.Ping()
	if dbPing != nil {
		log.Fatal(dbPing.Error())
	}

	//check if table existes
	_, errDrop := db.Exec(
		"DROP TABLE IF EXISTS expenseschart;",
	)
	if errDrop != nil {
		log.Fatal(errDrop.Error())
	}
	//make table
	_, errCreate := db.Exec(
		"CREATE TABLE expenseschart (" +
			"id INT NOT NULL AUTO_INCREMENT," +
			"weekmonth VARCHAR(5) NOT NULL," +
			"weekday VARCHAR(3) NOT NULL," +
			"amount DECIMAL(5,2) NOT NULL," +
			"PRIMARY KEY(id)" +
			");",
	)
	if errCreate != nil {
		log.Fatal(errCreate.Error())
	}
	//into in table
	_, errInsert := db.Exec(
		"INSERT INTO expenseschart (weekmonth, weekday, amount) VALUES" +
			"('01/05', 'mon', 17.45)," +
			"('01/05', 'tue', 34.91)," +
			"('01/05', 'wed', 52.36)," +
			"('01/05', 'thu', 31.07)," +
			"('01/05', 'fri', 23.39)," +
			"('01/05', 'sat', 43.28)," +
			"('01/05', 'sun', 25.48)," +

			"('02/05', 'mon', 15.19)," +
			"('02/05', 'tue', 26.52)," +
			"('02/05', 'wed', 43.12)," +
			"('02/05', 'thu', 29.12)," +
			"('02/05', 'fri', 28.44)," +
			"('02/05', 'sat', 45.51)," +
			"('02/05', 'sun', 21.33)," +

			"('03/05', 'mon', 19.02)," +
			"('03/05', 'tue', 33.29)," +
			"('03/05', 'wed', 60.52)," +
			"('03/05', 'thu', 20.52),"+
			"('03/05', 'fri', 30.44)," +
			"('03/05', 'sat', 49.50)," +
			"('03/05', 'sun', 29.22)," +
			
			"('01/06', 'thu', 25.52),"+
			"('03/06', 'thu', 25.52)," +


			"('04/07', 'thu', 52.21);",
	)
	if errInsert != nil {
		log.Fatal(errInsert.Error())
	}
}
