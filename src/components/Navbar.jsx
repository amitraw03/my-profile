import React, { useState } from 'react'
import { 
    User2,
    Briefcase,
    MessageCircle,
    Star,
    ChevronDown,
    Menu,
    X,
    Heart
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const [isHovered, setIsHovered] = useState('')

    React.useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'projects', 'testimonials', 'contact']
            const current = sections.find(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })
            setActiveSection(current || '')
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { href: '#about', label: 'About', icon: User2 },
        { href: '#projects', label: 'Projects', icon: Briefcase },
        { href: '#interests', label: 'Interests', icon: Star },
        { href: '#contact', label: 'Contact', icon: MessageCircle }
    ]

    return (
        <motion.header 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className='sticky top-0 z-50 w-full border-b border-gray-800/20 bg-gray-900/75 backdrop-blur-lg backdrop-saturate-150'
        >
            <div className='max-w-7xl mx-auto flex h-16 items-center px-4 lg:px-8'>
                <div className='md:mr-4 flex justify-between w-full'>
                    <motion.a 
                        href="#"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='mr-6 flex items-center space-x-2'
                    >
                        <div className="logo-container font-serif">
                            <motion.span 
                                className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text transform-gpu"
                                style={{ 
                                    textShadow: '0 0 1px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.1)',
                                    fontStyle: 'italic'
                                }}
                            >
                                A
                            </motion.span>
                            <motion.span 
                                className="text-2xl font-bold text-gray-200 ml-1"
                                style={{ 
                                    textShadow: '0 0 1px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.1)',
                                    fontFamily: 'cursive'
                                }}
                            >
                                -Rawat
                            </motion.span>
                        </div>
                    </motion.a>
                    <nav className='md:flex hidden items-center space-x-8 text-lg font-medium'>
                        {navItems.map((item) => {
                            const Icon = item.icon
                            return (
                                <motion.a
                                    key={item.href}
                                    href={item.href}
                                    className={`relative px-3 py-2 transition-colors duration-300 flex items-center gap-2 group`}
                                    onHoverStart={() => setIsHovered(item.href)}
                                    onHoverEnd={() => setIsHovered('')}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <motion.span
                                        animate={{
                                            rotate: isHovered === item.href ? 360 : 0,
                                            scale: isHovered === item.href ? 1.2 : 1
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className={`${
                                            activeSection === item.href.slice(1)
                                            ? 'text-indigo-400'
                                            : 'text-gray-300 group-hover:text-white'
                                        }`}
                                    >
                                        <Icon size={20} />
                                    </motion.span>
                                    <span className={`${
                                        activeSection === item.href.slice(1)
                                        ? 'text-indigo-400'
                                        : 'text-gray-300 group-hover:text-white'
                                    }`}>
                                        {item.label}
                                    </span>
                                    {activeSection === item.href.slice(1) && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-400"
                                            initial={false}
                                            transition={{
                                                type: "spring",
                                                stiffness: 380,
                                                damping: 30
                                            }}
                                        />
                                    )}
                                    <motion.div
                                        className="absolute inset-0 bg-indigo-500/10 rounded-lg -z-10"
                                        initial={{ opacity: 0 }}
                                        animate={{ 
                                            opacity: isHovered === item.href ? 1 : 0,
                                            scale: isHovered === item.href ? 1.05 : 1
                                        }}
                                        transition={{ duration: 0.2 }}
                                    />
                                </motion.a>
                            )
                        })}
                    </nav>
                </div>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className='inline-flex items-center justify-center rounded-md md:hidden text-gray-300'
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span className='sr-only'>Open main menu</span>
                    {mobileMenuOpen ? (
                        <X className='h-6 w-6' aria-hidden="true"/>
                    ) : (
                        <Menu className='h-6 w-6' aria-hidden="true"/>
                    )}
                </motion.button>
            </div>
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className='md:hidden bg-gray-900/90 backdrop-blur-lg'
                    >
                        <div className='space-y-1 px-4 pb-3 pt-2'>
                            {navItems.map((item) => {
                                const Icon = item.icon
                                return (
                                    <motion.a
                                        key={item.href}
                                        href={item.href}
                                        className={` rounded-md px-3 py-2 text-base font-medium transition-colors duration-200 flex items-center gap-3 ${
                                            activeSection === item.href.slice(1)
                                            ? 'bg-indigo-500/20 text-indigo-400'
                                            : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                                        }`}
                                        whileHover={{ x: 4 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <Icon size={20} />
                                        {item.label}
                                    </motion.a>
                                )
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}

export default Navbar