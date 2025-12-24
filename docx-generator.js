function generateDocx(mk, semester, dosen) {

  let html = `
  <html>
  <head>
    <meta charset="UTF-8">
    <title>RPS & RPP</title>
  </head>
  <body>
    <h1 style="text-align:center;">RPS & RPP</h1>

    <p><strong>Mata Kuliah:</strong> ${mk}</p>
    <p><strong>Semester:</strong> ${semester.replace("semester","")}</p>
    <p><strong>Dosen:</strong> ${dosen || "-"}</p>

    <h2>Rencana Pembelajaran</h2>
  `;

  for (let i = 1; i <= 16; i++) {
    const level = soloLevel(i);

    html += `<h3>Pertemuan ${i}</h3>`;

    if (typeof level !== "number") {
      html += `<p><strong>Evaluasi:</strong> ${level}</p>`;
      continue;
    }

    html += `
      <p><strong>Level SOLO:</strong> ${level}</p>
      <p><strong>Tujuan (ID):</strong> Mahasiswa mencapai level SOLO ${level} pada ${mk}.</p>
      <p><strong>Tujuan (AR):</strong> تحقيق مستوى SOLO ${level} في مقرر ${mk}.</p>
      <p><strong>Asesmen:</strong> ${rubrikSOLO(level)}</p>
    `;
  }

  html += `
  </body>
  </html>
  `;

  const blob = new Blob([html], {
    type: "application/msword"
  });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `RPS_RPP_${mk.replace(/\s+/g, "_")}.docx`;
  link.click();
}
