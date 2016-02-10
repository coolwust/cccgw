package cccgw

import (
	"net/http"
	"html/template"
)

func init() {
	http.Handle("/public/", http.StripPrefix("/public/", http.FileServer(http.Dir("public"))))
	http.HandleFunc("/en/", homeHandler)
	http.HandleFunc("/zh-Hant/", homeHandler)
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
	//if r.URL.Path != "/" {
	//	http.NotFound(w, r)
	//	return
	//}
	template.Must(template.ParseFiles("view/layout.html", "view/home.html")).ExecuteTemplate(w, "layout", nil)
}
