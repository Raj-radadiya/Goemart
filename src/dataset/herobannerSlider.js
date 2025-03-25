import bannerImg from '../assets/image/herobannerWatch.png';
import backgroundImg from '../assets/image/mini-banner-1.png';
import backgroundImg2 from '../assets/image/mini-banner-2.jpg'
import backgroundImg3 from '../assets/image/mini-banner-3.jpg'
import CommonButton from '../common/button';
import categoryIcon from '../assets/icon/category.svg'
import trandingIcon from '../assets/icon/tranding.svg';
import fireIcon from '../assets/icon/fire.svg';
import brandIcon from '../assets/icon/brand.svg';
import fashion from "../assets/icon/dress.svg";
import electronics from "../assets/icon/Electronics.svg";
import Grocery from "../assets/icon/grocery.svg";
import Music from "../assets/icon/music.svg";
import Furniture from "../assets/icon/furniture.svg";
import Toy from "../assets/icon/toy.svg";
import gift from "../assets/icon/gifts.svg";
import beauty from "../assets/icon/mother.svg";
import health from "../assets/icon/beauty.svg";
import sports from "../assets/icon/sports.svg";
import Garden from "../assets/icon/garden.svg";
import Automotive from "../assets/icon/automotive.svg";
import womenBackgroundImg from '../assets/image/womensaleBanner.jpg';
import headphoneBackgroundImg from '../assets/image/headphoneBanner.jpg';
export const HerobannerText = [
    {
        discount: "Up To 50% Off",
        productName: "For Your First Goemart Shopping",
        para: "There are many variations of passages orem psum available the majority have suffered alteration in some form by injected humour.",
        btn: <CommonButton padding={"10px"} fontWeight={"500"} />,
        bannerImg: bannerImg,
    },
    {
        discount: "Up To 50% Off",
        productName: "For Your First Goemart Shopping",
        para: "There are many variations of passages orem psum available the majority have suffered alteration in some form by injected humour.",
        btn: <CommonButton padding={"10px"} fontWeight={"500"} />,
        bannerImg: bannerImg,
    },
];
export const CollectionsCardDetails = [
    {
        backgroundImg: backgroundImg,
        type: 'Hot Collections',
        title: 'Best Travel Sale Collections',
        link: 'Discover Now'
    },
    {
        backgroundImg: backgroundImg2,
        type: 'Apple Collections',
        title: 'Apple Smart Watch Collectons',
        link: 'Shop Now'
    },
    {
        backgroundImg: backgroundImg3,
        type: 'Shoe Collections',
        title: 'Summer Season Shoe Up To 50% Off',
        link: 'Discover Now'
    },
];
export const SectionTitle = [
    {
        geticon: categoryIcon,
        title: 'Top Category'
    },
    {
        geticon: trandingIcon,
        title: 'Trending Items'
    },
    {
        geticon: fireIcon,
        title: 'Hot Items'
    },
    {
        geticon: brandIcon,
        title: 'Popular Brands'
    },
]
export const category = [
    {
        categoryImg: fashion,
        categoryTitle: 'Accessories',
        totalCategory: '30 Items'
    },
    {
        categoryImg: electronics,
        categoryTitle: 'Electronics',
        totalCategory: '25 Items'
    },
    {
        categoryImg: Grocery,
        categoryTitle: 'Grocery & Market',
        totalCategory: '15 Items'
    },
    {
        categoryImg: Music,
        categoryTitle: 'Music & Audio',
        totalCategory: '05 Items'
    },
    {
        categoryImg: Furniture,
        categoryTitle: 'Furniture',
        totalCategory: '30 Items'
    },
    {
        categoryImg: Toy,
        categoryTitle: 'Toy & Video Games',
        totalCategory: '12 Items'
    },
    {
        categoryImg: gift,
        categoryTitle: 'Gifts',
        totalCategory: '08 Items'
    },
    {
        categoryImg: beauty,
        categoryTitle: 'Babies & Moms',
        totalCategory: '14 Items'
    },
    {
        categoryImg: health,
        categoryTitle: 'Health & Beauty',
        totalCategory: '19 Items'
    },
    {
        categoryImg: sports,
        categoryTitle: 'Sports & Outdoor',
        totalCategory: '24 Items'
    },
    {
        categoryImg: Garden,
        categoryTitle: 'Home & Garden',
        totalCategory: '09 Items'
    },
    {
        categoryImg: Automotive,
        categoryTitle: 'Automotive',
        totalCategory: '16 Items'
    },
]
export const Sale = [
    {
        backgroundImg: womenBackgroundImg,
        saleTitle: 'Top Collections',
        saleDiscount: "Women's Fashion up to ",
        discountPercentage: "40% Off",
        saleBtn: <CommonButton padding={"8px 20px"} borderRadius={"20px"} />
    },
    {
        backgroundImg: headphoneBackgroundImg,
        saleTitle: 'Headphone Sale',
        saleDiscount: "Headphone Sale up to ",
        discountPercentage: "50% Off",
        saleBtn: <CommonButton padding={"8px 20px"} borderRadius={"20px"} />
    }
]

export const trandingProduct = [
  {
    id: 1,
    productImg: 'https://dummyimage.com/600x400/000/fff',
    productName: 'Smartphone X1',
    productPrice: '$599',
    description: 'Latest smartphone with advanced features and premium camera',
    rating: 4.5,
    stock: 15,
    brand: 'TechX',
    category: 'Electronics'
  },
  {
    id: 2,
    productImg: 'https://dummyimage.com/600x400/000/fff',
    productName: 'Wireless Headphones',
    productPrice: '$129',
    description: 'Noise cancelling wireless headphones with premium sound quality',
    rating: 4.7,
    stock: 20,
    brand: 'AudioPro',
    category: 'Electronics'
  },
  {
    id: 3,
    productImg: 'https://dummyimage.com/600x400/000/fff',
    productName: 'Smart Watch Pro',
    productPrice: '$249',
    description: 'Feature-rich smartwatch with health monitoring and notifications',
    rating: 4.2,
    stock: 10,
    brand: 'TechFit',
    category: 'Wearables'
  },
  {
    id: 4,
    productImg: 'https://dummyimage.com/600x400/000/fff',
    productName: 'Laptop Ultra',
    productPrice: '$999',
    description: 'Powerful and lightweight laptop for professionals',
    rating: 4.8,
    stock: 5,
    brand: 'TechX',
    category: 'Electronics'
  },
  {
    id: 5,
    productImg: 'https://dummyimage.com/600x400/000/fff',
    productName: 'Bluetooth Speaker',
    productPrice: '$79',
    description: 'Portable speaker with excellent bass and long battery life',
    rating: 4.0,
    stock: 25,
    brand: 'SoundMaster',
    category: 'Audio'
  },
  {
    id: 6,
    productImg: 'https://dummyimage.com/600x400/000/fff',
    productName: 'Gaming Console',
    productPrice: '$449',
    description: 'Next-generation gaming console with stunning graphics',
    rating: 4.9,
    stock: 3,
    brand: 'GameTech',
    category: 'Gaming'
  }
];
