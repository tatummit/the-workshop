import './index.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-neutral-50)]">
      {/* Header Section */}
      <header className="bg-[var(--color-web-green-600)] text-white py-8 shadow-md">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h1 className="text-5xl font-extrabold mb-2 tracking-tight">Green Garden Bistro Blog</h1>
          <p className="text-xl opacity-90">เรื่องราวและรีวิวร้านอาหารเพื่อสุขภาพ</p>
        </div>
      </header>

      {/* Body Section (Blog List) */}
      <main className="flex-1 container mx-auto px-4 py-12">
        <section className="max-w-3xl mx-auto space-y-8">
          {/* Blog Post 1 */}
          <article className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-bold text-[var(--color-web-green-700)] mb-2">รีวิวเมนูใหม่: สลัดอโวคาโด</h2>
            <p className="text-[var(--color-neutral-700)] mb-4">สัมผัสความสดใหม่ของอโวคาโดและผักออร์แกนิก ราดด้วยน้ำสลัดสูตรพิเศษของร้าน อร่อยและดีต่อสุขภาพ!</p>
            <span className="text-xs text-[var(--color-neutral-500)]">โพสต์เมื่อ 16 กรกฎาคม 2025</span>
          </article>
          {/* Blog Post 2 */}
          <article className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-bold text-[var(--color-web-green-700)] mb-2">บรรยากาศร้านใหม่ สไตล์มินิมอล</h2>
            <p className="text-[var(--color-neutral-700)] mb-4">Green Garden Bistro ปรับโฉมใหม่! เพิ่มพื้นที่สีเขียวและมุมถ่ายรูปสุดชิค เหมาะกับสายคาเฟ่และคนรักสุขภาพ</p>
            <span className="text-xs text-[var(--color-neutral-500)]">โพสต์เมื่อ 10 กรกฎาคม 2025</span>
          </article>
        </section>
      </main>
    </div>
  )
}

export default App
