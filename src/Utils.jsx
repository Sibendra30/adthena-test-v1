export const debounce = (logic, wait = 5000) => {
  let timeout = null;
  const cleanup = () => {
    if (timeout) clearTimeout(timeout);
  };

  return (...args) => {
    cleanup();
    timeout = setTimeout(() => {
      logic(...args);
    }, wait);
  };
};
