const products = [
  {
    id: 1,
    name: "Handwoven Cotton Cushion Cover",
    category: "Decor",
    price: 24.00,
    imageURL: "cushionCover.jpg",
    description: "Embroidered cotton cushion cover inspired by Sri Lankan coastal beauty.",
    variants: {
      color: ["Grey", "Beige"],
      material: ["Cotton"]
    }
  },{
    id: 2,
    name: "Wall Mirror",
    category: "Decor",
    price: 45.00,
    imageURL: "wallMirror.jpg",
    description: "Elegant wall mirror with a handcrafted wooden frame, adding a warm and natural touch to any room’s decor.",
    variants: {
      color: ["Natural"],
      material: ["Wood and Glasses"]
    }
  },{
    id: 3,
    name:"Porcelain Flower Vase",
    category: "Accessories",
    price: 35.00,
    imageURL: "porcelainVase.jpg",
    description: "Delicate porcelain flower vase with an artistic floral accent, perfect for adding elegance and charm to your home décor.",
    variants: {
      color: ["Natural"],
      material: ["Porcelain"]
    }
  },{
    id: 4,
    name:"Rattan Round Shelf",
    category: "Crafts",
    price: 18.00,
    imageURL: "rattanShelf.jpg",
    description: "Handcrafted rattan round shelf, perfect for displaying décor items while adding a natural, bohemian touch to your space.",
    variants: {
      color: ["Natural"],
      material:  ["Rattan"]
    }
  },{
    id: 5,
    name:"Wooden Kitchen Hanger Set",
    category: "Accessories",
    price: 39.00,
    imageURL: "woodenKitchenHangerSet.jpg",
    description: "Handcrafted wooden kitchen hanger set, perfect for organizing utensils while adding a rustic and stylish touch to your kitchen décor.",
    variants: {
      color: ["Natural"],
      material: ["Wood"]
    }
  },{
    id: 6,
    name:"Rustic Wooden Wall Clock",
    category: "Accessories",
    price:39.00,
    imageURL: "wallClock.jpg",
    description: "Elegant wooden wall clock with a natural finish, adding a warm and timeless touch to any room.",
    variants: {
      color: ["Original"],
      material:["Wooden"]
    }
  },{
    id: 7,
    name:"Hand-painted Ceramic Mug",
    category: "Accessories",
    price:22.00,
    imageURL: "coffeeMug.jpg",
    description: "Handcrafted ceramic mug with a smooth finish, perfect for enjoying hot beverages with a touch of rustic charm.",
    variants: {
      color: ["Black", "Brown", "Beige","Green"],
      material: ["Ceramic"]
    }
  },{
    id: 8,
    name:"Clay Vase & Pottery",
    category: "Decor, Accessories",
    price:12.00,
    imageURL: "clayVase.jpg",
    description:"Handcrafted clay vase with subtle flower embroidery, perfect for adding a delicate, elegant accent to your home decor.",
    variants: {
      color: ["brown"],
      material:["Clay"]
    }
  },{
    id: 9,
    name:"Ceramic Plates",
    category: "Accessories",
    price:25.00,
    imageURL:"Plates.jpg",
    description: "A beautifully made Sri Lankan ceramic plate set inspired by local craftsmanship. Each piece carries a subtle handmade charm.",
    variants: {
      color: ["beige, orange and maroon set"],
      material: ["Natural"]
    }
  },{
    id: 10,
    name:"Knitted Blanket",
    category: "Decor",
    price:18.00,
    imageURL: "knittedBlanket.jpg",
    description: "Soft and cozy knitted blanket, handcrafted with care to provide warmth and comfort while adding a timeless, elegant touch to your home decor.",
    variants: {
      color:  ["Brown", "Beige","Gray"],
      material:["Cotton"]
    }
  },{
    id: 11,
    name:"Wall art",
    category: "Decor",
    price:12.00,
    imageURL: "wallArtDeco.jpg",
    description: "Artful Sri Lankan wall decor with timeless cultural charm.",
    variants: {
      color:  ["Beige","White"],
      material:["Natural"]
    }
  },{
    id: 12,
    name:"Wooden Tealight Candle Holder Set",
    category: "Accessories, Decor",
    price:18.00,
    imageURL: "candleHolder.jpg",
    description: "Handcrafted wooden tealight candle holder set with a natural finish, perfect for creating a warm, cozy ambiance in any space.",
    variants: {
      color:  ["Original"],
      material:["Wooden"]
    }
  },{
    id: 13,
    name:"Budhdha Wall Art",
    category: "Decor",
    price:20.00,
    imageURL: "wallArt2.jpg",
    description: "Buddha wall art inspired by Buddhism, reflecting peace, mindfulness, and spiritual elegance to enhance the serenity of any space.",
    variants: {
      color:  ["Original"],
      material:["Glass"]
    }
  },{
    id: 14,
    name:"Round Rattan Coaster",
    category: "Crafts, Accessories",
    price:10.00,
    imageURL: "roundRattanCoaster.jpg",
    description: "Handwoven round rattan coaster, perfect for protecting surfaces with a natural, rustic touch.",
    variants: {
      color:  ["Original"],
      material:["Rattan"]
    }
  },{
    id: 15,
    name:"Wooden Jewelerry Box",
    category: "Accessories, Crafts",
    price: 35.00,
    imageURL: "jewelleryBox.jpg",
    description: "A stylish and practical box to keep your precious jewelry safe and tidy.",
    variants: {
      color: ["Natural"],
      material: ["Wooden"]
    }
  },{
    id: 16,
    name:"Minimalist Line Art Wall Hanging",
    category: "Decor, Crafts",
    price: 11.00,
    imageURL: "wallHanging.jpg",
    description: "A serene textile piece featuring abstract facial linework and soft fringe edges. Handcrafted to elevate modern interiors with warmth and simplicity.",
    variants: {
      color: ["Natural"],
      material: ["Linen"]
    }
  },{
    id: 17,
    name:"Tribal Art Wooden Tray",
    category: "Accessories, Crafts",
    price: 17.00,
    imageURL: "tray.jpg",
    description: "A handcrafted tray featuring dynamic tribal silhouettes and rhythmic motifs — perfect for cultural charm and everyday elegance.",
    variants: {
      color: ["Natural"],
      material: ["Wooden"]
    }
  },{
    id: 18,
    name:"Wooden Coffee Table",
    category: "Accessories, Decor",
    price: 22.00,
    imageURL: "table.jpg",
    description: "A sleek handcrafted table that adds natural warmth and timeless style to any living space.",
    variants: {
      color: ["Natural"],
      material: ["Wooden"]
    }
  },{
    id: 19,
    name:"Circular Rug",
    category: "crafts, Decor",
    price: 10.00,
    imageURL: "mat.jpg",
    description: "A cozy round rug that brings softness and balance to any space, perfect for modern home styling.",
    variants: {
      color: ["Orange","Blue"],
      material: ["Crochet"]
    }
  },{
    id: 20,
    name:"Handwoven Basket",
    category: "crafts",
    price: 18.00,
    imageURL: "basket.jpg",
    description: "Handwoven Basket, natural and rustic, ideal for decor or storage.",
    variants: {
      color: ["natural"],
      material: ["Crochet"]
    }
  },{
    id: 21,
    name:"Key Holder",
    category: "crafts",
    price: 9.00,
    imageURL: "keyHolder.jpg",
    description: "A stylish solution to keep your keys organized and always within reach.",
    variants: {
      color: ["natural"],
      material: ["Wooden"]
    }
  },{
    id: 22,
    name:"Flowers Print Night Lamp",
    category: "crafts, Decor",
    price: 11.00,
    imageURL: "flowerLamp.jpg",
    description: "Brighten your evenings with the gentle glow of this charming night lamp, adorned with a delicate floral print.",
    variants: {
      color: ["natural"],
      material: ["Wooden, Glasses"]
    }
  },{
    id: 23,
    name:"Coconut Shelf Bowls",
    category: "Crafts",
    price: 9.00,
    imageURL: "coconutShellBowl.jpg",
    description: "Natural coconut shell bowl, eco-friendly and perfect for holding jewelry, keys or tiny trinkets.",
    variants: {
      color: ["Green","Orange","Blue"],
      material: ["Coconut shelves"]
    }
  },{
    id: 24,
    name:"Lotus shelf",
    category: "Crafts, Decor",
    price: 12.00,
    imageURL: "lotusShelf.jpg",
    description: "Elegant lotus-shaped wooden shelf, perfect for displaying candles, plants, or small decor.",
    variants: {
      color: ["Natural"],
      material: ["Wooden"]
    }
  },{
    id: 25,
    name:"Tissue Holder",
    category: "Decor",
    price: 10.00,
    imageURL: "tissueHolder.jpg",
    description: "A cute tissue holder that adds an artistic touch to your decor while neatly holding tissues. Perfect for tables, kitchens, or living spaces.",
    variants: {
      color: ["Blue","Yellow","Pink"],
      material: ["Wooden"]
    }
  },{
    id: 26,
    name:"Coconut Shell Cups",
    category: "Crafts",
    price: 8.00,
    imageURL: "coconutShellCup.jpg",
    description: "Handcrafted coconut shell cups, eco‑friendly, unique, and perfect for everyday use.",
    variants: {
      color: ["Natural"],
      material: ["Coconut Shell"]
    }
  },{
    id: 27,
    name:"Sri Lankan Traditional Wall Art",
    category: "Decor",
    price: 16.00,
    imageURL: "wallartTrad.jpg",
    description: "Handcrafted Sri Lankan batik canvas print, symbolizing light and blessings. A cultural piece that brings warmth, positivity and heritage to any space.",
    variants: {
      color: ["Natural"],
      material: ["Glass"]
    }
  },{
    id: 28,
    name:"Batik Cushion Cover",
    category: "Decor, Crafts",
    price: 7.00,
    imageURL: "batikCushionCovers.jpg",
    description: "Handmade Sri Lankan batik cushion covers with vibrant patterns, adding tradition and artistry to your home.",
    variants: {
      color: ["Blue","Red","Yellow"],
      material: ["Cotton"]
    }
  },{
    id: 29,
    name:"Terracotta Plate",
    category: "Decor, Crafts",
    price: 11.00,
    imageURL: "terracottaPlates.jpg",
    description: "A handcrafted terracotta clay plate with a warm earthy tone, perfect for rustic dining and natural elegance.",
    variants: {
      color: ["Brown"],
      material: ["Clay"]
    }
  },
]

