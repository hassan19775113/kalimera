import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface SectionCardProps {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  link: string;
  index?: number;
}

const SectionCard = ({
  title,
  subtitle,
  description,
  image,
  link,
  index = 0
}: SectionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card group"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        {subtitle && (
          <p className="text-sm text-primary font-medium mb-2">{subtitle}</p>
        )}
        <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <Link
          to={link}
          className="inline-flex items-center space-x-2 text-primary font-medium hover:text-primary-dark transition-colors"
        >
          <span>Mehr erfahren</span>
          <svg
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
          
        </Link>
      </div>
    </motion.div>
  );
};

export default SectionCard;
