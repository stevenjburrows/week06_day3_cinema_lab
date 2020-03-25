const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listOfFilmTitles = function() {
 const listOfFilms =  this.films.map ( film => film.title);
 return listOfFilms
}

Cinema.prototype.findByTitle= function(title) {
  const film = this.films.find ( film => film.title === title );
  return film.title;
}

Cinema.prototype.filterByGenre = function(genre){
  const films = this.films.filter (film => film.genre === genre);
  return films
}

Cinema.prototype.filmsFromYear = function(year){
  return this.films.some( film => film.year === year);
}

Cinema.prototype.filmOverALength = function(time){
  const films = this.films.every (film => film.length >= time);
  return films
}

Cinema.prototype.totalRunTime = function(){
  const totalTime = this.films.reduce(( total, time) => {
    return total + time.length}, 0);
  return totalTime
}

Cinema.prototype.filterByProperty = function(property, item){
  const films = this.films.filter ((film) => film[property] === item);
  return films
}
module.exports = Cinema;
