export const products = [
  {
    id: "earbuds-pro",
    name: "AeroBuds Pro",
    category: "Electronics",
    price: 149.99,
    rating: 4.8,
    reviewCount: 124,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80"
    ],
    tagline: "Silence the world. Amplify your sound.",
    description: "Experience absolute audio purity with AeroBuds Pro. Featuring industry-leading hybrid Active Noise Cancellation (ANC), spatial audio tracking, and a customized high-excursion driver, these earbuds redefine on-the-go acoustic performance.",
    features: [
      "Hybrid Active Noise Cancellation up to 45dB",
      "3D Spatial Audio with dynamic head tracking",
      "Up to 36 hours of battery life with wireless charging case",
      "IPX7 water and sweat resistance",
      "Ultra-clear triple microphone array for crystal clear calls"
    ],
    specs: {
      "Driver Unit": "11mm Custom High-Excursion Dynamic Driver",
      "Bluetooth Version": "Bluetooth 5.3",
      "Audio Codecs": "AAC, SBC, LDAC",
      "Battery Life": "9 hours (earbuds) + 27 hours (case)",
      "Charging Port": "USB-C & Qi Wireless Charging"
    },
    inStock: true
  },
  {
    id: "classic-watch",
    name: "Chrono Classic Watch",
    category: "Accessories",
    price: 229.00,
    rating: 4.7,
    reviewCount: 89,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&auto=format&fit=crop&q=80"
    ],
    tagline: "Timeless elegance for the modern era.",
    description: "The Chrono Classic is a minimalist masterpiece designed for those who appreciate understated luxury. Crafted with a premium surgical-grade stainless steel casing and domed sapphire crystal glass, it houses a high-precision Swiss quartz movement.",
    features: [
      "Surgical-grade 316L stainless steel case",
      "Scratch-resistant Sapphire crystal glass face",
      "Swiss Quartz movement for precision timekeeping",
      "Italian vegetable-tanned genuine leather strap",
      "5 ATM water resistance (up to 50 meters)"
    ],
    specs: {
      "Case Diameter": "40mm",
      "Case Thickness": "8.5mm",
      "Strap Width": "20mm",
      "Movement": "Swiss Ronda Quartz",
      "Glass Type": "Sapphire Crystal"
    },
    inStock: true
  },
  {
    id: "ergo-chair",
    name: "LumbarErgo Office Chair",
    category: "Home & Office",
    price: 349.50,
    rating: 4.9,
    reviewCount: 215,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?w=600&auto=format&fit=crop&q=80"
    ],
    tagline: "Revolutionary support for all-day comfort.",
    description: "Engineered to promote natural posture, the LumbarErgo Chair features a self-adjusting lumbar support system that dynamically adapts to your movement. Breathable Korean mesh keeps you cool, while the fully customizable 3D armrests guarantee a perfect fit.",
    features: [
      "Auto-correcting dynamic lumbar tracking system",
      "Premium breathable Korean elastomeric mesh",
      "3D adjustable armrests (height, angle, and depth)",
      "4-position tilt lock with pneumatic seat height adjustment",
      "Heavy-duty aluminum wheelbase with smooth-rolling nylon casters"
    ],
    specs: {
      "Weight Capacity": "Up to 300 lbs",
      "Seat Height Range": "18.5\" - 22.5\"",
      "Frame Material": "Reinforced Nylon & Polished Aluminum",
      "Mesh Material": "High-elastic Polyester Fiber Mesh",
      "Certification": "BIFMA & SGS Certified"
    },
    inStock: true
  },
  {
    id: "denim-jacket",
    name: "Solstice Denim Jacket",
    category: "Apparel",
    price: 89.00,
    rating: 4.5,
    reviewCount: 74,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?w=600&auto=format&fit=crop&q=80"
    ],
    tagline: "Effortless casual style, sustainably made.",
    description: "The Solstice Denim Jacket is a versatile wardrobe staple crafted from 100% certified organic cotton denim. Features a custom vintage wash, durable double-needle stitching, and custom hardware. Gets softer and more character-rich with every wear.",
    features: [
      "100% Certified Organic Cotton heavyweight denim",
      "Eco-friendly stone washing process reducing water use by 80%",
      "Custom brand-embossed brass buttons",
      "Two button-flap chest pockets and two side welt pockets",
      "Relaxed modern fit perfect for layering"
    ],
    specs: {
      "Material": "12.5 oz Organic Cotton Denim",
      "Fit Type": "Relaxed / Classic Fit",
      "Wash Type": "Medium Vintage Eco-Wash",
      "Care Instructions": "Machine wash cold, tumble dry low"
    },
    inStock: true
  },
  {
    id: "mechanical-keyboard",
    name: "Apex Mechanical Keyboard",
    category: "Electronics",
    price: 120.00,
    rating: 4.8,
    reviewCount: 142,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&auto=format&fit=crop&q=80"
    ],
    tagline: "Satisfying tactile feedback, lightning response.",
    description: "Elevate your typing and gaming experience with the Apex. This hot-swappable 75% mechanical keyboard comes pre-lubed with custom linear switches and double-shot PBT keycaps. Houses custom dual-layer sound dampening silicone foam for a premium acoustic profile.",
    features: [
      "Hot-swappable 5-pin sockets compatible with most switches",
      "Double-shot PBT keycaps in OEM profile",
      "Pre-lubed linear switches (50g actuation force)",
      "Per-key customizable RGB backlighting with 18 preset modes",
      "Sound dampening dual-layer silicone foam inserts"
    ],
    specs: {
      "Layout": "75% ANSI Layout (82 keys)",
      "Connection": "Detachable USB-C / 2.4GHz Wireless / Bluetooth 5.1",
      "Keycaps": "Fade-resistant Double-Shot PBT",
      "Switches": "Pre-lubed Custom Linear Red Switches",
      "Mounting Style": "Gasket Mounted"
    },
    inStock: true
  },
  {
    id: "ceramic-mug",
    name: "VaporWave Ceramic Mug",
    category: "Home & Office",
    price: 24.99,
    rating: 4.6,
    reviewCount: 63,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539223963957-c275e899030c?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=600&auto=format&fit=crop&q=80"
    ],
    tagline: "Your beverage, temperature protected, elegantly designed.",
    description: "Designed with clean aesthetics, the VaporWave Mug is constructed with thick double-walled premium stoneware. Finished with a satin-matte gradient glaze, it maintains heat or cold efficiently and feels amazing in hand.",
    features: [
      "Thick double-wall ceramic craftsmanship",
      "Hand-dipped unique satin-matte color gradient glaze",
      "Ergonomically designed handle for comfortable grip",
      "Dishwasher and microwave safe",
      "Generous 14 oz capacity for daily coffee or tea"
    ],
    specs: {
      "Capacity": "14 oz / 415 ml",
      "Material": "Premium Double-Walled Stoneware",
      "Finish": "Satin Matte Hand Glaze",
      "Weight": "1.1 lbs"
    },
    inStock: true
  },
  {
    id: "fleece-pullover",
    name: "Nordic Fleece Pullover",
    category: "Apparel",
    price: 75.00,
    rating: 4.7,
    reviewCount: 98,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&auto=format&fit=crop&q=80"
    ],
    tagline: "Ultimate thermal comfort, crafted for adventure.",
    description: "The Nordic Fleece is designed to combat cold conditions without adding weight. Built using 100% recycled high-loft fleece, it features wind-resistant overlays, a half-zip layout, and secure zipped storage pockets for functional outdoor styling.",
    features: [
      "100% Recycled polyester micro-fleece",
      "Reinforced ripstop chest overlay for durability and wind protection",
      "YKK half-zip front for easy temperature control",
      "Elastic bound cuffs and drawcord hem to lock in warmth",
      "Zipped secure handwarmer pockets"
    ],
    specs: {
      "Fabric": "300g Recycled High-Loft Fleece",
      "Closure Type": "YKK 1/2 Zip",
      "Storage": "2 Zipped Hand Pockets, 1 Chest Pocket",
      "Fit": "Active Fit"
    },
    inStock: true
  },
  {
    id: "ambient-lamp",
    name: "Aura Ambient Lamp",
    category: "Home & Office",
    price: 59.99,
    rating: 4.8,
    reviewCount: 110,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?w=600&auto=format&fit=crop&q=80"
    ],
    tagline: "Paint your room with light and rhythm.",
    description: "The Aura Ambient Lamp casts a wash of beautiful, customizable lighting. Integrating Wi-Fi smart control, touch response, and 16 million colors, it syncs with music, assists with natural sleep wake-up cycles, and adds modern style to any surface.",
    features: [
      "16 million colors + warm-to-cool tuneable whites",
      "Smart App Control & Voice assistant compatibility (Alexa, Google)",
      "Sound reactive mode that flashes and fades to the beat",
      "Simulated sunrise wake-up alarm and sunset sleep timer",
      "Touch sensitive control ring at the base"
    ],
    specs: {
      "Luminous Flux": "450 lumens max",
      "Dimensions": "9.4\" Height x 4.7\" Diameter",
      "Connectivity": "Wi-Fi 2.4GHz & Bluetooth LE",
      "Power Source": "DC 12V Wall Adapter",
      "LED Lifespan": "25,000 hours"
    },
    inStock: true
  }
];

export const categories = ["All", "Electronics", "Accessories", "Home & Office", "Apparel"];
