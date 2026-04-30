import strawberry from "@/assets/products/strawberry.jpg";
import mango from "@/assets/products/mango.jpg";
import pomegranate from "@/assets/products/pomegranate.jpg";
import apricot from "@/assets/products/apricot.jpg";
import fig from "@/assets/products/fig.jpg";
import guava from "@/assets/products/guava.jpg";
import kiwi from "@/assets/products/kiwi.jpg";
import greenBeans from "@/assets/products/green-beans.jpg";
import peas from "@/assets/products/peas.jpg";
import broadBeans from "@/assets/products/فول.jpeg";
import mixedVegetables from "@/assets/products/mixed-vegetables.jpg";
import broccoli from "@/assets/products/broccoli.jpg";
import spinach from "@/assets/products/spinach.jpg";
import okra from "@/assets/products/بامية.jpeg";
import molokhia from "@/assets/products/molokhia.jpg";
import artichoke from "@/assets/products/artichoke.jpg";
import sweetCorn from "@/assets/products/ذره.jpeg";
import taro from "@/assets/products/taro.png";
import vineLeaves from "@/assets/products/vine-leaves.png";
import cauliflower from "@/assets/products/cauliflower.png";
import peasCarrots from "@/assets/products/peas-carrots.png";
import olives from "@/assets/products/olives.png";
import carrots from "@/assets/products/carrots.png";

export interface Product {
  id: string;
  name: string;
  image: any;
  category: "fruits" | "vegetables";
  description: string;
  packaging: string[];
  sizes: string[];
  season: string;
  benefits: string;
}

const defaultPackaging = ["أكياس 400 جرام", "أكياس 2.5 كجم", "كراتين 10 كجم (B2B)"];

export const fruits: Product[] = [
  {
    id: "strawberry",
    name: "products.fruits_items.strawberry.name",
    image: strawberry,
    category: "fruits",
    description: "products.fruits_items.strawberry.description",
    packaging: [],
    sizes: [],
    season: "products.fruits_items.strawberry.season",
    benefits: "products.fruits_items.strawberry.benefits"
  },
  {
    id: "mango",
    name: "products.fruits_items.mango.name",
    image: mango,
    category: "fruits",
    description: "products.fruits_items.mango.description",
    packaging: [],
    sizes:[],
    season:"products.fruits_items.mango.season",
    benefits:"products.fruits_items.mango.benefits"
  },
  {
    id: "pomegranate",
    name: "products.fruits_items.pomegranate.name",
    image: pomegranate,
    category: "fruits",
    description: "products.fruits_items.pomegranate.description",
    packaging: [],
    sizes:[],
    season: "products.fruits_items.pomegranate.season",
    benefits:"products.fruits_items.pomegranate.benefits"
  },
  {
    id: "apricot",
    name: "products.fruits_items.apricot.name",
    image: apricot,
    category: "fruits",
    description:  "products.fruits_items.apricot.description",
    packaging: [],
    sizes:[],
    season:  "products.fruits_items.apricot.season",
    benefits: "products.fruits_items.apricot.benefits"
  },
  {
    id: "fig",
    name: "products.fruits_items.fig.name",
    image: fig,
    category: "fruits",
    description: "products.fruits_items.fig.description",
    packaging: [],
    sizes: [],
    season: "products.fruits_items.fig.season",
    benefits: "products.fruits_items.fig.benefits",
  },
  {
    id: "guava",
    name: "products.fruits_items.guava.name",
    image: guava,
    category: "fruits",
    description: "products.fruits_items.guava.description",
    packaging: [],
    sizes: [],
    season: "products.fruits_items.guava.season",
    benefits:"products.fruits_items.guava.benefits",
  },
  {
    id: "kiwi",
    name: "products.fruits_items.kiwi.name",
    image: kiwi,
    category: "fruits",
    description: "products.fruits_items.kiwi.description",
    packaging: [],
    sizes: [],
    season: "products.fruits_items.kiwi.season",
    benefits: "products.fruits_items.kiwi.benefits",
  },
];

