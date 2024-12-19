export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-8 bg-white rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">Connexion</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-md"
              placeholder="votre@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Mot de passe
            </label>
            <input type="password" className="w-full p-2 border rounded-md" />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
