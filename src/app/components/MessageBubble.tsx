import { Message } from '../types';
import { motion } from 'framer-motion';
import LoadingDots from './LoadingDots';

interface MessageBubbleProps {
  message: Message;
  isLoading?: boolean;
}

export default function MessageBubble({ message, isLoading }: MessageBubbleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-4 rounded-lg mb-4 ${
        message.role === 'user'
          ? 'bg-blue-100 ml-auto max-w-[80%]'
          : 'bg-gray-100 mr-auto max-w-[80%]'
      }`}
    >
      {isLoading && message.content === '' ? (
        <LoadingDots />
      ) : (
        <p className="text-gray-800">{message.content}</p>
      )}
    </motion.div>
  );
}