import axios from "axios";
import { GET_BALANCE_DATA_URL } from "../constants/endpoint";

export const getBalanceSheetData = async () => {
  try {
    const response = await axios.get(GET_BALANCE_DATA_URL);
    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
};
