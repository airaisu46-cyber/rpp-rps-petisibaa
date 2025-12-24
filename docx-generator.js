function generateDocx(mk, semester, dosen) {
  const {
    Document, Packer, Paragraph, TextRun,
    HeadingLevel, Table, TableRow, TableCell, WidthType
  } = window.docx;

  let content = [];

  content.push(new Paragraph({
    text: "RPS & RPP",
    heading: HeadingLevel.HEADING_1,
    alignment: "center"
  }));

  content.push(new Paragraph(`Mata Kuliah: ${mk}`));
  content.push(new Paragraph(`Semester: ${semester.replace("semester", "")}`));
  content.push(new Paragraph(`Dosen: ${dosen || "-"}`));

  content.push(new Paragraph(""));

  for (let i = 1; i <= 16; i++) {
    const level = soloLevel(i);

    content.push(new Paragraph({
      text: `Pertemuan ${i}`,
      heading: HeadingLevel.HEADING_2
    }));

    if (typeof level !== "number") {
      content.push(new Paragraph(`Evaluasi: ${level}`));
      continue;
    }

    const tujuan = {
      indo: `Mahasiswa mencapai level SOLO ${level} pada ${mk}.`,
      arab: `أن يحقق الطالب مستوى SOLO ${level} في مقرر ${mk}.`
    };

    content.push(new Paragraph(`Level SOLO: ${level}`));
    content.push(new Paragraph(`🇮🇩 ${tujuan.indo}`));
    content.push(new Paragraph(`🇸🇦 ${tujuan.arab}`));
    content.push(new Paragraph(`Asesmen: ${rubrikSOLO(level)}`));
  }

  const doc = new Document({
    sections: [{ children: content }]
  });

  Packer.toBlob(doc).then(blob => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `RPS_RPP_${mk.replace(/\s+/g, "_")}.docx`;
    a.click();
  });
}
