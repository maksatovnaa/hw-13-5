document.querySelector(".burger").addEventListener('click', function(){
    document.querySelector('nav').classList.toggle('active');
    document.querySelector('.burger').classList.toggle('burger-active');
});


const cart = document.getElementById('cart');

document.querySelector('.rentBtn1').addEventListener('click', function () {
  cart.innerHTML = `
    <div style="background-color: rgb(232, 232, 232); color: black; padding: 20px; width: 250px;">
      <h2>Your Rental Cart</h2>
      <ul><li>1984 - 3 day(s) - $4.50</li></ul>
      <p>Total: $4.50</p>
    </div>`;
});

document.querySelector('.rentBtn2').addEventListener('click', function () {
  cart.innerHTML = `
    <div style="background-color: rgb(232, 232, 232); color: black; padding: 20px; width: 250px;">
      <h2>Your Rental Cart</h2>
      <ul><li>The Alchemist - 2 day(s) - $3.00</li></ul>
      <p>Total: $3.00</p>
    </div>`;
});

document.querySelector('.rentBtn3').addEventListener('click', function () {
  cart.innerHTML = `
    <div style="background-color: rgb(232, 232, 232); color: black; padding: 20px; width: 250px;">
      <h2>Your Rental Cart</h2>
      <ul><li>Anna Karenina - 4 day(s) - $6.00</li></ul>
      <p>Total: $6.00</p>
    </div>`;
});

document.querySelector('.rentBtn4').addEventListener('click', function () {
  cart.innerHTML = `
    <div style="background-color: rgb(232, 232, 232); color: black; padding: 20px; width: 250px;">
      <h2>Your Rental Cart</h2>
      <ul><li>Brave New World - 3 day(s) - $4.50</li></ul>
      <p>Total: $4.50</p>
    </div>`;
});

document.querySelector('.rentBtn5').addEventListener('click', function () {
  cart.innerHTML = `
    <div style="background-color: rgb(232, 232, 232); color: black; padding: 20px; width: 250px;">
      <h2>Your Rental Cart</h2>
      <ul><li>Don Quixote - 5 day(s) - $7.50</li></ul>
      <p>Total: $7.50</p>
    </div>`;
});

document.querySelector('.rentBtn6').addEventListener('click', function () {
  cart.innerHTML = `
    <div style="background-color: rgb(232, 232, 232); color: black; padding: 20px; width: 250px;">
      <h2>Your Rental Cart</h2>
      <ul><li>Crime and Punishment - 4 day(s) - $6.00</li></ul>
      <p>Total: $6.00</p>
    </div>`;
});

document.querySelectorAll('.rentBtn6')[1].addEventListener('click', function () {
  cart.innerHTML = `
    <div style="background-color: rgb(232, 232, 232); color: black; padding: 20px; width: 250px;">
      <h2>Your Rental Cart</h2>
      <ul><li>The Great Gatsby - 2 day(s) - $3.00</li></ul>
      <p>Total: $3.00</p>
    </div>`;
});

document.querySelector('.rentBtn7').addEventListener('click', function () {
  cart.innerHTML = `
    <div style="background-color: rgb(232, 232, 232); color: black; padding: 20px; width: 250px;">
      <h2>Your Rental Cart</h2>
      <ul><li>The Hobbit - 3 day(s) - $4.50</li></ul>
      <p>Total: $4.50</p>
    </div>`;
});

document.querySelector('.rentBtn8').addEventListener('click', function () {
  cart.innerHTML = `
    <div style="background-color: rgb(232, 232, 232); color: black; padding: 20px; width: 250px;">
      <h2>Your Rental Cart</h2>
      <ul><li>Jane Eyre - 3 day(s) - $4.50</li></ul>
      <p>Total: $4.50</p>
    </div>`;
});

document.querySelector('.rentBtn9').addEventListener('click', function () {
  cart.innerHTML = `
    <div style="background-color: rgb(232, 232, 232); color: black; padding: 20px; width: 250px;">
      <h2>Your Rental Cart</h2>
      <ul><li>Les Misérables - 5 day(s) - $7.50</li></ul>
      <p>Total: $7.50</p>
    </div>`;
});

document.querySelector('.rentBtn10').addEventListener('click', function () {
  cart.innerHTML = `
    <div style="background-color: rgb(232, 232, 232); color: black; padding: 20px; width: 250px;">
      <h2>Your Rental Cart</h2>
      <ul><li>Moby Dick - 4 day(s) - $6.00</li></ul>
      <p>Total: $6.00</p>
    </div>`;
});


const books = {
  rentBtn1: { title: '1984', days: 3 },
  rentBtn2: { title: 'The Alchemist', days: 2 },
  rentBtn3: { title: 'Anna Karenina', days: 4 },
  rentBtn4: { title: 'Brave New World', days: 3 },
  rentBtn5: { title: 'Don Quixote', days: 5 },
  rentBtn6: { title: 'Crime and Punishment', days: 4 },
  rentBtn6_2: { title: 'The Great Gatsby', days: 2 },
  rentBtn7: { title: 'The Hobbit', days: 3 },
  rentBtn8: { title: 'Jane Eyre', days: 3 },
  rentBtn9: { title: 'Les Misérables', days: 5 },
  rentBtn10: { title: 'Moby Dick', days: 4 }
};

let rentalCart = {}; 
const pricePerDay = 1.5;
const carts = document.getElementById('cart');

function updateCart() {
  let total = 0;
  let list = '';

  for (let title in rentalCart) {
    const item = rentalCart[title];
    const sum = item.days * pricePerDay * item.count;
    total += sum;
    list += `<li>${title} - ${item.count} x ${item.days} day(s) - $${sum.toFixed(2)}</li>`;
  }

  cart.innerHTML = `
    <div style="background:#e8e8e8; color:black; padding:20px; width:250px;">
      <h2>Your Rental Cart</h2>
      <ul>${list}</ul>
      <p>Total: $${total.toFixed(2)}</p>
      <button onclick="confirmRental()" style="margin-top:10px;">Confirm Rental</button>
    </div>`;
}

function addBook(key) {
  if (key === 'rentBtn6' && rentalCart['Crime and Punishment']) key = 'rentBtn6_2';
  const book = books[key];
  if (!rentalCart[book.title]) {
    rentalCart[book.title] = { days: book.days, count: 1 };
  } else {
    rentalCart[book.title].count++;
  }
  updateCart();
}

for (let i = 1; i <= 10; i++) {
  document.querySelectorAll('.rentBtn' + i).forEach(btn => {
    btn.addEventListener('click', () => {
      let key = 'rentBtn' + i;
      if (i === 6 && btn !== document.querySelectorAll('.rentBtn6')[0]) key = 'rentBtn6_2';
      addBook(key);
    });
  });
}

function confirmRental() {
  rentalCart = {}; 
  cart.innerHTML = `
    <div style="background:#e8e8e8; color:black; padding:20px; width:250px;">
      <h2>Thank you!</h2>
      <p>Your rental is confirmed.</p>
    </div>`;


  setTimeout(() => {
    cart.innerHTML = '';
  }, 3000);
}