// Theme toggle with localStorage and jQuery
$(function () {
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') $('body').addClass('dark-mode');

  $('#themeToggle').on('click', function () {
    $('body').toggleClass('dark-mode');
    const mode = $('body').hasClass('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', mode);
    $(this).find('i').toggleClass('fa-moon fa-sun');
  });

  updateCartCount();
  routeInit();
});



// CART utils using localStorage
function getCart() {
  const raw = localStorage.getItem('cart');
  return raw ? JSON.parse(raw) : [];
}
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}
function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  $('.cart-count').text(count);
}
function addToCart(product, variants, qty) {
  const cart = getCart();
  const key = `${product.id}-${variants.color}-${variants.material}`;
  const existing = cart.find(i => i.key === key);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      key,
      id: product.id,
      name: product.name,
      price: product.price,
      imageURL: product.imageURL,
      variants,
      qty
    });
  }
  saveCart(cart);
  showToast('Added to cart');
}
function removeFromCart(key) {
  const cart = getCart().filter(i => i.key !== key);
  saveCart(cart);
}
function updateQuantity(key, qty) {
  const cart = getCart();
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty = Math.max(1, qty);
  saveCart(cart);
}

// Simple toast
function showToast(msg) {
  const el = $('<div class="ll-toast"></div>').text(msg);
  $('body').append(el);
  setTimeout(() => el.addClass('show'), 10);
  setTimeout(() => el.removeClass('show'), 2000);
  setTimeout(() => el.remove(), 2500);
}

