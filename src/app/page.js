// pages/index.js (or app/page.js)
"use client";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// Correct Heroicons v2 imports
import {
  Bars3Icon,
  XMarkIcon,
  CheckIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ChatBubbleLeftIcon,
  WrenchIcon,
  PrinterIcon,
  ChartBarIcon,
  StarIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentMobileSlide, setCurrentMobileSlide] = useState(0);
  const [currentWebSlide, setCurrentWebSlide] = useState(0);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  // Direct mobile app screenshots (1-11)
  const mobileScreenshots = [
    { id: 1, src: "/screenshots/Mob1.jpeg", title: "Mobile Dashboard" },
    { id: 2, src: "/screenshots/Mob2.jpeg", title: "User Management" },
    { id: 3, src: "/screenshots/Mob3.jpeg", title: "Billing System" },
    { id: 4, src: "/screenshots/Mob4.jpeg", title: "Collection Screen" },
    { id: 5, src: "/screenshots/Mob5.jpeg", title: "Complaint Management" },
    { id: 6, src: "/screenshots/Mob6.jpeg", title: "Reports & Analytics" },
    { id: 7, src: "/screenshots/Mob7.jpeg", title: "Inventory System" },
    { id: 8, src: "/screenshots/Mob8.jpeg", title: "Dealer Portal" },
    { id: 9, src: "/screenshots/Mob9.jpeg", title: "Real-time Printing" },
    { id: 10, src: "/screenshots/Mob10.jpeg", title: "SMS Management" },
    { id: 11, src: "/screenshots/Mob11.jpeg", title: "Settings & Profile" },
  ];

  // Direct web portal screenshots (12-18)
  const webScreenshots = [
    { id: 12, src: "/screenshots/Web12.jpeg", title: "Web Dashboard" },
    { id: 13, src: "/screenshots/Web13.jpeg", title: "Admin Panel" },
    { id: 14, src: "/screenshots/Web14.jpeg", title: "Billing Portal" },
    { id: 15, src: "/screenshots/Web15.jpeg", title: "Customer Management" },
    { id: 16, src: "/screenshots/Web16.jpeg", title: "Financial Reports" },
    { id: 17, src: "/screenshots/Web17.jpeg", title: "Network Monitoring" },
    { id: 18, src: "/screenshots/Web18.jpeg", title: "System Settings" },
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Khan",
      company: "FastNet ISP",
      text: "NetSysPro has revolutionized our billing process. The offline capability is a game-changer for our field agents.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sara Ahmed",
      company: "ConnectPlus",
      text: "The comprehensive features and excellent support make NetSysPro worth every penny. Highly recommended!",
      rating: 5,
    },
    {
      id: 3,
      name: "Bilal Hassan",
      company: "SkyNet Communications",
      text: "We've reduced billing errors by 90% since implementing NetSysPro. The ROI was evident within months.",
      rating: 4,
    },
  ];

  // Stats data
  const stats = [
    { number: "1821", label: "Happy Clients", icon: UserGroupIcon },
    { number: "46", label: "Completed Projects", icon: CheckIcon },
    { number: "144K", label: "Apps Download", icon: DevicePhoneMobileIcon },
    { number: "3", label: "Platforms", icon: ComputerDesktopIcon },
  ];

  // Features data
  // const features = [
  //   {
  //     icon: UserGroupIcon,
  //     title: "User & Dealer Management",
  //     desc: "Manage unlimited users and dealers with advanced filtering options",
  //   },
  //   {
  //     icon: DocumentTextIcon,
  //     title: "Smart Billing & Invoices",
  //     desc: "Generate bills with real-time printing and messaging capabilities",
  //   },
  //   {
  //     icon: ChatBubbleLeftIcon,
  //     title: "Brand Messaging",
  //     desc: "Send customized SMS from your brand name for better customer engagement",
  //   },
  //   {
  //     icon: WrenchIcon,
  //     title: "Complaint Management",
  //     desc: "Assign and track complaints efficiently with our mobile application",
  //   },
  //   {
  //     icon: PrinterIcon,
  //     title: "Real-time Printing",
  //     desc: "Print receipts instantly at customers' doorsteps with thermal printers",
  //   },
  //   {
  //     icon: ChartBarIcon,
  //     title: "Advanced Analytics",
  //     desc: "Get detailed insights into your business performance and growth",
  //   },
  // ];

  // Update the features array to highlight printing feature
  const features = [
    {
      icon: PrinterIcon,
      title: "Real-time Thermal Printing",
      desc: "Generate instant receipts at customers' doorsteps with Bluetooth thermal printers. Offline printing capability ensures uninterrupted service.",
    },
    {
      icon: UserGroupIcon,
      title: "User & Dealer Management",
      desc: "Manage unlimited users and dealers with advanced filtering options",
    },
    {
      icon: DocumentTextIcon,
      title: "Smart Billing & Invoices",
      desc: "Generate bills with real-time printing and messaging capabilities",
    },
    {
      icon: ChatBubbleLeftIcon,
      title: "Brand Messaging",
      desc: "Send customized SMS from your brand name for better customer engagement",
    },
    {
      icon: WrenchIcon,
      title: "Complaint Management",
      desc: "Assign and track complaints efficiently with our mobile application",
    },
    {
      icon: ChartBarIcon,
      title: "Advanced Analytics",
      desc: "Get detailed insights into your business performance and growth",
    },
  ];

  // Sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto slide for carousels
  useEffect(() => {
    const mobileInterval = setInterval(() => {
      setCurrentMobileSlide((prev) => (prev + 1) % mobileScreenshots.length);
    }, 4000);

    const webInterval = setInterval(() => {
      setCurrentWebSlide((prev) => (prev + 1) % webScreenshots.length);
    }, 4500);

    return () => {
      clearInterval(mobileInterval);
      clearInterval(webInterval);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <Head>
        <title>NetSysPro - Complete ISP Billing & Management Software</title>
        <meta
          name="description"
          content="NetSysPro is a complete Billing, Complaint & Network Management Software for Cable & Internet Service providers with online & offline accessibility."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Sticky Header */}
      {/* // Updated Header Section with Logo */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isHeaderSticky
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
            : "bg-white py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo Container */}
            <div className="h-15 w-15 bg-white rounded-xl flex items-center justify-center  overflow-hidden">
              <Image
                src="/screenshots/logo.png"
                alt="NetSysPro Logo"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <span className="ml-3 text-2xl font-bold text-gray-900">
              NetSysPro
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-7 h-7" />
            ) : (
              <Bars3Icon className="w-7 h-7" />
            )}
          </button>

          {/* Navigation - remains the same */}
          <nav
            className={`${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } md:translate-x-0 fixed md:static top-0 right-0 h-screen md:h-auto w-3/4 md:w-auto bg-white md:bg-transparent shadow-2xl md:shadow-none transition-transform duration-300 md:transition-none`}
          >
            <div className="flex justify-end p-4 md:hidden">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-900"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            <ul className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 p-8 md:p-0">
              {[
                "Home",
                "Features",
                "Showcase",
                "Pricing",
                "Testimonials",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`block py-3 px-4 rounded-lg transition-all duration-300 font-medium ${
                      activeTab === item.toLowerCase()
                        ? "bg-[#e1772e] text-white shadow-lg"
                        : "text-gray-700 hover:text-[#e1772e] hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      setActiveTab(item.toLowerCase());
                      setIsMenuOpen(false);
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="mt-4 md:mt-0">
                <a
                  href="#contact"
                  className="block py-3 px-6 bg-[#e1772e] text-white rounded-lg hover:bg-[#c96622] transition-colors shadow-lg hover:shadow-xl font-semibold text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book A Demo
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* // Updated Hero Section with Thermal Printer */}
      <section
        id="home"
        className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e1772e] to-transparent w-1/2"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text Content - Left Side */}
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Complete{" "}
                <span className="text-[#e1772e]">Billing Software</span> for
                ISPs
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
                Advanced Billing, Complaint & Network Management Solution with
                Online & Offline Accessibility via Mobile & Web Applications.
              </p>

              {/* Printer Feature Highlight */}
              <div className="bg-[#e1772e]/10 border border-[#e1772e]/20 rounded-xl p-4 mb-6">
                <div className="flex items-center space-x-3">
                  <PrinterIcon className="w-8 h-8 text-[#e1772e]" />
                  <div>
                    <h3 className="font-bold text-lg text-white">
                      Real-time Thermal Printing
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Generate instant receipts at customers' doorsteps
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <a
                  href="#pricing"
                  className="bg-[#e1772e] text-white font-semibold py-4 px-8 rounded-lg text-center hover:bg-[#c96622] transition-colors shadow-lg hover:shadow-xl text-lg"
                >
                  View Pricing Plans
                </a>
                <a
                  href="#showcase"
                  className="bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-lg text-center hover:bg-white hover:text-gray-900 transition-colors text-lg"
                >
                  See Live Demo
                </a>
              </div>
            </div>

            {/* Devices Section - Right Side */}
            <div className="lg:w-1/2 flex flex-col items-center justify-center space-y-8">
              {/* Mobile Frame - Larger */}
              <div className="relative w-46 h-96">
                <div className="absolute inset-0 bg-gray-800 rounded-[0.5rem] p-1 shadow-2xl">
                  <div className="h-full bg-gray-900  overflow-hidden relative">
                    <div
                      className="flex h-full transition-transform duration-500 ease-out"
                      style={{
                        transform: `translateX(-${currentMobileSlide * 100}%)`,
                      }}
                    >
                      {mobileScreenshots.map((slide) => (
                        <div
                          key={slide.id}
                          className="w-full h-full flex-shrink-0 flex items-center justify-center bg-gray-800 relative"
                        >
                          <Image
                            src={slide.src}
                            alt={slide.title}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 256px"
                          />
                        </div>
                      ))}
                    </div>
                    {/* Mobile Carousel Indicators */}
                    <div className="absolute bottom-1 left-0 right-0 flex justify-center space-x-2">
                      {mobileScreenshots.map((_, index) => (
                        <button
                          key={index}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentMobileSlide
                              ? "bg-[#e1772e] w-8"
                              : "bg-gray-600"
                          }`}
                          onClick={() => setCurrentMobileSlide(index)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                {/* Mobile Frame Details */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full"></div>
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-600 rounded-full"></div>
              </div>

              {/* Laptop Frame - Larger */}
              <div className="relative w-96 h-64">
                <div className="absolute inset-0 bg-gray-700 rounded-t-xl shadow-2xl">
                  {/* Laptop Screen */}
                  <div className="h-[calc(100%-8px)] bg-gray-800 rounded-t-xl overflow-hidden relative p-2">
                    <div className="h-full bg-gray-900 rounded overflow-hidden">
                      <div
                        className="flex h-full transition-transform duration-500 ease-out"
                        style={{
                          transform: `translateX(-${currentWebSlide * 100}%)`,
                        }}
                      >
                        {webScreenshots.map((slide) => (
                          <div
                            key={slide.id}
                            className="w-full h-full flex-shrink-0 flex items-center justify-center bg-gray-800 relative"
                          >
                            <Image
                              src={slide.src}
                              alt={slide.title}
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 100vw, 384px"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Web Carousel Indicators */}
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
                      {webScreenshots.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentWebSlide
                              ? "bg-[#e1772e] w-6"
                              : "bg-gray-600"
                          }`}
                          onClick={() => setCurrentWebSlide(index)}
                        />
                      ))}
                    </div>
                  </div>
                  {/* Laptop Base */}
                  <div className="absolute -bottom-4 left-0 right-0 h-8 bg-gray-600 rounded-b-xl">
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-500 rounded-full"></div>
                  </div>
                  {/* Laptop Hinge */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-700 rounded-full"></div>
                </div>
              </div>

              {/* Device Labels */}
              <div className="flex justify-between w-full max-w-md mt-4">
                <div className="text-center">
                  <DevicePhoneMobileIcon className="w-8 h-8 text-[#e1772e] mx-auto mb-2" />
                  <span className="text-gray-300 font-semibold">
                    Mobile App
                  </span>
                </div>
                <div className="text-center">
                  <ComputerDesktopIcon className="w-8 h-8 text-[#e1772e] mx-auto mb-2" />
                  <span className="text-gray-300 font-semibold">
                    Web Portal
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#e1772e] rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Powerful Features for Your ISP Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools designed to streamline your operations and
              boost productivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group border border-gray-100"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#e1772e] rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                  <div className="mt-6 w-12 h-1 bg-[#e1772e] rounded-full group-hover:w-full transition-all duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Showcase Section with Additional Screenshots */}
      <section id="showcase" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore NetSysPro Interface
            </h2>
            <p className="text-xl text-gray-600">
              Get a glimpse of our powerful mobile and web interfaces
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Mobile App Preview
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {mobileScreenshots.slice(0, 4).map((slide) => (
                  <div
                    key={slide.id}
                    className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-48">
                      <Image
                        src={slide.src}
                        alt={slide.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-medium text-gray-700 truncate">
                        {slide.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Web Portal Preview
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {webScreenshots.slice(0, 4).map((slide) => (
                  <div
                    key={slide.id}
                    className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-48">
                      <Image
                        src={slide.src}
                        alt={slide.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-medium text-gray-700 truncate">
                        {slide.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#contact"
              className="bg-[#e1772e] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c96622] transition-colors inline-block"
            >
              Request Full Demo
            </a>
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same... */}
      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e1772e] to-transparent w-1/2"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300">
              Choose the perfect plan for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Basic",
                price: "PKR 2,500",
                users: "500 Users",
                popular: false,
                features: [
                  "User Management",
                  "Basic Billing",
                  "SMS Alerts",
                  "Email Support",
                ],
              },
              {
                name: "Professional",
                price: "PKR 4,000",
                users: "1,000 Users",
                popular: true,
                features: [
                  "All Basic Features",
                  "Advanced Reporting",
                  "Priority Support",
                  "Inventory Management",
                ],
              },
              {
                name: "Enterprise",
                price: "PKR 5,000",
                users: "Unlimited Users",
                popular: false,
                features: [
                  "All Professional Features",
                  "Custom Modules",
                  "Dedicated Support",
                  "API Access",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                  plan.popular ? "ring-2 ring-[#e1772e]" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 bg-[#e1772e] text-white px-6 py-2 rounded-full font-semibold text-sm z-20">
                    MOST POPULAR
                  </div>
                )}
                <div
                  className={`bg-white p-8 rounded-2xl ${
                    plan.popular ? "pt-12" : ""
                  }`}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-[#e1772e] mb-4">
                    {plan.price}
                    <span className="text-lg text-gray-600">/month</span>
                  </div>
                  <div className="text-gray-600 mb-6">{plan.users}</div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckIcon className="w-5 h-5 text-[#e1772e] mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-4 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? "bg-[#e1772e] text-white hover:bg-[#c96622]"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real success stories from satisfied ISP owners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-[#e1772e] fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic text-lg">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#e1772e] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today for a personalized demo and see how NetSysPro
                can transform your ISP business.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#e1772e] rounded-full flex items-center justify-center mr-4">
                    <PhoneIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-300">+92 349 2046904</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#e1772e] rounded-full flex items-center justify-center mr-4">
                    <EnvelopeIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-300">diglotix@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#e1772e] rounded-full flex items-center justify-center mr-4">
                    <MapPinIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-gray-300">Karachi, Pakistan</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e1772e]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e1772e]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e1772e]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e1772e]"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#e1772e] text-white py-4 rounded-lg font-semibold hover:bg-[#c96622] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="flex items-center">
              {/* Logo Container */}
              <div className="h-15 w-15 bg-white rounded-xl flex items-center justify-center  overflow-hidden">
                <Image
                  src="/screenshots/logo.png"
                  alt="NetSysPro Logo"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <span className="ml-3 text-2xl font-bold text-white-900">
                NetSysPro
              </span>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "Features", "Pricing", "Testimonials", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-gray-400 hover:text-[#e1772e] transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Billing Management</li>
                <li>Complaint System</li>
                <li>Inventory Control</li>
                <li>Real-time Reporting</li>
                <li>Mobile & Web Access</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>+92 349 2046904</p>
                <p>diglotix@gmail.com</p>
                <p>Karachi, Pakistan</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © Copyright 2019 - 2025 All rights reserved by Diglotix
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#e1772e] transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#e1772e] transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#e1772e] transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/923492046904"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors z-50 animate-bounce"
      >
        <ChatBubbleLeftRightIcon className="w-6 h-6" />
      </a>
    </div>
  );
}
