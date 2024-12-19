export default function Clients() {
  return (
    <div className="w-full bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Gestion des Clients</h1>
          <p className="text-gray-600">Liste et détails des clients</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
          Ajouter un client
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        {/* Contenu à implémenter */}
        <p className="text-gray-500">Liste des clients à implémenter</p>
      </div>
    </div>
  );
}
