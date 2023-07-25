let params = new URLSearchParams(location.search);
document.querySelector("#txt-search").value = params.has('q') ? params.get('q') : "";
document.querySelector('#txt-search').value = params.get('q');



