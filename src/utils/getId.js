export const getId = () => {
  const random = Math.random().toString(36).substring(2);
  const date = Date.now();

  return random + date;
};
