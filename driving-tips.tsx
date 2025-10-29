const tipsData = [
  {
    id: 1,
    icon: "👀",
    title: "Quan Sát Kỹ",
    description: "Luôn quan sát xung quanh, kiểm tra gương chiếu hậu thường xuyên",
  },
  {
    id: 2,
    icon: "⏱️",
    title: "Giữ Khoảng Cách",
    description: "Duy trì khoảng cách an toàn với xe phía trước, ít nhất 2-3 giây",
  },
  {
    id: 3,
    icon: "🌙",
    title: "Lái Xe Ban Đêm",
    description: "Bật đèn pha, giảm tốc độ, tránh mệt mỏi khi lái xe lâu",
  },
  {
    id: 4,
    icon: "🌧️",
    title: "Lái Xe Trong Mưa",
    description: "Giảm tốc độ, tăng khoảng cách, bật đèn chiếu sáng",
  },
  {
    id: 5,
    icon: "📱",
    title: "Tránh Phân Tâm",
    description: "Không sử dụng điện thoại, tập trung vào đường xá",
  },
  {
    id: 6,
    icon: "🔧",
    title: "Bảo Dưỡng Xe",
    description: "Kiểm tra phanh, lốp, dầu nhớt định kỳ",
  },
  {
    id: 7,
    icon: "😴",
    title: "Tránh Mệt Mỏi",
    description: "Nghỉ ngơi đủ, không lái xe khi buồn ngủ",
  },
  {
    id: 8,
    icon: "🚨",
    title: "Báo Hiệu Rõ Ràng",
    description: "Sử dụng tín hiệu rẽ, đèn cảnh báo khi cần thiết",
  },
]

export default function DrivingTips() {
  return (
    <section id="tips" className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-balance">Mẹo Lái Xe An Toàn</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tipsData.map((tip) => (
            <div
              key={tip.id}
              className="bg-card rounded-lg p-6 shadow-md border border-border hover:shadow-lg hover:border-primary transition"
            >
              <div className="text-4xl mb-4">{tip.icon}</div>
              <h3 className="text-lg font-bold mb-2">{tip.title}</h3>
              <p className="text-muted-foreground text-sm">{tip.description}</p>
            </div>
          ))}
        </div>

        {/* Illustration */}
        <div className="mt-12 flex justify-center">
          <img src="/safe-driving-tips-illustration.jpg" alt="Mẹo lái xe an toàn" className="rounded-lg shadow-lg max-w-full" />
        </div>
      </div>
    </section>
  )
}
