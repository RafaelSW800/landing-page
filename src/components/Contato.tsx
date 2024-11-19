export default function Contato() 
{
    return 
    (
        <><script src="https://unpkg.com/react/umd/react.development.js"></script><script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script><script src="https://unpkg.com/@babel/standalone/babel.js"></script><script src="https://cdn.tailwindcss.com"></script></>
    )
        function ContactForm() {
            return (
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h1 className="text-3xl font-bold text-center mb-4">Entre em contato</h1>
                    <p className="text-center text-gray-600 mb-6">
                        Entre em contato, estamos dispostos a tirar qualquer dúvida,
                        seja um orçamento, uma dúvida técnica de algum de nossos produtos.
                        Estamos à disposição para responder. <span role="img" aria-label="smile">😎</span>
                    </p>
                    <form>
                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Seu melhor Email"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="text"
                                placeholder="Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            );
        }
    
}