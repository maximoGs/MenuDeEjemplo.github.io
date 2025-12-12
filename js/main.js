document.addEventListener('DOMContentLoaded', () => {

    /* --- Data: Menu Items --- */
    const menuData = {
        main: [
            { 
                id: 'm1', 
                price: 18.00, 
                img: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=500&auto=format&fit=crop',
                name: { es: "Pasta Carbonara Tradicional", en: "Traditional Carbonara", pt: "Carbonara Tradicional" }, 
                desc: { es: "Spaghetti, guanciale, pecorino romano, pimienta negra, yema de huevo.", en: "Spaghetti, guanciale, pecorino romano, black pepper, egg yolk.", pt: "Spaghetti, guanciale, pecorino romano, pimenta preta, gema de ovo." } 
            },
            { 
                id: 'm2', 
                price: 22.00, 
                img: 'https://images.unsplash.com/photo-1627207644006-27fcc910747e?q=80&w=500&auto=format&fit=crop',
                name: { es: "Ossobuco a la Milanesa", en: "Ossobuco Milanese", pt: "Ossobuco à Milanesa" }, 
                desc: { es: "Jarrete de ternera estofado con risotto de azafrán.", en: "Braised veal shank with saffron risotto.", pt: "Jarret de vitela estufada com risoto de açafrão." } 
            },
            { 
                id: 'm3', 
                price: 16.50, 
                img: 'https://images.unsplash.com/photo-1574071318000-8595d03fd19a?q=80&w=500&auto=format&fit=crop',
                name: { es: "Pizza Napolitana DOP", en: "Neapolitan Pizza DOP", pt: "Pizza Napolitana DOP" }, 
                desc: { es: "Salsa de tomate San Marzano, mozzarella di bufala, albahaca fresca.", en: "San Marzano tomato sauce, buffalo mozzarella, fresh basil.", pt: "Molho de tomate San Marzano, mozzarella de búfala, manjericão fresco." } 
            },
            { 
                id: 'm4', 
                price: 24.00, 
                img: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?q=80&w=500&auto=format&fit=crop',
                name: { es: "Bistecca alla Fiorentina", en: "Florentine Steak", pt: "Bistecca alla Fiorentina" }, 
                desc: { es: "Chuletón de ternera a la parrilla con romero y aceite de oliva.", en: "Grilled T-bone steak with rosemary and olive oil.", pt: "T-bone grelhado com alecrim e azeite de oliva." } 
            }
        ],
        desserts: [
            { 
                id: 'd1', 
                price: 8.00, 
                img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=500&auto=format&fit=crop',
                name: { es: "Tiramisu Clásico", en: "Classic Tiramisu", pt: "Tiramisu Clássico" }, 
                desc: { es: "Bizcochos savoiardi, café espresso, mascarpone, cacao.", en: "Savoiardi biscuits, espresso, mascarpone, cocoa.", pt: "Biscoitos savoiardi, café expresso, mascarpone, cacau." } 
            },
            { 
                id: 'd2', 
                price: 7.50, 
                img: 'https://images.unsplash.com/photo-1616031026048-28438ed2e132?q=80&w=500&auto=format&fit=crop',
                name: { es: "Panna Cotta", en: "Panna Cotta", pt: "Panna Cotta" }, 
                desc: { es: "Crema de vainilla con coulis de frutos rojos.", en: "Vanilla cream with berry coulis.", pt: "Creme de baunilha com coulis de frutas vermelhas." } 
            }
        ],
        drinks: [
            { 
                id: 'b1', 
                price: 12.00, 
                img: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?q=80&w=500&auto=format&fit=crop',
                name: { es: "Aperol Spritz", en: "Aperol Spritz", pt: "Aperol Spritz" }, 
                desc: { es: "Prosecco, Aperol, soda, naranja.", en: "Prosecco, Aperol, soda, orange.", pt: "Prosecco, Aperol, água com gás, laranja." } 
            },
            { 
                id: 'b2', 
                price: 45.00, 
                img: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=500&auto=format&fit=crop',
                name: { es: "Chianti Classico Riserva", en: "Chianti Classico Riserva", pt: "Chianti Classico Riserva" }, 
                desc: { es: "Botella 750ml - Toscana", en: "Bottle 750ml - Tuscany", pt: "Garrafa 750ml - Toscana" } 
            },
            { 
                id: 'b3', 
                price: 6.00, 
                img: 'https://images.unsplash.com/photo-1627460935510-cd39ccce03b2?q=80&w=500&auto=format&fit=crop',
                name: { es: "San Pellegrino", en: "San Pellegrino", pt: "San Pellegrino" }, 
                desc: { es: "Agua con gas italiana 500ml", en: "Italian sparkling water 500ml", pt: "Água com gás italiana 500ml" } 
            }
        ],
        promos: [
            { 
                id: 'p1', 
                price: 55.00, 
                img: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=500&auto=format&fit=crop',
                name: { es: "Cena Romántica", en: "Romantic Dinner", pt: "Jantar Romântico" }, 
                desc: { es: "2 Platos de Pasta + 1 Botella de Vino + 2 Postres", en: "2 Pasta Dishes + 1 Wine Bottle + 2 Desserts", pt: "2 Pratos de Massa + 1 Garrafa de Vinho + 2 Sobremesas" } 
            }
        ]
    };

    /* --- Translations --- */
    const translations = {
        es: {
            menu_title: "LA CONCCETINA",
            menu_subtitle: "Auténtica Cocina Italiana",
            cat_main: "Primi & Secondi",
            cat_desserts: "Dolci",
            cat_drinks: "Bevande",
            cat_promos: "Ofertas Especiales",
            cart_title: "Il Tuo Ordine",
            cart_empty: "Tu carrito está vacío.",
            total: "Totale:",
            checkout_whatsapp: "Pedir por WhatsApp",
            add_btn: "Agregar",
            currency: "€"
        },
        en: {
            menu_title: "LA CONCCETINA",
            menu_subtitle: "Authentic Italian Cuisine",
            cat_main: "Primi & Secondi",
            cat_desserts: "Dolci",
            cat_drinks: "Bevande",
            cat_promos: "Special Offers",
            cart_title: "Your Order",
            cart_empty: "Your cart is empty.",
            total: "Total:",
            checkout_whatsapp: "Order via WhatsApp",
            add_btn: "Add",
            currency: "€"
        },
        pt: {
            menu_title: "LA CONCCETINA",
            menu_subtitle: "Autêntica Cozinha Italiana",
            cat_main: "Primi & Secondi",
            cat_desserts: "Dolci",
            cat_drinks: "Bevande",
            cat_promos: "Ofertas Especiais",
            cart_title: "Seu Pedido",
            cart_empty: "Seu carrinho está vazio.",
            total: "Total:",
            checkout_whatsapp: "Pedir pelo WhatsApp",
            add_btn: "Adicionar",
            currency: "€"
        }
    };

    let currentLang = 'es';
    let currentCategory = 'main';
    let cart = [];

    // DOM Elements
    const menuGrid = document.getElementById('menu-grid');
    const langBtn = document.getElementById('lang-toggle');
    const langSpan = langBtn.querySelector('.current-lang');
    const catBtns = document.querySelectorAll('.cat-btn');
    const cartFab = document.getElementById('cart-fab');
    const cartCount = document.getElementById('cart-count');
    const cartModal = document.getElementById('cart-modal');
    const closeCartBtn = document.getElementById('close-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const checkoutBtn = document.getElementById('checkout-btn');

    /* --- Core Functions --- */

    function formatPrice(price) {
        return `${translations[currentLang].currency}${price.toFixed(2)}`;
    }

    function renderMenu() {
        menuGrid.innerHTML = '';
        const items = menuData[currentCategory];

        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-card';
            
            // Check if item is in cart to show quantity
            const cartItem = cart.find(i => i.id === item.id);
            const qty = cartItem ? cartItem.qty : 0;

            card.innerHTML = `
                <div class="card-image">
                    <img src="${item.img}" alt="${item.name[currentLang]}" loading="lazy">
                </div>
                <div class="card-content">
                    <div class="card-header">
                        <h3>${item.name[currentLang]}</h3>
                        <span class="price">${formatPrice(item.price)}</span>
                    </div>
                    <p class="desc">${item.desc[currentLang]}</p>
                    <div class="card-actions">
                        ${qty > 0 ? `
                            <div class="qty-control">
                                <button class="qty-btn minus" data-id="${item.id}">-</button>
                                <span class="qty-val">${qty}</span>
                                <button class="qty-btn plus" data-id="${item.id}">+</button>
                            </div>
                        ` : `
                            <button class="add-btn" data-id="${item.id}">${translations[currentLang].add_btn}</button>
                        `}
                    </div>
                </div>
            `;
            menuGrid.appendChild(card);
        });

        // Attach event listeners to new buttons
        document.querySelectorAll('.add-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                addToCart(e.target.dataset.id);
            });
        });

        document.querySelectorAll('.qty-btn.plus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                addToCart(e.target.dataset.id);
            });
        });

        document.querySelectorAll('.qty-btn.minus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                removeFromCart(e.target.dataset.id);
            });
        });
    }

    function addToCart(id) {
        const item = findItemById(id);
        const existing = cart.find(i => i.id === id);

        if (existing) {
            existing.qty++;
        } else {
            cart.push({ ...item, qty: 1 });
        }
        updateCartState();
    }

    function removeFromCart(id) {
        const existing = cart.find(i => i.id === id);
        if (existing) {
            existing.qty--;
            if (existing.qty <= 0) {
                cart = cart.filter(i => i.id !== id);
            }
        }
        updateCartState();
    }

    function findItemById(id) {
        for (const cat in menuData) {
            const found = menuData[cat].find(i => i.id === id);
            if (found) return found;
        }
        return null;
    }

    function updateCartState() {
        // Update total count in FAB
        const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
        cartCount.textContent = totalQty;
        cartCount.classList.toggle('visible', totalQty > 0);

        // Re-render menu to show updated quantities
        renderMenu();

        // Re-render cart if open
        if (cartModal.classList.contains('active')) {
            renderCartItems();
        }
    }

    function renderCartItems() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `<p class="empty-msg">${translations[currentLang].cart_empty}</p>`;
        } else {
            cart.forEach(item => {
                const itemTotal = item.price * item.qty;
                total += itemTotal;

                const row = document.createElement('div');
                row.className = 'cart-item-row';
                row.innerHTML = `
                    <div class="cart-item-info">
                        <strong>${item.name[currentLang]}</strong>
                        <small>${formatPrice(item.price)} x ${item.qty}</small>
                    </div>
                    <div class="cart-item-actions">
                        <button class="cart-action-btn minus" data-id="${item.id}">-</button>
                        <span>${formatPrice(itemTotal)}</span>
                        <button class="cart-action-btn plus" data-id="${item.id}">+</button>
                    </div>
                `;
                cartItemsContainer.appendChild(row);
            });
        }

        cartTotalPrice.textContent = formatPrice(total);

        // Attach listeners in cart
        document.querySelectorAll('.cart-action-btn.plus').forEach(btn => {
            btn.addEventListener('click', (e) => addToCart(e.target.dataset.id));
        });
        document.querySelectorAll('.cart-action-btn.minus').forEach(btn => {
            btn.addEventListener('click', (e) => removeFromCart(e.target.dataset.id));
        });
    }

    function updateLanguage(lang) {
        currentLang = lang;
        langSpan.textContent = lang.toUpperCase();
        
        // Update all data-i18n elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Re-render views
        renderMenu();
        if (cartModal.classList.contains('active')) {
            renderCartItems();
        }
    }

    /* --- Event Listeners --- */

    // Category Switching
    catBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            catBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderMenu();
        });
    });

    // Language Toggle
    langBtn.addEventListener('click', () => {
        const langs = ['es', 'en', 'pt'];
        let idx = langs.indexOf(currentLang);
        idx = (idx + 1) % langs.length;
        updateLanguage(langs[idx]);
    });

    // Cart Modal
    cartFab.addEventListener('click', () => {
        renderCartItems();
        cartModal.classList.add('active');
    });

    closeCartBtn.addEventListener('click', () => {
        cartModal.classList.remove('active');
    });

    // WhatsApp Checkout
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) return;

        let message = `*Hola! Quiero realizar un pedido:*\n\n`;
        let total = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.qty;
            total += itemTotal;
            message += `- ${item.qty}x ${item.name[currentLang]} (${formatPrice(item.price)})\n`;
        });

        message += `\n*Total: ${formatPrice(total)}*`;

        // Replace with actual merchant number if provided, currently placeholder
        const phoneNumber = "5491112345678"; 
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    });

    /* --- Init --- */
    renderMenu();
});
