import Swal from "sweetalert2"; // SweetAlert2 for alerts
import useUsers from "../../customHooks/useUsers";
import { FaUserAstronaut } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import useAxiosSource from "../../customHooks/useAxiousSorce";

export default function AllUsers() {
  const { Users, refetch } = useUsers();
  const { axiosSource } = useAxiosSource();

  // Function for handling the delete action with SweetAlert2
  const handleDeleteAction = (id) => {
    // Show SweetAlert2 confirmation dialog
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Proceed with the delete action
        axiosSource
          .delete(`/users/${id}`)
          .then(() => {
            // Show success message
            Swal.fire("Deleted!", "User has been deleted.", "success");
            refetch(); // Refetch data after deletion
          })
          .catch(() => {
            // Show error message if deletion fails
            Swal.fire(
              "Error!",
              "There was an issue deleting the user.",
              "error"
            );
          });
      }
    });
  };

  // Function for updating user status
  const handleAction = (userId, action) => {
    axiosSource
      .patch(`/users/${userId}`, { status: action }) // Send `action` as an object
      .then(() => {
        refetch(); // Refetch the user data after the patch request
        Swal.fire({
          title: "User Updated",
          text: `User status successfully updated for ID: ${userId}`,
          icon: "success",
          confirmButtonColor: "#3085d6",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: `An error occurred while updating the user: ${error.message}`,
          icon: "error",
          confirmButtonColor: "#d33",
        });
      });
  };

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Users && Users.length > 0 ? (
              Users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.status}</td>
                  <td>
                    {/* Action buttons */}
                    <div className="flex gap-4">
                      <FaTrash
                        className="text-red-500 cursor-pointer"
                        onClick={() => handleDeleteAction(user._id)}
                      />
                      <FaUserAstronaut
                        className="text-blue-500 cursor-pointer"
                        onClick={() =>
                          handleAction(
                            user._id,
                            user.status === "Admin"
                              ? "User"
                              : user.status === "User"
                              ? "Admin"
                              : "User"
                          )
                        }
                      />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
