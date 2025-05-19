import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const FinalComponent: React.FC = () => {
  return (
    <div className="w-full relative">
      {/* <h2 className="text-center text-3xl font-bold text-gray-800 my-8">
        Final Birthday Message
      </h2> */}

      <motion.div
        className="w-full flex justify-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl w-full p-4">
          <div className="bg-white rounded-xl shadow-2xl p-8">
            {/* UNO Logo Accent */}
            <div className="flex justify-center mb-6">
              <div className="bg-red-700 rounded-full w-16 h-16 flex items-center justify-center">
                <span className="text-white font-bold text-xl">🫶</span>
              </div>
            </div>
            {/* Animated Headline */}
            <motion.h3
              className="text-3xl font-bold text-gray-800 text-center mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              मनातलं अजून काही...
            </motion.h3>
            {/* Animated Main Message */}
            <motion.p
              className="text-lg text-gray-700 text-center mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              If God truly knows everything… then He must’ve known how much I
              needed you. Every moment with you feels like a blessing written in
              the stars. You’re not just a part of our journey—you are the
              reason for it. Tu Chahiye… bcz I deeply{" "}
              <b>
                <i>love you so much 🌻</i>
              </b>
            </motion.p>
            {/* Animated Heart Icon */}
            <motion.div
              className="my-5 flex justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Heart className="text-red-700" size={32} />
            </motion.div>
            <div className="my-0 w-full flex justify-center">
              <iframe
                className="rounded-lg"
                width="360"
                height="215"
                src="https://www.youtube.com/embed/zuvla6ABKbs?si=Y2XoV1_0AjNUJhja"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <i className="block mt-3 text-center text-gray-600 font-normal">
              PS : Watch the full video :)
            </i>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FinalComponent;
