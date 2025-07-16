export default function BlogPost({ title, content, date }) {
  return (
    <article className="bg-white rounded-lg shadow p-8">
      <h2 className="text-2xl font-bold text-[var(--color-web-green-700)] mb-2">{title}</h2>
      <p className="text-[var(--color-neutral-700)] mb-4">{content}</p>
      <span className="text-xs text-[var(--color-neutral-500)]">โพสต์เมื่อ {date}</span>
    </article>
  );
}

