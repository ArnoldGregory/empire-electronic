/*
  EMPIRE ELECTRONICS — PRODUCT LIST
  ---------------------------------
  This is the only file you need to edit to change products or prices.

  Each product looks like this:
    { name: "Product name", cat: "Category", price: 24400, img: "redmi-15c.webp", icon: "phone" },

  - price: a plain number with no commas (24400), or null to show "Ask for price".
  - img:   a photo file inside the /img folder. Leave it out to show an icon instead.
  - icon:  the drawing used when there is no photo: phone, plug, disp, spk, blend, kettle, tv, laptop, fan, bulb.
  - Categories are created automatically from the "cat" values, in the order they first appear.
*/
window.EMPIRE = {
  pricesUpdated: "November 2026",
  orderNumber: "254702854231",
  products: [
    // Phones
    { name: "Redmi 15C 4G, 8GB/256GB", cat: "Phones", price: 24400, img: "redmi-15c.webp", icon: "phone" },
    { name: "Redmi Note 17 4G, 8GB/256GB", cat: "Phones", price: 38500, icon: "phone" },

    // Phone accessories
    { name: "Samsung 45W Type C-C Charger", cat: "Phone accessories", price: 900, icon: "plug" },
    { name: "Samsung 25W Type C-C Charger", cat: "Phone accessories", price: 700, icon: "plug" },

    // Home theatre
    { name: "Amtec 2.1 AM-506 / AM-608", cat: "Home theatre", price: 6000, img: "amtec-am506-am608.webp", icon: "spk" },
    { name: "Amtec Woofer 3.1 AM-311/313/314", cat: "Home theatre", price: 6000, icon: "spk" },
    { name: "Amtec Woofer 3.1 AM-317/318", cat: "Home theatre", price: 6000, icon: "spk" },
    { name: "Amtec Woofer 3.1 AM-310", cat: "Home theatre", price: 6300, icon: "spk" },
    { name: "Amtec Woofer 3.1 AM-731", cat: "Home theatre", price: 9600, icon: "spk" },
    { name: "Amtec Soundbar AM-04", cat: "Home theatre", price: 11200, img: "amtec-soundbar-am04.webp", icon: "spk" },
    { name: "Ailipu KL-6501AD 5.1 Home Theatre", cat: "Home theatre", price: 16000, icon: "spk" },
    { name: "Nunix 5.1ch Deluxe Home Theatre", cat: "Home theatre", price: 16500, icon: "spk" },
    { name: "Hisense Soundbar 2.1 HS2100 240W", cat: "Home theatre", price: 16500, icon: "spk" },
    { name: "Ailipu KL-6310 3.1 Home Theatre", cat: "Home theatre", price: null, img: "ailipu-kl6310.webp", icon: "spk" },
    { name: "Hisense Soundbar AX5100Q 5.1", cat: "Home theatre", price: null, img: "hisense-ax5100q.webp", icon: "spk" },

    // Water dispensers
    { name: "Sonar C3 Hot and Normal", cat: "Water dispensers", price: 3400, img: "sonar-c3.webp", icon: "disp" },
    { name: "Sonar A5C Hot and Cold", cat: "Water dispensers", price: 4300, icon: "disp" },
    { name: "Electromate Hot and Cold Dispenser", cat: "Water dispensers", price: 4700, icon: "disp" },
    { name: "Sonar B5C Hot and Cold", cat: "Water dispensers", price: 5500, img: "sonar-b5c.webp", icon: "disp" },
    { name: "Sonar B7C Hot, Normal and Cold", cat: "Water dispensers", price: 6000, icon: "disp" },
    { name: "Sonar L9C 3-Tap Top Load", cat: "Water dispensers", price: 6700, icon: "disp" },
    { name: "Vitron Hot, Normal and Cold", cat: "Water dispensers", price: 8500, icon: "disp" },
    { name: "Electromate Bottom Load with Coffee Maker", cat: "Water dispensers", price: 10900, img: "electromate-coffee-dispenser.webp", icon: "disp" },

    // Blenders
    { name: "Nunix AK200 Blender 2 in 1", cat: "Blenders", price: 2999, icon: "blend" },
    { name: "Smartpro 2 in 1 Blender 1.8L", cat: "Blenders", price: 3200, icon: "blend" },
    { name: "Silvercrest SC-1589 Blender", cat: "Blenders", price: 3600, img: "silvercrest-sc1589.webp", icon: "blend" },
    { name: "Ailyons YT-8009 High Speed Blender", cat: "Blenders", price: 3600, img: "ailyons-yt8009.webp", icon: "blend" },
    { name: "Signature Commercial Blender 2000W", cat: "Blenders", price: 10500, icon: "blend" },

    // Cooking and kitchen
    { name: "Syinix Microwave Oven", cat: "Cooking and kitchen", price: 10500, img: "syinix-microwave.webp", icon: "kettle" },
    { name: "Euroken Gas Cooker with Oven", cat: "Cooking and kitchen", price: 16500, img: "euroken-gas-cooker.webp", icon: "kettle" },
    { name: "Reki 6L Air Fryer", cat: "Cooking and kitchen", price: null, img: "reki-air-fryer.webp", icon: "kettle" },
    { name: "Electric Lunch Box", cat: "Cooking and kitchen", price: null, img: "electric-lunch-box.webp", icon: "kettle" }
  ]
};
