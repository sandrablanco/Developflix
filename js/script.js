import peliculas from './peliculas.js'
const baseImgURL = "https://image.tmdb.org/t/p/w500";
//hacer que cada seccion aparezca la img y titulo de la peli filtrado por genero
//La base de las imagenes es esta URL `https://image.tmdb.org/t/p/w500`
//usar métodos de array e iteraciones
//trabajar con contenido del DOM para poder mostrar el contenido
function muestraPelisPorGenero(genreId) {
  // filtramos pelis por género
  const pelisFilter = peliculas.filter(pelicula => pelicula.genre_ids.includes(genreId));
   
  // contenedor donde se van a muostrar las pelis
  const contenedor = document.getElementById(`genero-${genreId}`);
  
  // Limpiar contenedor por si ya tiene contenido
  contenedor.innerHTML = '';
  
  // pasamos por las pelis filtradas y que se muestren
  pelisFilter.forEach(pelicula => {
    const peliculaDiv = document.createElement('div');
    peliculaDiv.classList.add('pelicula');

    // iagen de la peli
    const img = document.createElement('img');
    img.src = `${baseImgURL}${pelicula.poster_path}`;
    img.alt = pelicula.title;

    // titulo de la peli
    const titulo = document.createElement('h3');
    titulo.textContent = pelicula.title;

    // añade img y titulo al div de la peli
    peliculaDiv.appendChild(img);
    peliculaDiv.appendChild(titulo);

    // añade div al contenedor
    contenedor.appendChild(peliculaDiv);
  });
}

muestraPelisPorGenero(28); //muestra peli de acción
muestraPelisPorGenero(53); //thriller
muestraPelisPorGenero(12); //aventura

console.log(peliculas[0]);