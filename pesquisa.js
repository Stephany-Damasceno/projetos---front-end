var resultlist = [
    { title:"Página 2", url: "index2.html#result1"},
    { title:"Página 3", url: "index3.html#result2"}
];

function search() {
    var searchTerm = document.getElementById('searchInput').ariaValueMax.toLowerCase();
    var resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = '';

    var filteredResults = resultList.filter(function(result) {
        return result.title.toLowerCase().includes(searchTerm);
});
}

if (filteredResults.lenght > 0) {
    resultsDiv.innerHTML = 'Resultados para ' + searchTerm + ':' + '<br>';
    filteredResults.forEach(function(result) {
        resultsDiv.innerHTML += '<a href="' + result.url + '">' + result.title + '</a>';
    });
}
if (similarResults.lenght > 0) {
    resultsDiv.innerHTML = 'Nenhum resultado encontrado para: ' + searchTerm + '<br>';
    resultsDiv.innerHTML += 'Mas temos: <br>';

    similarResults.forEach(function(result) {
        resultsDiv.innerHTML += '<a href="' + result.url + '">' + result.title + '</a>';
    }); 
}
else {
    resultsDiv.innerHTML = 'Nenhum resultado encontrado para: ' + searchTerm + '<br>';
}