// Logo Images
export const logos = {
  white: "/orora.png",
  black: "/ororablack.png",
  string: "/logoString.png",
  orora1: "/orora1.png",
  orora2: "/orora2.png",
} as const;

// Project Images
export const projects = {
  workspace: "/workspace.png",
  ecommerce:
    "https://raw.githubusercontent.com/MithunCyDev/Image-To-Text/main/src/shoppingapp.png",
  fashionStore:
    "https://raw.githubusercontent.com/MithunCyDev/Image-To-Text/main/src/fashionstore.png",
  shoeStore: "/shoestore.png",
  healthWebsite:
    "https://raw.githubusercontent.com/MithunCyDev/Image-To-Text/main/src/healthapp.jpg",
  foodWebsite:
    "https://raw.githubusercontent.com/MithunCyDev/Image-To-Text/main/src/foodapp.jpg",
} as const;

export const leader = {
  ceo: "https://raw.githubusercontent.com/MithunCyDev/Image-To-Text/main/src/ceo.png",
};

// App Icons
export const appIcons = {
  mney: {
    light: "/mney.png",
    dark: "/mneydark.png",
  },
  livingGreen: {
    light: "/livinggreen.png",
    dark: "/livinggreendark.png",
  },
  gorila: {
    light: "/gorila.png",
    dark: "/goriladark.png",
  },
  eveyIcon: {
    light: "/eveyIcon.png",
    dark: "/eveyIcondark.png",
  },
  unibarg: {
    light: "/unibarg.png",
    dark: "/unibargdark.png",
  },
  ta: {
    light: "/ta.png",
    dark: "/tadark.png",
  },
  ruktan: {
    light: "/ruktan.png",
    dark: "/ruktandark.png",
  },
  payok: {
    light: "/payok.png",
    dark: "/payokdark.png",
  },
} as const;

// String Images
export const strings = {
  string1: "/string.png",
  string2: "/sting2.png",
  string3: "/string3.png",
} as const;

// Placeholder Images
export const placeholders = {
  default: "/placeholder.jpg",
  user: "/placeholder-user.jpg",
  logo: "/placeholder-logo.png",
  svg: "/placeholder.svg",
} as const;

// Team Images
export const team = {
  mithun: "/mithun.jpg",
} as const;

// Type for all images
export type ImageType = {
  logos: typeof logos;
  projects: typeof projects;
  appIcons: typeof appIcons;
  strings: typeof strings;
  placeholders: typeof placeholders;
  team: typeof team;
};
