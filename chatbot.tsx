"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function ChatBot({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Xin chào! Tôi là trợ lý an toàn giao thông. Bạn có câu hỏi gì về luật lệ hoặc mẹo lái xe an toàn?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponses: { [key: string]: string } = {
        "tốc độ":
          "Giới hạn tốc độ phụ thuộc vào loại đường: Đường phố 40-50 km/h, đường ngoài thành 60-80 km/h, đường cao tốc 100-120 km/h.",
        "dây an toàn":
          "Dây an toàn là bắt buộc cho tất cả hành khách. Không thắt dây an toàn bị phạt 200.000-500.000 đồng.",
        rượu: "Không được lái xe khi uống rượu bia. Nồng độ cồn tối đa là 0 mg/100ml máu. Phạt từ 16-18 triệu đồng nếu vi phạm.",
        "mệt mỏi": "Nếu cảm thấy mệt mỏi, hãy dừng xe ở nơi an toàn và nghỉ ngơi. Không nên lái xe khi buồn ngủ.",
        mưa: "Khi lái xe trong mưa: giảm tốc độ, tăng khoảng cách với xe phía trước, bật đèn chiếu sáng.",
        default:
          "Cảm ơn câu hỏi của bạn! Tôi có thể giúp bạn về: tốc độ, dây an toàn, rượu bia, mệt mỏi, lái xe trong mưa. Hãy hỏi về những chủ đề này.",
      }

      const lowerInput = input.toLowerCase()
      let response = botResponses["default"]

      for (const [key, value] of Object.entries(botResponses)) {
        if (key !== "default" && lowerInput.includes(key)) {
          response = value
          break
        }
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)
    }, 500)
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
        <h3 className="font-bold">Trợ Lý An Toàn Giao Thông</h3>
        <button onClick={onClose} className="text-xl hover:opacity-80 transition">
          ✕
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
              }`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-muted text-foreground px-4 py-2 rounded-lg">
              <p className="text-sm">Đang suy nghĩ...</p>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSendMessage} className="border-t border-border p-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nhập câu hỏi..."
          className="flex-1 px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          disabled={isLoading}
        />
        <Button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="bg-primary text-primary-foreground hover:opacity-90"
        >
          Gửi
        </Button>
      </form>
    </div>
  )
}
