import { useState, useEffect, useRef } from 'react';
import {
    MessageSquare,
    X,
    RotateCcw,
    Send,
    ExternalLink,
    ChevronRight,
    Sparkles,
    Bot,
    ArrowLeft,
    CheckCircle2,
} from 'lucide-react';
import {
    FAQ_CATEGORIES,
    type FaqCategory,
    type SubQuestion,
    WHATSAPP_PHONE_NUMBER,
    getWhatsAppUrl,
} from '@/data/chatbotFaq';

function WhatsAppIcon({ className = 'w-4 h-4' }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
    );
}

interface Message {
    id: string;
    sender: 'bot' | 'user';
    text: string;
    timestamp: string;
    category?: FaqCategory;
    subQuestion?: SubQuestion;
    showCategories?: boolean;
    showSubQuestions?: boolean;
    showWhatsAppAction?: boolean;
}

export default function VaniChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<FaqCategory | null>(null);
    const [selectedQuestion, setSelectedQuestion] = useState<SubQuestion | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [hasUnread, setHasUnread] = useState(true);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const formatCurrentTime = () => {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    // Initialize with welcome message
    const resetChat = () => {
        setSelectedCategory(null);
        setSelectedQuestion(null);
        setMessages([
            {
                id: 'welcome-1',
                sender: 'bot',
                text: 'Namaste! 🙏 I am **Vani**, your aviation consultancy assistant at **Sakthi Aviation Consultancy Services (SACS)**.\n\nHow can I assist you today? Please choose a topic below to explore our services, technical procedures, and FAQs:',
                timestamp: formatCurrentTime(),
                showCategories: true,
            },
        ]);
    };

    useEffect(() => {
        resetChat();
    }, []);

    // Auto-scroll on new message
    useEffect(() => {
        if (isOpen) {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isTyping, isOpen]);

    // Focus input on open
    useEffect(() => {
        if (isOpen) {
            setHasUnread(false);
        }
    }, [isOpen]);

    // Handle user selecting a Level 1 Category
    const handleCategorySelect = (category: FaqCategory) => {
        setSelectedCategory(category);
        setSelectedQuestion(null);

        const time = formatCurrentTime();
        const userMsg: Message = {
            id: `user-${Date.now()}`,
            sender: 'user',
            text: `${category.iconLabel} ${category.title}`,
            timestamp: time,
        };

        setMessages((prev) => [...prev, userMsg]);
        setIsTyping(true);

        setTimeout(() => {
            setIsTyping(false);
            const botMsg: Message = {
                id: `bot-${Date.now()}`,
                sender: 'bot',
                text: `Here are specific questions regarding **${category.title}**. Please select the question you would like to know about:`,
                timestamp: formatCurrentTime(),
                category: category,
                showSubQuestions: true,
            };
            setMessages((prev) => [...prev, botMsg]);
        }, 400);
    };

    // Handle user selecting a Level 2 SubQuestion
    const handleQuestionSelect = (subQ: SubQuestion, category: FaqCategory) => {
        setSelectedQuestion(subQ);

        const time = formatCurrentTime();
        const userMsg: Message = {
            id: `user-${Date.now()}`,
            sender: 'user',
            text: subQ.question,
            timestamp: time,
        };

        setMessages((prev) => [...prev, userMsg]);
        setIsTyping(true);

        setTimeout(() => {
            setIsTyping(false);
            const botMsg: Message = {
                id: `bot-${Date.now()}`,
                sender: 'bot',
                text: subQ.answer,
                timestamp: formatCurrentTime(),
                category: category,
                subQuestion: subQ,
                showWhatsAppAction: true,
            };
            setMessages((prev) => [...prev, botMsg]);
        }, 500);
    };

    // Handle returning to all categories
    const handleBackToCategories = () => {
        setSelectedCategory(null);
        setSelectedQuestion(null);

        const time = formatCurrentTime();
        const userMsg: Message = {
            id: `user-${Date.now()}`,
            sender: 'user',
            text: '← Back to Main Topics',
            timestamp: time,
        };

        setMessages((prev) => [...prev, userMsg]);
        setIsTyping(true);

        setTimeout(() => {
            setIsTyping(false);
            const botMsg: Message = {
                id: `bot-${Date.now()}`,
                sender: 'bot',
                text: 'Please select another topic you would like to explore:',
                timestamp: formatCurrentTime(),
                showCategories: true,
            };
            setMessages((prev) => [...prev, botMsg]);
        }, 350);
    };

    // Handle text input submission (search/ask)
    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        const text = inputValue.trim();
        if (!text) return;

        const time = formatCurrentTime();
        const userMsg: Message = {
            id: `user-${Date.now()}`,
            sender: 'user',
            text: text,
            timestamp: time,
        };

        setMessages((prev) => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        setTimeout(() => {
            setIsTyping(false);
            const lower = text.toLowerCase();

            // Try to match category or question
            let matchedCategory: FaqCategory | null = null;
            let matchedSubQ: SubQuestion | null = null;

            for (const cat of FAQ_CATEGORIES) {
                if (
                    cat.title.toLowerCase().includes(lower) ||
                    cat.shortDesc.toLowerCase().includes(lower)
                ) {
                    matchedCategory = cat;
                    break;
                }
                for (const sub of cat.subQuestions) {
                    if (
                        sub.question.toLowerCase().includes(lower) ||
                        sub.answer.toLowerCase().includes(lower)
                    ) {
                        matchedCategory = cat;
                        matchedSubQ = sub;
                        break;
                    }
                }
                if (matchedSubQ) break;
            }

            if (matchedSubQ && matchedCategory) {
                const botMsg: Message = {
                    id: `bot-${Date.now()}`,
                    sender: 'bot',
                    text: `**${matchedSubQ.question}**\n\n${matchedSubQ.answer}`,
                    timestamp: formatCurrentTime(),
                    category: matchedCategory,
                    subQuestion: matchedSubQ,
                    showWhatsAppAction: true,
                };
                setMessages((prev) => [...prev, botMsg]);
            } else if (matchedCategory) {
                const botMsg: Message = {
                    id: `bot-${Date.now()}`,
                    sender: 'bot',
                    text: `I found relevant topics under **${matchedCategory.title}**. Please select a specific question:`,
                    timestamp: formatCurrentTime(),
                    category: matchedCategory,
                    showSubQuestions: true,
                };
                setMessages((prev) => [...prev, botMsg]);
            } else {
                // Fallback message with option to chat on WhatsApp or pick topic
                const fallbackSubQ: SubQuestion = {
                    id: 'custom-query',
                    question: text,
                    answer: `Not able to find your query for "${text}"? Our senior aviation consultants are ready to assist you directly. Chat on WhatsApp at **${WHATSAPP_PHONE_NUMBER}** for immediate guidance.`,
                    whatsappPrefill: `Hello SACS Team, I was not able to find my query on your website chatbot: "${text}". Please assist me.`,
                };

                const botMsg: Message = {
                    id: `bot-${Date.now()}`,
                    sender: 'bot',
                    text: `I couldn't find an exact match for **"${text}"** in our standard FAQs.\n\nNot able to find your query? You can **Chat on WhatsApp** directly with our senior aviation consultants at **${WHATSAPP_PHONE_NUMBER}**, or select from the topics below:`,
                    timestamp: formatCurrentTime(),
                    subQuestion: fallbackSubQ,
                    showWhatsAppAction: true,
                    showCategories: true,
                };
                setMessages((prev) => [...prev, botMsg]);
            }
        }, 500);
    };

    return (
        <aside aria-label="Aviation Chatbot Vani" className="font-sans">
            {/* Floating Launcher Button */}
            <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3">
                {/* Prompt badge tooltip when closed */}
                {!isOpen && hasUnread && (
                    <div
                        onClick={() => setIsOpen(true)}
                        className="hidden sm:flex items-center gap-2 bg-white text-gray-800 text-[13px] font-semibold py-2 px-3.5 rounded-full shadow-lg border border-gray-100 cursor-pointer hover:shadow-xl transition-all animate-bounce"
                    >
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#168DE2] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#168DE2]"></span>
                        </span>
                        <span>Chat with <strong>Vani</strong></span>
                    </div>
                )}

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Close Vani Chatbot' : 'Open Vani Chatbot'}
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#168DE2]/30 ${
                        isOpen
                            ? 'bg-[#2A1F4A] hover:bg-[#1E1437]'
                            : 'bg-gradient-to-r from-[#168DE2] to-[#402E6D] hover:shadow-[#168DE2]/30'
                    }`}
                >
                    {isOpen ? (
                        <X className="w-6 h-6 transition-transform duration-200 rotate-0" />
                    ) : (
                        <div className="relative flex items-center justify-center">
                            <MessageSquare className="w-6 h-6" />
                            {hasUnread && (
                                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
                            )}
                        </div>
                    )}
                </button>
            </div>

            {/* Chatbot Window */}
            {isOpen && (
                <div
                    role="dialog"
                    aria-label="Vani Chat Window"
                    className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[410px] h-[600px] max-h-[calc(100vh-110px)] bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-fadeIn"
                >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#402E6D] via-[#2A1F4A] to-[#1E1437] text-white p-4 sm:p-5 flex items-center justify-between shadow-md relative">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#168DE2] to-[#8CCBFF] flex items-center justify-center text-white font-bold text-lg shadow-inner">
                                    <Bot className="w-5 h-5 text-white" />
                                </div>
                                <span
                                    className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#2A1F4A] rounded-full"
                                    title="Online"
                                />
                            </div>
                            <div>
                                <div className="flex items-center gap-1.5">
                                    <h2 className="font-display font-bold text-[17px] text-white leading-tight">
                                        Vani
                                    </h2>
                                    <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold uppercase tracking-wider bg-white/15 text-[#8CCBFF] px-1.5 py-0.5 rounded">
                                        <Sparkles className="w-2.5 h-2.5" /> SACS AI
                                    </span>
                                </div>
                                <p className="text-[11.5px] text-white/70 font-medium">
                                    Aviation Consultancy Assistant
                                </p>
                            </div>
                        </div>

                        {/* Top controls */}
                        <div className="flex items-center gap-1">
                            <button
                                onClick={resetChat}
                                title="Restart chat"
                                aria-label="Restart chat"
                                className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                <RotateCcw className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setIsOpen(false)}
                                title="Close chat"
                                aria-label="Close chat"
                                className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Messages Body */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F8F9FC]">
                        {messages.map((msg) => (
                            <div key={msg.id} className="space-y-3">
                                {/* Message bubble */}
                                <div
                                    className={`flex items-start gap-2.5 ${
                                        msg.sender === 'user' ? 'justify-end' : 'justify-start'
                                    }`}
                                >
                                    {msg.sender === 'bot' && (
                                        <div className="w-7 h-7 rounded-full bg-[#402E6D] text-white flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5">
                                            V
                                        </div>
                                    )}

                                    <div
                                        className={`max-w-[85%] rounded-2xl px-4 py-3 text-[13.5px] leading-relaxed shadow-sm ${
                                            msg.sender === 'user'
                                                ? 'bg-[#168DE2] text-white rounded-tr-none'
                                                : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                                        }`}
                                    >
                                        <div className="whitespace-pre-line">
                                            {/* Format markdown bold */}
                                            {msg.text.split('\n\n').map((paragraph, pIdx) => (
                                                <p key={pIdx} className={pIdx > 0 ? 'mt-2' : ''}>
                                                    {paragraph.split(/(\*\*.*?\*\*)/g).map((part, bIdx) => {
                                                        if (part.startsWith('**') && part.endsWith('**')) {
                                                            return (
                                                                <strong key={bIdx} className="font-semibold text-gray-900">
                                                                    {part.slice(2, -2)}
                                                                </strong>
                                                            );
                                                        }
                                                        return part;
                                                    })}
                                                </p>
                                            ))}
                                        </div>
                                        <span
                                            className={`block text-[10px] mt-1.5 text-right ${
                                                msg.sender === 'user' ? 'text-white/70' : 'text-gray-400'
                                            }`}
                                        >
                                            {msg.timestamp}
                                        </span>
                                    </div>
                                </div>

                                {/* Option Level 1: Categories / Main Topics */}
                                {msg.showCategories && (
                                    <div className="pl-9 pr-1 space-y-2 pt-1 animate-fadeIn">
                                        <p className="text-[11.5px] font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                            Select a topic:
                                        </p>
                                        <div className="grid grid-cols-1 gap-2">
                                            {FAQ_CATEGORIES.map((cat) => (
                                                <button
                                                    key={cat.id}
                                                    onClick={() => handleCategorySelect(cat)}
                                                    className="w-full text-left p-3 rounded-xl bg-white border border-gray-200 hover:border-[#168DE2] hover:bg-[#168DE2]/5 text-gray-800 text-[13px] font-medium transition-all shadow-sm flex items-center justify-between group cursor-pointer"
                                                >
                                                    <div className="flex items-center gap-2.5">
                                                        <span className="text-base">{cat.iconLabel}</span>
                                                        <div>
                                                            <span className="font-semibold block text-gray-900 group-hover:text-[#168DE2] transition-colors">
                                                                {cat.title}
                                                            </span>
                                                            <span className="text-[11px] text-gray-500 block">
                                                                {cat.shortDesc}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#168DE2] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                                                </button>
                                            ))}
                                        </div>

                                        {/* Cannot find query in topics option */}
                                        <div className="pt-1">
                                            <a
                                                href={getWhatsAppUrl(
                                                    'Hello SACS, I am not able to find my query in the chatbot topics. Please assist me with my aviation requirement.'
                                                )}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full text-left p-3 rounded-xl bg-gradient-to-r from-emerald-50 via-teal-50/60 to-emerald-50 border border-emerald-300 hover:border-emerald-500 hover:bg-emerald-100/50 text-gray-800 text-[13px] font-medium transition-all shadow-xs flex items-center justify-between group cursor-pointer"
                                            >
                                                <div className="flex items-center gap-2.5">
                                                    <div className="w-8 h-8 rounded-lg bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                                                        <WhatsAppIcon className="w-4 h-4 fill-white" />
                                                    </div>
                                                    <div>
                                                        <span className="font-semibold block text-emerald-950 group-hover:text-emerald-800">
                                                            Not able to find your query?
                                                        </span>
                                                        <span className="text-[11.5px] text-emerald-700 block">
                                                            Chat on WhatsApp: <strong className="font-bold underline text-emerald-950">{WHATSAPP_PHONE_NUMBER}</strong>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-1 text-emerald-700 group-hover:text-emerald-800 font-semibold text-xs flex-shrink-0">
                                                    <span>Chat</span>
                                                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                )}

                                {/* Option Level 2: Specific SubQuestions */}
                                {msg.showSubQuestions && msg.category && (
                                    <div className="pl-9 pr-1 space-y-2 pt-1 animate-fadeIn">
                                        <p className="text-[11.5px] font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                            Questions in {msg.category.title}:
                                        </p>
                                        <div className="space-y-2">
                                            {msg.category.subQuestions.map((subQ) => (
                                                <button
                                                    key={subQ.id}
                                                    onClick={() => handleQuestionSelect(subQ, msg.category!)}
                                                    className="w-full text-left p-3 rounded-xl bg-white border border-gray-200 hover:border-[#402E6D] hover:bg-[#402E6D]/5 text-gray-800 text-[13px] font-medium transition-all shadow-sm flex items-center justify-between group cursor-pointer"
                                                >
                                                    <span className="text-gray-800 group-hover:text-[#402E6D] transition-colors pr-2">
                                                        {subQ.question}
                                                    </span>
                                                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#402E6D] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                                                </button>
                                            ))}
                                        </div>

                                        {/* Cannot find query in this topic */}
                                        <div className="pt-1">
                                            <a
                                                href={getWhatsAppUrl(
                                                    `Hello SACS, I am looking for information on "${msg.category.title}", but was not able to find my query. Please assist.`
                                                )}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full text-left p-3 rounded-xl bg-gradient-to-r from-emerald-50 via-teal-50/60 to-emerald-50 border border-emerald-300 hover:border-emerald-500 hover:bg-emerald-100/50 text-gray-800 text-[13px] font-medium transition-all shadow-xs flex items-center justify-between group cursor-pointer"
                                            >
                                                <div className="flex items-center gap-2.5">
                                                    <div className="w-8 h-8 rounded-lg bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                                                        <WhatsAppIcon className="w-4 h-4 fill-white" />
                                                    </div>
                                                    <div>
                                                        <span className="font-semibold block text-emerald-950 group-hover:text-emerald-800">
                                                            Not able to find your query?
                                                        </span>
                                                        <span className="text-[11.5px] text-emerald-700 block">
                                                            Chat on WhatsApp: <strong className="font-bold underline text-emerald-950">{WHATSAPP_PHONE_NUMBER}</strong>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-1 text-emerald-700 group-hover:text-emerald-800 font-semibold text-xs flex-shrink-0">
                                                    <span>Chat</span>
                                                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                                </div>
                                            </a>
                                        </div>

                                        <button
                                            onClick={handleBackToCategories}
                                            className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#168DE2] hover:text-[#0875D1] transition-colors pt-2 px-1 cursor-pointer"
                                        >
                                            <ArrowLeft className="w-3.5 h-3.5" />
                                            Back to all topics
                                        </button>
                                    </div>
                                )}

                                {/* Option Level 3: WhatsApp Action CTA & Follow-up */}
                                {msg.showWhatsAppAction && msg.subQuestion && (
                                    <div className="pl-9 pr-1 space-y-3 pt-1 animate-fadeIn">
                                        {/* WhatsApp card */}
                                        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-50 via-emerald-100/40 to-teal-50 border border-emerald-300 shadow-sm">
                                            <div className="flex items-center gap-2 text-emerald-950 font-semibold text-[13px] mb-1">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                                                <span>Not able to find your query or need more details?</span>
                                            </div>
                                            <p className="text-[11.5px] text-emerald-800/85 mb-3 leading-normal">
                                                Connect directly with our senior aviation consultants on WhatsApp at <strong className="text-emerald-950 font-bold">{WHATSAPP_PHONE_NUMBER}</strong> for immediate guidance and technical consultation.
                                            </p>
                                            <a
                                                href={getWhatsAppUrl(
                                                    msg.subQuestion.whatsappPrefill ||
                                                        `Hello SACS, I want to discuss regarding: ${msg.subQuestion.question}`
                                                )}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-[13px] shadow-sm transition-all hover:shadow-md cursor-pointer"
                                            >
                                                <WhatsAppIcon className="w-4 h-4 fill-white" />
                                                <span>Chat on WhatsApp: {WHATSAPP_PHONE_NUMBER}</span>
                                                <ExternalLink className="w-3.5 h-3.5" />
                                            </a>
                                        </div>

                                        {/* Navigation action buttons */}
                                        <div className="flex flex-wrap gap-2 pt-1">
                                            {msg.category && (
                                                <button
                                                    onClick={() => handleCategorySelect(msg.category!)}
                                                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-gray-700 hover:border-[#168DE2] hover:text-[#168DE2] text-[11.5px] font-semibold transition-colors cursor-pointer"
                                                >
                                                    More in {msg.category.title.split(' ')[0]}
                                                </button>
                                            )}
                                            <button
                                                onClick={handleBackToCategories}
                                                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-gray-700 hover:border-[#402E6D] hover:text-[#402E6D] text-[11.5px] font-semibold transition-colors cursor-pointer"
                                            >
                                                ← All Topics
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Typing animation */}
                        {isTyping && (
                            <div className="flex items-center gap-2 pl-1 animate-fadeIn">
                                <div className="w-7 h-7 rounded-full bg-[#402E6D] text-white flex-shrink-0 flex items-center justify-center text-xs font-bold">
                                    V
                                </div>
                                <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none px-4 py-2.5 shadow-sm">
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></span>
                                        <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0.2s]"></span>
                                        <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0.4s]"></span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Fixed quick-bar: Not able to find query? Chat on WhatsApp */}
                    <div className="bg-gradient-to-r from-emerald-50 via-teal-50/70 to-emerald-50 border-t border-emerald-200/80 px-3 py-2 flex items-center justify-between gap-2 text-[11.5px]">
                        <span className="text-emerald-950 font-medium truncate">
                            Not able to find your query?
                        </span>
                        <a
                            href={getWhatsAppUrl(
                                'Hello SACS Team, I was not able to find my query on your website chatbot and would like assistance.'
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-bold text-emerald-800 hover:text-emerald-950 bg-white hover:bg-emerald-100/70 border border-emerald-300 px-2.5 py-1 rounded-full flex-shrink-0 transition-colors shadow-2xs cursor-pointer"
                            title={`Chat on WhatsApp: ${WHATSAPP_PHONE_NUMBER}`}
                        >
                            <WhatsAppIcon className="w-3.5 h-3.5 fill-[#25D366]" />
                            <span>Chat on WhatsApp: <strong className="underline text-emerald-950">{WHATSAPP_PHONE_NUMBER}</strong></span>
                        </a>
                    </div>

                    {/* Footer Input Area */}
                    <form
                        onSubmit={handleSendMessage}
                        className="p-3 bg-white border-t border-gray-100 flex items-center gap-2"
                    >
                        <input
                            ref={inputRef}
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type a question or select from options above..."
                            className="flex-1 bg-gray-50 border border-gray-200 focus:border-[#168DE2] focus:bg-white focus:outline-none rounded-xl px-3.5 py-2.5 text-[13px] text-gray-800 placeholder:text-gray-400 transition-all"
                        />
                        <button
                            type="submit"
                            disabled={!inputValue.trim()}
                            aria-label="Send message"
                            className="w-10 h-10 rounded-xl bg-[#168DE2] hover:bg-[#0875D1] disabled:opacity-40 disabled:hover:bg-[#168DE2] text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            )}
        </aside>
    );
}
