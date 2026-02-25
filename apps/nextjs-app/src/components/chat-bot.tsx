'use client';

import { useChat } from 'ai/react';
import { MessageCircle, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
        console.log('ChatBot Mounted');
    }, []);

    const { messages, input, handleInputChange, handleSubmit, isLoading, error, append } = useChat({
        api: '/api/chat',
        onError: (err: Error) => {
            console.error('Chat API Error Details:', err);
        }
    });

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

    if (!mounted) return null;

    const sendSuggestedQuery = (q: string) => {
        console.log('Sending suggested query:', q);
        append({
            role: 'user',
            content: q,
        });
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end pointer-events-auto">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl animate-in slide-in-from-bottom-5 duration-300 sm:w-[400px]">
                    {/* Header */}
                    <div className="flex items-center justify-between bg-sky-600 p-4 text-white shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                                <Bot className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold">Gautham's AI Assistant</h3>
                                <p className="text-[10px] opacity-80">Ask me anything about Gautham</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="rounded-full p-1 hover:bg-white/20 transition-colors"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div
                        ref={scrollRef}
                        className="flex-1 overflow-y-auto bg-slate-50 p-4 space-y-4 min-h-0"
                    >
                        {(!messages || messages.length === 0) && (
                            <div className="flex flex-col items-center justify-center h-full text-center space-y-2 px-4">
                                <div className="h-12 w-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mb-2">
                                    <Bot className="h-6 w-6" />
                                </div>
                                <p className="text-sm font-medium text-slate-900">Hi! I'm Gautham's AI assistant.</p>
                                <p className="text-xs text-slate-500">I've read through Gautham's resume and can answer questions about his experience, projects, or technical skills.</p>
                                <div className="flex flex-wrap gap-2 pt-2 justify-center">
                                    {['What are your top skills?', 'Tell me about HN app', 'Recent experience?'].map((q) => (
                                        <button
                                            key={q}
                                            onClick={() => sendSuggestedQuery(q)}
                                            className="text-[10px] bg-white border border-slate-200 px-2 py-1 rounded-full hover:border-sky-400 hover:text-sky-600 transition-all font-medium"
                                        >
                                            {q}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                        {(messages || []).map((m: any) => (
                            <div
                                key={m.id}
                                className={cn(
                                    "flex gap-3 max-w-[85%]",
                                    m.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                                )}
                            >
                                <div className={cn(
                                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border shadow-sm",
                                    m.role === 'user' ? "bg-white border-slate-200" : "bg-sky-600 border-sky-700 text-white"
                                )}>
                                    {m.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                                </div>
                                <div className={cn(
                                    "rounded-2xl px-4 py-2 text-sm shadow-sm whitespace-pre-wrap",
                                    m.role === 'user'
                                        ? "bg-sky-600 text-white rounded-tr-none"
                                        : "bg-white text-slate-800 border border-slate-200 rounded-tl-none"
                                )}>
                                    {m.content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (!messages || messages.length === 0 || messages[messages.length - 1]?.role !== 'assistant') && (
                            <div className="flex gap-3 max-w-[85%] mr-auto">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-600 border border-sky-700 text-white shadow-sm">
                                    <Bot className="h-4 w-4" />
                                </div>
                                <div className="bg-white text-slate-800 border border-slate-200 rounded-2xl rounded-tl-none px-4 py-2 text-sm shadow-sm flex items-center gap-2">
                                    <Loader2 className="h-3 w-3 animate-spin text-sky-600" />
                                    Thinking...
                                </div>
                            </div>
                        )}
                        {error && (
                            <div className="text-[10px] text-red-500 text-center bg-red-50 p-2 rounded-lg border border-red-100">
                                Error: {error.message || 'Something went wrong. Please check your API key.'}
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSubmit} className="border-t border-slate-200 p-4 bg-white shrink-0">
                        <div className="relative">
                            <input
                                value={input}
                                onChange={handleInputChange}
                                placeholder="Ask something..."
                                className="w-full rounded-full border border-slate-200 py-2 pl-4 pr-10 text-sm focus:border-sky-500 focus:outline-none transition-all"
                            />
                            <button
                                disabled={!input || isLoading}
                                type="submit"
                                className="absolute right-1 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-white hover:bg-sky-700 disabled:opacity-50 transition-all font-bold"
                            >
                                <Send className="h-4 w-4" />
                            </button>
                        </div>
                        <p className="mt-2 text-[8px] text-center text-slate-400">
                            Powered by RAG & Gemini AI
                        </p>
                    </form>
                </div>
            )}

            {/* Trigger Button */}
            <button
                onClick={(e) => {
                    console.log('Toggle Clicked');
                    setIsOpen(!isOpen);
                }}
                className={cn(
                    "flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all transform hover:scale-110",
                    isOpen ? "bg-slate-800 text-white" : "bg-sky-600 text-white"
                )}
                aria-label="Toggle Chat"
                id="chat-trigger"
            >
                {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
            </button>
        </div>
    );
}
