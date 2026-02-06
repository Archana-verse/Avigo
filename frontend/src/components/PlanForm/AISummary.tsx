export default function AISummary({ data }: any) {
  return (
    <section className="p-8 bg-[#F8F3EC] rounded-lg shadow">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Your Trip Summary</h2>
        {data ? (
          <div className="space-y-3 text-gray-700">
            <p><strong>Route:</strong> {data.from_city} → {data.to_city}</p>
            <p><strong>Travel Class:</strong> {data.travel_class}</p>
            <p><strong>Budget:</strong> {data.budget_range}</p>
            <p><strong>Group Type:</strong> {data.travel_group}</p>
            <p><strong>Interests:</strong> {data.interests?.join(", ") || "None"}</p>
            <p><strong>Duration:</strong> {data.duration_days} days</p>
          </div>
        ) : (
          <p className="text-gray-500">No trip data found</p>
        )}
      </div>
    </section>
  );
}


