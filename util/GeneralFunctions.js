export const screenIconSizer = (incomingSize) => {
  if (incomingSize.small) {
    return 80;
  } else if (incomingSize.medium) {
    return 120;
  } else {
    return 160;
  }
};

export const screenTextSizer = (incomingSize) => {
  if (incomingSize.small) {
    return 14;
  } else if (incomingSize.medium) {
    return 20;
  } else {
    return 24;
  }
};
