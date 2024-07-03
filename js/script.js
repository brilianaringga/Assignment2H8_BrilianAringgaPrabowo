let nama = "";
let role = "";
let availability = "";
let age = "";
let lokasi = "";
let experience = "";
let email = "";

// fungsi untuk memunculkan & menyembunyikan form
// dipanggil dari button edit
function displayForm() {
  let isHidden = document
    .querySelector("#form_profile")
    .classList.contains("d-none");

  if (isHidden) {
    document.querySelector("#form_profile").classList.remove("d-none");
    document.querySelector("#form_profile").classList.add("d-block");
  } else {
    document.querySelector("#form_profile").classList.remove("d-block");
    document.querySelector("#form_profile").classList.add("d-none");
  }
}

// fungsi untuk set nilai form kedalam bagian profile
function setValueForm() {
  document.querySelector("#profile_name").innerHTML = nama;
  document.querySelector("#profile_position").innerHTML = role;
  document.querySelector("#profile_availability").innerHTML = availability;
  document.querySelector("#profile_age").innerHTML = age;
  document.querySelector("#profile_location").innerHTML = lokasi;
  document.querySelector("#profile_experience").innerHTML = experience;
  document.querySelector("#profile_email").innerHTML = email;
}

// fungsi untuk mengambil data dari form dan menampilkan ke bagian profile
// dipanggil dari button submit
function getFormData() {
  nama = document.querySelector("#nama").value;
  role = document.querySelector("#role").value;
  availability = document.querySelector("#availability").value;
  age = document.querySelector("#usia").value;
  lokasi = document.querySelector("#lokasi").value;
  experience = document.querySelector("#experience").value;
  email = document.querySelector("#email").value;

  setValueForm();
  displayForm();
  alert("Data anda tersimpan");
}
