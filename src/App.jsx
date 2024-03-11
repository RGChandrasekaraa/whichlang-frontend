import LanguageDetector from './components/LanguageDetector';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow py-6">
        <h1 className="text-center text-3xl font-semibold">
  <span className="text-black">Which</span>
  <span className="text-red-600">Lang</span>
</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* App Description */}
        <div className="text-center mb-8">
          <p className="text-lg leading-6">Discover the language of your text with ease 🥳</p>
          <p className="text-sm mt-4 max-w-md mx-auto text-gray-600">
            WhichLang is an intuitive tool designed to identify the language of any text effortlessly. 🌐 Paste or type your text, and let WhichLang do the rest 🚀</p>
        </div>

        {/* LanguageDetector Component */}
        <div className="w-full">
          <LanguageDetector />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow py-4">
  <div className="text-center">
    Curated by <span className="font-bold text-black">RG Chandrasekaraa</span> 👨‍🎨
  </div>
</footer>

    </div>
  );
}

export default App;