// Listing page: fetch products, filter & sort
async function initListingPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const preCategory = urlParams.get('category');

  $('#priceRange').on('input', function () {
    $('#priceLabel').text(`$${$(this).val()}`);
  });

  // Pre-select category filter if query provided
  if (preCategory) {
    $(`#cat${preCategory}`).prop('checked', true);
  }
 

  try {

    // Populate grid
    renderProducts(products);

    // Apply filters
    $('#applyFilters').on('click', function () {
      const selectedCats = ['Decor', 'Crafts', 'Accessories'].filter(c => $(`#cat${c}`).is(':checked'));
      const maxPrice = Number($('#priceRange').val());
      const filtered = products.filter(p => {
        const catOk = selectedCats.length ? selectedCats.includes(p.category) : true;
        const priceOk = p.price <= maxPrice;
        return catOk && priceOk;
      });
      const sorted = sortProducts(filtered, $('#sortSelect').val());
      renderProducts(sorted);
    });

    // Clear filters
    $('#clearFilters').on('click', function () {
      $('#catDecor, #catCrafts, #catAccessories').prop('checked', false);
      $('#priceRange').val(100).trigger('input');
      const sorted = sortProducts(products, $('#sortSelect').val());
      renderProducts(sorted);
    });

    // Sorting change
    $('#sortSelect').on('change', function () {
      const currentCards = $('#productGrid .product-card').map(function () {
        return $(this).data('product');
      }).get();
      const sorted = sortProducts(currentCards, $(this).val());
      renderProducts(sorted);
    });

    $('#spinner').addClass('d-none');
    $('#productGrid').removeClass('d-none');
  } catch (e) {
    $('#spinner').html('<p class="text-danger">Failed to load products.</p>');
  }
}

