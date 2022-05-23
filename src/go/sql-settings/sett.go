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
			"('02/05', 'mon', 15.48);",
	)
	if errInsert != nil {
		log.Fatal(errInsert.Error())
	}
}
