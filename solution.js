const solution = (phone_number) => {
  const unMaskingNumber = [...phone_number]
    .slice(phone_number.length - 4)
    .join("");

  return unMaskingNumber.padStart(phone_number.length, "*");
};