function sortProducts(list, mode) {
  const arr = [...list];
  if (mode === 'priceAsc') arr.sort((a, b) => a.price - b.price);
  else if (mode === 'priceDesc') arr.sort((a, b) => b.price - a.price);
  else arr.sort((a, b) => a.id - b.id); // popularity fallback
  return arr;
}

function renderProducts(list) {
  const grid = $('#productGrid').empty();
  list.forEach(p => {
    const col = $('<div class="col-6 col-lg-4"></div>');
    const card = $(`
      <div class="card product-card">
        <img src="${p.imageURL}" class="card-img-top" alt="${p.name}">
        <div class="card-body">
          <h3 class="card-title h6">${p.name}</h3>
          <p class="price">${formatCurrency(p.price)}</p>
          <a href="product.html?id=${p.id}" class="btn btn-outline-dark btn-sm">View Details</a>
        </div>
      </div>
    `);
    card.data('product', p);
    col.append(card);
    grid.append(col);
  });
}

// Product page
function initProductPage() {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get('id') || '0');

  // Find product directly from your hard-coded array
  const product = products.find(p => p.id === id);

  if (!product) {
    console.error("Product not found");
    return;
  }

  // Inject product details
  $('#productTitle').text(product.name);
  $('#productPrice').text(formatCurrency(product.price));
  $('#productDesc').text(product.description);
  $('#productImage').attr('src', product.imageURL);
  $('#thumbs').html(`<img src="${product.imageURL}" class="thumb img-thumbnail" style="width:72px;height:72px;" alt="thumb">`);

  // Variants
  const colors = product.variants?.color || ['Default'];
  const materials = product.variants?.material || ['Default'];

  $('#variantColor').empty();
  colors.forEach(c => $('#variantColor').append(`<option value="${c}">${c}</option>`));

  $('#variantMaterial').empty();
  materials.forEach(m => $('#variantMaterial').append(`<option value="${m}">${m}</option>`));

  // Add to cart
  $('#addToCartBtn').on('click', function () {
    const qty = Math.max(1, Number($('#qty').val()));
    const variants = {
      color: $('#variantColor').val(),
      material: $('#variantMaterial').val()
    };
    addToCart(product, variants, qty);
  });
}

// Cart page
function initCartPage() {
  renderCart();
  renderWishlistInCart(); // <-- add this line

  $('#cartItems').on('click', '.remove-item', function () {
    const key = $(this).closest('.list-group-item').data('key');
    removeFromCart(key);
    renderCart();
  });

  $('#cartItems').on('change', '.qty-input', function () {
    const row = $(this).closest('.list-group-item');
    const key = row.data('key');
    const qty = Number($(this).val());
    updateQuantity(key, qty);
    renderCart();
  });
}


