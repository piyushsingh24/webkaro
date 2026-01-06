import { motion } from 'framer-motion';
import { FaReact, FaNode, FaDatabase, FaAws } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiPostgresql, SiStripe } from 'react-icons/si';

const TrustBar = () => {
  const techLogos = [
    { icon: FaReact, name: 'React', color: '#61DAFB' },
    { icon: FaNode, name: 'Node.js', color: '#339933' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
    { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
    { icon: FaAws, name: 'AWS', color: '#FF9900' },
    { icon: SiStripe, name: 'Stripe', color: '#635BFF' },
  ];

  return (
    <section className="py-12 bg-main border-b border-border-color">
      <div className="container-custom">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-secondary-600 font-medium">
            Trusted by startups & founders
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {techLogos.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center gap-2 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <tech.icon
                className="text-4xl text-secondary-400 group-hover:text-secondary-700 transition-colors"
                style={{ color: tech.color }}
              />
              <span className="text-xs text-secondary-500 font-medium">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
