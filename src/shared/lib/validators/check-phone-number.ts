export const checkPhoneNumber = () => {
  return {
    name: "phoneNumber",
    validator: (value: string) =>
      /^\+?[0-9]{1,4}[-.\\s]?[0-9]{1,15}$/.test(value),
  };
};
