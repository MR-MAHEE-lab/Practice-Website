import React from "react";
import { FaBullseye, FaEye, FaHeart, FaUser, FaEnvelope, FaComment } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We are passionate about delivering high-quality solutions and creating value for our clients.
            Our team strives for excellence in every project.
          </p>
          <button className="btn btn-primary btn-lg">Get in Touch</button>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Principles</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            These are the values that drive us forward and define how we work.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
          <div className="card bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition duration-300 flex flex-col items-center text-center">
            <FaBullseye className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              Deliver high-quality solutions that exceed expectations and create lasting impact.
            </p>
          </div>
          <div className="card bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition duration-300 flex flex-col items-center text-center">
            <FaEye className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be a leader in our industry and a trusted partner for clients worldwide.
            </p>
          </div>
          <div className="card bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition duration-300 flex flex-col items-center text-center">
            <FaHeart className="text-red-500 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Our Values</h3>
            <p className="text-gray-600">
              Integrity, innovation, teamwork, and customer satisfaction are at our core.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-100 px-4">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet the Team</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Our talented and dedicated team members bring creativity and expertise to every project.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 container mx-auto">
          <div className="card bg-white shadow-md p-6 rounded-lg text-center">
            <img className="w-24 h-24 rounded-full mx-auto mb-4" src="https://i.pravatar.cc/150?img=1" alt="Team Member" />
            <h4 className="text-xl font-bold">Alice Johnson</h4>
            <p className="text-gray-600">CEO</p>
          </div>
          <div className="card bg-white shadow-md p-6 rounded-lg text-center">
            <img className="w-24 h-24 rounded-full mx-auto mb-4" src="https://i.pravatar.cc/150?img=2" alt="Team Member" />
            <h4 className="text-xl font-bold">Bob Smith</h4>
            <p className="text-gray-600">CTO</p>
          </div>
          <div className="card bg-white shadow-md p-6 rounded-lg text-center">
            <img className="w-24 h-24 rounded-full mx-auto mb-4" src="https://i.pravatar.cc/150?img=3" alt="Team Member" />
            <h4 className="text-xl font-bold">Clara Lee</h4>
            <p className="text-gray-600">Lead Designer</p>
          </div>
          <div className="card bg-white shadow-md p-6 rounded-lg text-center">
            <img className="w-24 h-24 rounded-full mx-auto mb-4" src="https://i.pravatar.cc/150?img=4" alt="Team Member" />
            <h4 className="text-xl font-bold">David Kim</h4>
            <p className="text-gray-600">Developer</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-6">Contact Us</h2>
          <p className="text-gray-600 text-center mb-10">
            Fill out the form below and we will get back to you as soon as possible.
          </p>

          <form className="space-y-6">
            <div className="flex items-center gap-2">
              <FaUser className="text-gray-400 text-xl" />
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />
            </div>

            <div className="flex items-center gap-2">
              <FaEnvelope className="text-gray-400 text-xl" />
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
              />
            </div>

            <div className="flex items-start gap-2">
              <FaComment className="text-gray-400 text-xl mt-2" />
              <textarea
                id="message"
                rows="5"
                placeholder="Your Message"
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary btn-lg">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
}