export const vegetables: Product[] = [
  {
    id: "green-beans",
    name: "products.vegetables_items.green-beans.name",
    image: greenBeans,
    category: "vegetables",
    description: "products.vegetables_items.green-beans.description",
    packaging: [], 
    sizes: [],
    season: "products.vegetables_items.green-beans.season",
    benefits: "products.vegetables_items.green-beans.benefits"
  },
  {
    id: "peas",
    name: "products.vegetables_items.peas.name",
    image: peas,
    category: "vegetables",
    description: "products.vegetables_items.peas.description",
    packaging: [],
    sizes: [],
    season: "products.vegetables_items.peas.season",
    benefits: "products.vegetables_items.peas.benefits"
  },
  {
    id: "broad-beans",
    name: "products.vegetables_items.broad-beans.name",
    image: broadBeans,
    category: "vegetables",
    description: "products.vegetables_items.broad-beans.description",
    packaging: [],
    sizes: [],
    season: "products.vegetables_items.broad-beans.season",
    benefits: "products.vegetables_items.broad-beans.benefits"
  },
  {
    id: "mixed-vegetables",
    name: "products.vegetables_items.mixed-vegetables.name",
    image: mixedVegetables,
    category: "vegetables",
    description: "products.vegetables_items.mixed-vegetables.description",
    packaging: [],
    sizes: [],
    season: "products.vegetables_items.mixed-vegetables.season",
    benefits: "products.vegetables_items.mixed-vegetables.benefits"
  },
  {
    id: "broccoli",
    name: "products.vegetables_items.broccoli.name",
    image: broccoli,
    category: "vegetables",
    description: "products.vegetables_items.broccoli.description",
    packaging: [],
    sizes: [],
    season: "products.vegetables_items.broccoli.season",
    benefits: "products.vegetables_items.broccoli.benefits"
  },
  {
    id: "spinach",
    name: "products.vegetables_items.spinach.name",
    image: spinach,
    category: "vegetables",
    description: "products.vegetables_items.spinach.description",
    packaging: [],
    sizes: [],
    season: "products.vegetables_items.spinach.season",
    benefits: "products.vegetables_items.spinach.benefits"
  },
  {
    id: "okra",
    name: "products.vegetables_items.okra.name",
    image: okra,
    category: "vegetables",
    description: "products.vegetables_items.okra.description",
    packaging: [],
    sizes: [],
    season: "products.vegetables_items.okra.season",
    benefits: "products.vegetables_items.okra.benefits"
  },
  {
    id: "molokhia",
    name: "products.vegetables_items.molokhia.name",
    image: molokhia,
    category: "vegetables",
    description: "products.vegetables_items.molokhia.description",
    packaging: [],
    sizes: [],
    season: "products.vegetables_items.molokhia.season",
    benefits: "products.vegetables_items.molokhia.benefits"
  },
  {
    id: "artichoke",
    name: "products.vegetables_items.artichoke.name",
    image: artichoke,
    category: "vegetables",
    description: "products.vegetables_items.artichoke.description",
    packaging: [],
    sizes: [],
    season: "products.vegetables_items.artichoke.season",
    benefits: "products.vegetables_items.artichoke.benefits"
  },
  {
    id: "sweet-corn",
    name: "products.vegetables_items.sweet-corn.name",
    image: sweetCorn,
    category: "vegetables",
    description: "products.vegetables_items.sweet-corn.description",
    packaging: [],
    sizes: [],
    season: "products.vegetables_items.sweet-corn.season",
    benefits: "products.vegetables_items.sweet-corn.benefits"
  },
  {
    id: "peas-carrots",
    name: "products.vegetables_items.peas-carrots.name",
    image: peasCarrots,
    category: "vegetables",
    description: "products.vegetables_items.peas-carrots.description",
    packaging: [],
    sizes: [],
    season: "products.vegetables_items.peas-carrots.season",
    benefits: "products.vegetables_items.peas-carrots.benefits"
  },
  {
    id: "cauliflower",
    name: "products.vegetables_items.cauliflower.name",
    image: cauliflower,
    category: "vegetables",
    description: "products.vegetables_items.cauliflower.description",
    packaging: [],
    sizes: [],
    season: "products.vegetables_items.cauliflower.season",
    benefits: "products.vegetables_items.cauliflower.benefits"
  },
  {
    id: "vine-leaves",
    name: "products.vegetables_items.vine-leaves.name",
    image: vineLeaves,
    category: "vegetables",
    description: "products.vegetables_items.vine-leaves.description",
    packaging: [],
    sizes: [],
    season: "products.vegetables_items.vine-leaves.season",
    benefits: "products.vegetables_items.vine-leaves.benefits"
  },
  {
    id: "taro",
    name: "products.vegetables_items.taro.name",
    image: taro,
    category: "vegetables",
    description: "products.vegetables_items.taro.description",
    packaging: [],
    sizes: [],
    season: "products.vegetables_items.taro.season",
    benefits: "products.vegetables_items.taro.benefits"
  },
  {
    id: "olives",
    name: "products.vegetables_items.olives.name",
    image: olives,
    category: "vegetables",
    description: "products.vegetables_items.olives.description",
    packaging: [],
    sizes: [],
    season: "products.vegetables_items.olives.season",
    benefits: "products.vegetables_items.olives.benefits"
  },
  {
    id: "carrots",
    name: "products.vegetables_items.carrots.name",
    image: carrots,
    category: "vegetables",
    description: "products.vegetables_items.carrots.description",
    packaging: [],
    sizes: [],
    season: "products.vegetables_items.carrots.season",
    benefits: "products.vegetables_items.carrots.benefits"
  }
];
export const allProducts = [...fruits, ...vegetables];
