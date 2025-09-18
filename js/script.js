/********************* HAMBURGER MENU ********************/

// make the hamburger menu functional
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
    });
}

/********************* CART FUNCTIONALITY ********************/
// array of objects with menu info
const menu = [
    {
        id: 1,
        name: 'Espresso',
        price: 3,
        description: 'A bold and concentrated shot of rich coffee with a velvety crema — the foundation of all great brews.',
        image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 2,
        name: 'Latte',
        price: 4,
        description: 'A smooth blend of espresso and steamed milk topped with a light layer of foam — creamy and comforting.',
        image: 'https://images.unsplash.com/photo-1593443320739-77f74939d0da?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 3,
        name: 'Cappuccino',
        price: 4.5,
        description: 'Equal parts espresso, steamed milk, and foam for a perfectly balanced and frothy classic.',
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 4,
        name: 'Cold Brew',
        price: 5,
        description: 'Slow-steeped for 12+ hours, our cold brew is extra smooth, naturally sweet, and refreshingly bold.',
        image: 'https://images.unsplash.com/photo-1531835207745-506a1bc035d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMGJyZXd8ZW58MHx8MHx8fDA%3D'
    },
    {
        id: 5,
        name: 'Mocha',
        price: 4.75,
        description: 'A chocolate-lover’s dream — espresso mixed with steamed milk and rich cocoa, finished with whipped cream.',
        image: 'https://images.unsplash.com/photo-1596078841242-12f73dc697c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9jaGF8ZW58MHx8MHx8fDA%3D'
    },
    {
        id: 6,
        name: 'Americano',
        price: 3.5,
        description: 'Hot water poured over espresso for a light yet robust cup that’s less intense but just as flavorful.',
        image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

// season specials
const seasonalSpecials = [
    {
        id: 7,
        name: 'Pumpkin Spice Latte',
        price: 5.5,
        description: 'Warm cozy latte flavored with pumpkin spice and topped with whipped cream.',
        image: 'https://images.unsplash.com/photo-1569383893830-b73dc4a03af0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVtcGtpbiUyMHNwaWNlfGVufDB8fDB8fHww'
    },
    {
        id: 8,
        name: 'Peppermint Mocha',
        price: 5.75,
        description: 'Chocolatey mocha with a refreshing peppermint twist — festive and sweet.',
        image: 'https://plus.unsplash.com/premium_photo-1723579489398-d1a2c37753f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGVwcGVybWludCUyME1vY2hhJTIwY29mZmVlfGVufDB8fDB8fHww'
    },
    {
        id: 18,
        name: 'Maple Cinnamon Latte',
        price: 5.25,
        description: 'A warm and cozy latte infused with sweet maple syrup and a hint of cinnamon spice — like autumn in a cup.',
        image: 'https://images.unsplash.com/photo-1569186600496-67c1790a889f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE1hcGxlJTIwQ2lubmFtb24lMjBMYXR0ZXxlbnwwfHwwfHx8MA%3D%3D'
    }

];

// dietary options
const dietaryOptions = [
    {
        id: 9,
        name: 'Gluten‑Free Brownies',
        price: 3.5,
        description: 'Chocolate brownies made with gluten‑free flour that taste just as rich.',
        image: 'https://images.unsplash.com/photo-1613563628001-aac5a5307153?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEdsdXRlbiVFMiU4MCU5MUZyZWUlMjBCcm93bmllc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        id: 10,
        name: 'Almond Flour Muffins',
        price: 3,
        description: 'Light and moist muffins baked with almond flour and vanilla.',
        image: 'https://images.unsplash.com/photo-1636118128238-1e68a4e4b6c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVmZmlufGVufDB8fDB8fHww'
    },
    {
        id: 11,
        name: 'Quinoa Salad',
        price: 6,
        description: 'Refreshing quinoa salad with veggies and lemon‑vinaigrette.',
        image: 'https://plus.unsplash.com/premium_photo-1705207702013-368450377046?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UXVpbm9hJTIwU2FsYWR8ZW58MHx8MHx8fDA%3D'
    },
    {
        id: 12,
        name: 'Vegan Chocolate Cake',
        price: 4.5,
        description: 'Decadent vegan chocolate cake made without dairy or eggs.',
        image: 'https://images.unsplash.com/photo-1613323885553-4b069992362d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VmVnYW4lMjBDaG9jb2xhdGUlMjBDYWtlfGVufDB8fDB8fHww'
    },
    {
        id: 13,
        name: 'Oat Milk Latte',
        price: 4.25,
        description: 'Creamy latte made with oat milk — plant‑based and delicious.',
        image: 'https://images.unsplash.com/photo-1676813904579-ef19f05f77c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE9hdCUyME1pbGslMjBMYXR0ZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        id: 14,
        name: 'Chickpea Salad Wrap',
        price: 6.5,
        description: 'Protein‑rich wrap filled with spiced chickpea salad and veggies.',
        image: 'https://images.unsplash.com/photo-1592044903782-9836f74027c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U2FsYWQlMjBXcmFwfGVufDB8fDB8fHww'
    },
    {
        id: 15,
        name: 'Keto Coffee',
        price: 3.75,
        description: 'Butter blended coffee (bulletproof style) — keto‑friendly energy boost.',
        image: 'https://plus.unsplash.com/premium_photo-1669905375117-e3347bb2b4d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S2V0byUyMENvZmZlZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        id: 16,
        name: 'Avocado & Egg Bowl',
        price: 7,
        description: 'Low‑carb bowl with avocado, egg, greens, and olive oil drizzle.',
        image: 'https://images.unsplash.com/photo-1557965983-f580847ec2d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXZvY2FkbyUyMCUyNiUyMEVnZyUyMEJvd2x8ZW58MHx8MHx8fDA%3D'
    },
    {
        id: 17,
        name: 'Low‑Carb Muffins',
        price: 3.25,
        description: 'Satisfying muffins made with almond flour and sweetener for low-carb.',
        image: 'https://images.unsplash.com/photo-1634391036491-1ff328919d33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TG93JUUyJTgwJTkxQ2FyYiUyME11ZmZpbnN8ZW58MHx8MHx8fDA%3D'
    }
];

// initialize Notyf for notifications
const notyf = new Notyf({
    duration: 3000,
    position: { x: 'center', y: 'top' },
});

// create an array with the menu arrays to perform search
// ... is used to combine all the items from each array into one
const allItems = [...menu, ...seasonalSpecials, ...dietaryOptions];

// get the container with the menu items
const products = document.getElementById('menuItems');


// update cart count badge in header based on user cart
function updateCartCount() {
    // get the span that shows the number of icons in cart
    const cartCount = document.getElementById('cart-count');

    // get the cart from local storage
    const cart = JSON.parse(localStorage.getItem('coffeeCart') || '[]');

    // loop through the user cart (array) and add the number of items
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // if the number of items is greater than 0, show the count
    if (totalItems > 0) {
        cartCount.classList.remove('hidden');
        cartCount.textContent = totalItems;

        // else hide it
    } else {
        cartCount.classList.add('hidden');
    }
};

// call createMenu() if the element exists
if (products) {
    createMenu(menu, 'mainMenu');
    createMenu(seasonalSpecials, 'seasonalSection');
    createMenu(dietaryOptions, 'dietarySection');
}

// call the function to update the number of items shown on the cart icon
updateCartCount();

// call the function to create the checkout page
createCheckout();

// return the cart from from local storage if there is none it returns an empty array
function loadCart() {
    return JSON.parse(localStorage.getItem('coffeeCart') || '[]');
}

// save cart to local storage
function saveCart(cart) {
    localStorage.setItem('coffeeCart', JSON.stringify(cart));
}

// create menu items
function createMenu(items, sectionId) {
    // get the div to add menu items
    const menuItems = document.getElementById(sectionId);

    // loop through the menu array 
    // for each object in the array create a div with the info
    items.forEach(item => {
        const card = document.createElement('div');

        // add classes to the card
        card.className = 'bg-beige p-4 border rounded search-item flex flex-col overflow-hidden shadow-md menu-card';

        // add a data- attribute with the name for each item
        card.dataset.name = item.name;

        // create the html template for each item
        card.innerHTML = `
            <div class="flex flex-col gap-2">
                <img src="${item.image || 'https://source.unsplash.com/400x300/?coffee'}" alt="${item.name}" class="w-full h-48 object-cover mb-3 rounded">
                <h4 class="font-semibold text-lg mb-1">${item.name}</h4>
                <p class="text-sm md:max-w-sm mb-2">${item.description || 'No description available.'}</p>
                <p class="font-bold mb-2">$${item.price.toFixed(2)}</p>
                <button class="menu-btn mt-auto self-start justify-self-end px-5 py-2 bg-yellow-600 text-white transition-all transform hover:scale-95 hover:bg-yellow-700 rounded-full" data-id="${item.id}" data-name="${item.name}">Add to Cart</button>
            </div>`;

        // add the div to the page
        menuItems.appendChild(card);
    });

    // stop the function if the element does not exist on the page
    if (!menuItems) return;
}

// update the cart
function addToCart(id) {
    // get the cart from local storage
    const cart = loadCart();

    // check if item in the cart matches the specified id
    // store that item into a variable
    const userCart = cart.find(item => item.id === id);

    // if a matching id is found, increase its quantity
    if (userCart) {
        userCart.quantity++;

        // if the id does not exist, add that item to the cart
    } else {
        cart.push({ id, quantity: 1 });
    }

    // save the cart to local storage
    saveCart(cart);

    // update the cart icon
    updateCartCount();
}

// if the id menuItems exist on the page
if (products) {
    // add event delegation
    products.addEventListener('click', (event) => {
        // if the event target is a button with data-id
        if (event.target.matches('button[data-id]')) {
            // convert the id (string) to a number
            // use parseInt() that takes a string and a base value (10)
            // use the id as an argument to add the item to the cart
            const itemId = parseInt(event.target.dataset.id, 10);
            addToCart(itemId);
            // show a message that the item was added to cart
            notyf.success(`${event.target.dataset.name} added to cart!`);
        }
    });
}

/********************* CHECKOUT PAGE ********************/

// create the html for the checkout page
function createCheckout() {
    // get the div to put the cart items
    const divElement = document.getElementById('cartItems');

    // exit if the element does not exist on the page
    if (!divElement) return;

    divElement.innerHTML = ''; // Clear previous content

    // get the cart from local storage
    const cart = loadCart();

    // if the cart is empty display a message and exit
    if (cart.length == 0) {
        divElement.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    // loop through the items in the cart
    cart.forEach((item, index) => {
        // get the object from the menu array that matches the id from local storage
        const menuItem = allItems.find(menu => menu.id == item.id);

        // create a div to hold each item
        const div = document.createElement('div');

        // add classes to the div
        div.className = 'bg-gray-300 rounded flex justify-between items-center my-2 px-6 py-4';

        // create html template for each item in cart
        // use toFixed(2)} to get 2 decimal points
        // create a button to remove item from cart
        div.innerHTML = `
            <span>${item.quantity} ${menuItem.name} = $${(menuItem.price * item.quantity).toFixed(2)}</span>
            <button class="px-6 py-2 bg-red-500 text-white rounded transition-colors duration-200 hover:bg-red-700 focus:bg-red-700" data-index="${index}" data-name="${menuItem.name}">Remove</button>
        `;

        // add the div to the page
        divElement.appendChild(div);
    });

    // get the sum of all items in the cart
    const total = cart.reduce((sum, item) => {
        const menuItem = allItems.find(menu => menu.id === item.id);
        return sum + menuItem.price * item.quantity;
    }, 0);

    // at the end of the div with the cart items, display the total
    divElement.insertAdjacentHTML('beforeend', `<p class="font-bold pt-10">Total: $${total.toFixed(2)}</p>`);
}

/************ Make remove button on the checkout page functional *****************/
// get the div with the cart items
const cartList = document.getElementById('cartItems');
// if the div exist on the page
if (cartList) {
    // add a click event that splice the cart array, 
    // removing the item at the specified location
    cartList.addEventListener('click', event => {
        if (event.target.matches('button[data-index]')) {

            // convert the dataset value on the button to an integer
            const index = parseInt(event.target.dataset.index, 10);

            // get the cart from local storage
            const cart = loadCart();

            // remove item at specified index
            cart.splice(index, 1);

            // save the updated cart to local storage
            saveCart(cart);

            // create the html for the checkout page based on the updated cart
            createCheckout();

            // update the number of items shown on the cart icon
            updateCartCount();

            // show a message that the item was removed from cart
            notyf.error(`${event.target.dataset.name} removed from cart.`);
        }
    });
}


/************************** Make the clear cart button functional **************************/
// get the button
const clearCartBtn = document.getElementById('clearCart');

// if the button exist on the page
if (clearCartBtn) {
    // add a click event
    clearCartBtn.addEventListener('click', () => {
        // remove the cart from local storage
        localStorage.removeItem('coffeeCart');

        // display message that the cart is empty
        createCheckout();

        // update the number of items shown on the cart icon
        updateCartCount();
    });
}

/*************************** Make the place order button functional ************************************/
// get the button
const placeOrderBtn = document.getElementById('placeOrder');

// if the button exist on the page
if (placeOrderBtn) {
    // add a click event
    placeOrderBtn.addEventListener('click', () => {
        // get the cart from local storage
        const cart = loadCart();

        // create a list to show ordered items
        let summary = '<ul class="list-outside text-left space-y-5">';
        cart.forEach(item => {
            const menuItem = allItems.find(menu => menu.id === item.id);
            summary += `<li>${item.quantity} ${menuItem.name} = $${(menuItem.price * item.quantity).toFixed(2)}</li>`;
        });
        summary += '</ul>';

        // get the div to put the items in
        document.getElementById('orderSummary').innerHTML = summary;

        // get the element for the overlay
        const overlay = document.getElementById('orderOverlay');

        // make it visible
        overlay.classList.remove('hidden');
        overlay.classList.add('flex');

        // if the user cart is empty
        if (cart.length === 0) {
            // display a message in the overlay
            document.getElementById('popup').innerHTML = `
                <h3 class="text-2xl font-bold mb-4">Your cart is empty.</h3>
            `;
            return;
        }

        // remove the cart from local storage
        localStorage.removeItem('coffeeCart');

        // update the checkout page
        createCheckout();

        // update the number of items in cart
        updateCartCount();
    });
}

/************************* Make the back to menu button functional *************************/
const goToMenuBtn = document.getElementById('goToMenu');
if (goToMenuBtn) {
    goToMenuBtn.addEventListener('click', () => {
        window.location.href = 'menu.html';
    });
}

/********************* SEARCH FIELD ********************/
// make the search bar interactive
// get the input field and store it in a variable
if (document.getElementById('searchInput')) {
    const searchInput = document.getElementById('searchInput');

    // add an event listener so the filter happens as the user types
    searchInput.addEventListener('input', (event) => {
        // convert what the user types to lower case
        const searchTerm = event.target.value.toLowerCase();

        // get all the items with the search-item class
        // then loop through them
        document.querySelectorAll('.search-item').forEach(item => {
            // convert the name of the item to lower case
            const searchText = item.dataset.name.toLowerCase();

            // it the value from the input field matches that of the item
            // show it
            if (searchText.includes(searchTerm)) {
                item.style.display = '';

                // if there is no match the hide the items
            } else {
                item.style.display = 'none';
            }
        });
    });
}

/********************* TESTIMONIAL CAROUSEL ********************/

// get the container that holds the testimonials
const carousel = document.getElementById("testimonial-carousel");

// get the left (previous) button
const prevBtn = document.getElementById("prev-btn");

// get the right (next) button
const nextBtn = document.getElementById("next-btn");

if (carousel) {
    // index will track which slide is currently visible
    let index = 0;

    // totalSlides counts how many testimonial items exist inside the carousel
    const totalSlides = carousel.children.length;

    // autoPlayInterval will store the setInterval reference so autoplay can stop/start
    let autoPlayInterval;

    // this function change the position of the carousel slides
    function updateCarousel() {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    // this function move to the carousel to the next slide
    function nextSlide() {
        //   increase "index" by 1 to move forward
        //   the "%" (modulus) makes sure that if we pass the last slide,
        //   it loops back to 0 (first slide)
        index = (index + 1) % totalSlides;

        // update the position of the carousel
        updateCarousel();
    }


    // this function move to the carousel to the next slide
    function prevSlide() {
        //   decrease "index" by 1 to move backwards
        //   adding totalSlides before modulus ensures the result is never negative
        index = (index - 1 + totalSlides) % totalSlides;

        // update the visual position of the carousel
        updateCarousel();
    }

    // this function starts the autoplay
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000);
    }

    // this function stops the autoplay
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // add event listeners to buttons
    nextBtn.addEventListener("click", () => {
        nextSlide();
        stopAutoPlay();
        startAutoPlay();
    });

    prevBtn.addEventListener("click", () => {
        prevSlide();
        stopAutoPlay();
        startAutoPlay();
    });

    // start the carousel autoplay when the page loads
    startAutoPlay();
}

// show/hide scroll to top button
window.addEventListener('scroll', function () {
    const scrollBtn = document.getElementById('scrollToTop');
    if (window.scrollY > 300) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
});

// scroll to top on click
document.getElementById('scrollToTop').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// FAQ accordion toggle
document.querySelectorAll('.faq-toggle').forEach(btn => {
    btn.addEventListener('click', function () {
        const answer = this.nextElementSibling;
        answer.classList.toggle('hidden');
    });
});

// add fade in animation on scroll
const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    faders.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight - 50) {
            element.classList.add("animate__animated", "animate__fadeInUp");
        }
    });
});