const formatDate = (date) => {
  const now = new Date();
  const ago = new Date(date);

  const yearGap = ago.getFullYear() - now.getFullYear();
  const monthGap = ago.getMonth() - now.getMonth();
  const dateGap = ago.getDate() - now.getDate();

  if (yearGap === 0) {
    if (monthGap === 0) {
      if (dateGap === 0) {
        return '오늘';
      }
      return dateGap;
    }
    return monthGap;
  }
  return ago;
};
export default formatDate;
