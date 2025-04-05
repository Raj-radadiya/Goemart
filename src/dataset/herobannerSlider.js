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
import { FaShoppingCart, FaAward } from 'react-icons/fa';
import { IoIosMan } from "react-icons/io";
import { GrUserWorker } from "react-icons/gr";
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
export const AllBrandsImage = [
    {
        brandImage: require('../assets/logo/brand1.png')
    },
    {
        brandImage: require('../assets/logo/brand2.png')
    },
    {
        brandImage: require('../assets/logo/brand3.png')
    },
    {
        brandImage: require('../assets/logo/brand4.png')
    },
    {
        brandImage: require('../assets/logo/brand5.png')
    },
    {
        brandImage: require('../assets/logo/brand6.png')
    },
    {
        brandImage: require('../assets/logo/brand6.png')
    },
    {
        brandImage: require('../assets/logo/brand6.png')
    },
    {
        brandImage: require('../assets/logo/brand6.png')
    },
    {
        brandImage: require('../assets/logo/brand6.png')
    },
    {
        brandImage: require('../assets/logo/brand6.png')
    },
    {
        brandImage: require('../assets/logo/brand6.png')
    },
    {
        brandImage: require('../assets/logo/brand6.png')
    },
    {
        brandImage: require('../assets/logo/brand6.png')
    },
    {
        brandImage: require('../assets/logo/brand6.png')
    },
    {
        brandImage: require('../assets/logo/brand6.png')
    },
]
export const countingData = [
    {
        icon: <FaShoppingCart />,
        count: 50,
        suffix: 'K+',
        title: 'Total Sales',
        color: 'var(--color-black)'
    },
    {
        icon: <IoIosMan />,
        count: 90,
        suffix: 'K+',
        title: 'Happy Clients',
        color: 'var(--color-black)'
    },
    {
        icon: <GrUserWorker />,
        count: 150,
        suffix: 'K+',
        title: 'Team Workers',
        color: 'var(--color-black)'
    },
    {
        icon: <FaAward />,
        count: 30,
        suffix: 'K+',
        title: 'Win Awards',
        color: 'var(--color-black)'
    }
];
export const TeamMemberDetails = [
    {
        image: require('../assets/image/teamMemberFirst.jpg'),
        name: 'Chad Smith',
        position: 'Senior Manager'
    },
    {
        image: require('../assets/image/teamMemberSecond.jpg'),
        name: 'Malissa Fie',
        position: 'SEO Expert'
    },
    {
        image: require('../assets/image/teamMemberFirst.jpg'),
        name: 'Chad Smith',
        position: 'Senior Manager'
    },
    {
        image: require('../assets/image/teamMemberSecond.jpg'),
        name: 'Malissa Fie',
        position: 'SEO Expert'
    },
]