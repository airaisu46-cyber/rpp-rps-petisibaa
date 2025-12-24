const semesterSelect = document.getElementById("semester");
const mkSelect = document.getElementById("mataKuliah");

function loadMK() {
  mkSelect.innerHTML = "";
  mataKuliah[semesterSelect.value].forEach(mk => {
    const opt = document.createElement("option");
    opt.value = mk;
    opt.text = mk;
    mkSelect.add(opt);
  });
}

semesterSelect.onchange = loadMK;
window.onload = loadMK;

function generate() {
  generateDocx(
    mkSelect.value,
    semesterSelect.value,
    document.getElementById("dosen").value
  );
}
