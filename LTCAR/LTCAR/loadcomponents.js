
function loadComponent(url, elementId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar componente: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
           
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error(error);
        });
}

loadComponent('header.html', 'header-placeholder');
loadComponent('footer.html', 'footer-placeholder');