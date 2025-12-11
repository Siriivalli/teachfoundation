export default function Contact() {
  return (
    <div className="container mx-auto px-6 mt-10">
      <h1 className="text-3xl font-bold text-primary">Contact Us</h1>

      {/* Contact Info */}
      <div className="mt-4 text-gray-700 space-y-1">
        <p>Email: info@ngo.org</p>
        <p>Phone: +91 98765 43210</p>
        <p>Address: Hyderabad, Telangana, India</p>
      </div>

      {/* Contact Form */}
      <div className="mt-10 bg-white shadow-md rounded-lg p-6">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-primary focus:border-primary"
              placeholder="Enter your first name"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-primary focus:border-primary"
              placeholder="Enter your last name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-primary focus:border-primary"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-primary focus:border-primary"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Subject (full width on 2-row grid) */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-primary focus:border-primary"
              placeholder="Enter subject"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="5"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-primary focus:border-primary"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/80 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
