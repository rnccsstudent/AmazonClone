document.querySelector('.search-button').addEventListener('click', function () {
    var selectedOption = document.querySelector('.search-select').value;
    var searchText = document.querySelector('.search-input').value;

    // Perform actions based on the selected option and search text
    if (selectedOption === 'all') {
        // Perform a general search
        alert('Searching all sources for: ' + searchText);
    } else if (selectedOption === 'amazon') {
        // Perform a search on Amazon
        alert('Searching Amazon for: ' + searchText);
    } else if (selectedOption === 'google') {
        // Perform a search on Google
        alert('Searching Google for: ' + searchText);
    }
    // Add more conditions for other options
});
