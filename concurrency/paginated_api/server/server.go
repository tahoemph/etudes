package main

import (
    "encoding/json"
    "net/http"
    "strconv"
)

type Response struct {
    Start       int
    More        int
    Data        []int
}

func serveData(w http.ResponseWriter, r *http.Request) {
    if (r.URL.Path != "/numbers") {
        w.WriteHeader(http.StatusNotFound);
        return
    }

    pageLength := 25
    var start = 0
    if (r.URL.Query().Get("start") != "") {
        start, _ = strconv.Atoi(r.URL.Query().Get("start"))
    }

    var message Response;
    message.Data = make([]int, pageLength)
    for i := range message.Data {
        message.Data[i] = start + i
    }
    message.Start = start;
    message.More = start + pageLength

    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusCreated)
    json.NewEncoder(w).Encode(message)
}

func main() {
    http.HandleFunc("/", serveData)
    if err := http.ListenAndServe(":8000", nil); err != nil {
        panic(err);
    }
}
