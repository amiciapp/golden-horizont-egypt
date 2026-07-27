"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"
import { MessageCircle, X, Send, Sparkles, Bot, User } from "lucide-react"
import { WHATSAPP_LINK } from "@/lib/constants"
import { detectLanguage } from "@/lib/translations"
import { conciergeTranslations, ConciergeLang } from "@/lib/concierge-translations"

interface ChatMessage {
  role: "user" | "assistant"
  text: string
  suggestions?: string[]
}

export function AIConcierge() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const langRef = useRef<ConciergeLang>("en")
  const initRef = useRef(false)

  useEffect(() => {
    const lang = detectLanguage() as ConciergeLang
    langRef.current = lang
    if (!initRef.current) {
      initRef.current = true
      const t = conciergeTranslations[lang]
      setMessages([{
        role: "assistant",
        text: t.greeting,
        suggestions: [t.suggestions.showPopular, t.suggestions.whatCanIDo, t.suggestions.needHelp, t.suggestions.hotelPickup],
      }])
    }
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [isOpen])

  const handleSend = async (msg?: string) => {
    const text = (msg || input).trim()
    if (!text || isLoading) return

    setInput("")
    const userMsg: ChatMessage = { role: "user", text }
    setMessages((prev) => [...prev, userMsg])
    setIsLoading(true)

    try {
      const res = await fetch("/api/ai-concierge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, lang: langRef.current }),
      })

      if (!res.ok) throw new Error("Failed")

      const data = await res.json()
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: data.text, suggestions: data.suggestions },
      ])
    } catch {
      const t = conciergeTranslations[langRef.current]
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: t.error,
          suggestions: [t.suggestions.openWhatsApp, t.suggestions.showPopular],
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSuggestion = (suggestion: string) => {
    const t = conciergeTranslations[langRef.current]
    const isWhatsAppAction = suggestion === t.suggestions.openWhatsApp || suggestion.startsWith("Book ")
    if (isWhatsAppAction) {
      const msg = suggestion.startsWith("Book ") ? `Hi! I'd like to book: ${suggestion.replace("Book ", "")}` : ""
      window.open(msg ? `${WHATSAPP_LINK}?text=${encodeURIComponent(msg)}` : WHATSAPP_LINK, "_blank", "noopener,noreferrer")
      return
    }
    handleSend(suggestion)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-gold-dark text-primary-foreground shadow-xl shadow-primary/30 flex items-center justify-center cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Open AI travel concierge"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-[140px] right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-10rem)] rounded-2xl border border-border/50 bg-card/95 backdrop-blur-2xl shadow-2xl flex flex-col overflow-hidden"
            role="dialog"
            aria-label="AI Travel Concierge"
          >
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b border-border/30 bg-gradient-to-r from-primary/10 to-transparent flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground text-sm">{conciergeTranslations[langRef.current].heading}</h3>
                <p className="text-xs text-foreground/40 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                  Online
                </p>
              </div>
              <motion.button
                whileHover={{ rotate: 90 }}
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-foreground/40 hover:bg-foreground/5 hover:text-foreground transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i}>
                  <div className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        msg.role === "user"
                          ? "bg-primary/20"
                          : "bg-gradient-to-br from-primary to-gold-dark"
                      }`}
                    >
                      {msg.role === "user" ? (
                        <User className="w-4 h-4 text-primary" />
                      ) : (
                        <Sparkles className="w-4 h-4 text-primary-foreground" />
                      )}
                    </div>
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground rounded-tr-md"
                          : "bg-foreground/5 text-foreground rounded-tl-md"
                      }`}
                    >
                      <span style={{ whiteSpace: "pre-wrap" }}>{msg.text}</span>
                    </div>
                  </div>

                  {msg.suggestions && msg.suggestions.length > 0 && i === messages.length - 1 && !isLoading && (
                    <div className="flex flex-wrap gap-2 mt-3 ml-11">
                      {msg.suggestions.map((s) => (
                        <button
                          key={s}
                          onClick={() => handleSuggestion(s)}
                          className="px-3 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-medium hover:bg-primary/10 transition-colors cursor-pointer"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="bg-foreground/5 rounded-2xl rounded-tl-md px-4 py-3">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-foreground/30 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 rounded-full bg-foreground/30 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 rounded-full bg-foreground/30 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border/30 flex-shrink-0">
              <div className="flex items-center gap-2 bg-foreground/5 rounded-xl px-4 py-2 border border-border/30 focus-within:border-primary/50 transition-colors">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={conciergeTranslations[langRef.current].placeholder}
                  className="flex-1 bg-transparent text-foreground text-sm placeholder:text-foreground/30 outline-none"
                  aria-label="Message"
                />
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isLoading}
                  className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-30 transition-opacity cursor-pointer flex-shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
