import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

/* =======================
   Types
======================= */
interface Testimonial {
  name: string;
  role: string;
  image: string;
  review: string;
}

/* =======================
   Data
======================= */
const testimonials: Testimonial[] = [
  {
    name: "Ananya Sharma",
    role: "B.Tech Student",
    image: "/images/testimonials/student1.jpg",
    review:
      "Avigo helped me plan a short Himachal trip effortlessly. The AI suggestions were logical and easy to follow.",
  },
  {
    name: "Rohit Verma",
    role: "Final Year Student",
    image: "/images/testimonials/student2.jpg",
    review:
      "I used Avigo for my college project demo. The itinerary flow and recommendations felt very realistic.",
  },
  {
    name: "Sneha Patel",
    role: "MCA Student",
    image: "/images/testimonials/student3.jpg",
    review:
      "What I liked most was the clean interface and how clearly the travel plan was structured day-wise.",
  },
  {
    name: "Aman Singh",
    role: "Engineering Student",
    image: "/images/testimonials/student4.jpg",
    review:
      "The AI travel support suggestions section makes Avigo stand out from normal planning apps.",
  },
  {
    name: "Pooja Mehta",
    role: "Design Student",
    image: "/images/testimonials/student5.jpg",
    review:
      "As a UI project, Avigo feels premium and well thought out. Loved the experience cards.",
  },
  {
    name: "Karan Malhotra",
    role: "Computer Science Student",
    image: "/images/testimonials/student6.jpg",
    review:
      "Avigo simplifies planning in a way that even first-time travelers can understand easily.",
  },
];

const VISIBLE_CARDS = 3;
const CARD_WIDTH = 360;

/* =======================
   Component
======================= */
const TestimonialsSection: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(autoSlide);
  }, [index]);

  const handlePrev = (): void => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - VISIBLE_CARDS : prev - 1
    );
  };

  const handleNext = (): void => {
    setIndex((prev) =>
      prev >= testimonials.length - VISIBLE_CARDS ? 0 : prev + 1
    );
  };

  return (
    <section className="bg-[#fff6ec] py-28">

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[36px] md:text-[42px] font-extrabold text-black">
            What users say about Avigo
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Feedback from students and early users who explored Avigo as an
            AI-based travel planning project.
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * CARD_WIDTH}px)`,
            }}
          >
            {testimonials.map((item, i) => (
              <div key={i} className="min-w-[340px] perspective">
                <div
                  className="
                    bg-white rounded-2xl p-6 shadow-lg
                    transition-transform duration-500
                    hover:rotate-y-6
                    hover:shadow-xl
                    transform-style-preserve-3d
                  "
                >
                  {/* User */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-black">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Review */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    “{item.review}”
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        size={16}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="
              absolute left-0 top-1/2 -translate-y-1/2
              bg-white p-3 rounded-full shadow
              hover:scale-110 transition
            "
          >
            <ChevronLeft />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="
              absolute right-0 top-1/2 -translate-y-1/2x
              bg-white p-3 rounded-full shadow
              hover:scale-110 transition
            "
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
