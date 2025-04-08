'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Send, X, MessageSquare, ChevronDown, ChevronUp, Minimize2, Maximize2 } from 'lucide-react'
import { cn } from '@/lib/utils'

// Mock responses for the demo
const mockResponses = [
  {
    question: 'What is asphalt?',
    answer: 'Asphalt is a sticky, black, and highly viscous liquid or semi-solid form of petroleum. It\'s used in road construction, roofing, and waterproofing. At Duval Asphalt, we offer high-quality asphalt products and professional installation services.',
    followUp: 'Would you like to learn more about our asphalt products or services?'
  },
  {
    question: 'How long does asphalt last?',
    answer: 'With proper maintenance, asphalt can last 15-20 years. Regular sealcoating and repairs can extend its lifespan significantly. Duval Asphalt offers comprehensive maintenance services to keep your asphalt in top condition.',
    followUp: 'Would you like to schedule a maintenance inspection?'
  },
  {
    question: 'How much does asphalt paving cost?',
    answer: 'The cost of asphalt paving varies based on factors like area size, preparation needed, and type of asphalt. For an accurate quote, I recommend contacting Duval Asphalt directly. Our team provides free estimates and can work within your budget.',
    followUp: 'Would you like to request a free quote?'
  },
  {
    question: 'What is the best time of year to pave?',
    answer: 'The ideal time for asphalt paving is during warm, dry weather, typically between late spring and early fall. Temperature and humidity affect the curing process. Duval Asphalt can advise on the optimal timing for your specific project.',
    followUp: 'Would you like to discuss your paving timeline with our experts?'
  },
  {
    question: 'How do I maintain my asphalt driveway?',
    answer: 'Regular maintenance includes cleaning, filling cracks, and sealcoating every 2-3 years. Duval Asphalt offers professional maintenance services to keep your driveway looking great and lasting longer.',
    followUp: 'Would you like to learn more about our maintenance services?'
  }
]

// Suggested questions for quick access
const suggestedQuestions = [
  'What is asphalt?',
  'How long does asphalt last?',
  'How much does asphalt paving cost?',
  'What services do you offer?'
]

type Message = {
  id: string
  content: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export function AsphaltBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Effect to open the bot and show greeting message after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
      setIsTyping(true)
      
      // Add initial greeting after a short typing delay
      setTimeout(() => {
        setMessages([{
          id: '1',
          content: 'Hello! 👋 I\'m the Duval Asphalt Assistant. I\'m here to help you with any questions about our asphalt services. Feel free to ask me anything!',
          sender: 'bot',
          timestamp: new Date()
        }])
        setIsTyping(false)
      }, 1000)
    }, 1500) // Delay before opening the bot

    return () => clearTimeout(timer)
  }, [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus()
    }
  }, [isOpen, isMinimized])

  const handleSendMessage = (message?: string) => {
    const textToSend = message || inputValue
    if (!textToSend.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: textToSend,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const response = getBotResponse(textToSend)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const getBotResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase()
    
    // Check for exact matches first
    const exactMatch = mockResponses.find(
      item => item.question.toLowerCase() === lowerQuestion
    )
    
    if (exactMatch) {
      return `${exactMatch.answer}\n\n${exactMatch.followUp}`
    }
    
    // Check for partial matches
    const partialMatch = mockResponses.find(
      item => lowerQuestion.includes(item.question.toLowerCase().split(' ')[0])
    )
    
    if (partialMatch) {
      return `${partialMatch.answer}\n\n${partialMatch.followUp}`
    }
    
    // Default responses
    if (lowerQuestion.includes('price') || lowerQuestion.includes('cost')) {
      return 'The cost of asphalt services varies based on your specific needs. For an accurate quote, I recommend contacting Duval Asphalt directly. Our team provides free estimates and can work within your budget. Would you like to request a free quote?'
    }
    
    if (lowerQuestion.includes('contact') || lowerQuestion.includes('call') || lowerQuestion.includes('phone')) {
      return 'You can reach Duval Asphalt at (904) 296-2020 or visit our website to request a quote. Our team is available to answer your questions and provide professional asphalt services. Would you like to learn more about our services?'
    }
    
    if (lowerQuestion.includes('service') || lowerQuestion.includes('offer')) {
      return 'Duval Asphalt offers a wide range of services including asphalt paving, sealcoating, repairs, and maintenance. We also provide grading services and roll-off containers. Would you like more information about any specific service?'
    }
    
    return 'Thank you for your question about asphalt. While I don\'t have specific information about that, Duval Asphalt\'s team of experts would be happy to help. Would you like to learn more about our services or request a quote?'
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  const handleSuggestedQuestion = (question: string) => {
    handleSendMessage(question)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full h-14 w-14 bg-yellow-500 hover:bg-yellow-600 text-black shadow-lg flex items-center justify-center"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      ) : (
        <Card className={cn(
          "w-80 md:w-96 bg-gray-900 border border-gray-800 shadow-xl flex flex-col",
          isMinimized ? "h-auto" : "h-[500px]"
        )}>
          <div className="p-3 bg-yellow-500 text-black font-semibold flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="/asphalt-bot-avatar.svg" alt="Asphalt Bot" />
                <AvatarFallback className="bg-black text-yellow-500">AB</AvatarFallback>
              </Avatar>
              <span>Duval Asphalt Assistant</span>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-black hover:bg-black/10"
                onClick={() => setIsMinimized(!isMinimized)}
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-black hover:bg-black/10"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {!isMinimized && (
            <>
              <CardContent className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex gap-2 max-w-[80%]",
                      message.sender === 'user' ? "ml-auto flex-row-reverse" : ""
                    )}
                  >
                    {message.sender === 'bot' && (
                      <Avatar className="h-6 w-6 mt-1">
                        <AvatarImage src="/asphalt-bot-avatar.svg" alt="Asphalt Bot" />
                        <AvatarFallback className="bg-black text-yellow-500">AB</AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={cn(
                        "rounded-lg p-3 text-sm",
                        message.sender === 'user'
                          ? "bg-yellow-500 text-black"
                          : "bg-gray-800 text-gray-100"
                      )}
                    >
                      <p className="whitespace-pre-line">{message.content}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {formatTime(message.timestamp)}
                      </span>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex gap-2 max-w-[80%]">
                    <Avatar className="h-6 w-6 mt-1">
                      <AvatarImage src="/asphalt-bot-avatar.svg" alt="Asphalt Bot" />
                      <AvatarFallback className="bg-black text-yellow-500">AB</AvatarFallback>
                    </Avatar>
                    <div className="bg-gray-800 rounded-lg p-3 text-sm text-gray-100">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                {messages.length === 1 && !isTyping && (
                  <div className="mt-2">
                    <p className="text-xs text-gray-400 mb-2">Suggested questions:</p>
                    <div className="flex flex-wrap gap-2">
                      {suggestedQuestions.map((question, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="text-xs bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white"
                          onClick={() => handleSuggestedQuestion(question)}
                        >
                          {question}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </CardContent>
              
              <div className="p-3 border-t border-gray-800">
                <div className="flex gap-2">
                  <Input
                    ref={inputRef}
                    placeholder="Ask about asphalt..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="bg-gray-800 border-gray-700 text-gray-100"
                  />
                  <Button
                    onClick={() => handleSendMessage()}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black"
                    disabled={!inputValue.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </Card>
      )}
    </div>
  )
} 