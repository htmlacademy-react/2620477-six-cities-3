export const getRatingStarsWidth = (rating: number): string => {
  const starsCount = Math.floor(rating);
  return `${starsCount * 20}%`;
};
