"use client"

import { useState } from "react"

const lawsData = [
  {
    id: 1,
    title: "Tốc Độ Tối Đa",
    description: "Tuân thủ giới hạn tốc độ theo từng loại đường",
    details: [
      "Đường phố nội thành: 40-50 km/h",
      "Đường ngoài thành: 60-80 km/h",
      "Đường cao tốc: 100-120 km/h",
      "Vùng trường học: 20-30 km/h",
    ],
  },
  {
    id: 2,
    title: "Đèn Giao Thông",
    description: "Quy tắc tuân thủ tín hiệu đèn giao thông",
    details: [
      "Đèn xanh: Được phép đi",
      "Đèn vàng: Chuẩn bị dừng",
      "Đèn đỏ: Phải dừng hoàn toàn",
      "Đèn mũi tên: Chỉ được rẽ theo hướng mũi tên",
    ],
  },
  {
    id: 3,
    title: "Dây An Toàn",
    description: "Bắt buộc sử dụng dây an toàn khi lái xe",
    details: [
      "Tất cả hành khách phải thắt dây an toàn",
      "Trẻ em dưới 12 tuổi phải ngồi ghế an toàn",
      "Người lái phải thắt dây an toàn",
      "Không thắt dây an toàn bị phạt 200.000-500.000 đồng",
    ],
  },
  {
    id: 4,
    title: "Nồng Độ Cồn",
    description: "Cấm lái xe khi uống rượu bia",
    details: [
      "Nồng độ cồn tối đa: 0 mg/100ml máu",
      "Phạt từ 16-18 triệu đồng nếu vi phạm",
      "Tạm giữ bằng lái 12-24 tháng",
      "Có thể bị tạm giữ xe",
    ],
  },
]

export default function Laws() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section id="laws" className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-balance">Luật Lệ Giao Thông Cần Biết</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {lawsData.map((law) => (
            <div
              key={law.id}
              className="bg-card rounded-lg shadow-md overflow-hidden border border-border hover:shadow-lg transition"
            >
              <button
                onClick={() => setExpandedId(expandedId === law.id ? null : law.id)}
                className="w-full p-6 text-left hover:bg-muted/50 transition"
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{law.title}</h3>
                    <p className="text-muted-foreground">{law.description}</p>
                  </div>
                  <span className="text-2xl">{expandedId === law.id ? "−" : "+"}</span>
                </div>
              </button>

              {expandedId === law.id && (
                <div className="px-6 pb-6 border-t border-border">
                  <ul className="space-y-3">
                    {law.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-primary font-bold">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
