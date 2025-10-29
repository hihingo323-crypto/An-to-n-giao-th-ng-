export default function Footer() {
  return (
    <footer id="about" className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Về Chúng Tôi</h3>
            <p className="opacity-90">
              Chúng tôi cam kết nâng cao nhận thức về an toàn giao thông và giảm thiểu tai nạn giao thông.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2 opacity-90">
              <li>
                <a href="#laws" className="hover:opacity-80 transition">
                  Luật Lệ
                </a>
              </li>
              <li>
                <a href="#tips" className="hover:opacity-80 transition">
                  Mẹo Lái Xe
                </a>
              </li>
              <li>
                <a href="#about" className="hover:opacity-80 transition">
                  Liên Hệ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Liên Hệ</h3>
            <p className="opacity-90">
              Email: info@antoangiaoThong.vn
              <br />
              Điện thoại: 1900 1234
              <br />
              Địa chỉ: Hà Nội, Việt Nam
            </p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center opacity-90">
          <p>&copy; 2025 An Toàn Giao Thông. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
