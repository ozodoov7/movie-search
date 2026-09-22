let API_KEY = 'dcea1fd7b3e65d34387ad6de7ef9cc5e' 

let tokenTop = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY} `

let tokenPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY} `

let tokenUpComing = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`

const info=document.querySelector(".append")


    ; (async () => {
        let data = await fetch(tokenTop)
        data = await data.json()

        const imgBaseUrl = "https://image.tmdb.org/t/p/w500"
        topRated.addEventListener("click", () => {

            info.innerHTML = ''
            for (const element of data['results']) {
                if (element.poster_path) {

                    const movieCard = `
                        <div class="movie">
                            <img src="${imgBaseUrl}${element.backdrop_path}" alt="${element.original_title || 'Movie'}">
                            <div class="movie-info">
                                <h3>${element.title}</h3>
                                <span class="orange">${element.vote_average.toFixed(2)}</span>
                            </div>
                            <span class="date">${element.release_date}</span> 
                        </div>`;

                    info.innerHTML += movieCard;
                }
            }
        })
    }
    )()

    ; (async () => {
        let data = await fetch(tokenUpComing)
        data = await data.json()

        const imgBaseUrl = "https://image.tmdb.org/t/p/w500"

        popular.addEventListener('click', () => {
            info.innerHTML = ''
            for (const element of data.results) {
                console.log(element)

                const movieCard = `
                        <div class="movie">
                            <img src="${imgBaseUrl}${element.backdrop_path}" alt="${element.original_title || 'Movie'}">
                            <div class="movie-info">
                                <h3>${element.title}</h3>
                                <span class="orange">${element.vote_average.toFixed(2)}</span>
                            </div>
                            <span class="date">${element.release_date}</span> 
                        </div>`;

                info.innerHTML += movieCard
            }
        })
    })()

    ; (async () => {
        let data = await fetch(tokenPopular)
        data = await data.json()

        const imgBaseUrl = "https://image.tmdb.org/t/p/w500"

        newMovies.addEventListener('click', () => {
            info.innerHTML = ''
            for (const element of data.results) {
                console.log(element)

                const movieCard = `
                        <div class="movie">
                            <img src="${imgBaseUrl}${element.backdrop_path}" alt="${element.original_title || 'Movie'}">
                            <div class="movie-info">
                                <h3>${element.title}</h3>
                                <span class="orange">${element.vote_average.toFixed(2)}</span>
                            </div>
                            <span class="date">${element.release_date}</span> 
                        </div>`;

                info.innerHTML += movieCard
            }
        })
    })()

    
