import { useState } from 'react';
import { Link } from 'react-router';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState(''); // Datepicker state

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-neutral-50)]">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-[var(--color-web-green-700)]">เข้าสู่ระบบ</h2>
        <Link to="/" className="mb-6 bg-[var(--color-neutral-200)] text-[var(--color-web-green-700)] px-4 py-2 rounded-md font-semibold hover:bg-[var(--color-neutral-300)] transition w-full block text-center">ย้อนกลับหน้าแรก</Link>
        {/* Datepicker under back button */}
        <div className="mb-6">
          <label className="block mb-1 text-[var(--color-neutral-700)]" htmlFor="datepicker">เลือกวันที่</label>
          <input
            id="datepicker"
            type="date"
            className="w-full px-3 py-2 border border-[var(--color-neutral-200)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-web-green-400)]"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-[var(--color-neutral-700)]" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="w-full px-3 py-2 border border-[var(--color-neutral-200)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-web-green-400)]"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 text-[var(--color-neutral-700)]" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="w-full px-3 py-2 border border-[var(--color-neutral-200)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-web-green-400)]"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="w-full bg-[var(--color-web-green-500)] text-white py-2 rounded-md font-semibold hover:bg-[var(--color-web-green-700)] transition">เข้าสู่ระบบ</button>
      </form>
    </div>
  );
}
