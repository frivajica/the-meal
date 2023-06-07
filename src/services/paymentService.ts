import axiosInstance from "./common";

const getSheetParams = async (ammount: number) => await axiosInstance.post(`/payment`, { ammount });

export const PaymentService = {
  getSheetParams,
};
