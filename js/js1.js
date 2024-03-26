document.addEventListener("DOMContentLoaded", function() {
    

    

    // Agregar evento de clic a cada película
    movies.forEach(function(movie) {
        movie.addEventListener("click", function() {
            // Redimensionar la película seleccionada
            movies.forEach(function(m) {
                m.classList.remove("selected");
            });
            this.classList.add("selected");
        });
    });

    const genreItems = document.querySelectorAll("nav .sub-menu a");

    // Agregar evento de clic a cada enlace de género
    genreItems.forEach(function(item) {
        item.addEventListener("click", function(event) {
            event.preventDefault();

            const genre = this.dataset.genre.toLowerCase();
            showMoviesByGenre(genre);
        });
    });

    
});
