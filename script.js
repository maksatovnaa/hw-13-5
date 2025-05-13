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


