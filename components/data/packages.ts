export interface PackageDetail {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  duration: string;
  timing: string;
  pickup: string;
  rating: string;
  reviews: number;
  price: string;
  badge?: string;
  highlights: string[];
  description: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      bulletPoints?: string[];
    }[];
    inclusions: string[];
    exclusions: string[];
    importantInfo: string[];
  };
}

export const PACKAGES_DATA: PackageDetail[] = [
  {
    id: "evening-desert-safari",
    slug: "evening-desert-safari",
    title: "Evening Desert Safari",
    subtitle: "Dune bashing, sunset views, BBQ dinner & live shows",
    category: "Desert Safari",
    image: "/services/Overnight safari.png",
    duration: "6 Hours",
    timing: "3:30 PM – 9:30 PM",
    pickup: "Free Door-to-Door Pickup across Abu Dhabi",
    rating: "4.9",
    reviews: 1240,
    price: "AED 175",
    badge: "MOST POPULAR",
    highlights: ["4x4 Dune Bashing", "BBQ Buffet Dinner", "Camel Ride & Sandboarding", "Tanoura & Belly Dance"],
    description: {
      intro:
        "The quintessential Arabian adventure. Experience the golden dunes of Abu Dhabi at golden hour with high-octane 4x4 dune bashing, traditional camel treks, sandboarding, and an enchanting evening under the desert stars with a lavish 5-star international BBQ buffet and live cultural entertainment.",
      sections: [
        {
          heading: "Thrilling Dune Bashing & Sunset Photography",
          body:
            "Your desert expedition begins with a prompt pickup in a luxury air-conditioned Toyota Land Cruiser 4x4. After deflation stops at the desert threshold, our certified dune marshals take you on an adrenaline-charged 45-minute ride across soaring sand dunes. As dusk approaches, pause at a towering dune summit to capture postcard-perfect sunset panoramas across the endless golden horizon.",
          bulletPoints: [
            "45 minutes of extreme off-road dune driving with certified desert marshals",
            "Stop at high dunes for golden hour photo opportunities and sandboarding",
            "Modern 4x4 fleet fitted with interior roll cages and GPS tracking",
          ],
        },
        {
          heading: "Bedouin Camp Welcome & Cultural Activities",
          body:
            "Arrive at our traditional Arabian desert camp where you are greeted with authentic Gahwa (Arabic coffee), fresh dates, and sweet tea. Immerse yourself in Bedouin heritage with complimentary camel rides, henna body art painting, and authentic Arabic dress photography against traditional majlis backdrops.",
          bulletPoints: [
            "Traditional Arabic welcome with Gahwa, tea, and local dates",
            "Camel rides across the gentle dunes surrounding the camp",
            "Custom henna tattoo artistry and souvenir photo opportunities",
          ],
        },
        {
          heading: "5-Star BBQ Dinner & Live Camp Shows",
          body:
            "Dine on an extensive 5-star international barbecue buffet featuring grilled kebabs, shish tawook, fresh salads, warm breads, and vegetarian delights. Throughout dinner, experience mesmerizing live cultural performances including dynamic Tanoura dancers spinning in luminous skirts, exotic belly dancing, and a thrilling fire show under the Arabian night sky.",
        },
      ],
      inclusions: [
        "Hotel pickup and drop-off in air-conditioned 4x4 Land Cruiser",
        "45 minutes of thrilling dune bashing with professional driver",
        "Sandboarding from high desert dunes",
        "Sunset photo stop in the desert",
        "Short camel ride",
        "Arabic coffee (Gahwa), tea, and fresh dates",
        "Henna painting for ladies & kids",
        "Traditional Arabic costume photography",
        "5-Star international BBQ buffet dinner (Veg & Non-Veg)",
        "Unlimited mineral water and soft drinks",
        "Live Tanoura dance show",
        "Live Belly dance performance",
        "Thrilling live Fire show",
      ],
      exclusions: [
        "Quad bike / Dune buggy rental (available as add-on)",
        "Alcoholic beverages (available on purchase at camp bar)",
        "Shisha table service (available at dedicated lounge)",
      ],
      importantInfo: [
        "Casual, comfortable clothing and sandals/sneakers are recommended.",
        "Bring a light jacket during winter months (November to February).",
        "Dune bashing is not recommended for pregnant women or guests with severe back conditions; gentle scenic transfers can be arranged.",
      ],
    },
  },
  {
    id: "morning-desert-safari",
    slug: "morning-desert-safari",
    title: "Morning Desert Safari",
    subtitle: "Crisp sunrise dunes, sandboarding & camel trek",
    category: "Morning Tours",
    image: "/desert-adventure/d2.png",
    duration: "4 Hours",
    timing: "8:00 AM – 12:00 PM",
    pickup: "Free Door-to-Door Pickup across Abu Dhabi",
    rating: "4.8",
    reviews: 860,
    price: "AED 140",
    badge: "BEST VALUE",
    highlights: ["Morning Dune Drive", "Sand Skiing / Boarding", "Camel Farm Visit", "Refreshments & Water"],
    description: {
      intro:
        "Greet the morning sun over untouched golden dunes. Perfect for morning people, cruise stopovers, or travelers with evening flight plans, the Morning Desert Safari delivers the complete adventure of dune driving, sandboarding, and camel farm visits without the camp dinner.",
      sections: [
        {
          heading: "Untouched Dunes in Morning Serenity",
          body:
            "Experience the Abu Dhabi desert at its quietest and cleanest. The crisp morning temperatures and soft amber light provide supreme conditions for dune bashing and scenic desert landscape photography before the midday sun arrives.",
          bulletPoints: [
            "Crisp desert climate with untouched wind-swept sand dunes",
            "45 minutes of exhilarating dune driving with expert desert drivers",
            "Clean soft sand slopes ideal for sandboarding and sand skiing",
          ],
        },
        {
          heading: "Camel Farm Exploration",
          body:
            "Visit a working desert camel breeding farm to meet Arabian racing camels and calves up close. Learn about Bedouin desert survival traditions and the historic role camels played across the Emirati peninsula.",
        },
      ],
      inclusions: [
        "Hotel pickup and drop-off in private/sharing 4x4 Land Cruiser",
        "40-45 minutes dune bashing across sweeping dunes",
        "Sandboarding gear and instructions",
        "Visit to traditional desert camel farm",
        "Short camel ride",
        "Chilled mineral water, juice, and light snacks",
      ],
      exclusions: [
        "BBQ dinner & camp shows (evening tour exclusive)",
        "Quad biking / Buggy rentals (optional add-on)",
      ],
      importantInfo: [
        "Pickup starts from 7:30 AM to 8:00 AM depending on hotel location.",
        "Sunglasses and sun protection are strongly recommended.",
      ],
    },
  },
  {
    id: "private-desert-safari",
    slug: "private-desert-safari",
    title: "Private Desert Safari",
    subtitle: "Exclusive 4x4 vehicle & personalized desert itinerary",
    category: "Private Tours",
    image: "/desert-adventure/d3.jpg",
    duration: "6-7 Hours",
    timing: "3:00 PM – 10:00 PM",
    pickup: "Private Door-to-Door Pickup anywhere in UAE",
    rating: "5.0",
    reviews: 430,
    price: "AED 950",
    badge: "EXCLUSIVE",
    highlights: ["Private 4x4 Land Cruiser", "Customizable Pace", "VIP Table Service", "Hotel Door-to-Door Pickup"],
    description: {
      intro:
        "Enjoy total privacy, personalized comfort, and tailored pacing. The Private Desert Safari reserves an entire luxury Land Cruiser exclusively for you, your family, or your private group with dedicated safari marshal guidance.",
      sections: [
        {
          heading: "Bespoke Pace & Gentle or Extreme Driving",
          body:
            "Because the vehicle is exclusively yours, you dictate the driving style. Whether you want maximum thrill dune jumping or a relaxed scenic nature cruise suitable for toddlers and senior family members, your personal driver adjusts on demand.",
          bulletPoints: [
            "Exclusive vehicle reserved for up to 6 guests with zero strangers",
            "Flexible pickup timings and direct transfers with no multiple hotel stops",
            "Customizable dune driving intensity from gentle to high adventure",
          ],
        },
        {
          heading: "Reserved Camp Seating & Priority Hospitality",
          body:
            "Upon arrival at camp, you are escorted to reserved seating with dedicated table service, bypassing standard buffet lines. Enjoy private shisha, falconry photo sessions, and seamless personal attention throughout the night.",
        },
      ],
      inclusions: [
        "Exclusive private 4x4 Toyota Land Cruiser for up to 6 guests",
        "Door-to-door private transfers from any hotel or residence",
        "Customizable dune bashing intensity & duration",
        "Extended sunset photography stops",
        "Reserved VIP camp seating with dedicated waiter service",
        "Unlimited BBQ buffet dinner, soft drinks, Arabic coffee & dates",
        "All cultural activities & live stage entertainment shows",
      ],
      exclusions: [
        "Alcoholic beverages",
        "Private dune buggy self-drive (available as add-on)",
      ],
      importantInfo: [
        "Flat rate covers up to 6 passengers per vehicle.",
        "Child car seats available upon advance request at no additional fee.",
      ],
    },
  },
  {
    id: "vip-luxury-desert-safari",
    slug: "vip-luxury-desert-safari",
    title: "VIP & Luxury Desert Safari Abu Dhabi",
    subtitle: "Royal treatment with air-conditioned majlis & gourmet dining",
    category: "Luxury Tours",
    image: "/desert-adventure/s3.jpg",
    duration: "6 Hours",
    timing: "3:30 PM – 9:30 PM",
    pickup: "VIP Door-to-Door Pickup in Abu Dhabi",
    rating: "4.9",
    reviews: 520,
    price: "AED 350",
    badge: "VIP EXPERIENCE",
    highlights: ["Dedicated Service Staff", "Gourmet Live BBQ Stations", "Falconry Photo Opportunity", "Henna & Shisha Lounge"],
    description: {
      intro:
        "Indulge in royal desert hospitality. Our VIP Luxury Safari combines the thrill of dune exploration with the refined luxury of an air-conditioned majlis lounge, premium live grilled delicacies, personal table attendants, and private falconry sessions.",
      sections: [
        {
          heading: "Exclusive Majlis & Table-Service Dining",
          body:
            "Bypass standard camp arrangements and step into an elevated luxury majlis area. Your personal server delivers fresh grilled meat platters, gourmet salads, and refreshments directly to your table while you enjoy prime views of the entertainment stage.",
          bulletPoints: [
            "Reserved VIP table in premium elevated majlis seating",
            "Dedicated waiter service with plated gourmet BBQ dishes",
            "Complimentary premium shisha service at your table",
          ],
        },
        {
          heading: "Royal Falconry & Cultural Pampering",
          body:
            "Enjoy an exclusive private session holding and photographing a prize-winning hunting falcon on your arm, accompanied by authentic Arabian sweets, fresh mocktails, and intricate henna artistry.",
        },
      ],
      inclusions: [
        "Air-conditioned 4x4 Land Cruiser hotel pickup and return",
        "Thrilling 45-minute dune bashing experience",
        "Sunset photography & sandboarding",
        "VIP table service with dedicated personal waiter",
        "Gourmet live BBQ dinner served at table",
        "Unlimited soft drinks, juices, mocktails, tea & Gahwa",
        "Exclusive falconry photo opportunity",
        "Table shisha service",
        "Full access to Tanoura, belly dance, and fire performances",
      ],
      exclusions: [
        "Alcoholic beverages from private bar",
        "Quad bike or buggy track rentals",
      ],
      importantInfo: [
        "Dress code is smart casual / comfortable desert attire.",
        "Vegetarian, vegan, and special dietary menus catered upon notice.",
      ],
    },
  },
  {
    id: "liwa-desert-safari",
    slug: "liwa-desert-safari",
    title: "Liwa Desert Safari",
    subtitle: "Journey to the legendary Empty Quarter (Rub' al Khali)",
    category: "Expedition Tours",
    image: "/desert-adventure/d1.png",
    duration: "Full Day",
    timing: "8:00 AM – 7:30 PM",
    pickup: "Door-to-Door Pickup across Abu Dhabi",
    rating: "5.0",
    reviews: 310,
    price: "AED 580",
    badge: "EXPEDITION",
    highlights: ["Tal Moreeb Giant Dune", "Liwa Forts & Oasis Heritage", "Dramatic Deep Sand Driving", "Sunset Over High Dunes"],
    description: {
      intro:
        "The ultimate deep-desert expedition. Cross the threshold into the Empty Quarter (Rub' al Khali), the world's largest continuous sand desert. Stand in awe before Tal Moreeb—one of the world's tallest sand dunes towering over 300 meters high—and discover ancient oasis forts and date groves.",
      sections: [
        {
          heading: "The Epic Empty Quarter Dunes",
          body:
            "Liwa Oasis is the ancestral home of the UAE's ruling family. As you travel south into the desert interior, the sand shifts from golden yellow to dramatic terracotta and crimson red, with dunes rising hundreds of meters into the sky.",
          bulletPoints: [
            "Visit Tal Moreeb dune (over 300 meters high with 50-degree incline)",
            "Explore historic Liwa Oasis forts and fresh spring date plantations",
            "Master-class desert driving through colossal dune valleys",
          ],
        },
        {
          heading: "Oasis Heritage & Sunset Panorama",
          body:
            "Tour historic mud-brick watchtowers that guarded desert trade routes for centuries. Conclude the expedition with a panoramic sunset overlooking miles of unbroken red sand crests, accompanied by an authentic desert picnic lunch.",
        },
      ],
      inclusions: [
        "Full day tour in specialized expedition 4x4 Land Cruiser",
        "Expert certified expedition desert guide",
        "Visits to Liwa Oasis, Tal Moreeb, and heritage forts",
        "Picnic lunch with refreshments in desert oasis setting",
        "Unlimited mineral water and soft drinks throughout the journey",
        "Sandboarding on colossal dunes",
      ],
      exclusions: [
        "Dinner at desert resort (optional reservation available)",
        "Personal souvenir purchases",
      ],
      importantInfo: [
        "Approximately 2.5 hours travel time each way with comfortable rest stops.",
        "Comfortable walking shoes, sunglasses, and camera are essential.",
      ],
    },
  },
  {
    id: "quad-biking-desert-safari",
    slug: "quad-biking-desert-safari",
    title: "Quad Biking Desert Safari",
    subtitle: "High-octane ATV quad bike adventure on open sand dunes",
    category: "Adventure Tours",
    image: "/services/Desert Safaris.png",
    duration: "4-5 Hours",
    timing: "Morning or Afternoon Sessions Available",
    pickup: "Door-to-Door Hotel Pickup in Abu Dhabi",
    rating: "4.9",
    reviews: 970,
    price: "AED 260",
    badge: "THRILL SEEKER",
    highlights: ["Powerful 350cc/400cc Quads", "Full Safety Gear & Briefing", "Open Desert Track Riding", "Photo Stop on High Dune"],
    description: {
      intro:
        "Take command of your own powerful all-terrain vehicle. Feel the surge of horsepower as you climb, drift, and conquer the sand dunes with professional safety marshals guiding you through thrilling desert courses.",
      sections: [
        {
          heading: "High-Power Modern All-Terrain Quads",
          body:
            "Choose from fully automatic 350cc to 400cc Yamaha and Polaris quad bikes. Following a thorough safety briefing and gear fitting (helmets, goggles, gloves), you head out onto open sand circuits designed for both beginners and experienced adrenaline seekers.",
          bulletPoints: [
            "30 or 60-minute quad biking sessions on dedicated open desert dunes",
            "Full safety gear provided: DOT-certified helmets, goggles & gloves",
            "Led by professional desert marshals ensuring maximum thrill and safety",
          ],
        },
        {
          heading: "Sandboarding & Dune Panorama",
          body:
            "After your quad session, test your balance sandboarding down sheer dune slopes and enjoy refreshing soft drinks and cold water under shaded desert canopies.",
        },
      ],
      inclusions: [
        "Round-trip transfers in air-conditioned 4x4 Land Cruiser",
        "Quad bike rental (30 min or 60 min options)",
        "Full safety briefing and equipment (helmet, goggles, gloves)",
        "Sandboarding on high dunes",
        "Complimentary bottled water and soft drinks",
        "Photo stops at panoramic viewpoints",
      ],
      exclusions: [
        "Camp BBQ dinner (can be combined with evening safari package)",
        "Extreme dune buggy upgrades (available on arrival)",
      ],
      importantInfo: [
        "Minimum age to operate single quad bike is 15 years old.",
        "No formal driving license required; automatic transmission makes operation straightforward.",
      ],
    },
  },
];

