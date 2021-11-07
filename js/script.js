// 1 create a movie array
let movies = []
const url = "https://striveschool-api.herokuapp.com/api/movies";
const myToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOGQ1MWFhY2FhMjAwMTU1MmExNzUiLCJpYXQiOjE2MzYxMDYzMDUsImV4cCI6MTYzNzMxNTkwNX0.coJwGNfHZHba2EmsENjQ - KPY - ZzrDFCnx24XJdM4Cko "


// 2 fetching data globally
const moviesFromServer = async() => {
    try {
        const res = await fetch(url, {
            headers: {
                "Authorization": myToken,
                'Content-Type': 'application/JSON'
            }
        })
        if (!res.ok) {
            throw new Error(alert("bad request error!"));
        } else {
            const data = await res.json()
            console.log(data)
            movies = data
        }
    } catch (error) { console.log(error) }
}

moviesFromServer()

// 3 create a filtered array on genre query
// 4 insert a lik with ID movie
// 5 display movies on the page