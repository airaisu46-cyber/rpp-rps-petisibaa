function generateDocx(mk, semester, dosen) {

  let html = `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>RPS & RPP</title>
  <style>
    body { 
      font-family: "Times New Roman", serif; 
      margin: 40px; 
      line-height: 1.6;
    }
    h1, h2 {
      text-align: center;
    }
    h3 {
      margin-top: 30px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
    }
    table, th, td {
      border: 1px solid black;
    }
    th, td {
      padding: 8px;
      text-align: left;
      vertical-align: top;
    }
    hr {
      margin: 25px 0;
    }
  </style>
</head>
<body>

<h1>RPS & RPP</h1>

<table>
  <tr><th>Mata Kuliah</th><td>${mk}</td></tr>
  <tr><th>Semester</th><td>${semester.replace("semester","")}</td></tr>
  <tr><th>Dosen</th><td>${dosen || "-"}</td></tr>
</table>

<hr>

<h2>Rencana Pembelajaran Semester</h2>
`;

  for (let i = 1; i <= 16; i++) {
    const level = soloLevel(i);

    html += `<h3>Pertemuan ${i}</h3>`;

    if (typeof level !== "number") {
      html += `<p><strong>Evaluasi:</strong> ${level}</p>`;
      continue;
    }

    html += `
<table>
  <tr>
    <th width="25%">Level SOLO</th>
    <td>${level}</td>
  </tr>
  <tr>
    <th>Tujuan (Indonesia)</th>
    <td>Mahasiswa mampu mencapai level SOLO ${level} melalui pembelajaran ${mk}.</td>
  </tr>
  <tr>
    <th>Tujuan (Arab)</th>
    <td>أن يتمكن الطالب من تحقيق مستوى SOLO ${level} من خلال دراسة مقرر ${mk}.</td>
  </tr>
  <tr>
    <th>Materi Pokok</th>
    <td>
      Pembahasan konsep inti ${mk} sesuai capaian pembelajaran pada level SOLO ${level}.
    </td>
  </tr>
  <tr>
    <th>Metode Pembelajaran</th>
    <td>
      Ceramah, diskusi, tanya jawab, dan penugasan terstruktur.
    </td>
  </tr>
  <tr>
    <th>Penilaian</th>
    <td>${rubrikSOLO(level)}</td>
  </tr>
</table>
`;
  }

  html += `
<script>
  window.onload = function() {
    window.print();
  }
</script>

</body>
</html>
`;

  const win = window.open("", "_blank");
  win.document.write(html);
  win.document.close();
}
