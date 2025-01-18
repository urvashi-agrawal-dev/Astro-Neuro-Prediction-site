import { useState } from "react";
import { Search, Star, Trash2, Edit3 } from "lucide-react";

const sampleEmails = [
  {
    id: 1,
    sender: "Alice Johnson",
    subject: "Weekly Team Meeting",
    preview:
      "Hi everyone, Just a reminder that our weekly team meeting is scheduled for...",
    avatar: "/placeholder.svg?height=40&width=40",
    isStarred: false,
    date: "10:30 AM",
  },
  {
    id: 2,
    sender: "Bob Smith",
    subject: "Project Update",
    preview:
      "Hello team, I wanted to give you a quick update on the progress of our current project...",
    avatar: "/placeholder.svg?height=40&width=40",
    isStarred: true,
    date: "Yesterday",
  },
];

export default function Mailbox() {
  const [emails, setEmails] = useState(sampleEmails);
  const [isEditing, setIsEditing] = useState(false);
  const [editEmail, setEditEmail] = useState(null);

  const toggleStar = (id) => {
    setEmails(
      emails.map((email) =>
        email.id === id ? { ...email, isStarred: !email.isStarred } : email
      )
    );
  };

  const deleteEmail = (id) => {
    setEmails(emails.filter((email) => email.id !== id));
  };

  const handleEdit = (email) => {
    setEditEmail({ ...email }); // Make a copy of the email
    setIsEditing(true);
  };

  const handleUpdate = () => {
    setEmails(
      emails.map((email) =>
        email.id === editEmail.id ? { ...editEmail } : email
      )
    );
    setIsEditing(false);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl mx-auto space-y-6">
    {/* Start Button */}
    <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
      Start
    </button>

    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Header */}
      <div className="p-4 md:p-6 border-b border-gray-200">
        <h1 className="text-xl md:text-2xl font-bold mb-4">Mailbox</h1>
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Search emails..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-gray-200 focus:outline-none"
          />
        </div>
      </div>

      {/* Email List */}
      <div className="max-h-[400px] overflow-y-auto">
        {emails.map((email) => (
          <div
            key={email.id}
            className="flex items-center p-4 border-b border-gray-100 last:border-b-0"
          >
            <img
              src={email.avatar}
              alt={email.sender}
              className="w-10 h-10 rounded-full mr-4"
            />
            <div className="flex-grow">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-sm truncate">
                  {email.sender}
                </p>
                <span className="text-sm text-gray-500">{email.date}</span>
              </div>
              <p className="text-sm font-medium truncate">{email.subject}</p>
              {/* <p className="text-sm text-gray-500 truncate">
                {email.preview}
              </p> */}
            </div>
            <div className="flex space-x-2 ml-4">
              <button
                onClick={() => toggleStar(email.id)}
                className="text-gray-400 hover:text-yellow-400"
              >
                <Star
                  className={`w-5 h-5 ${
                    email.isStarred ? "fill-yellow-400 text-yellow-400" : ""
                  }`}
                />
              </button>
              <button
                onClick={() => handleEdit(email)}
                className="text-gray-400 hover:text-blue-500"
              >
                <Edit3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => deleteEmail(email.id)}
                className="text-gray-400 hover:text-red-500"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Edit Modal */}
    {isEditing && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md space-y-4">
          <h2 className="text-xl font-bold">Edit Email</h2>
          <div>
            <label className="block font-medium text-sm">Sender</label>
            <input
              type="text"
              value={editEmail.sender}
              onChange={(e) =>
                setEditEmail({ ...editEmail, sender: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-200"
            />
          </div>
          <div>
            <label className="block font-medium text-sm">Subject</label>
            <input
              type="text"
              value={editEmail.subject}
              onChange={(e) =>
                setEditEmail({ ...editEmail, subject: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-200"
            />
          </div>
          <div>
            <label className="block font-medium text-sm">Preview</label>
            <textarea
              value={editEmail.preview}
              onChange={(e) =>
                setEditEmail({ ...editEmail, preview: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-200"
            />
          </div>
          <div>
            <label className="block font-medium text-sm">Avatar URL</label>
            <input
              type="text"
              value={editEmail.avatar}
              onChange={(e) =>
                setEditEmail({ ...editEmail, avatar: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-200"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdate}
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
  );
}
