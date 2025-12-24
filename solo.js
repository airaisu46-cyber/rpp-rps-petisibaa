function soloLevel(pertemuan) {
  if (pertemuan === 1) return 1;
  if (pertemuan <= 3) return 2;
  if (pertemuan <= 5) return 3;
  if (pertemuan === 6) return 4;
  if (pertemuan === 7) return "UTS";
  if (pertemuan <= 9) return 3;
  if (pertemuan <= 11) return 4;
  if (pertemuan <= 14) return 5;
  if (pertemuan === 15) return "UAS";
  return "Refleksi";
}
