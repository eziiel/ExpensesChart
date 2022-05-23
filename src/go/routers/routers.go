package routers

import (
	"database/sql"
	"encoding/json"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
)

var db *sql.DB

type Expense struct {
	Id        int     `json:"id"`
	Weekmonth string  `json:"weekmonth"`
	Weekday   string  `json:"weekday"`
	Amount    float64 `json:"amount"`
}

func expensesChart(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")
	if r.Method == http.MethodOptions {
		return
}
	registros, errGet := db.Query("SELECT id, weekmonth,weekday,amount FROM expenseschart;")
	if errGet != nil {
		log.Println("Get registros fail:" + errGet.Error())
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	var expenses []Expense = make([]Expense, 0)

	for registros.Next() {
		var expense Expense

		errScan := registros.Scan(&expense.Id, &expense.Weekmonth, &expense.Weekday, &expense.Amount)
		if errScan != nil {
			log.Println("Erro in load row:" + errScan.Error())
			continue
		}

		expenses = append(expenses, expense)
	}
	json.NewEncoder(w).Encode(expenses)
}

func portas(router *mux.Router) {
	log.Fatal(http.ListenAndServe(":8082", router))
}


func router() {
	router := mux.NewRouter()

	router.HandleFunc("/", expensesChart).Methods(http.MethodGet, http.MethodPut, http.MethodPatch, http.MethodOptions)
	router.Use(mux.CORSMethodMiddleware(router))
	portas(router)
}
func AcessDB() {
	var errAcess error
	db, errAcess = sql.Open("mysql", "eziel:ezielEZIEL-10@tcp(localhost:3306)/expenses")
	if errAcess != nil {
		log.Fatal(errAcess.Error())
	}
	dbPing := db.Ping()
	if dbPing != nil {
		log.Fatal(dbPing.Error())
	}

}
func Sever() {
	AcessDB()
	router()
}
