import { motion } from 'framer-motion';
import { CiMail } from 'react-icons/ci';
import { IoLocationOutline } from 'react-icons/io5';

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const ContactCards: React.FC = () => {
  const cards = [
    {
      icon: <CiMail size={60} color="#F7A51E" />,
      title: 'Email Us',
      line1: 'info@ecomhyped.com',
      line2: '+1 (512) 828 6650',
    },
    {
      icon: <IoLocationOutline size={60} color="#F7A51E" />,
      title: 'Visit Office',
      line1: '5900 BALCONES Drives STE 10357',
      line2: 'Austin, TX 78731',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4 py-10">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariant}
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="w-full max-w-[584px] min-h-[256px] bg-[#026F72] rounded-lg px-6 py-8 flex flex-col justify-center gap-5 shadow-lg cursor-pointer"
        >
          <div className="flex justify-start items-center">{card.icon}</div>
          <p className="text-[22px] sm:text-[24px] text-white font-semibold">{card.title}</p>
          <div className="flex flex-col sm:flex-row sm:justify-between text-[16px] sm:text-[18px] text-white gap-2 sm:gap-0">
            <p>{card.line1}</p>
            <p>{card.line2}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactCards;
