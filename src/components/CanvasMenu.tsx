import React from 'react'
import { motion, Variants } from 'framer-motion'

const menuVariants: Variants = {
  open: {
    width: '40%',
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  },
  closed: {
    width: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
      duration: 0.3
    }
  },
  closed: {
    opacity: 0,
    y: 50,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

type CanvasMenuProps = {
  isOpen: boolean
  items: string[]
  toggleMenu: () => void
}

const CanvasMenu: React.FC<CanvasMenuProps> = ({ isOpen, items, toggleMenu }) => {
  return (
    <motion.div
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      variants={menuVariants}
      className='fixed top-0 right-0 bottom-0 bg-black flex flex-col items-center justify-center z-40'
      style={{ width: '40%' }}
    >
      <div className='absolute top-4 right-4 cursor-pointer text-white' onClick={toggleMenu}>
        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
        </svg>
      </div>
      <motion.div initial='closed' animate={isOpen ? 'open' : 'closed'} variants={{ open: { transition: { staggerChildren: 0.1 } }, closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } } }}>
        {isOpen && items.map((item, index) => (
          <motion.div key={index} variants={itemVariants} className='text-white text-3xl my-4 cursor-pointer' onClick={toggleMenu}>
            {item}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default CanvasMenu
