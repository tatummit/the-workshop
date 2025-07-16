import { Link } from 'react-router';

export default function Header() {
  return (
    <header className="bg-[var(--color-web-green-600)] text-white py-8 shadow-md">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-5xl font-extrabold mb-2 tracking-tight">Green Garden Bistro Blog</h1>
        <p className="text-xl opacity-90">เรื่องราวและรีวิวร้านอาหารเพื่อสุขภาพ</p>
        <Link to="/login" className="mt-4 inline-block bg-white text-[var(--color-web-green-700)] font-semibold px-6 py-2 rounded-md shadow hover:bg-[var(--color-web-green-100)] transition">เข้าสู่ระบบ</Link>
      </div>
    </header>
  );
}
