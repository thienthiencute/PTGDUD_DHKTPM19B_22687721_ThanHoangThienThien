const tinhTienBoa = (giaTriHoaDon) => {
  if (giaTriHoaDon <= 0) {
    console.log('Giá trị hóa đơn phải lớn hơn 0');
    return 0;
  }

  const tiLeTip =
    giaTriHoaDon >= 50 && giaTriHoaDon <= 300 ? 0.15 : 0.2;

  return giaTriHoaDon * tiLeTip;
};

const tongTienChiTieu = (giaTriHoaDon) => {
  const tip = tinhTienBoa(giaTriHoaDon);
  const sum = giaTriHoaDon + tip;

  return `Hóa đơn là ${giaTriHoaDon}, tiền boa là ${tip}, và tổng cộng là ${sum}`;
};

// Test data
console.log(tongTienChiTieu(275));
console.log(tongTienChiTieu(40));
console.log(tongTienChiTieu(430));
