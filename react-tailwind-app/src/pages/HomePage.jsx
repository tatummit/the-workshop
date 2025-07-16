import Header from '../components/Header';
import BlogPost from '../components/BlogPost';

export default function HomePage() {
  const blogPosts = [
    {
      id: 1,
      title: "รีวิวเมนูใหม่: สลัดอโวคาโด",
      content: "สัมผัสความสดใหม่ของอโวคาโดและผักออร์แกนิก ราดด้วยน้ำสลัดสูตรพิเศษของร้าน อร่อยและดีต่อสุขภาพ!",
      date: "16 กรกฎาคม 2025"
    },
    {
      id: 2,
      title: "บรรยากาศร้านใหม่ สไตล์มินิมอล",
      content: "Green Garden Bistro ปรับโฉมใหม่! เพิ่มพื้นที่สีเขียวและมุมถ่ายรูปสุดชิค เหมาะกับสายคาเฟ่และคนรักสุขภาพ",
      date: "10 กรกฎาคม 2025"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-neutral-50)] pl-8">
      <Header />

      {/* Body Section (Blog List) */}
      <main className="flex-1 container mx-auto px-4 py-12">
        <section className="max-w-3xl mx-auto space-y-8">
          {blogPosts.map(post => (
            <BlogPost
              key={post.id}
              title={post.title}
              content={post.content}
              date={post.date}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
