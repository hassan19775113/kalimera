import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
  height?: 'full' | 'large' | 'medium';
}

const HeroSection = ({
  title,
  subtitle,
  description,
  backgroundImage,
  ctaText,
  ctaLink,
  height = 'full'
}: HeroSectionProps) => {
  const heightClasses = {
    full: 'h-screen',
    large: 'h-[80vh]',
    medium: 'h-[60vh]'
  };

  return (
    <section
      className={`relative ${heightClasses[height]} min-h-[500px] flex items-center justify-center overflow-hidden`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {subtitle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-5 flex justify-center"
            >
              <span className="inline-block px-5 py-2 rounded-full bg-black/70 backdrop-blur-md border border-gold/60 font-bebas tracking-[0.3em] text-gold text-xs md:text-sm shadow-xl">
                {subtitle}
              </span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-block text-lg md:text-xl text-white mb-8 max-w-2xl bg-black/55 backdrop-blur-sm px-5 py-3 rounded-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
            >
              {description}
            </motion.p>
          )}
          
          {ctaText && ctaLink && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Link
                to={ctaLink}
                className="btn-gold text-lg px-10 py-4 inline-block hover:scale-105 transition-transform"
              >
                {ctaText}
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
