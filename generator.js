// ambil elemen dari HTML
const semesterSelect = document.getElementById("semester");
const mkSelect = document.getElementById("mataKuliah");
const btnGenerate = document.getElementById("btnGenerate");

// isi dropdown mata kuliah sesuai semester
function loadMK() {
  mkSelect.innerHTML = "";
  mataKuliah[semesterSelect.value].forEach(mk => {
    const option = document.createElement("option");
    option.value = mk;
    option.textContent = mk;
    mkSelect.appendChild(option);
  });
}

// jalankan saat halaman dibuka & semester diganti
window.addEventListener("load", loadMK);
semesterSelect.addEventListener("change", loadMK);

// saat tombol diklik → buat Word
btnGenerate.addEventListener("click", function () {
  generateDocx(
    mkSelect.value,
    semesterSelect.value,
    document.getElementById("dosen").value
  );
});
