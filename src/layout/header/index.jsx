import { useState, useRef, useEffect } from "react";
import "./header.scss";
import { LuMails } from "react-icons/lu";
import { RiCustomerService2Fill, RiFontSize } from "react-icons/ri";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { LuAlarmClockPlus } from "react-icons/lu";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";
import { CgDollar } from "react-icons/cg";
import { IoEarthSharp } from "react-icons/io5";
import logo from "../../assets/logo/web_logo.png";
import CountIncrese from "../../common/increseCount";
import CommonButton from "../../common/button";
import AddToCartBtn from "../../common/addtocartbtn";

export default function Header({ backgroundColor, color }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const dropdownRefs = useRef({});

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        openDropdown &&
        !dropdownRefs.current[openDropdown].contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Function to toggle dropdowns
  const toggleDropdown = (dropdownKey) => {
    setOpenDropdown((prev) => (prev === dropdownKey ? null : dropdownKey));
  };

  return (
    <div>
      <section>
        <div className="header">
          <div className="container">
            <div className="headerMain">
              <div className="leftHeader">
                <div className="contactDetails">
                  <div className="contact">
                    <div className="contactImg">
                      <LuMails />
                    </div>
                    <a href="#"> info@example.com</a>
                  </div>
                  <div className="contact">
                    <div className="contactImg">
                      <RiCustomerService2Fill />
                    </div>
                    <a href="#"> +2 123 654 7898</a>
                  </div>
                  <div className="contact">
                    <div className="contactImg">
                      <IoMdHelpCircleOutline />
                    </div>
                    <a href="#"> Need Help?</a>
                  </div>
                </div>
              </div>
              <div className="rightHeader">
                <div className="contactDetails">
                  <div className="contact">
                    <div className="contactImg">
                      <LuAlarmClockPlus />
                    </div>
                    <a href="#">Daily Deal</a>
                  </div>
                  <div className="contact">
                    <div className="contactImg">
                      <MdOutlineAccountCircle />
                    </div>
                    <a href="#">Account</a>
                  </div>
                  <div className="contact">
                    <div className="contactImg">
                      <AiOutlineLogin />
                    </div>
                    <a href="#">Login</a>
                  </div>
                  {/* Dropdown Added */}
                  <div className="contact" ref={(el) => (dropdownRefs.current["currency"] = el)} >
                    <div className="dropdown-toggle" onClick={() => toggleDropdown("currency")}>
                      <CgDollar className="dollar" /><span>USD</span>
                    </div>
                    {openDropdown === "currency" && (
                      <div className="dropdown-content">
                        <a href="#link1">USD</a>
                        <a href="#link2">EUR</a>
                        <a href="#link3">AUD</a>
                        <a href="#link4">CUD</a>
                      </div>
                    )}
                  </div>
                  <div
                    className="contact"
                    ref={(el) => (dropdownRefs.current["language"] = el)}
                  >
                    <div
                      className="dropdown-toggle"
                      onClick={() => toggleDropdown("language")}
                    >
                      <IoEarthSharp className="dollar" /><span> EN</span>
                    </div>
                    {openDropdown === "language" && (
                      <div className="dropdown-content">
                        <a href="#link1">EN</a>
                        <a href="#link2">FR</a>
                        <a href="#link3">DE</a>
                        <a href="#link4">RU</a>
                      </div>
                    )}
                  </div>
                  <div className="contact">
                    <span>Follow Us:</span>
                    <a href="#" className="social-icon">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="mainHeader">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="search">
              <div
                className="category-dropdown"
                ref={(el) => (dropdownRefs.current["category"] = el)}
                onClick={() => toggleDropdown("category")}
              >
                <span>All Category</span>
                <i
                  className={`fa-solid fa-chevron-down ${openDropdown === "category" ? "rotate" : ""
                    }`}
                ></i>
                {openDropdown === "category" && (
                  <ul className="dropdown-list show">
                    {[
                      "All Category",
                      "Today's Hot Deals",
                      "Fashion & Accessories",
                      "Electronics",
                      "Grocery & Market",
                      "Music",
                      "Home & Furniture",
                      "Toy & Video Games",
                      "Gifts",
                      "Babies & Moms",
                      "Sports & Outdoor",
                      "Health & Beauty",
                    ].map((item, index) => (
                      <li
                        key={index}
                        onClick={() => handleCategoryClick(item)}
                        className={selectedCategory === item ? "bold" : ""}
                      >
                        {" "}
                        {item}{" "}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <input type="text" placeholder="Search Here..." />
              <i className="fa-solid fa-magnifying-glass search-icon"></i>
            </div>
            <div className="profile">
              <a className="icon">
                <i className="fa-solid fa-circle-user"></i>
              </a>
              <a className="icon">
                <i className="fa-solid fa-arrows-rotate"></i>
                <CountIncrese />
              </a>
              <a className="icon">
                <i className="fa-regular fa-heart"></i>
                <CountIncrese />
              </a>
              <a className="icon">
                <AddToCartBtn backgroundColor={'transparent'} className={'cart-icon'} className2={'cartIconText'} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="navLinkMain">
            <div className="allCategoriesSec">
              <i className="fa-solid fa-equals"></i>
              <span>All Categories</span>
            </div>
            <div className="navLinksBtn">
              <div className="navLinkAll">
                <div className="navLink">
                  <a href="#" className="navLinkText">
                    Home
                  </a>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div className="navLink">
                  <a href="#" className="navLinkText">
                    About
                  </a>
                </div>
                <div className="navLink">
                  <a href="#" className="navLinkText">
                    pages
                  </a>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div className="navLink">
                  <a href="#" className="navLinkText">
                    User
                  </a>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div className="navLink">
                  <a href="#" className="navLinkText">
                    Vender
                  </a>
                  <i classname="fa-solid fa-angle-down"></i>
                </div>
                <div className="navLink">
                  <a href="#" className="navLinkText">
                    Menu
                  </a>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div className="navLink">
                  <a href="#" className="navLinkText">
                    Shop
                  </a>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div className="navLink">
                  <a href="#" className="navLinkText">
                    Shop
                  </a>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div className="navLink">
                  <a href="#" className="navLinkText">
                    Blog
                  </a>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div className="navLink">
                  <a href="#" className="navLinkText">
                    contact
                  </a>
                </div>
              </div>
              <div className="sellerBtn">
                <CommonButton
                  buttonText="Become Seller"
                  padding={"15px"}
                  fontWeight={"500"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
