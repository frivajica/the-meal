import "dotenv/config";

export default {
  expo: {
    name: "The Meal",
    slug: "the-meal",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      BASE_URL: process.env.BASE_URL,
      STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
      eas: {
        projectId: "not yet",
      },
    },
  },
};
