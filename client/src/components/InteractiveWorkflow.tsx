import { useCallback, useRef, useState, useMemo, useEffect } from 'react';
import ReactFlow, { 
  Background, 
  Controls, 
  MiniMap, 
  useNodesState, 
  useEdgesState,
  addEdge,
  ConnectionLineType,
  Node,
  Edge,
  Connection,
  NodeTypes,
  ReactFlowProvider,
  Position,
  Handle
} from 'reactflow';
import 'reactflow/dist/style.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Smartphone, Laptop, Package, Rocket, Globe, Lightbulb, PenTool, Cpu, X, CheckCircle, MousePointer, MousePointerClick, BarChart, PieChart, Brain, Share2, TrendingUp, Target } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Tooltip from '@radix-ui/react-tooltip';

// Node data interface
interface NodeData {
  label: string;
  description: string;
  details?: string;
  services?: string[];
}

// Node dialog component
function NodeDetailsDialog({ open, onOpenChange, data }: { 
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: NodeData;
}) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate PageClip integration
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 1000);
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-[#111] border border-[#333] p-6 shadow-xl z-50 focus:outline-none overflow-auto">
          <div className="flex items-center mb-4">
            <div className="mr-3 bg-[#00A19C] w-10 h-10 rounded-full flex items-center justify-center">
              {data.label === 'Ideation' && <Lightbulb className="w-5 h-5 text-white" />}
              {data.label === 'Design' && <PenTool className="w-5 h-5 text-white" />}
              {data.label === 'Development' && <Code className="w-5 h-5 text-white" />}
              {data.label === 'Marketing' && <TrendingUp className="w-5 h-5 text-white" />}
              {data.label === 'AI Sales Campaign' && <Brain className="w-5 h-5 text-white" />}
            </div>
            <Dialog.Title className="text-xl font-bold text-white">{data.label}</Dialog.Title>
            <Dialog.Close className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <X className="w-5 h-5" />
            </Dialog.Close>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-300 mb-4">{data.details}</p>
            
            <h3 className="text-[#00A19C] font-bold mb-2">Services:</h3>
            <ul className="space-y-2">
              {data.services?.map((service, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-2 text-[#00A19C] mt-1">•</div>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="border-t border-[#333] pt-4">
            {!formSubmitted ? (
              <>
                <h3 className="text-white font-bold mb-3">Interested in {data.label.toLowerCase()} services?</h3>
                <p className="text-gray-400 text-sm mb-4">Let me know your requirements and I'll get back to you within 24 hours.</p>
                
                <form 
                  action="https://send.pageclip.co/G4lUfoze3TuY8ZF9wkNvXImociBBpmuP/contact-form" 
                  className="pageclip-form space-y-4" 
                  method="post"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    setLoading(true);
                    
                    fetch(form.action, {
                      method: 'POST',
                      body: new FormData(form),
                      headers: {
                        'Authorization': `Bearer ${import.meta.env.PAGECLIP_API_KEY}`
                      }
                    })
                    .then(response => {
                      if (!response.ok) throw new Error('Network response was not ok');
                      setFormSubmitted(true);
                    })
                    .catch(error => {
                      console.error('Error:', error);
                      alert('There was an error submitting the form. Please try again.');
                    })
                    .finally(() => {
                      setLoading(false);
                    });
                  }}
                >
                  <input type="hidden" name="service" value={data.label} />
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      className="w-full bg-[#222] border border-[#333] rounded-md p-2 text-white focus:ring-[#00A19C] focus:border-[#00A19C] focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      className="w-full bg-[#222] border border-[#333] rounded-md p-2 text-white focus:ring-[#00A19C] focus:border-[#00A19C] focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={3}
                      className="w-full bg-[#222] border border-[#333] rounded-md p-2 text-white focus:ring-[#00A19C] focus:border-[#00A19C] focus:outline-none resize-none"
                      placeholder={`I'm interested in your ${data.label.toLowerCase()} services...`}
                      required
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full py-2 px-4 bg-[#00A19C] hover:bg-[#008F8A] text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00A19C] disabled:opacity-50"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Inquiry'}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#222] mb-4">
                  <CheckCircle className="w-8 h-8 text-[#00A19C]" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Thank You!</h3>
                <p className="text-gray-400">Your inquiry has been received. I'll get back to you about the {data.label.toLowerCase()} services shortly.</p>
                <button
                  onClick={() => onOpenChange(false)}
                  className="mt-4 py-2 px-4 bg-[#222] hover:bg-[#333] text-white font-medium rounded-md transition-colors focus:outline-none"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

// Node click indicator component for the tooltip
const NodeClickIndicator = () => {
  return (
    <div className="absolute -top-2 -right-2 z-10">
      <motion.div
        className="bg-[#00A19C] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0.7 }}
        animate={{ 
          scale: [0.8, 1, 0.8],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <MousePointerClick size={10} />
      </motion.div>
    </div>
  );
};

// Custom node components with handles and dialog trigger
function IdeaNode({ data }: { data: NodeData }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  
  return (
    <>
      <div className="relative">
        <Handle type="source" position={Position.Right} id="a" style={{ background: '#00A19C', width: 8, height: 8 }} />
        <Handle type="target" position={Position.Left} id="b" style={{ background: '#333333', width: 8, height: 8 }} />
        
        {/* Clickable indicator */}
        <NodeClickIndicator />
        
        {/* Tooltip that appears on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-[#333] text-white text-xs py-1 px-3 rounded whitespace-nowrap">
                Click to explore {data.label} services
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.div 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0,161,156,0.5)' }}
          className="bg-[#111] rounded-lg border border-[#333] p-4 w-48 cursor-pointer"
          onClick={() => setOpen(true)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="bg-[#00A19C] w-8 h-8 rounded-full flex items-center justify-center">
                <Lightbulb className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-white font-bold">{data.label}</h3>
            </div>
          </div>
          <p className="text-gray-400 text-xs">{data.description}</p>
          <div className="mt-3 bg-[#222] h-1 w-full rounded-full">
            <motion.div 
              className="bg-gradient-to-r from-[#00A19C] to-[#333333] h-1 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
      
      <NodeDetailsDialog open={open} onOpenChange={setOpen} data={data} />
    </>
  );
}

function DesignNode({ data }: { data: NodeData }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  
  return (
    <>
      <div className="relative">
        <Handle type="source" position={Position.Right} id="a" style={{ background: '#00A19C', width: 8, height: 8 }} />
        <Handle type="target" position={Position.Left} id="b" style={{ background: '#333333', width: 8, height: 8 }} />
        
        {/* Clickable indicator */}
        <NodeClickIndicator />
        
        {/* Tooltip that appears on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-[#333] text-white text-xs py-1 px-3 rounded whitespace-nowrap">
                Click to explore {data.label} services
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.div 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0,161,156,0.5)' }}
          className="bg-[#111] rounded-lg border border-[#333] p-4 w-48 cursor-pointer"
          onClick={() => setOpen(true)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="bg-[#00A19C] w-8 h-8 rounded-full flex items-center justify-center">
                <PenTool className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-white font-bold">{data.label}</h3>
            </div>
          </div>
          <p className="text-gray-400 text-xs">{data.description}</p>
          <div className="mt-3 flex justify-between gap-1">
            <motion.div 
              className="bg-[#333333] h-3 w-1/3 rounded"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            />
            <motion.div 
              className="bg-[#00A19C] h-3 w-1/3 rounded"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            />
            <motion.div 
              className="bg-[#333333] h-3 w-1/3 rounded"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />
          </div>
        </motion.div>
      </div>
      
      <NodeDetailsDialog open={open} onOpenChange={setOpen} data={data} />
    </>
  );
}

function DevelopNode({ data }: { data: NodeData }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  
  return (
    <>
      <div className="relative">
        <Handle type="source" position={Position.Right} id="a" style={{ background: '#00A19C', width: 8, height: 8 }} />
        <Handle type="target" position={Position.Left} id="b" style={{ background: '#333333', width: 8, height: 8 }} />
        
        {/* Clickable indicator */}
        <NodeClickIndicator />
        
        {/* Tooltip that appears on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-[#333] text-white text-xs py-1 px-3 rounded whitespace-nowrap">
                Click to explore {data.label} services
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.div 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0,161,156,0.5)' }}
          className="bg-[#111] rounded-lg border border-[#333] p-4 w-48 cursor-pointer"
          onClick={() => setOpen(true)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="bg-[#00A19C] w-8 h-8 rounded-full flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-white font-bold">{data.label}</h3>
            </div>
          </div>
          <p className="text-gray-400 text-xs">{data.description}</p>
          <div className="mt-3">
            <motion.div className="flex gap-1 mb-1">
              <div className="h-2 w-6 bg-[#333333] rounded-sm"></div>
              <div className="h-2 w-10 bg-[#222] rounded-sm"></div>
            </motion.div>
            <motion.div 
              className="flex gap-1 mb-1"
              animate={{ x: [-2, 2, -2] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="h-2 w-4 bg-[#222] rounded-sm"></div>
              <div className="h-2 w-8 bg-[#00A19C] rounded-sm"></div>
              <div className="h-2 w-4 bg-[#222] rounded-sm"></div>
            </motion.div>
            <motion.div className="flex gap-1">
              <div className="h-2 w-12 bg-[#222] rounded-sm"></div>
              <div className="h-2 w-6 bg-[#333333] rounded-sm"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <NodeDetailsDialog open={open} onOpenChange={setOpen} data={data} />
    </>
  );
}

function MarketingNode({ data }: { data: NodeData }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  
  return (
    <>
      <div className="relative">
        <Handle type="source" position={Position.Right} id="a" style={{ background: '#00A19C', width: 8, height: 8 }} />
        <Handle type="target" position={Position.Left} id="b" style={{ background: '#333333', width: 8, height: 8 }} />
        
        {/* Clickable indicator */}
        <NodeClickIndicator />
        
        {/* Tooltip that appears on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-[#333] text-white text-xs py-1 px-3 rounded whitespace-nowrap">
                Click to explore {data.label} services
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.div 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0,161,156,0.5)' }}
          className="bg-[#111] rounded-lg border border-[#333] p-4 w-48 cursor-pointer"
          onClick={() => setOpen(true)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="bg-[#00A19C] w-8 h-8 rounded-full flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-white font-bold">{data.label}</h3>
            </div>
          </div>
          <p className="text-gray-400 text-xs">{data.description}</p>
          <div className="mt-3 flex justify-between">
            <motion.div 
              className="bg-[#111] w-8 h-12 border border-[#333] rounded flex items-center justify-center"
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <BarChart className="w-4 h-4 text-[#333333]" />
            </motion.div>
            <motion.div 
              className="bg-[#111] w-12 h-8 border border-[#333] rounded flex items-center justify-center"
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Share2 className="w-5 h-5 text-[#00A19C]" />
            </motion.div>
            <motion.div 
              className="bg-[#111] w-8 h-8 border border-[#333] rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Target className="w-4 h-4 text-[#333333]" />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <NodeDetailsDialog open={open} onOpenChange={setOpen} data={data} />
    </>
  );
}

function AISalesCampaignNode({ data }: { data: NodeData }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  
  return (
    <>
      <div className="relative">
        <Handle type="source" position={Position.Right} id="a" style={{ background: '#00A19C', width: 8, height: 8 }} />
        <Handle type="target" position={Position.Left} id="b" style={{ background: '#333333', width: 8, height: 8 }} />
        
        {/* Clickable indicator */}
        <NodeClickIndicator />
        
        {/* Tooltip that appears on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-[#333] text-white text-xs py-1 px-3 rounded whitespace-nowrap">
                Click to explore {data.label} services
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.div 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0,161,156,0.5)' }}
          className="bg-[#111] rounded-lg border border-[#333] p-4 w-48 cursor-pointer"
          onClick={() => setOpen(true)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="bg-[#00A19C] w-8 h-8 rounded-full flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-white font-bold">{data.label}</h3>
            </div>
          </div>
          <p className="text-gray-400 text-xs">{data.description}</p>
          <div className="mt-3 flex justify-between">
            <motion.div 
              className="bg-[#111] w-8 h-8 border border-[#333] rounded-full flex items-center justify-center"
              animate={{ 
                rotate: [0, 360],
                borderColor: ['#333', '#00A19C', '#333']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Brain className="w-4 h-4 text-[#00A19C]" />
            </motion.div>
            
            <div className="w-[80px] h-8 relative">
              <motion.div
                className="absolute w-full h-1 top-1/2 -translate-y-1/2"
                style={{ background: "linear-gradient(90deg, #00A19C, #333333)" }}
              />
              
              <motion.div
                className="absolute left-0 top-0 w-full flex justify-between"
                animate={{ y: [-4, 0, -4] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div 
                  className="w-2 h-2 rounded-full bg-[#00A19C]"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                />
                <motion.div 
                  className="w-2 h-2 rounded-full bg-[#333333]"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                />
                <motion.div 
                  className="w-2 h-2 rounded-full bg-[#00A19C]"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                />
              </motion.div>
              
              <motion.div
                className="absolute left-0 bottom-0 w-full flex justify-between"
                animate={{ y: [4, 0, 4] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div 
                  className="w-2 h-2 rounded-full bg-[#333333]"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.9 }}
                />
                <motion.div 
                  className="w-2 h-2 rounded-full bg-[#00A19C]"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 1.2 }}
                />
                <motion.div 
                  className="w-2 h-2 rounded-full bg-[#333333]"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 }}
                />
              </motion.div>
            </div>
            
            <motion.div 
              className="bg-[#111] w-8 h-8 border border-[#333] rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <PieChart className="w-4 h-4 text-[#00A19C]" />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <NodeDetailsDialog open={open} onOpenChange={setOpen} data={data} />
    </>
  );
}

// Initial nodes with Mercedes F1 inspired styling
const initialNodes: Node<NodeData>[] = [
  {
    id: '1',
    type: 'ideaNode',
    position: { x: 100, y: 100 },
    data: {
      label: 'Ideation', 
      description: 'Concept & Research',
      details: 'The foundation of every successful project begins with a strong concept. During the ideation phase, we research market trends, analyze competition, and identify unique opportunities for your business.',
      services: [
        'Market Analysis',
        'Competitive Research',
        'Concept Development',
        'Strategic Planning',
        'Opportunity Identification'
      ]
    },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: '2',
    type: 'designNode',
    position: { x: 300, y: 50 },
    data: {
      label: 'Design', 
      description: 'UI/UX Prototyping',
      details: 'With Mercedes-inspired precision, our design phase focuses on creating intuitive, beautiful interfaces that deliver exceptional user experiences. We prototype and iterate until perfection.',
      services: [
        'UI/UX Design',
        'Wireframing',
        'Prototyping',
        'User Testing',
        'Visual Design Systems'
      ]
    },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: '3',
    type: 'developNode',
    position: { x: 500, y: 100 },
    data: {
      label: 'Development', 
      description: 'High-Performance Code',
      details: 'Our development process emphasizes high-performance, clean code that powers responsive applications. Using modern frameworks and best practices, we build scalable solutions.',
      services: [
        'Frontend Development',
        'Backend Development',
        'API Integration',
        'Database Architecture',
        'Performance Optimization'
      ]
    },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: '4',
    type: 'testNode',
    position: { x: 700, y: 50 },
    data: {
      label: 'Marketing', 
      description: 'Strategic Promotion',
      details: 'Effective marketing strategies that boost your brand visibility and attract your target audience. We create comprehensive marketing plans tailored to your business goals.',
      services: [
        'Content Marketing',
        'Social Media Campaigns',
        'SEO Optimization',
        'Email Marketing',
        'Analytics & Reporting'
      ]
    },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: '5',
    type: 'deployNode',
    position: { x: 900, y: 100 },
    data: {
      label: 'AI Sales Campaign', 
      description: 'Intelligent Conversion',
      details: 'Cutting-edge AI-driven sales strategies that identify potential customers and optimize conversion rates. Our AI tools analyze customer behavior to create personalized approaches.',
      services: [
        'AI Lead Generation',
        'Predictive Analytics',
        'Automated Follow-ups',
        'Conversion Optimization',
        'Sales Performance Monitoring'
      ]
    },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
];

// Initial edges
const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#00A19C', strokeWidth: 2 } },
  { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#00A19C', strokeWidth: 2 } },
  { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#00A19C', strokeWidth: 2 } },
  { id: 'e4-5', source: '4', target: '5', animated: true, style: { stroke: '#00A19C', strokeWidth: 2 } },
];

// Interactive hint component that floats and pulses to guide users
function InteractionHint() {
  const [showHint, setShowHint] = useState(true);
  
  // Auto-hide the hint after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 10000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <AnimatePresence>
      {showHint && (
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="bg-[#00A19C]/90 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 max-w-[280px]"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            <MousePointerClick className="w-5 h-5 text-white flex-shrink-0" />
            <p className="text-sm font-medium">Click any node to explore services and details!</p>
            <motion.div 
              className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full text-[#00A19C] font-bold flex items-center justify-center cursor-pointer"
              whileHover={{ scale: 1.1 }}
              onClick={() => setShowHint(false)}
            >
              ×
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full h-1 bg-white/50 mt-2 rounded-full overflow-hidden"
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 10, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function InteractiveWorkflow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const [showHints, setShowHints] = useState(true);
  
  // Hide hints after user has interacted with a node
  useEffect(() => {
    const hasInteracted = localStorage.getItem('workflow_interacted');
    if (hasInteracted) {
      setShowHints(false);
    }
    
    // Mark as interacted after 1 visit to avoid showing hints on every visit
    return () => {
      localStorage.setItem('workflow_interacted', 'true');
    };
  }, []);

  // Define node types - memoize to avoid React Flow warnings
  const nodeTypes = useMemo<NodeTypes>(() => ({
    ideaNode: IdeaNode,
    designNode: DesignNode,
    developNode: DevelopNode,
    testNode: MarketingNode,
    deployNode: AISalesCampaignNode
  }), []);
  
  // Handle new connections
  const onConnect = useCallback(
    (params: Connection) => {
      // Create a new edge with animated style
      const newEdge = {
        ...params,
        animated: true,
        style: { stroke: '#00A19C', strokeWidth: 2 }
      };
      setEdges((eds) => addEdge(newEdge, eds));
    },
    [setEdges]
  );

  // Handle drag and drop functionality
  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  return (
    <div className="w-full h-[500px] md:h-[600px] bg-[#111] rounded-lg shadow-lg border border-[#333] mb-16 p-2">
      <h2 className="text-center text-2xl font-bold text-white mb-4 font-serif">Interactive Project Workflow</h2>
      <p className="text-center text-gray-400 mb-4 text-sm">Drag nodes to rearrange • Zoom in/out • Pan to explore • Click nodes for details</p>
      <ReactFlowProvider>
        <div className="w-full h-[400px] md:h-[500px] relative" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDragOver={onDragOver}
            nodeTypes={nodeTypes}
            connectionLineType={ConnectionLineType.SmoothStep}
            connectionLineStyle={{ stroke: '#00A19C', strokeWidth: 2 }}
            fitView
            attributionPosition="bottom-left"
          >
            <Background color="#333" gap={16} />
            <Controls />
            <MiniMap 
              nodeColor={(node) => {
                switch (node.type) {
                  case 'ideaNode':
                  case 'designNode':
                  case 'developNode':
                  case 'testNode':
                  case 'deployNode':
                    return '#00A19C';
                  default:
                    return '#333';
                }
              }}
              maskColor="rgba(0, 0, 0, 0.6)"
            />
            
            {/* Show interaction hint for first-time visitors */}
            {showHints && <InteractionHint />}
          </ReactFlow>
        </div>
      </ReactFlowProvider>
      <div className="text-center text-xs text-gray-500 mt-2">
        Interact with this workflow diagram to explore the development, marketing, and AI sales journey
      </div>
    </div>
  );
}