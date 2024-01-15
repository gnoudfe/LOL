const observeIntersection = (element, callback) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry);
        observer.unobserve(entry.target);
      }
    });
  });
  observer.observe(element);
};

export const handleAccess = (
  element,
  accessValue,
  accessDelayValue,
  timeoutValue
) => {
  observeIntersection(element, (entry) => {
    if (accessValue) {
      accessValue.value = true;
    }
    if (accessDelayValue) {
      setTimeout(() => {
        accessDelayValue.value = true;
      }, timeoutValue);
    }
  });
};