function renderCart() {
  const list = $('#cartItems').empty();
  const cart = getCart();
  let subtotal = 0;

  if (cart.length === 0) {
    list.html('<div class="p-3 text-muted">Your cart is empty.</div>');
    $('#subtotal').text(formatCurrency(0));
    return;
  }

  cart.forEach(item => {
    subtotal += item.price * item.qty;
    const row = $(`
      <div class="list-group-item d-flex align-items-center gap-3">
        <img src="${item.imageURL}" alt="${item.name}" class="rounded" style="width:72px;height:72px;object-fit:cover;">
        <div class="flex-grow-1">
          <div class="d-flex justify-content-between">
            <strong>${item.name}</strong>
            <button class="btn btn-sm btn-link text-danger remove-item"><i class="fa-solid fa-trash"></i></button>
          </div>
          <div class="small text-muted">Color: ${item.variants.color} · Material: ${item.variants.material}</div>
          <div class="d-flex align-items-center mt-2 gap-3">
            <span class="price">${formatCurrency(item.price)}</span>
            <input type="number" min="1" class="form-control form-control-sm qty-input" value="${item.qty}" style="max-width:100px;">
          </div>
        </div>
      </div>
    `);
    row.attr('data-key', item.key);
    list.append(row);
  });

  $('#subtotal').text(formatCurrency(subtotal));
}

// Checkout page
function initCheckoutPage() {
  // Populate summary
  updateSummary();

  // Steps navigation with validation
  $('#toShipping').on('click', function () {
    if (validateDetails()) {
      $('#shipping-tab').trigger('click');
    }
  });

  $('#toPayment').on('click', function () {
    $('#payment-tab').trigger('click');
  });

  $('#toReview').on('click', function () {
    if (validatePayment()) {
      populateReview();
      $('#review-tab').trigger('click');
    }
  });

  $('#confirmOrder').on('click', function () {
    // Mock placing order
    const orderNum = 'LL-' + Math.floor(1000 + Math.random() * 9000);
    localStorage.setItem('lastOrder', JSON.stringify({
      orderNumber: orderNum,
      items: getCart(),
      total: calculateCartTotal()
    }));
    // Clear cart
    saveCart([]);
    window.location.href = 'confirmation.html';
  });
}

function calculateCartTotal() {
  return getCart().reduce((sum, i) => sum + i.price * i.qty, 0);
}

function updateSummary() {
  const items = getCart();
  const container = $('#summaryItems').empty();
  let total = 0;
  if (items.length === 0) {
    container.html('<div class="text-muted">No items.</div>');
  } else {
    items.forEach(i => {
      total += i.price * i.qty;
      container.append(`
        <div class="d-flex justify-content-between">
          <span>${i.name} × ${i.qty}</span>
          <span>${formatCurrency(i.price * i.qty)}</span>
        </div>
      `);
    });
  }
  $('#summaryTotal').text(formatCurrency(total));
}

function validateDetails() {
  let valid = true;

  const name = $('#custName').val().trim();
  const email = $('#custEmail').val().trim();
  const phone = $('#custPhone').val().trim();
  const address = $('#custAddress').val().trim();

  const nameOk = /^[A-Za-z\s]+$/.test(name);
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const phoneOk = /^[0-9]+$/.test(phone);
  const addressOk = address.length > 0;

  setValidity('#custName', nameOk);
  setValidity('#custEmail', emailOk);
  setValidity('#custPhone', phoneOk);
  setValidity('#custAddress', addressOk);

  valid = nameOk && emailOk && phoneOk && addressOk;
  return valid;
}

function validatePayment() {
  let valid = true;

  const cardName = $('#cardName').val().trim();
  const cardNumber = $('#cardNumber').val().replace(/\s/g, '');
  const expiry = $('#cardExpiry').val().trim();
  const cvv = $('#cardCVV').val().trim();

  const nameOk = cardName.length > 0;
  const numberOk = /^[0-9]{12,19}$/.test(cardNumber);
  const expiryOk = /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry);
  const cvvOk = /^[0-9]{3,4}$/.test(cvv);

  setValidity('#cardName', nameOk);
  setValidity('#cardNumber', numberOk);
  setValidity('#cardExpiry', expiryOk);
  setValidity('#cardCVV', cvvOk);

  valid = nameOk && numberOk && expiryOk && cvvOk;
  return valid;
}

