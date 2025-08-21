import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Store,
  FlaskConical,
  Gamepad2,
  School,
  Cross,
  Fuel,
  Dumbbell,
} from "lucide-react";

// ---------------- Custom Tilt Hook ----------------
function useTilt(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      el.style.transform = `rotateX(${y * 10}deg) rotateY(${x * 10}deg) scale(1.05)`;
    };

    const reset = () => {
      el.style.transform = `rotateX(0) rotateY(0) scale(1)`;
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", reset);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, [ref]);
}

// ---------------- Reusable TiltCard ----------------
function TiltCard({ icon: Icon, title }) {
  const ref = useRef(null);
  useTilt(ref);

  return (
    <motion.div
      ref={ref}
      className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center cursor-pointer transition-all"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-10 h-10 mb-4 text-indigo-600" />
      <h3 className="text-lg font-semibold">{title}</h3>
    </motion.div>
  );
}

// ---------------- Features Data ----------------
const features = [
  { icon: ShoppingBag, title: "Shopping Center" },
  { icon: FlaskConical, title: "Biotech Park" },
  { icon: Gamepad2, title: "Recreation & Entertainment Hub" },
  { icon: School, title: "School" },
  { icon: Store, title: "Shopping Mall" },
  { icon: Cross, title: "Hospital" },
  { icon: Fuel, title: "Petrol Pump" },
  { icon: Dumbbell, title: "Sports Complex" },
];

export default function Project() {
  return (
    <div className="overflow-hidden">
      {/* ---------------- About Section ---------------- */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            We are the next generation of thinkers, creators, and innovators,
            driven by a vision to transform challenges into opportunities. With
            a passion for technology, sustainability, and human progress, we
            believe in building solutions that don’t just serve today but shape
            a smarter, brighter tomorrow. Our journey is fueled by creativity,
            collaboration, and a relentless pursuit of excellence—because the
            future belongs to those who dare to reimagine it.
          </motion.p>
        </div>
      </section>

      {/* ---------------- Core Features Section ---------------- */}
      <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-12"
          >
            Core Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <TiltCard key={i} icon={f.icon} title={f.title} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Connectivity Section ---------------- */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-8"
          >
            Connectivity
          </motion.h2>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-4 text-lg text-gray-700"
          >
            <li>🚗 Road: Yamuna Expressway (Main Access)</li>
            <li>✈️ Airport: Nearby International Connectivity</li>
          </motion.ul>
        </div>
      </section>

      {/* ---------------- Gallery Section ---------------- */}
      <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-12"
          >
            Gallery
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <motion.img
                key={i}
                src={`https://picsum.photos/500/300?random=${i}`}
                alt="Gallery"
                className="rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Master Plan Section ---------------- */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-8"
          >
            Master Plan
          </motion.h2>
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg inline-block text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg">📐 Total Area: 29,487 SQ.YD</p>
            <p className="text-lg">🛣 Road Area: 8,268 SQ.YD</p>
            <p className="text-lg">🌳 Park & Club Area: 700 SQ.YD</p>
            <p className="text-lg">🏠 Plot Area: 20,519 SQ.YD</p>
          </motion.div>
        </div>
      </section>

      {/* ---------------- Google Map Section ---------------- */}
      <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-8"
          >
            Location
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.576548691327!2d77.5902553!3d28.4743879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cddf29e1b8b4d%3A0xaaa2abbd1e8f3b1c!2sYamuna%20Expressway!5e0!3m2!1sen!2sin!4v1691762156789!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
