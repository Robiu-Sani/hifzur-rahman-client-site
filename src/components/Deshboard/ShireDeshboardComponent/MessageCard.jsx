const MessageCard = () => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg p-6 bg-white">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-1">John Doe</h2>
        <p className="text-sm">
          <span className="bg-blue-100 text-blue-800 py-1 px-2 rounded-full">
            August 26, 2024, 10:00 AM
          </span>
        </p>
      </div>
      <div className="mb-6">
        <p className="text-gray-700 mb-2">
          <strong>Email:</strong> johndoe@example.com
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Subject:</strong> Inquiry about services
        </p>
      </div>
      <div className="p-4 bg-gray-50 rounded shadow-sm">
        <p className="text-gray-700">
          <strong>Message:</strong> I am interested in learning more about your
          services. Please provide additional details.
        </p>
      </div>
    </div>
  );
};

export default MessageCard;
