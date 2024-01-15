const thoiGianHienTai = new Date();

// Tạo một thời gian từ chuỗi ngày cụ thể (trong trường hợp này, là 2023-12-05T19:00:00.000Z)
const thoiGianDaCho = new Date("2023-12-05T19:00:00.000Z");

// Tính thời gian chênh lệch
const chenhLech = thoiGianHienTai.getTime() - thoiGianDaCho.getTime();

// Chuyển đổi thời gian chênh lệch thành số ngày
const soNgay = Math.floor(chenhLech / (1000 * 3600 * 24));

export const handleTime = (date) => {
  const now = new Date();
  const newDate = new Date(date);
  const changeTime = now.getTime() - newDate.getTime();
  const time = Math.floor(changeTime / (1000 * 3600 * 24));
  return `${time} ngày trước`;
};
