import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LetterByLetter } from "../../components/LetterByLetter";

const IMAGES = [
  { src: "/png/menu/appetizers.png", slug: "appetizers" },
  { src: "/png/menu/mains.png",      slug: "mains" },
  { src: "/png/menu/pizzas.png",     slug: "pizzas" },
  { src: "/png/menu/dessert.png",    slug: "desserts" },
  { src: "/png/menu/cocktails.png",  slug: "cocktails" },
  { src: "/png/menu/shot-pods.png",  slug: "shot-pods" },
];

const MenuPage: React.FC = () => {
  return (
    <div className="menu-page pb-10">
      <div className="heading py-16">
        <h1 className="mb-5">
          <LetterByLetter lines={["Crafted to Be Shared"]} align="center" />
        </h1>

        <p className="base-text max-w-[300px] mx-auto text-center">
          A menu designed to surprise, inspire, and leave a lasting impression.
        </p>
      </div>

      <div className="mx-auto w-full px-6 md:px-[3vw]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {IMAGES.map(({ src, slug }, index) => (
            <motion.div
              key={slug}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.15 }}
            >
              <Link to={`/menu/${slug}`} className="block">
                <img
                  src={src}
                  alt={slug}
                  className="w-full aspect-[434/653] object-cover hover:opacity-90 transition-opacity"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