function setValidity(selector, ok) {
  const el = $(selector);
  if (ok) {
    el.removeClass('is-invalid').addClass('is-valid');
  } else {
    el.removeClass('is-valid').addClass('is-invalid');
  }
}

function populateReview() {
  const items = getCart();
  const container = $('#orderSummary').empty();
  let total = 0;
  if (items.length === 0) {
    container.html('<div class="text-muted">No items in cart.</div>');
  } else {
    items.forEach(i => {
      total += i.price * i.qty;
      container.append(`
        <div class="d-flex justify-content-between">
          <div>${i.name} (${i.variants.color}, ${i.variants.material}) × ${i.qty}</div>
          <div>${formatCurrency(i.price * i.qty)}</div>
        </div>
      `);
    });
    container.append(`<hr><div class="d-flex justify-content-between"><strong>Total</strong><strong>${formatCurrency(total)}</strong></div>`);
  }
}

// Confirmation page
function initConfirmationPage() {
  const last = localStorage.getItem('lastOrder');
  if (last) {
    const order = JSON.parse(last);
    $('#orderNumber').text(order.orderNumber || 'LL-0000');
  }
}

// Toast styles injected
const toastStyle = document.createElement('style');
toastStyle.innerHTML = `
.ll-toast {
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: rgba(0,0,0,0.8);
  color: #fff;
  padding: 10px 14px;
  border-radius: 8px;
  opacity: 0;
  transform: translateY(8px);
  transition: all 0.2s ease;
  z-index: 9999;
}
.ll-toast.show {
  opacity: 1;
  transform: translateY(0);
}
`;
document.head.appendChild(toastStyle);
// Contact page
function initContactPage() {
  $('form').on('submit', function (e) {
    e.preventDefault();
    // Basic validation
    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const message = $('#message').val().trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Mock submission
    alert('Thanks for reaching out, ' + name + '! We’ll get back to you soon.');
    this.reset();
  });
}
function routeInit() {
  const page = document.documentElement.getAttribute('data-page');
  switch (page) {
    case 'listing':
      initListingPage();
      break;
    case 'product':
      initProductPage();
      break;
    case 'cart':
      initCartPage();
      break;
    case 'checkout':
      initCheckoutPage();
      break;
    case 'confirmation':
      initConfirmationPage();
      break;
    case 'contact':
      initContactPage();
      break;
    case 'about':
      // No JS needed for About
      break;
    case 'decor':
      initDecorPage();       // you need to define this
      break;
    case 'crafts':
      initCraftsPage();      // define this
      break;
    case 'accessories':
      initAccessoriesPage(); // define this
      break;
    default:
      break;
  }
}

// Existing code (if any) ...

// === Product Search Filter ===
$(document).ready(function() {
  $('#searchInput').on('keyup', function() {
    let query = $(this).val().toLowerCase();

    // Loop through all product cards
    $('.product-card').each(function() {
      let title = $(this).find('.card-title').text().toLowerCase();

      // Show/hide based on match
      if (title.indexOf(query) > -1) {
        $(this).parent().show(); // parent = column wrapper
      } else {
        $(this).parent().hide();
      }
    });
  });
});
//nav
$(document).ready(function() {
  let path = window.location.pathname.split("/").pop();
  $('.navbar-nav .nav-link').each(function() {
    if ($(this).attr('href') === path) {
      $(this).addClass('active');
    }
  });
});
// === Currency Conversion ===
const conversionRates = {
  USD: 1,
  LKR: 325,   // example fixed rate
  GBP: 0.78   // example fixed rate
};

let currentCurrency = localStorage.getItem('currency') || 'USD';

// Format currency based on currentCurrency
function formatCurrency(usdValue) {
  const rate = conversionRates[currentCurrency] || 1;
  const converted = usdValue * rate;

  if (currentCurrency === 'USD') return `$${converted.toFixed(2)}`;
  if (currentCurrency === 'LKR') return `Rs ${converted.toFixed(0)}`;
  if (currentCurrency === 'GBP') return `£${converted.toFixed(2)}`;
  return converted.toFixed(2);
}

