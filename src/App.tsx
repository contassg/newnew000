import { MessageCircle, Phone } from 'lucide-react';

const WHATSAPP_NUMBER = '5511969520672';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-green-600 text-white py-6 px-4 shadow-md">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tight">NIO</h1>
          <p className="mt-2 text-green-100 text-lg">Estamos prontos para atender você</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-lg w-full text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-800">Fale Conosco</h2>
            <p className="text-gray-500">
              Precisa de ajuda com sua internet? Entre em contato pelo WhatsApp e
              receba suporte rapidamente.
            </p>
          </div>

          <div className="space-y-4">
            {/* Botão Fale Conosco */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold text-lg py-4 px-6 rounded-xl transition-colors shadow-sm"
            >
              <MessageCircle className="w-6 h-6" />
              Fale Conosco
            </a>

            {/* Botão WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold text-lg py-4 px-6 rounded-xl transition-colors shadow-sm"
            >
              <Phone className="w-6 h-6" />
              WhatsApp
            </a>
          </div>

          <p className="text-sm text-gray-400">
            Atendimento de segunda a sábado, das 8h às 20h
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-600 text-green-100 text-center py-4 px-4 text-sm">
        Ajuda de Internet &mdash; Suporte via WhatsApp
      </footer>
    </div>
  );
}

export default App;
