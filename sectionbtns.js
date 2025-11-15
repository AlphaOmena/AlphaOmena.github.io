document.addEventListener('DOMContentLoaded', function() {
  const sec1 = document.getElementById('sec1');
  const sec2 = document.getElementById('sec2');
  const sec3 = document.getElementById('sec3');
  const sec4 = document.getElementById('sec4');
  const sec5 = document.getElementById('sec5');
  const sec6 = document.getElementById('sec6');
  const sec7 = document.getElementById('sec7');
  const sec8 = document.getElementById('sec8');
  const sec9 = document.getElementById('sec9');
  const sec10 = document.getElementById('sec10');
  const sec11 = document.getElementById('sec11');
  const sec12= document.getElementById('sec12');

  sec1.addEventListener('click', function() {
    document.getElementById('qr-reader').scrollIntoView({
      behavior: 'smooth'
    });
  });

  sec2.addEventListener('click', function() {
    document.getElementById('datetime-display').scrollIntoView({
      behavior: 'smooth'
    });
  });
    
    sec3.addEventListener('click', function() {
    document.getElementById('scanned-list').scrollIntoView({
      behavior: 'smooth'
    });
  });

  sec4.addEventListener('click', function() {
    document.getElementById('total-sum').scrollIntoView({
      behavior: 'smooth'
    });
  });
    
    sec5.addEventListener('click', function() {
    document.getElementById('stockitem').scrollIntoView({
      behavior: 'smooth'
    });
  });

  sec6.addEventListener('click', function() {
    document.getElementById('sellitem').scrollIntoView({
      behavior: 'smooth'
    });
  });
    
    sec7.addEventListener('click', function() {
    document.getElementById('soldItemsTable').scrollIntoView({
      behavior: 'smooth'
    });
  });

  sec8.addEventListener('click', function() {
    document.getElementById('3in1').scrollIntoView({
      behavior: 'smooth'
    });
  });
    
    sec9.addEventListener('click', function() {
    document.getElementById('3in1').scrollIntoView({
      behavior: 'smooth'
    });
  });

  sec10.addEventListener('click', function() {
    document.getElementById('3in1').scrollIntoView({
      behavior: 'smooth'
    });
  });
    
    sec11.addEventListener('click', function() {
    document.getElementById('expense-deduct').scrollIntoView({
      behavior: 'smooth'
    });
  });

  sec12.addEventListener('click', function() {
    document.getElementById('expense-deduct').scrollIntoView({
      behavior: 'smooth'
    });
  });
});

