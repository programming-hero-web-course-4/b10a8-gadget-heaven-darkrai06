import { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Banner from "../../banner/Banner";

export default function SupportPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate("/"); 
  };

  return (
    <>
      <Helmet>
        <title>Support | Gadget Heaven</title>
      </Helmet>
      <Banner
        title={"Help and Support"}
        subtitle={
          "Get the assistance you need with our comprehensive help and support resources. Whether you have questions or need guidance, we’re here to help!"
        }
      />
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Support & FAQs</h1>
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow border border-base-300 rounded-box">
            <input type="radio" name="faq" defaultChecked />
            <div className="collapse-title text-lg font-medium">
              How can I track my order?
            </div>
            <div className="collapse-content">
              <p>You can track your order from the dashboard under 'My Orders'.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow border border-base-300 rounded-box">
            <input type="radio" name="faq" />
            <div className="collapse-title text-lg font-medium">
              What is the return policy?
            </div>
            <div className="collapse-content">
              <p>
                We offer a 30-day return policy on most gadgets. Please check the return page
                for details.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow border border-base-300 rounded-box">
            <input type="radio" name="faq" />
            <div className="collapse-title text-lg font-medium">
              How do I contact support?
            </div>
            <div className="collapse-content">
              <p>You can reach out to us via email or the contact form below.</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Need Further Assistance?</h2>
          <p className="mb-4">Submit your email, and we will get back to you.</p>
          <form onSubmit={handleSubmit}> {/* Form submission is handled here */}
            <div className="flex flex-col gap-2">
              <textarea
                placeholder="Message Us"
                className="input input-bordered w-full h-40 resize-none p-4"
              ></textarea>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full"
              />
              <button className="btn" type="submit">Submit</button> {/* Submit triggers handleSubmit */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
