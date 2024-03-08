// Navigation functionality
const currentPath = window.location.pathname;
const navlinks = document.querySelectorAll(".nav-link");

if(window.location.pathname === '/index.html') {
    // Homepage gallery
    fetch('gallery.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        generateGallery(data);
    })
    .catch(error => {
        console.log('Error: ', error);
    });

    function generateGallery(items) {
        const indexRow = document.querySelector(".index-row");

        items.forEach(item => {
            const galleryItem = 
        `
            <div class="col-lg-4">
                <img class="img-fluid mx-auto" src="${item.image}" alt="${item.alt}">
                <h2 class="mt-2">${item.title}</h2>
                <p>${item.content}</p>
                <button class="btn btn-outline-primary">
                    <a href="#">Read More</a>
                </button>
            </div>
        `;

        indexRow.innerHTML += galleryItem;
        });
    }
};

if (window.location.pathname === '/menu.html') {
    // Menu functionality
fetch("data.json")
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    generateMenu(data);
})
.catch(error => {
    console.log('Error: ', error); 
});

function generateMenu(items) {
    const menuRow = document.querySelector('.menu-row');

    items.forEach(item => {
        const menuItem = 
        `
            <div class="col-12 col-md-6">
                <div class="row g-3 align-items-center">
                    <div class="col-12 col-lg-6">
                        <img src="${item.image}" class="img-fluid" alt="${item.name}">
                    </div>
                    <div class="col-12 col-lg-6">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <p class="text-lg-end"><strong>$${item.price}</strong></p>
                    </div>
                </div>
            </div>
        `;

        menuRow.innerHTML += menuItem;
    })
}
}

navlinks.forEach(link => {
    if (link.pathname === currentPath) {
        link.classList.add("active");
    } else {
        link.classList.remove('active');
    }
});