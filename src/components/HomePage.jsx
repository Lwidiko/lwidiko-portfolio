export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-r from-blue-100 via-white to-green-100">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Lwidiko Edward Mhamilawa
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-6">
          Dreamer. Educator. Founder of Project Inspire.  
          Championing STEM for a million young minds in Tanzania.
        </p>
        <a
          href="#about"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl shadow-md transition"
        >
          Learn My Story
        </a>
      </section>
    </div>
  );
}