$(document).ready(function () {
  // Set initial dropdown value
  $('#currencySelect').val(currentCurrency);

  // ✅ Apply saved currency immediately on page load
  $('.price').each(function () {
    const usdValue = parseFloat($(this).attr('data-usd'));
    if (!isNaN(usdValue)) {
      $(this).text(formatCurrency(usdValue));
    }
  });

  // Update price range label if on listing page
  const page = document.documentElement.getAttribute('data-page');
  if (page === 'listing') {
    const maxPrice = $('#priceRange').val();
    $('#priceLabel').text(formatCurrency(parseFloat(maxPrice)));
  }

  // Handle currency change
  $('#currencySelect').on('change', function () {
    currentCurrency = $(this).val();
    localStorage.setItem('currency', currentCurrency);

    // Re-render depending on page
    if (page === 'listing') {
      renderProducts(products);
    } else if (page === 'product') {
      initProductPage();
    } else if (page === 'cart') {
      renderCart();
    } else if (page === 'checkout') {
      updateSummary();
    } else if (page === 'decor') {
      renderDecorProducts();
    } else if (page === 'crafts') {
      renderCraftsProducts();
    } else if (page === 'accessories') {
      renderAccessoriesProducts();
    }

    // Update any static .price elements (like Home page featured items)
    $('.price').each(function () {
      const usdValue = parseFloat($(this).attr('data-usd'));
      if (!isNaN(usdValue)) {
        $(this).text(formatCurrency(usdValue));
      }
    });

    // Update price range label on Shop page
    if (page === 'listing') {
      const maxPrice = $('#priceRange').val();
      $('#priceLabel').text(formatCurrency(parseFloat(maxPrice)));
    }
  });
});

