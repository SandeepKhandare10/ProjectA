document.addEventListener('DOMContentLoaded', () => {
    const movieList = document.getElementById('movieList');
    const addButton = document.getElementById('addButton');
    const newMovieInput = document.getElementById('newMovie');
    const hideListCheckbox = document.getElementById('hideList');

    const movies = ['Fight Club', 'Dark Knight'];

    function renderMovies() {
        movieList.innerHTML = '';
        movies.forEach((movie, index) => {
            const li = document.createElement('li');
            li.innerHTML = `${movie} <button onclick="deleteMovie(${index})">delete</button>`;
            movieList.appendChild(li);
        });
    }

    addButton.addEventListener('click', () => {
        const newMovie = newMovieInput.value.trim();
        if (newMovie !== '') {
            movies.push(newMovie);
            newMovieInput.value = '';
            renderMovies();
        }
    });

    // Hide or show the list
    hideListCheckbox.addEventListener('change', () => {
        movieList.style.display = hideListCheckbox.checked ? 'none' : 'block';
    });

    window.deleteMovie = (index) => {
        movies.splice(index, 1);
        renderMovies();
    };

    renderMovies();
});
