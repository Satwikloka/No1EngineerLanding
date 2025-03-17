import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// List of reactions the mascot can have
type ReactionType = 'neutral' | 'happy' | 'excited' | 'thinking' | 'surprised' | 'thumbsUp';

interface SpeechBubbleProps {
  text: string;
  type: ReactionType;
}

// The speech bubble that appears when the mascot reacts
const SpeechBubble: React.FC<SpeechBubbleProps> = ({ text, type }) => {
  // Different emoji for different reactions
  const getEmoji = () => {
    switch (type) {
      case 'happy':
        return '😊';
      case 'excited':
        return '🎉';
      case 'thinking':
        return '🤔';
      case 'surprised':
        return '😲';
      case 'thumbsUp':
        return '👍';
      default:
        return '';
    }
  };
  
  return (
    <motion.div
      className="absolute top-0 right-full mr-2 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg max-w-[200px] z-10"
      initial={{ opacity: 0, scale: 0.8, x: 20 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.8, x: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start space-x-2">
        {type !== 'neutral' && (
          <span className="text-xl">{getEmoji()}</span>
        )}
        <p className="text-sm">{text}</p>
      </div>
      {/* Triangle pointer */}
      <div className="absolute top-4 right-[-8px] w-0 h-0 border-t-[8px] border-t-transparent border-l-[8px] border-l-white dark:border-l-gray-800 border-b-[8px] border-b-transparent"></div>
    </motion.div>
  );
};

interface MascotReactionsProps {
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}

export default function MascotReactions({ position = 'bottom-right' }: MascotReactionsProps) {
  const [reaction, setReaction] = useState<ReactionType>('neutral');
  const [showBubble, setShowBubble] = useState(false);
  const [bubbleText, setBubbleText] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [position_, setPosition_] = useState({ x: 0, y: 0 });
  const mascotRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);
  
  // Position class based on the prop
  const positionClass = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
  }[position];
  
  // Function to trigger a reaction with a message
  const triggerReaction = (type: ReactionType, message: string, duration = 3000) => {
    setReaction(type);
    setBubbleText(message);
    setShowBubble(true);
    
    // Clear any existing timeout
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    
    // Set timeout to hide the bubble
    timeoutRef.current = window.setTimeout(() => {
      setShowBubble(false);
      // Reset to neutral after a delay
      window.setTimeout(() => {
        setReaction('neutral');
      }, 500);
    }, duration);
  };
  
  // Random reactions while idle
  useEffect(() => {
    const idleInterval = setInterval(() => {
      // Only show random reactions if not already showing one
      if (!showBubble && Math.random() > 0.7) {
        const reactions: Array<[ReactionType, string]> = [
          ['thinking', 'I wonder what we should build next...'],
          ['happy', 'Ready to help with your next project!'],
          ['excited', 'Check out our amazing services!'],
          ['thumbsUp', 'Great work on your site!']
        ];
        
        const randomReaction = reactions[Math.floor(Math.random() * reactions.length)];
        triggerReaction(randomReaction[0], randomReaction[1]);
      }
    }, 15000); // Every 15 seconds
    
    return () => clearInterval(idleInterval);
  }, [showBubble]);
  
  // Setup listeners for scroll and section visibility
  useEffect(() => {
    // Initial welcome message
    setTimeout(() => {
      triggerReaction('happy', 'Welcome to no1.engineer! I\'m your assistant.');
    }, 3000);
    
    // Detect scroll to different sections
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Get all section elements
      const sections = document.querySelectorAll<HTMLElement>('section[id]');
      
      // Find the current visible section
      let currentSection: HTMLElement | null = null;
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          currentSection = section;
        }
      });
      
      // React based on the visible section
      if (currentSection && !showBubble && currentSection.id) {
        const sectionId = currentSection.id;
        
        switch (sectionId) {
          case 'services':
            triggerReaction('excited', 'Check out our awesome services! Click to learn more about each one.');
            break;
          case 'about':
            triggerReaction('happy', 'Want to know more about us? Feel free to explore!');
            break;
          case 'contact':
            triggerReaction('thumbsUp', 'Ready to discuss your project? Drop us a message!');
            break;
          // Add more sections as needed
        }
      }
    };
    
    // Listen for clicks on interactive elements
    const handleClicks = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if the click was on a service card
      if (target.closest('.card')) {
        triggerReaction('excited', 'Great choice! This service helps businesses grow online.');
      }
      
      // Check if clicked on a process step
      if (target.closest('.process-step')) {
        triggerReaction('thinking', 'This is how we work with our clients to ensure success!');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClicks);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClicks);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [showBubble]);
  
  // Apply classes to head, eyes, etc. based on reaction
  const getReactionClasses = () => {
    switch (reaction) {
      case 'happy':
        return {
          eyes: 'animate-happy-eyes',
          mouth: 'animate-happy-mouth',
          head: 'animate-happy-head'
        };
      case 'excited':
        return {
          eyes: 'animate-excited-eyes',
          mouth: 'animate-excited-mouth',
          head: 'animate-excited-head'
        };
      case 'thinking':
        return {
          eyes: 'animate-thinking-eyes',
          mouth: 'animate-thinking-mouth',
          head: 'animate-thinking-head'
        };
      case 'surprised':
        return {
          eyes: 'animate-surprised-eyes',
          mouth: 'animate-surprised-mouth',
          head: 'animate-surprised-head'
        };
      case 'thumbsUp':
        return {
          eyes: 'animate-happy-eyes',
          mouth: 'animate-happy-mouth',
          head: 'animate-thumbsup-head'
        };
      default:
        return {
          eyes: '',
          mouth: '',
          head: ''
        };
    }
  };
  
  const reactionClasses = getReactionClasses();
  
  // Allow the mascot to be dragged around
  const onDragStart = () => {
    setIsDragging(true);
  };
  
  const onDragEnd = () => {
    setIsDragging(false);
    triggerReaction('happy', 'Thanks for moving me! Is this a better spot?');
  };
  
  return (
    <motion.div
      ref={mascotRef}
      className={`fixed ${positionClass} z-50 cursor-grab ${isDragging ? 'cursor-grabbing' : ''}`}
      drag
      dragMomentum={false}
      dragElastic={0.1}
      whileDrag={{ scale: 1.1 }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      animate={{ 
        y: [0, -10, 0],
      }}
      transition={{ 
        y: { repeat: Infinity, duration: 3, repeatType: "mirror" }
      }}
    >
      {/* Speech bubble */}
      <AnimatePresence>
        {showBubble && <SpeechBubble text={bubbleText} type={reaction} />}
      </AnimatePresence>
      
      {/* Mascot */}
      <div 
        className="relative w-20 h-20 bg-white dark:bg-gray-900 rounded-full shadow-lg border-2 border-gray-200 dark:border-gray-800 overflow-hidden"
        onClick={() => {
          if (!showBubble) {
            triggerReaction('happy', 'Hello there! Need any help with the site?');
          }
        }}
      >
        <motion.svg 
          viewBox="0 0 300 300" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full ${reactionClasses.head}`}
        >
          {/* White Goat Body */}
          <motion.path
            d="M150 250C194.183 250 230 214.183 230 170C230 125.817 194.183 90 150 90C105.817 90 70 125.817 70 170C70 214.183 105.817 250 150 250Z"
            fill="white"
            stroke="#F5F5F5"
            strokeWidth="2"
          />
          
          {/* Goat Face */}
          <motion.path
            d="M150 210C172.091 210 190 192.091 190 170C190 147.909 172.091 130 150 130C127.909 130 110 147.909 110 170C110 192.091 127.909 210 150 210Z"
            fill="#FCFCFC"
          />
          
          {/* Left Ear */}
          <motion.path
            d="M100 120C100 120 80 100 70 80C70 80 90 95 110 110L100 120Z"
            fill="white"
            stroke="#F5F5F5"
            strokeWidth="1"
            animate={reaction === 'excited' ? { rotate: [0, -10, 0, -10, 0] } : {}}
            transition={{ duration: 1, repeat: reaction === 'excited' ? Infinity : 0 }}
          />
          
          {/* Right Ear */}
          <motion.path
            d="M200 120C200 120 220 100 230 80C230 80 210 95 190 110L200 120Z"
            fill="white"
            stroke="#F5F5F5"
            strokeWidth="1"
            animate={reaction === 'excited' ? { rotate: [0, 10, 0, 10, 0] } : {}}
            transition={{ duration: 1, repeat: reaction === 'excited' ? Infinity : 0 }}
          />
          
          {/* Horns */}
          <motion.path
            d="M120 100C120 100 110 80 100 50C100 50 120 70 130 90L120 100Z"
            fill="#EDEDED"
          />
          
          <motion.path
            d="M180 100C180 100 190 80 200 50C200 50 180 70 170 90L180 100Z"
            fill="#EDEDED"
          />
          
          {/* Beard */}
          <motion.path
            d="M150 210C150 210 140 230 130 250C130 250 150 240 170 250C170 250 160 230 150 210Z"
            fill="#F8F8F8"
            stroke="#F0F0F0"
            strokeWidth="1"
            animate={reaction === 'thinking' ? { rotate: [0, 5, 0, -5, 0] } : {}}
            transition={{ duration: 2, repeat: reaction === 'thinking' ? Infinity : 0 }}
          />
          
          {/* Eyes */}
          <motion.circle
            cx="130"
            cy="160"
            r="5"
            fill="#333"
            className={reactionClasses.eyes}
            animate={
              reaction === 'happy' ? { scaleY: [1, 0.3, 1] } :
              reaction === 'excited' ? { scale: [1, 1.2, 1] } : 
              reaction === 'surprised' ? { scale: [1, 1.5, 1] } : 
              reaction === 'thinking' ? { y: [0, -2, 0, -2, 0] } : {}
            }
            transition={{ 
              duration: 0.5, 
              repeat: ['happy', 'excited', 'surprised', 'thinking'].includes(reaction) ? Infinity : 0,
              repeatDelay: 2
            }}
          />
          
          <motion.circle
            cx="170"
            cy="160"
            r="5"
            fill="#333"
            className={reactionClasses.eyes}
            animate={
              reaction === 'happy' ? { scaleY: [1, 0.3, 1] } :
              reaction === 'excited' ? { scale: [1, 1.2, 1] } : 
              reaction === 'surprised' ? { scale: [1, 1.5, 1] } : 
              reaction === 'thinking' ? { y: [0, -2, 0, -2, 0] } : {}
            }
            transition={{ 
              duration: 0.5, 
              repeat: ['happy', 'excited', 'surprised', 'thinking'].includes(reaction) ? Infinity : 0,
              repeatDelay: 2
            }}
          />
          
          {/* Nose/Mouth combined for expressions */}
          <motion.path
            d="M140 180C140 180 150 185 160 180C160 180 155 190 145 190L140 180Z"
            fill="#333"
            className={reactionClasses.mouth}
            animate={
              reaction === 'happy' ? { 
                d: "M140 180C140 180 150 190 160 180C160 180 155 183 145 183L140 180Z" 
              } :
              reaction === 'excited' ? { 
                d: "M140 180C140 180 150 195 160 180C160 180 155 185 145 185L140 180Z",
                y: [0, -2, 0, -2, 0]
              } : 
              reaction === 'surprised' ? { 
                d: "M140 180C140 180 150 184 160 180C160 180 155 195 145 195L140 180Z" 
              } : 
              reaction === 'thinking' ? { 
                d: "M140 185C140 185 145 183 155 183C155 183 155 185 150 187L140 185Z",
                x: [0, 5, 0]
              } : {}
            }
            transition={{ 
              duration: 0.8, 
              repeat: ['happy', 'excited', 'surprised', 'thinking'].includes(reaction) ? Infinity : 0,
              repeatDelay: 2
            }}
          />
          
          {/* Teal Spectacles */}
          <motion.path
            d="M125 160C125 160 135 155 145 160C145 160 135 165 125 160Z"
            stroke="#00A19C"
            strokeWidth="3"
            fill="none"
            animate={reaction === 'surprised' ? { scale: 1.2 } : {}}
          />
          
          <motion.path
            d="M155 160C155 160 165 155 175 160C175 160 165 165 155 160Z"
            stroke="#00A19C"
            strokeWidth="3"
            fill="none"
            animate={reaction === 'surprised' ? { scale: 1.2 } : {}}
          />
          
          {/* Connection between spectacles */}
          <motion.path
            d="M145 160L155 160"
            stroke="#00A19C"
            strokeWidth="2"
          />
          
          {/* Spectacle arms */}
          <motion.path
            d="M125 160L110 155"
            stroke="#00A19C"
            strokeWidth="2"
          />
          
          <motion.path
            d="M175 160L190 155"
            stroke="#00A19C"
            strokeWidth="2"
          />
          
          {/* Thumbs up for thumbsUp reaction */}
          {reaction === 'thumbsUp' && (
            <motion.path
              d="M235 200C235 200 245 190 250 180C250 180 250 220 240 225C230 230 220 220 220 220L235 200Z"
              fill="white"
              stroke="#00A19C"
              strokeWidth="2"
              initial={{ opacity: 0, rotate: -20, x: -10 }}
              animate={{ opacity: 1, rotate: 0, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
          
          {/* Teal glint on glasses - always animated */}
          <motion.circle
            cx="132"
            cy="158"
            r="2"
            fill="#00A19C"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
          />
          
          <motion.circle
            cx="168"
            cy="158"
            r="2"
            fill="#00A19C"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
          />
        </motion.svg>
      </div>
    </motion.div>
  );
}