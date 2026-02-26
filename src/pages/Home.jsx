import { useState } from "react";

function Home() {
  const [showAbout, setShowAbout] = useState(false);
  const [showAuth, setShowAuth] = useState(false); // Signup/Login state
  const [selectedCategory, setSelectedCategory] = useState(null); // NEW
  const [wishlist, setWishlist] = useState([]);
  const [showWishlist, setShowWishlist] = useState(false);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [authError, setAuthError] = useState("");
  const [user, setUser] = useState(null);


  const handleLogin = async () => {
    setAuthError("");
    if (!loginData.email || !loginData.password) {
      setAuthError("Email and password required");
      return;
    }


    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await res.json();

      if (!res.ok) {
        setAuthError(data.message || "Login failed");
        return;
      }

      
// SUCCESS
setUser(data.user);
console.log("Logged in user:", data.user);

localStorage.setItem("user", JSON.stringify(data.user));

setShowAuth(false);
setLoginData({ email: "", password: "" });

    } catch (err) {
      setAuthError("Server not reachable");
    }
  };

  const handleSignup = async () => {
    setAuthError("");
    if (!loginData.email || !loginData.password) {
      setAuthError("Email and password required");
      return;
    }


    try {
      const res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Test User",
          email: loginData.email,
          password: loginData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setAuthError(data.message || "Signup failed");
        return;
      }

      alert("Signup successful. Now login.");
    } catch {
      setAuthError("Server error");
    }
  };




  const categories = [
    {
      name: "Sofas",
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    },
    {
      name: "Beds",
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    {
      name: "Dining",
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQSQ_BG9vYooEri3FKIb-fFfLuo-6q7Nf-SLU3fAvhmbw-GzpnPlwygg3rS49C5tMcOWKU8I-_GKoa00YZn2RQHnTzYMAF41CLNd9l6WIl8BiqCRNi1AsnZ&usqp=CAc",
    },
    {
      name: "Furnishing",
      img: "https://images.unsplash.com/photo-1616627451515-cbc80e5ece35",
    },
    {
      name: "Decor",
      img: "https://www.sammsara.com/cdn/shop/products/IMG_5039.jpg?v=1756197491&width=600",
    },
    {
      name: "Lights",
      img: "https://images.unsplash.com/photo-1540932239986-30128078f3c5",
    },
    {
      name: "Art",
      img: "https://cdn.shopify.com/s/files/1/0632/2526/6422/files/asfrp25120203_1.jpg?v=1768606581&width=1728",
    },
    {
      name: "Tables",
      img: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126",
    },
  ];

  const categoryItems = {
    Sofas: [
      {
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS2KhWHvTpuKnzrhd5Y4eWENNPZmyYQ5B7txTzjdjg16vjcfmxigNNYEtU9Wys_tdnyn7NvdRfTOlFRg6LJf2k7d0xkE0Vti8Qs_qlIMQ2EaBznOaxTdtziYw",
        price: 35000,
        discount: 3000,
        dimensions: "2x1x1 m",
        materials: "Wood+Fabric",
        durability: "8 yrs",
        rating: 4.5,
      },
      {
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcST9FZ3ALu2vVeYygjS_elBlRm3HORZUW_j0tB5Zk_tdW1h1oPVDoMKjcw_-N9GwLpss7SfdjNY2Z2jvV4RP9uZoEIFyOGENE34WQQAQvw",
        price: 40000,
        discount: 5000,
        dimensions: "2.2x1x1 m",
        materials: "Wood+Leather",
        durability: "10 yrs",
        rating: 4.7,
      },
      {
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRTZPi54nJH2jk9XMfe-zEqUxBbJd8LifzBaWkmBXJjMWUTX4QMQvAWuRmUEEHiV113OZC4U6866qfzYOCogHixMjwvwmf7VNjV_4aJCQHi",
        price: 25000,
        discount: 2000,
        dimensions: "1.8x0.9x1 m",
        materials: "Wood+Fabric",
        durability: "7 yrs",
        rating: 4.2,
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTD8R0KAZkTumoHKs_kbuXXuOmilqRzy-cWA1nV6hSjxTWB42_JKh4MblrxHIcBqSCPjHK7i8zwpAHXwyvd3d28FZbyDumhNLaDdZb8VV4",
        price: 30000,
        discount: 2500,
        dimensions: "2x1x1 m",
        materials: "Wood+Fabric",
        durability: "8 yrs",
        rating: 4.3,
      },
      {
        img: "https://images.unsplash.com/photo-1616627451515-cbc80e5ece35",
        price: 45000,
        discount: 6000,
        dimensions: "2.5x1.2x1 m",
        materials: "Wood+Leather",
        durability: "12 yrs",
        rating: 4.8,
      },
    ],
    Beds: [
      {
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQd2Pn8r-DN5U1__Xw7HGA9D4iG2n-4lGM0Ov2aO1bjnQdDuhXT2Nu43fUUO10JtCoPv4Fi-Lhp9x7AvF95n_Z5aGWmCVgg3jX3VXCcbLM",
        price: 30000,
        discount: 2000,
        dimensions: "2x1.5x0.8 m",
        materials: "Wood+Fabric",
        durability: "8 yrs",
        rating: 4.4,
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcStqcuWmiWJaa7K1pGJX5WDoU5N8M8FLuAel2EU_f6_2fKNBhOe0HIf5wsfhlRYcQLD_meuzmBn-eqB-zZT5UD9Hu2h5fMv3fpuSZlN9ZY",
        price: 35000,
        discount: 3000,
        dimensions: "2x1.6x0.9 m",
        materials: "Wood+Metal",
        durability: "10 yrs",
        rating: 4.6,
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSXLWuaq5GUrrrvKRvaSsmo4ViMXgnYESgXEe2dYLb6tcJYaYVCXu9cMBWWCpP6xEuZ3IuVT4AoWNvUhFXakES199dU1oI7gC0bLqYpyog",
        price: 28000,
        discount: 1500,
        dimensions: "1.8x1.5x0.8 m",
        materials: "Wood+Fabric",
        durability: "7 yrs",
        rating: 4.3,
      },
      {
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSV4OjUa5ApBcWNvme2138AOOZNxujIp8dvPylg_3Ll1uQ4jdd_t5PqmgDLuhvE2-0ijivzefvAAXBRPNPrOqH7zck-hAsQoT9NFSIp9ug",
        price: 32000,
        discount: 2500,
        dimensions: "2x1.5x0.85 m",
        materials: "Wood+Fabric",
        durability: "8 yrs",
        rating: 4.5,
      },
      {
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTFOSntCIbUr0n3r1dx8JO5viNRJ5LGK5-RCV_FhHvj9TNr5NRTYvVQi3g-GuZxIm_IxrqbWsDAduhJmzhRbOi-8dofTWQP9YO6Ajbz0X0",
        price: 40000,
        discount: 4000,
        dimensions: "2.2x1.6x0.9 m",
        materials: "Wood+Metal",
        durability: "10 yrs",
        rating: 4.7,
      },
    ],
    Dining: [
      {
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcREs3fjDvr3sQbtmaJH7WRa39yGdYOW4JCI5P16gMq48qI9gOoUVqIz7e_tVT0K_qEKDLkKvCDHBQDd_YrkWrn614kxq8W7vIPHlMwdnOfK7LbE_JR2Rylf",
        price: 38000,
        discount: 2000,
        dimensions: "2x1.5x0.8 m",
        materials: "Wood",
        durability: "8 yrs",
        rating: 4.4,
      },
      {
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSaC1mLZYt1Zvv2xwZkJpGtXdO6A2GkIRanCjlbgG_mms_FfoaqKBNwXMbpNnqyipgiA53lrPfbQOA3Ar8U_jjTbxvRe5LfkDpZlwua1quY",
        price: 50000,
        discount: 3000,
        dimensions: "2x1.6x0.9 m",
        materials: "Wood+Metal",
        durability: "10 yrs",
        rating: 4.6,
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQZGgornyYQnTen6chKQgxNbz2Hsqjq6p8rMEC763u4mwGs668TH-p5NZAMw5-U_6FsHuppqxrXGdu680yq9rsF6PKyCLxLDrvA1-mYxaNx",
        price: 98000,
        discount: 6500,
        dimensions: "1.8x1.5x0.8 m",
        materials: "Glass",
        durability: "7 yrs",
        rating: 4.3,
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcREbclv1OTec0pRcLGJ-ON9I2iu-NBvK-Ojf8reCpVB34yJrq4MJ2FCPUjfF8ne_ikGRFHMos8NaePquRuKrFZ2vRH8YjK3",
        price: 62000,
        discount: 5500,
        dimensions: "2x1.5x0.85 m",
        materials: "Wood",
        durability: "8 yrs",
        rating: 4.5,
      },
      {
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSj5SNsggW2XYZqSOrc-kvKx4TlvZrZVzkxykWQTcicUlZwN2AgiqWdHD0yxnrEhlo7xIHIoK5BMOn9CgLhTJ7Aq-sSuBG6rpEFP2mMk8c",
        price: 70000,
        discount: 5000,
        dimensions: "2.2x1.6x0.9 m",
        materials: "Good",
        durability: "10 yrs",
        rating: 4.7,
      },
    ],
    Furnishing: [
      {
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTytg5Czy_1Xw1bA1JxtlATy1IKi0GtouIN9MraZL7Qkk8OFhMQqrHdRqiS8n9JFxZe2YLgZl5R_F1shzCWAY8BXygPRrWCWogGt85hFzc",
        price: 78000,
        discount: 12000,
        dimensions: "2x1.5x0.8 m",
        materials: "Wood+Fabric",
        durability: "8 yrs",
        rating: 4.4,
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRErnIdSYK31E4QZjIega2Vv26g42imZizZ1bH05_Lc1KeORJjv9oGyKIUxTeDuwAC9Nb0_Ke-XkPSm2JFi-fLiBr0H5ORfkLQR9GmpxAhu",
        price: 69000,
        discount: 3000,
        dimensions: "2x1.6x0.9 m",
        materials: "Wood+Metal",
        durability: "10 yrs",
        rating: 4.6,
      },
      {
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRggkdbaNNN-e7A--RiFpUqfZMeWSzTvuw3RWZbyVoOdrL95N7BAx_mKcWMAB0gouTJQKWxbOoZWFLaK045UpUMJY8IBIAkG-7r3dheou8",
        price: 10000,
        discount: 3500,
        dimensions: "1.8x1.5x0.8 m",
        materials: "Wood+Fabric",
        durability: "7 yrs",
        rating: 4.3,
      },
      {
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ2SrpYYm2nMPrzc7ti0FS_1p6-Tg543_sgtbdDE13twtyFvlGsaVEbyReqvEAVKlzVQjDybX5pnll6rSZ6BJ5OtVuZVzOUtRoISibE-EgQ",
        price: 45000,
        discount: 2900,
        dimensions: "2x1.5x0.85 m",
        materials: "Wood+Fabric",
        durability: "8 yrs",
        rating: 4.5,
      },
      {
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSYBUviqfF64NglNwIoEyYKV0P_VGzNl2ifxQ8WhupCLg7EbkLu3hpU-zYlkbT5ejQVGNrx-cny8FqsUcav4_R0tHZ0lTU4-CSxnEO2b-s",
        price: 39000,
        discount: 4800,
        dimensions: "2.2x1.6x0.9 m",
        materials: "Wood+Metal",
        durability: "10 yrs",
        rating: 4.7,
      },
    ],
    Decor: [
      {
        img: "https://theknottyrope.com/cdn/shop/files/IMG_0028_7246dda6-5241-4099-85f0-f9c9b70fe695.jpg?v=1742141322&width=1000",
        price: 12000,
        discount: 3000,
        dimensions: "2x1x1 m",
        materials: "ceramic",
        durability: "8 yrs",
        rating: 4.5,
      },
      {
        img: "https://images.unsplash.com/photo-1707376519357-b53e370384fe?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 8000,
        discount: 1500,
        dimensions: "2.2x1x1 m",
        materials: "Glass",
        durability: "10 yrs",
        rating: 4.7,
      },
      {
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRhcXrXIVn2_y0xs2FjdlXK2YqAS_3nEKUrlVDQ3JTI7Ge08njurU6iOEnO8DdZCBh03D5k6M1qrljICvatCWbqki3BO56LURThJITUQuki47zR2SqgI4oJ6Q",
        price: 5000,
        discount: 600,
        dimensions: "2.5x1.2x1 m",
        materials: "Glass",
        durability: "12 yrs",
        rating: 4.8,
      },
      {
        img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVjb3J8ZW58MHx8MHx8fDA%3D",
        price: 23000,
        discount: 5000,
        dimensions: "2.2x1x1 m",
        materials: "Cloth",
        durability: "10 yrs",
        rating: 4.7,
      },
      {
        img: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGVjb3J8ZW58MHx8MHx8fDA%3D",
        price: 6000,
        discount: 1500,
        dimensions: "2.2x1x1 m",
        materials: "Feathers",
        durability: "10 yrs",
        rating: 4.7,
      },
    ],
    Lights: [
      {
        img: "https://media.istockphoto.com/id/1299500857/photo/modern-ceiling-lights-bulbs-lamp-made-of-wooden-frame-geometric-shape-interior-and-loft-style.jpg?s=612x612&w=0&k=20&c=S53P0zDNwR4R-Jb9aoCBnuWY5wtz9SgCXHsV29_ODrs=",
        price: 10000,
        discount: 3000,
        dimensions: "2x1x1 m",
        materials: "Glass",
        durability: "8 yrs",
        rating: 4.5,
      },
      {
        img: "https://plus.unsplash.com/premium_photo-1723579362425-121c4fa526af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGhvbWUlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D",
        price: 20000,
        discount: 3200,
        dimensions: "2.2x1x1 m",
        materials: "Glass",
        durability: "10 yrs",
        rating: 4.7,
      },
      {
        img: "https://images.unsplash.com/photo-1768203628304-adebd5b8107a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGhvbWUlMjBsaWdodHN8ZW58MHx8MHx8fDA%3D",
        price: 25000,
        discount: 2600,
        dimensions: "1.8x0.9x1 m",
        materials: "Glass",
        durability: "7 yrs",
        rating: 4.2,
      },
      {
        img: "https://images.unsplash.com/photo-1582492065409-9315e8075a2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGhvbWUlMjBsaWdodHN8ZW58MHx8MHx8fDA%3D",
        price: 30000,
        discount: 3800,
        dimensions: "1.8x0.9x1 m",
        materials: "Glass",
        durability: "7 yrs",
        rating: 4.2,
      },
      {
        img: "https://images.unsplash.com/photo-1475783006851-1d68dd683eff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGxpZ2h0fGVufDB8fDB8fHww",
        price: 35000,
        discount: 3500,
        dimensions: "2.5x1.2x1 m",
        materials: "Glass",
        durability: "12 yrs",
        rating: 4.8,
      },
    ],
    Art: [
      {
        img: "https://images.unsplash.com/photo-1567225477277-c8162eb4991d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdhbGwlMjBhcnR8ZW58MHx8MHx8fDA%3D",
        price: 5000,
        discount: 1000,
        dimensions: "2x1x1 m",
        materials: "Paper and Fabric",
        durability: "8 yrs",
        rating: 4.5,
      },
      {
        img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2FsbCUyMGFydHxlbnwwfHwwfHx8MA%3D%3D",
        price: 10000,
        discount: 5000,
        dimensions: "2.2x1x1 m",
        materials: "Paper and Fabric",
        durability: "10 yrs",
        rating: 4.7,
      },
      {
        img: "https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 15000,
        discount: 2000,
        dimensions: "1.8x0.9x1 m",
        materials: "Paper and Fabric",
        durability: "7 yrs",
        rating: 4.2,
      },
      {
        img: "https://plus.unsplash.com/premium_photo-1706561252297-d9b575e9f295?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 20000,
        discount: 2500,
        dimensions: "2x1x1 m",
        materials: "Paper and Fabric",
        durability: "8 yrs",
        rating: 4.3,
      },
      {
        img: "https://images.unsplash.com/photo-1558882224-dda166733046?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdhbGwlMjBhcnR8ZW58MHx8MHx8fDA%3D",
        price: 25000,
        discount: 6000,
        dimensions: "2.5x1.2x1 m",
        materials: "Paper and Fabric",
        durability: "12 yrs",
        rating: 4.8,
      },
    ],
    Tables: [
      {
        img: "https://plus.unsplash.com/premium_photo-1705479742742-cf7cf377502e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
        price: 13000,
        discount: 1200,
        dimensions: "2x1x1 m",
        materials: "Wood",
        durability: "8 yrs",
        rating: 4.5,
      },
      {
        img: "https://media.istockphoto.com/id/1691922005/photo/cozy-stylish-living-room-with-a-round-dining-table-chairs-and-shelf-with-decorative.webp?a=1&b=1&s=612x612&w=0&k=20&c=zJgXbO-UK4lhHZq4JR3LzJPoOE5tOF4mwj1Lr02KHXs=",
        price: 15000,
        discount: 1400,
        dimensions: "2.2x1x1 m",
        materials: "Wood",
        durability: "10 yrs",
        rating: 4.7,
      },
      {
        img: "https://media.istockphoto.com/id/1871943559/photo/empty-table-with-defocused-night-street-restaurant-at-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=ujWE2rSGT3Lu--1nGdX4KlgkICeNqI0lcfw7o13-XL4=",
        price: 25000,
        discount: 1800,
        dimensions: "1.8x0.9x1 m",
        materials: "Wood",
        durability: "7 yrs",
        rating: 4.2,
      },
      {
        img: "https://images.unsplash.com/photo-1461418559055-6f020c5a91e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGNvZmZlZSUyMHRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D",
        price: 17000,
        discount: 1700,
        dimensions: "2x1x1 m",
        materials: "Wood",
        durability: "8 yrs",
        rating: 4.3,
      },
      {
        img: "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRhYmxlfGVufDB8fDB8fHww",
        price: 18000,
        discount: 1600,
        dimensions: "2.5x1.2x1 m",
        materials: "Wood",
        durability: "12 yrs",
        rating: 4.8,
      },
    ],
  };

  const reviews = [
    {
      name: "Aman M.",
      text: "Absolutely love the furniture! Quality and design are top-notch.",
    },
    {
      name: "Rohit S.",
      text: "Fast delivery and excellent customer service. Highly recommend!",
    },
    {
      name: "Priya K.",
      text: "ModernWoods transformed my living room. Very satisfied!",
    },
  ];
  const loadCart = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return alert("Login first");

  try {
    const res = await fetch(`http://localhost:5000/cart/${user._id}`);
    const data = await res.json();

    if (!res.ok) {
      console.error(data.message);
      return;
    }

    setCart(data);
  } catch (err) {
    console.error("Error loading cart:", err);
  }
};

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
  "Home",
  "Categories",
  "Cart",
  "Wishlist",
  "About Us",
  user ? "Logout" : "Login / Signup",
];


  const removeFromCartDB = async (id) => {
  try {
    await fetch(`http://localhost:5000/cart/${id}`, {
      method: "DELETE",
    });

    // reload cart from DB
    const res = await fetch("http://localhost:5000/cart");
    const data = await res.json();
    setCart(data);

  } catch (err) {
    console.log("Remove failed");
  }
};

