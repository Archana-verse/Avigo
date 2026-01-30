// src/data/experiences.ts
// Consolidated typed experiences data.
export interface ExperienceItem {
  title: string;
  img?: string; // optional, so placeholder works
}

export interface ExperienceCityGroup {
  activities: ExperienceItem[];
  attractions: ExperienceItem[];
}

export const EXPERIENCE_CITIES = [
  { city: "Goa", tagline: "Tourist Paradise by the Sea" },
  { city: "Mumbai", tagline: "City of Dreams & Skylines" },
  { city: "Delhi", tagline: "Mini India in One City" },
  { city: "Jaipur", tagline: "Royal Pink City of Rajasthan" },
  { city: "Bangalore", tagline: "India’s Culture Meets Tech Hub" },
] as const;

export const EXPERIENCES: Record<
  typeof EXPERIENCE_CITIES[number]["city"],
  ExperienceCityGroup
> = {
  Goa: {
  activities: [
    { title: "Sunset Cruise on Mandovi", img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769409544/Sunset_Cruise_on_Mandovi_bxwnzp.png" },
    { title: "Island Hopping Snorkel Trip", img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769409542/Island_mkowig.png" },
    { title: "Scuba Dive with Instructor", img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769409545/scuba_faupu7.png" },
    { title: "Beach Night Party", img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769409543/Beach_night_s48syl.png" },
  ],
  attractions: [
    { title: "Baga Beach", img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769409544/baga_beach_dhzn7x.png" },
    { title: "Fort Aguada", img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769409543/Fort_Aguada_ylvf76.png" },
    { title: "Basilica of Bom Jesus", img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769409543/Basilica_bkhrke.png" },
    { title: "Dudhsagar Falls", img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769409548/Dudhsagar_Falls_exevjw.png" },
  ],
}
,

  Mumbai: {
  activities: [
    {
      title: "Bollywood Insider Tour",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769411616/Bollywood_eausen.png",
    },
    {
      title: "Marine Drive Walk",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769411616/Marine_zihnx1.png",
    },
    {
      title: "Mumbai Afterdark Crawl",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769411616/Afterdark_gsbuhk.png",
    },
    {
      title: "Sailing at Gateway",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769411616/Sailing_qblm6u.png",
    },
  ],
  attractions: [
    {
      title: "Gateway of India",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769411615/Gateway_efawfi.png",
    },
    {
      title: "Marine Drive",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769411615/Drive_Aerial_zh0e3n.png",
    },
    {
      title: "Elephanta Caves",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769411615/Elephanta_Caves_znrevu.png",
    },
    {
      title: "Haji Ali Dargah",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769411614/Haji_Ali_ejsmly.png",
    },
  ],
}
,

  Delhi: {
  activities: [
    {
      title: "Old Delhi Food Safari",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769414760/street_food_hbm945.png", 
    },
    {
      title: "Heritage Walk in Shahjahanabad",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769413045/Heritage_sudwof.png",
    },
    {
      title: "Night City Drive",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769413031/Night_City_rchm7l.png",
    },
    {
      title: "Bazaar Hunt in Chandni Chowk",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769413032/baazar_kxwa9p.png",
    },
  ],
  attractions: [
    {
      title: "India Gate",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769413031/india_gate_g7qljf.png",
    },
    {
      title: "Red Fort",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769413031/Red_Fort_wrjrqx.png",
    },
    {
      title: "Qutub Minar",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769413030/Qutub_Minar_v26ubs.png",
    },
    {
      title: "Lotus Temple",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769413029/lotus_temple_covxv6.png",
    },
  ],
},
  Jaipur: {
  activities: [
    {
      title: "Royal Palace Tour",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769415870/Royal_k3gkne.png",
    },
    {
      title: "Amer Fort Jeep Ride",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769415869/Amer_Fort_brvxkw.png",
    },
    {
      title: "Pink City Food Walk",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769415869/Pink_City_r5em58.png",
    },
    {
      title: "Heritage Photo Tour",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769415869/Heritage_nkf3ho.png",
    },
  ],
  attractions: [
    {
      title: "Hawa Mahal",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769415868/hawa_mahal_fzofjz.png",
    },
    {
      title: "Amer Fort",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769415868/Amer_Fort_courtyard_oqckeu.png",
    },
    {
      title: "City Palace",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769415868/City_Palace_j8vilo.png",
    },
    {
      title: "Jantar Mantar",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769415868/Jantar_Mantar_t3en9m.png",
    },
  ],
},

  Bangalore: {
  activities: [
    {
      title: "Craft Beer Pub Crawl",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769417074/Craft_Beer_nvc0jd.png",
    },
    {
      title: "Night Cycling Trails",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769417076/Night_Cycling_hmyqud.png",
    },
    {
      title: "South Indian Food Tour",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769416902/South_Indian_Food_d8kfse.png",
    },
    {
      title: "Culture Museum Walk",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769416863/Culture_Museum_qvp93l.png",
    },
  ],
  attractions: [
    {
      title: "Lalbagh Botanical Garden",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769416863/Lalbagh_botanical_garden_bczkvd.png",
    },
    {
      title: "Cubbon Park",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769416863/Cubbon_Park_nkypc3.png",
    },
    {
      title: "Bangalore Palace",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769416868/Bangalore_Palace_Medium_xbby9l.png",
    },
    {
      title: "Vidhana Soudha",
      img: "https://res.cloudinary.com/ddofg7mcl/image/upload/v1769416862/Vidhana_Soudha_fhx2xv.png",
    },
  ],
},
};
