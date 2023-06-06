import axiosInstance from "./common";

const getCategories = async () => await axiosInstance.get(`/categories`);

const getAllMeals = async () => await axiosInstance.get(`/meals`);

const getMealsByCategory = async (category: string) =>
  await axiosInstance.get(`/meals?category=${category}`);

export const MealService = {
  getCategories,
  getMealsByCategory,
  getAllMeals,
};