const handleLogout = async () => {
  try {
    await fetch("http://localhost:5000/logout", {
      method: "POST",
    });

    setUser(null);
    setCart([]);
    setWishlist([]);
    setShowCart(false);
    setShowWishlist(false);
    setSelectedCategory(null);

  } catch (err) {
    console.log("Logout failed");
  }
};
 return (
    <div style={{ backgroundColor: "#f3d5b5", minHeight: "100vh" }}>
      {/* NAVBAR */}
      <nav
        style={{
          padding: "18px 40px",
          backgroundColor: "#603808",
          color: "#f3d5b5",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <h2 style={{ margin: 0, letterSpacing: "1px" }}>ModernWoods</h2>
        <div style={{ display: "flex", gap: "24px" }}>
          {navItems.map((item) => (
            <span
              key={item}
              style={{
                position: "relative",
                cursor: "pointer",
                fontWeight: "500",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.children[0].style.width = "100%")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.children[0].style.width = "0")
              }
              onClick={() => {
                if (item === "Home") {
                  setShowAbout(false);
                  setShowAuth(false);
                  setShowWishlist(false);
                  setShowCart(false);
                  setSelectedCategory(null);
                }

                if (item === "Categories") {
                  setShowAbout(false);
                  setShowAuth(false);
                  setShowWishlist(false);
                  setSelectedCategory(null);
                  setShowCart(false);
                  scrollToSection("categories");
                }

                if (item === "Wishlist") {
                  setShowWishlist(true);
                  setShowAbout(false);
                  setShowAuth(false);
                  setShowCart(false);
                  setSelectedCategory(null);
                }

                if (item === "About Us") {
                  setShowAbout(true);
                  setShowAuth(false);
                  setShowWishlist(false);
                  setShowCart(false);
                  setSelectedCategory(null);
                }

                if (item === "Cart") {
                setShowCart(true);
                setShowWishlist(false);
                setShowAbout(false);
                setShowAuth(false);
                setSelectedCategory(null);
                loadCart();
                }


                if (item === "Login / Signup") {
                  setShowAuth(true);
                  setShowAbout(false);
                  setShowWishlist(false);
                  setShowCart(false);
                  setSelectedCategory(null);
                }


                if (item === "Logout") {
                handleLogout();
                }

              }}
            >
              {item}
              <span
                style={{
                  position: "absolute",
                  bottom: "-6px",
                  left: 0,
                  height: "2px",
                  width: "0",
                  backgroundColor: "#f3d5b5",
                  transition: "width 0.3s ease",
                }}
              />
            </span>
          ))}
        </div>
      </nav>

      {/* ---------------- MAIN CONTENT ---------------- */}
      {!showAbout &&
      !showAuth &&
      !showWishlist &&
      !showCart &&
      !selectedCategory ? (
        <>
          {/* HERO SECTION */}
          <section
            style={{
              height: "85vh",
              backgroundImage:
                "url(https://st.hzcdn.com/simgs/97910d6b0407c3d1_14-0485/_.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(96,56,8,0.55)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                color: "#fff",
                padding: "40px",
              }}
            >
              <h1
                style={{
                  fontSize: "56px",
                  marginBottom: "20px",
                  letterSpacing: "1px",
                  animation: "fadeUp 1s ease",
                }}
              >
                Elevate Your Living Space
              </h1>
              <p
                style={{
                  fontSize: "20px",
                  maxWidth: "720px",
                  lineHeight: "1.6",
                  color: "#f3d5b5",
                  animation: "fadeUp 1.4s ease",
                }}
              >
                Curated furniture, refined décor, and timeless interiors crafted
                for modern, elegant living.
              </p>
              <button
                style={{
                  marginTop: "34px",
                  padding: "16px 42px",
                  borderRadius: "32px",
                  border: "none",
                  backgroundColor: "#f3d5b5",
                  color: "#603808",
                  fontWeight: "700",
                  letterSpacing: "1px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  animation: "fadeUp 1.8s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#603808";
                  e.currentTarget.style.color = "#f3d5b5";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#f3d5b5";
                  e.currentTarget.style.color = "#603808";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                onClick={() => scrollToSection("categories")}
              >
                Discover Collection
              </button>
            </div>
          </section>

          {/* OFFER LINE */}
          <div
            style={{
              textAlign: "center",
              margin: "40px 0",
              fontWeight: "600",
              color: "#603808",
            }}
          >
            🎉 Discount Offers · Free Shipping on Orders Above ₹12,999
          </div>

          {/* CATEGORY CARDS */}
          <section
            id="categories"
            style={{
              padding: "0 40px 60px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "30px",
            }}
          >
            {categories.map((cat) => (
              <div
                key={cat.name}
                style={{
                  height: "220px",
                  borderRadius: "14px",
                  overflow: "hidden",
                  position: "relative",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.children[0].style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.children[0].style.transform = "scale(1)")
                }
                onClick={() => setSelectedCategory(cat.name)}
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(96,56,8,0.75), rgba(0,0,0,0.1))",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "20px",
                    color: "#fff",
                    fontSize: "22px",
                    fontWeight: "600",
                  }}
                >
                  {cat.name}
                </div>
              </div>
            ))}
          </section>

          {/* ---------------- CUSTOMER REVIEWS ---------------- */}
          <section
            id="reviews"
            style={{
              backgroundColor: "#603808",
              color: "#f3d5b5",
              padding: "60px 40px",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "36px", marginBottom: "40px" }}>
              What Our Customers Say
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "30px",
              }}
            >
              {reviews.map((r, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "#f3d5b5",
                    color: "#603808",
                    padding: "24px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  }}
                >
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    "{r.text}"
                  </p>
                  <p style={{ fontWeight: "700", marginTop: "12px" }}>
                    - {r.name}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ---------------- FOOTER ---------------- */}
          <footer
            id="contactus"
            style={{
              backgroundColor: "#603808",
              color: "#f3d5b5",
              padding: "40px",
              textAlign: "center",
            }}
          >
            <p>© 2026 ModernWoods. All rights reserved.</p>
            <p>123 Modern St, Interior City, India</p>
            <p>Email: support@modernwoods.com | Phone: +91 9876543210</p>
            <div style={{ marginTop: "20px" }}>
              {["Instagram"].map((social) => (
                <span
                  key={social}
                  style={{
                    margin: "0 10px",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                >
                  {social}
                </span>
              ))}
            </div>
          </footer>
        </>
      ) : selectedCategory ? (
        // ---------------- CATEGORY PAGE ----------------
        <section
          style={{
            minHeight: "100vh",
            padding: "40px",
            color: "#603808",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <button
            onClick={() => setSelectedCategory(null)}
            style={{
              padding: "10px 20px",
              borderRadius: "24px",
              border: "none",
              backgroundColor: "#603808",
              color: "#f3d5b5",
              fontWeight: "700",
              cursor: "pointer",
              marginBottom: "30px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f3d5b5";
              e.currentTarget.style.color = "#603808";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#603808";
              e.currentTarget.style.color = "#f3d5b5";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            ← Back
          </button>

          <h1 style={{ fontSize: "36px", marginBottom: "30px" }}>
            {selectedCategory}
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "30px",
            }}
          >
            {(categoryItems[selectedCategory] || []).map((item, idx) => (
              <div
                key={idx}
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                {/* IMAGE */}
                <img
                  src={item.img}
                  alt={selectedCategory}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                  }}
                />

                {/* DETAILS */}
                <div
                  style={{
                    padding: "16px",
                    backgroundColor: "#f3d5b5",
                    color: "#603808",
                  }}
                >
                  <p style={{ fontWeight: "700", marginBottom: "6px" }}>
                    ₹{item.price - item.discount}
                    <span
                      style={{
                        textDecoration: "line-through",
                        marginLeft: "6px",
                        fontWeight: "400",
                      }}
                    >
                      ₹{item.price}
                    </span>
                  </p>

                  <p>Dimensions: {item.dimensions}</p>
                  <p>Materials: {item.materials}</p>
                  <p>Durability: {item.durability}</p>
                  <p>Rating: {item.rating} ⭐</p>

                  {/* BUTTONS */}
                  <div
                    style={{ display: "flex", gap: "10px", marginTop: "12px" }}
                  >
                    <button
                      style={{
                        flex: 1,
                        padding: "8px",
                        borderRadius: "20px",
                        border: "none",
                        backgroundColor: "#603808",
                        color: "#f3d5b5",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                     onClick={async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return alert("Login first");

  const res = await fetch("http://localhost:5000/cart/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: user._id,
      product: item,
      quantity: 1
    })
  });

  const data = await res.json();
  if (!res.ok) return alert(data.message);

  alert("Added to cart");
}}

                    >
                      Add to Cart
                    </button>

                    <button
                      style={{
                        flex: 1,
                        padding: "8px",
                        borderRadius: "20px",
                        border: "1px solid #603808",
                        backgroundColor: "transparent",
                        color: "#603808",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                     onClick={async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return alert("Login first");

  const res = await fetch("http://localhost:5000/wishlist/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: user._id,
      product: item
    })
  });

  const data = await res.json();
  if (!res.ok) return alert(data.message);

  alert("Added to wishlist");
}}

                    >
                      Wishlist
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : showAbout ? (
        // ... About Section unchanged
        <section
          style={{
            minHeight: "100vh",
            padding: "60px 40px",
            color: "#603808",
            maxWidth: "900px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          <button
            onClick={() => setShowAbout(false)}
            style={{
              padding: "10px 20px",
              borderRadius: "24px",
              border: "none",
              backgroundColor: "#603808",
              color: "#f3d5b5",
              fontWeight: "700",
              cursor: "pointer",
              marginBottom: "30px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f3d5b5";
              e.currentTarget.style.color = "#603808";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#603808";
              e.currentTarget.style.color = "#f3d5b5";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            ← Back
          </button>

          <h1 style={{ fontSize: "36px", marginBottom: "30px" }}>About Us</h1>

          <p style={{ marginBottom: "24px" }}>
            ModernWoods was founded with the vision of transforming homes into
            spaces of comfort, elegance, and modern sophistication. Our mission
            is to combine high-quality craftsmanship with contemporary design,
            ensuring that every piece of furniture we create not only serves a
            functional purpose but also enhances the aesthetic appeal of your
            living spaces. We believe that furniture is more than just
            objects—it reflects personality, lifestyle, and taste. Each item in
            our collection is thoughtfully designed to seamlessly integrate
            style, functionality, and durability, creating environments that
            inspire and delight.
          </p>

          <p style={{ marginBottom: "24px" }}>
            Our team consists of passionate designers, skilled artisans, and
            interior specialists who work together to curate collections that
            cater to diverse tastes and preferences. We prioritize using
            sustainable materials and ethical production methods, ensuring that
            our furniture is not only long-lasting but also environmentally
            responsible. From the selection of premium woods, metals, and
            fabrics to meticulous attention to detail in construction,
            ModernWoods ensures that every product meets rigorous quality
            standards, providing customers with furniture they can cherish for
            years.
          </p>

          <p style={{ marginBottom: "24px" }}>
            Beyond just furniture, ModernWoods offers a holistic approach to
            home décor. Our range includes lighting, wall art, rugs, and other
            decorative accessories, each chosen to complement our furniture
            collections. By carefully coordinating colors, textures, and styles,
            we help create cohesive and inviting interiors that reflect the
            individuality of each homeowner. Whether you are redesigning a
            single room or furnishing an entire home, our products and guidance
            aim to bring harmony, comfort, and beauty to every corner of your
            space.
          </p>

          <p style={{ marginBottom: "24px" }}>
            At the heart of ModernWoods is a commitment to exceptional customer
            experience. We understand that purchasing furniture and décor is a
            significant investment, which is why we offer personalized support,
            seamless ordering, and timely delivery. Our goal is to ensure that
            every interaction, from browsing our collections to unboxing your
            furniture at home, is smooth, enjoyable, and satisfying. By focusing
            on quality, design, and service, ModernWoods strives to be a trusted
            partner in creating homes that are elegant, functional, and truly
            reflect the lifestyles and aspirations of our customers.
          </p>
        </section>
      ) : showCart ? (
        // ✅ CART SECTION 
        <section
          style={{
            minHeight: "100vh",
            padding: "60px 40px",
            maxWidth: "1200px",
            margin: "0 auto",
            color: "#603808",
          }}
        >
          <h1 style={{ marginBottom: "30px" }}>My Cart</h1>

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "30px",
              }}
            >
              {cart.map((item, idx) => (
                <div key={idx}>
                  <img src={item.img} alt="cart" />
                  <p>₹{item.price - item.discount}</p>

                  <button
                    onClick={() => removeFromCartDB(item._id)}

                  >
                    Remove from Cart
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      ) : showWishlist ? (
        <section
          style={{
            minHeight: "100vh",
            padding: "60px 40px",
            maxWidth: "1200px",
            margin: "0 auto",
            color: "#603808",
          }}
        >
          <h1 style={{ marginBottom: "30px" }}>My Wishlist </h1>

          {wishlist.length === 0 ? (
            <p>No items in wishlist.</p>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "30px",
              }}
            >
              {wishlist.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  }}
                >
                  <img
                    src={item.img}
                    alt="wishlist"
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                    }}
                  />

                  <div
                    style={{
                      padding: "16px",
                      backgroundColor: "#f3d5b5",
                      color: "#603808",
                    }}
                  >
                    <p style={{ fontWeight: "700", marginBottom: "10px" }}>
                      ₹{item.price - item.discount}
                    </p>

                    <button
                      onClick={() =>
                        setWishlist((prev) => prev.filter((_, i) => i !== idx))
                      }
                      style={{
                        width: "100%",
                        padding: "8px",
                        borderRadius: "20px",
                        border: "none",
                        backgroundColor: "#603808",
                        color: "#f3d5b5",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                    >
                      Remove from Wishlist
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      ) : showAuth ? (
        // ---------------- LOGIN PAGE ----------------
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "420px",
              backgroundColor: "#f3d5b5",
              padding: "40px",
              borderRadius: "16px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
              color: "#603808",
            }}
          >
            <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
              Login to ModernWoods
            </h2>

            <input
              type="email"
              placeholder="Enter your email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              style={{
                width: "100%",
                padding: "12px",
                margin: "8px 0 20px",
                borderRadius: "8px",
                border: "1px solid #603808",
              }}
            />

            <input
              type="password"
              placeholder="Enter your password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              style={{
                width: "100%",
                padding: "12px",
                margin: "8px 0 30px",
                borderRadius: "8px",
                border: "1px solid #603808",
              }}
            />

            {authError && (
              <p style={{ color: "red", marginBottom: "10px" }}>{authError}</p>
            )}

            <button
              onClick={handleLogin}
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "30px",
                border: "none",
                backgroundColor: "#603808",
                color: "#f3d5b5",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Login
            </button>

            <button
              onClick={handleSignup}
              style={{
                marginTop: "15px",
                width: "100%",
                padding: "12px",
                borderRadius: "30px",
                border: "1px solid #603808",
                background: "transparent",
                color: "#603808",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Signup
            </button>

            <button
              onClick={() => setShowAuth(false)}
              style={{
                marginTop: "25px",
                background: "transparent",
                border: "none",
                color: "#603808",
                fontWeight: "600",
                cursor: "pointer",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              ← Back to Home
            </button>
          </div>
        </section>
      ) : null}

      <style>
        {`
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `}
      </style>
    </div>
  );
}

export default Home;
