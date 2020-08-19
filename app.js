const searchInput = document.querySelector('#filterInput');
const items = document.querySelectorAll('.collection-item');

function filterItems() {
    items.forEach(item => {
        const value = searchInput.value.toLowerCase();
        const data = item.getElementsByTagName('a')[0].textContent.toLowerCase();
   
        if(data.indexOf(value) > -1) {
            item.style.display = ''
        } else {
            item.style.display = 'none'
        }
    })
    
}

searchInput.addEventListener('keyup', filterItems);