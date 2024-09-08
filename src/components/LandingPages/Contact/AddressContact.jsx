import useContacts from "../../customHooks/useContacts";

export default function AddressContact() {
  const { contacts } = useContacts();

  return (
    <div className="bg-[#d0dfde] p-10 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-[#3b7777] mb-10">
        Contact Information
      </h2>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contacts.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-[#3b7777] mb-2">
                  {card.addressType} Address
                </h3>
                <p className="text-gray-700 mb-1">
                  <strong>Address:</strong> {card.address}
                </p>
                <p className="text-gray-700 mb-1">
                  <strong>Email:</strong> {card.email}
                </p>
                <p className="text-gray-700 mb-1">
                  <strong>Phone:</strong> {card.phone}
                </p>
              </div>
              <div>
                <p className="text-gray-600 mt-4">
                  <strong>Note:</strong> {card.notes}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
