"use client";

import { useState } from "react";
import { MapPin, Star, Heart, ChevronLeft, ChevronRight } from "lucide-react";

type Experience = {
  title: string;
  location: string;
  duration: string;
  rating: number;
  reviews: string;
  price: string;
  images: string[];
  tags: string[];
};

const indiaExperiences: Experience[] = [
  {
    title: "Taj Mahal Sunrise Guided Tour",
    location: "Agra",
    duration: "3 Hours",
    rating: 4.8,
    reviews: "124,532",
    price: "₹1,299",
    images: [
      "/images/experiences/tajmahal.jpg",
      "/images/experiences/tajmahal-2.jpg",
      "/images/experiences/tajmahal-3.jpg",
    ],
    tags: ["Families", "Instant Confirmation"],
  },
  {
    title: "Jaipur City Palace & Amber Fort Tour",
    location: "Jaipur",
    duration: "6 Hours",
    rating: 4.6,
    reviews: "23,112",
    price: "₹999",
    images: [
      "/images/experiences/jaipur.jpg",
      "/images/experiences/jaipur-2.jpg",
    ],
    tags: ["Groups", "24 Hours Confirmation"],
  },
  {
    title: "Kerala Backwaters Houseboat Experience",
    location: "Alleppey",
    duration: "1 Day",
    rating: 4.7,
    reviews: "18,904",
    price: "₹2,499",
    images: [
      "/images/experiences/kerala-houseboat.jpg",
      "/images/experiences/kerala-houseboat-2.jpg",
    ],
    tags: ["Couples", "Instant Confirmation"],
  },
  {
    title: "Manali Solang Valley Adventure",
    location: "Manali",
    duration: "8 Hours",
    rating: 4.5,
    reviews: "9,342",
    price: "₹1,799",
    images: [
      "/images/experiences/manali.jpg",
      "/images/experiences/manali-2.jpg",
    ],
    tags: ["Adventure", "Families"],
  },
  {
    title: "Varanasi Ganga Aarti Experience",
    location: "Varanasi",
    duration: "2 Hours",
    rating: 4.9,
    reviews: "56,210",
    price: "₹699",
    images: [
      "/images/experiences/varanasi.jpg",
      "/images/experiences/varanasi-2.jpg",
    ],
    tags: ["Spiritual", "Instant Confirmation"],
  },
  {
    title: "Ranthambore Jungle Safari",
    location: "Rajasthan",
    duration: "4 Hours",
    rating: 4.4,
    reviews: "7,812",
    price: "₹3,499",
    images: [
      "/images/experiences/ranthambore.jpg",
      "/images/experiences/ranthambore-2.jpg",
    ],
    tags: ["Wildlife", "Groups"],
  },
  {
    title: "Leh Ladakh Scenic Day Tour",
    location: "Ladakh",
    duration: "10 Hours",
    rating: 4.6,
    reviews: "6,103",
    price: "₹2,999",
    images: [
      "/images/experiences/ladakh.jpg",
      "/images/experiences/ladakh-2.jpg",
    ],
    tags: ["Adventure", "48 Hours Confirmation"],
  },
  {
    title: "Mumbai Street Food & Heritage Walk",
    location: "Mumbai",
    duration: "3 Hours",
    rating: 4.7,
    reviews: "14,522",
    price: "₹799",
    images: [
      "/images/experiences/mumbai.jpg",
      "/images/experiences/mumbai-2.jpg",
    ],
    tags: ["Food", "Groups"],
  },
];

export default function DiscoverIndiaExperiences() {
  const [liked, setLiked] = useState<number[]>([]);
  const [activeSlide, setActiveSlide] = useState<Record<number, number>>({});

  const toggleLike = (i: number) => {
    setLiked((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));
  };

  const next = (card: number, total: number) => {
    setActiveSlide((p) => ({
      ...p,
      [card]: ((p[card] || 0) + 1) % total,
    }));
  };

  const prev = (card: number, total: number) => {
    setActiveSlide((p) => ({
      ...p,
      [card]: (p[card] || 0) === 0 ? total - 1 : (p[card] || 0) - 1,
    }));
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[44px] md:text-[56px] font-extrabold leading-tight tracking-tight">
            Discover top-rated
            <br />
            Indian experiences
          </h2>
          <p className="mt-4 text-gray-600 max-w-[640px] mx-auto">
            Handpicked tours, activities & local adventures across India
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {indiaExperiences.map((item, i) => {
            const index = activeSlide[i] || 0;

            return (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-[0_16px_45px_rgba(0,0,0,0.12)] transition"
              >
                {/* Image Carousel */}
                <div className="relative h-[200px] group">
                  <img
                    src={item.images[index]}
                    className="w-full h-full object-cover transition-all duration-300"
                  />

                  {/* Heart */}
                  <button
                    onClick={() => toggleLike(i)}
                    className="absolute top-3 left-3 bg-white/90 p-2 rounded-full"
                  >
                    <Heart
                      size={16}
                      className={
                        liked.includes(i)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-500"
                      }
                    />
                  </button>

                  {/* Duration */}
                  <span className="absolute bottom-3 right-3 bg-black/85 text-white text-xs px-3 py-1 rounded-full">
                    {item.duration}
                  </span>

                  {/* Arrows */}
                  {item.images.length > 1 && (
                    <>
                      <button
                        onClick={() => prev(i, item.images.length)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-1 rounded-full text-white opacity-0 group-hover:opacity-100 transition"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={() => next(i, item.images.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-1 rounded-full text-white opacity-0 group-hover:opacity-100 transition"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </>
                  )}

                  {/* Dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {item.images.map((_, d) => (
                      <span
                        key={d}
                        className={`w-2 h-2 rounded-full ${
                          d === index ? "bg-white" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex justify-between text-xs text-gray-600 mb-2">
                    <div className="flex items-center gap-1">
                      <MapPin size={13} /> {item.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={13} className="fill-yellow-500 text-yellow-500" />
                      {item.rating}
                      <span className="text-gray-400">
                        ({item.reviews})
                      </span>
                    </div>
                  </div>

                  <h3 className="text-sm font-semibold mb-3">{item.title}</h3>

                  <div className="flex flex-wrap gap-2 text-xs text-gray-600 mb-4">
                    {item.tags.map((t, idx) => (
                      <span key={idx}>• {t}</span>
                    ))}
                  </div>

                  <div className="border-t my-3" />

                  <p className="text-xs text-gray-500">From</p>
                  <p className="text-lg font-semibold">
                    {item.price}
                    <span className="text-xs text-gray-500"> / Person</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="rounded-full border border-orange-500 px-7 py-3 text-sm font-medium text-orange-600 hover:bg-orange-500 hover:text-white transition">
            All Sightseeing →
          </button>
        </div>
      </div>
    </section>
  );
}
