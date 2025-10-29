export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              An Toàn Giao Thông Là Trách Nhiệm Của Chúng Ta
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Tìm hiểu về luật lệ giao thông, mẹo lái xe an toàn và những kiến thức cần thiết để bảo vệ bản thân và gia
              đình trên đường.
            </p>
            <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition">
              Bắt Đầu Học Tập
            </button>
          </div>
          <div className="flex justify-center">
            <img src="/safe-driving-car-on-road.jpg" alt="An toàn giao thông" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
