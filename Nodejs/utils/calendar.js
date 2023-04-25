function getFileName(date = new Date()) {
  return `${date.getDate()}-${date.getMonth()}-${date.getYear()}-${date.getHours()}-${date.getMinutes()}.txt`;
}

module.exports = {
  getFileName,
};