// === Category Render Functions ===
function renderCategoryProducts(category, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const target = category.toLowerCase();
  const filtered = products.filter(p => {
    const categories = Array.isArray(p.category) ? p.category : p.category.split(",");
    return categories.map(c => c.trim().toLowerCase()).includes(target);
  });

  let html = "";
  filtered.forEach(product => {
    html += `
      <div class="col-6 col-lg-3">
        <div class="card product-card h-100">
          <img src="${product.imageURL}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h3 class="card-title h6">${product.name}</h3>
            <p class="price" data-usd="${product.price}">${formatCurrency(product.price)}</p>
            <a href="product.html?id=${product.id}" class="btn btn-outline-dark btn-sm">View Details</a>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function renderDecorProducts() {
  renderCategoryProducts("Decor", "decor-products");
}
function renderCraftsProducts() {
  renderCategoryProducts("Crafts", "crafts-products");
}
function renderAccessoriesProducts() {
  renderCategoryProducts("Accessories", "accessories-products");
}

// === Listing Page Render Functions ===
const PRODUCTS_PER_PAGE = 12;

function renderProducts(list, page = 1) {
  const grid = $('#productGrid').empty();

  // Slice products for current page
  const start = (page - 1) * PRODUCTS_PER_PAGE;
  const end = start + PRODUCTS_PER_PAGE;
  const paginated = list.slice(start, end);

  // Render only that slice
  paginated.forEach(p => {
    const col = $('<div class="col-6 col-lg-4"></div>');
    const card = $(`
      <div class="card product-card">
        <img src="${p.imageURL}" class="card-img-top" alt="${p.name}">
        <div class="card-body">
          <h3 class="card-title h6">${p.name}</h3>
          <p class="price" data-usd="${p.price}">${formatCurrency(p.price)}</p>
          <a href="product.html?id=${p.id}" class="btn btn-outline-dark btn-sm">View Details</a>
        </div>
      </div>
    `);
    card.data('product', p);
    col.append(card);
    grid.append(col);
  });

  // Render pagination buttons
  renderPagination(list.length, page);
}

function renderPagination(totalItems, currentPage) {
  const totalPages = Math.ceil(totalItems / PRODUCTS_PER_PAGE);
  const pagination = $('#pagination').empty();

  for (let i = 1; i <= totalPages; i++) {
    const btn = $(`<button class="btn btn-sm ${i === currentPage ? 'btn-primary' : 'btn-outline-secondary'} mx-1">${i}</button>`);
    btn.on('click', () => renderProducts(products, i));
    pagination.append(btn);
  }
}

/*chat bot*/

const chatbotToggle1 = document.getElementById("chatbotToggle1");
const chatbot1 = document.getElementById("chatbot1");
const closeChat1 = document.getElementById("closeChat1");

chatbotToggle1.addEventListener("click", () => {
  chatbot1.style.display = "flex";
});

closeChat1.addEventListener("click", () => {
  chatbot1.style.display = "none";
});

const qa1 = {
  "hello": "Hi there! 👋 How can I help you?",
  "hi": "Hi 👋!!! How can I help you?",
  "how can I contact Loom & Lane": "You can reach us via our contact page, or message us on Instagram or Facebook. Email works too!",
  "do you ship internationally": "Absolutely! We ship worldwide so you can enjoy Loom & Lane wherever you are 🌍✈️.",
  "what products do you sell":"Our collections include home accessories, decor items, and crafts 🌸🌿. All designed to bring warmth and style to your space.",
  "what kind of decors do you sell": "Please visit the Decor section on our homepage to browse our collection of ceramics, floral centerpieces, and unique accents 🌸🪞",
  "what kind of accessories do you sell":"Our Accessories are waiting for you, visit the Accessories section to discover cozy, handcrafted pieces ✨🌿",
  "what kind of crafts do you sell":"You’ll find all our handmade crafts in the Crafts section, head there to browse woven pieces, lacework, and more 🪢🏡",
  "thank you": "It’s our pleasure — thank you for visiting Loom & Lane 🌿💌."
};

const sendBtn1 = document.getElementById("sendBtn1");
const userInput1 = document.getElementById("userInput1");
const chatBody1 = document.getElementById("chatBody1");

sendBtn1.addEventListener("click", sendMessage1);
userInput1.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage1();
});

function sendMessage1() {
  const text = userInput1.value.trim().toLowerCase();
  if (text === "") return;

  appendMessage1(text, "user");
  userInput1.value = "";

  const thinkingMsg = document.createElement("div");
  thinkingMsg.classList.add("thinking1");
  thinkingMsg.textContent = "Thinking...";
  chatBody1.appendChild(thinkingMsg);
  chatBody1.scrollTop = chatBody1.scrollHeight;

  setTimeout(() => {
    thinkingMsg.remove();
    const reply = qa1[text] || "😕I’m not sure about that yet, but I’d love to help with something else.";
    appendMessage1(reply, "bot");
  }, 1500);
}

function appendMessage1(msg, sender) {
  const div = document.createElement("div");
  div.classList.add("chat-message1", sender === "user" ? "user-message1" : "bot-message1");
  div.textContent = msg;
  chatBody1.appendChild(div);
  chatBody1.scrollTop = chatBody1.scrollHeight;
}
// === User Account Simulation ===

// Sign in
$('#signinBtn').on('click', function() {
  const username = $('#username').val();
  const password = $('#password').val();
  const name = $('#signinName').val();   // optional name field
  const email = $('#signinEmail').val(); // optional email field

  if (username && password) {
    // Save all relevant fields
    localStorage.setItem('user', JSON.stringify({
      username: username,
      name: name || username, // fallback to username if no name entered
      email: email || ''
    }));
    showDashboard();
  } else {
    alert('Please enter username and password');
  }
});

// Show dashboard
function showDashboard() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    $('#signinForm').addClass('d-none');
    $('#dashboard').removeClass('d-none');

    // Display either name or username
    $('#userDisplay').text(user.name || user.username);

    renderWishlist();
    renderOrders();
  }
}

// Sign out
$('#signoutBtn').on('click', function() {
  localStorage.removeItem('user');
  $('#dashboard').addClass('d-none');
  $('#signinForm').removeClass('d-none');
});


// === Order History ===
function getOrders() {
  const raw = localStorage.getItem('orders');
  return raw ? JSON.parse(raw) : [];
}

function renderOrders() {
  const orders = getOrders();
  const container = $('#orderHistory').empty();

  if (orders.length === 0) {
    container.html('<div class="p-2 text-muted">No orders yet.</div>');
    return;
  }

  orders.forEach(order => {
    container.append(`<div class="list-group-item">Order #${order.id} — ${order.date} — ${order.total}</div>`);
  });
}

// Auto-load dashboard if signed in
$(document).ready(showDashboard);



