function generateDocx(mk, semester, dosen) {
  // pastikan library docx sudah ada
  if (typeof docx === "undefined") {
    alert("Library DOCX belum termuat. Refresh halaman.");
    return;
  }

  const {
    Document,
    Packer,
    Paragraph,
    HeadingLevel
  } = docx;

  let content = [];

  // Judul
  content.push(
    new Paragraph({
      text: "RPS & RPP",
      heading: HeadingLevel.HEADING_1,
      alignment: "center"
    })
  );

  content.push(new Paragraph(`Mata Kuliah: ${mk}`));
  content.push(new Paragraph(`Semester: ${semester.replace("semester", "")}`));
  content.push(new Paragraph(`Dosen: ${dosen || "-"}`));
  content.push(new Paragraph(""));

  // 16 pertemuan
  for (let i = 1; i <= 16; i++) {
    const level = soloLevel(i);

    content.push(
      new Paragraph({
        text: `Pertemuan ${i}`,
        heading: HeadingLevel.HEADING_2
      })
    );

    if (typeof level !== "number") {
      content.push(new Paragraph(`Evaluasi: ${level}`));
      continue;
    }

    content.push(new Paragraph(`Level SOLO: ${level}`));
    content.push(new Paragraph(`🇮🇩 Pembelajaran level SOLO ${level} pada ${mk}.`));
    content.push(new Paragraph(`🇸🇦 تحقيق مستوى SOLO ${level} في مقرر ${mk}.`));
    content.push(new Paragraph(`Asesmen: ${rubrikSOLO(level)}`));
    content.push(new Paragraph(""));
  }

  const doc = new Document({
    sections: [{ children: content }]
  });

  Packer.toBlob(doc).then(blob => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `RPS_RPP_${mk.replace(/\s+/g, "_")}.docx`;
    link.click();
  });
}
