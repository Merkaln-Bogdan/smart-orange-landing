import './css/styles.scss';

let current_page = 1;
let records_per_page = 2;
const btn_next = document.getElementById('right');
const btn_prev = document.getElementById('left');
const listing_table = document.getElementById('home_project_pagination');
const input_number = document.getElementById('input_number');
const input_email = document.getElementById('input_email');
const email_asterisk = document.getElementById('asterisk_email');
const number_asterisk = document.getElementById('asterisk_number');
const textarea_asterisk = document.getElementById('asterisk_textarea');
const textarea_field = document.getElementById('field_textarea');
const check_mark = document.getElementById('check_mark');

input_number.addEventListener('input', hiddenAsterisk);
input_email.addEventListener('input', hiddenAsterisk);
textarea_field.addEventListener('input', hiddenAsterisk);

// Remove all signs from inputs

function hiddenAsterisk(e) {
  console.log(e.target.id);

  switch (e.target.id) {
    case 'input_number':
      number_asterisk.style.visibility = 'hidden';
      break;
    case 'input_email':
      email_asterisk.style.visibility = 'hidden';
      break;
    case 'field_textarea':
      textarea_asterisk.style.visibility = 'hidden';
      check_mark.style.visibility = 'hidden';
      break;
  }

  if (e.target.value == '') {
    number_asterisk.style.visibility = 'inherit';
    email_asterisk.style.visibility = 'inherit';
    textarea_asterisk.style.visibility = 'inherit';
    check_mark.style.visibility = 'inherit';
  }
}

// Simple pagination
const pages = [
  { page: '01' },
  { page: '02' },
  { page: '03' },
  { page: '04' },
  { page: '05' },
  { page: '06' },
  { page: '07' },
  { page: '08' },
];

function prevPage() {
  if (current_page > 1) {
    current_page--;
    changePage(current_page);
  }
}

function nextPage() {
  if (current_page < numPages()) {
    current_page++;
    changePage(current_page);
  }
}

function changePage(page) {
  // Validate page
  if (page < 1) page = 1;
  if (page > numPages()) page = numPages();

  listing_table.innerHTML = '';

  for (
    var i = (page - 1) * records_per_page;
    i < page * records_per_page;
    i++
  ) {
    listing_table.innerHTML += `<div class="home_project_pagination_page">${pages[i].page}</div>`;
  }
}

function numPages() {
  return Math.ceil(pages.length / records_per_page);
}

window.onload = function () {
  changePage(1);
};

btn_prev.addEventListener('click', prevPage);
btn_next.addEventListener('click', nextPage);
