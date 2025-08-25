<<<<<<< HEAD
function Contact() {
const formRef = React.useRef();
  const [isLoading, setIsLoading] = React.useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm("service_rrd1d7b", "template_jjx3jl9", formRef.current)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          Swal.fire({
            title: 'Message sent!',
            text: "Thanks for reaching out—I'll get back to you soon.",
            icon: 'success',
            timer: 3000,
            showConfirmButton: false
          });
        },
        (error) => {
          console.error("FAILED...", error);
          Swal.fire({
            title: 'Oops!',
            text: 'Failed to send message. Please try again.',
            icon: 'error',
            confirmButtonText: 'Close'
          });
        }
      )
      .finally(() => {
        setIsLoading(false);
      });

    e.target.reset();
  };
  return (
    <section id="contact" className="min-h-screen pt-32 pb-20 text-white px-6 flex flex-col items-center">
      <h2 className="text-2xl lg:text-3xl font-bold leading-tight glow-text mb-6">
        Contact <span className="text-[#536983]">Me</span>
      </h2>
      <p className="text-center mb-12 max-w-xl text-sm lg:text-base text-gray-300">
        Feel free to reach out for collaborations, project inquiries, or just a friendly hello.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-5xl text-sm lg:text-base items-start">
        <div className="space-y-4 self-start">
          <p className="flex items-center gap-3">
            <img src="/image/email.png" alt="Email" className="w-5 h-5 object-contain icon-glow" />
            baltazardelacruz74@gmail.com
          </p>
          <p className="flex items-center gap-3">
            <img src="/image/github.png" alt="GitHub" className="w-5 h-5 object-contain icon-glow" />
            https://github.com/BaltazarDelaCruz
          </p>
          <p className="flex items-center gap-3"> 
            <span>
               <img src="/image/facebook.png" 
                alt="Facebook" 
                className="w-5 h-5 object-contain icon-glow" /> 
                </span>
                 https://web.facebook.com/gaspar.sambo 
                 </p>
        </div>
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-gray-800 p-5 rounded-lg shadow-lg space-y-3 text-sm self-start w-full"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-3 py-2 rounded bg-white/5 border border-gray-500 text-white focus:outline-none focus:border-[#536983] text-sm"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full px-3 py-2 rounded bg-white/5 border border-gray-500 text-white focus:outline-none focus:border-[#536983] text-sm"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-3 py-2 rounded bg-white/5 border border-gray-500 text-white focus:outline-none focus:border-[#536983] text-sm"
          />
          <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-2 rounded bg-[#536983] text-white font-medium flex justify-center items-center space-x-2 ${
          isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#536983]/80 hover:shadow-[0_0_15px_#536983]"
        } transition duration-300`}
      >
        {isLoading && <span className="loading loading-spinner loading-xs"></span>}
        <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
      </button>
        </form>
      </div>
      <footer className="mt-12 text-gray-500 text-xs">
        © {new Date().getFullYear()} Balty. All rights reserved.
      </footer>

      <dialog id="success_modal" class="modal modal-middle">
  <div class="modal-box bg-gray-800 text-white">
    <h3 class="text-lg font-bold">Message Sent!</h3>
    <p class="py-4">Thank you for reaching out—I'll get back to you soon.</p>
    <div class="modal-action">
      <button id="close_modal_btn" class="btn bg-[#536983] text-white">Close</button>
    </div>
  </div>
</dialog>

    </section>

    
  );
}
=======
function Contact() {
const formRef = React.useRef();
  const [isLoading, setIsLoading] = React.useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm("service_rrd1d7b", "template_jjx3jl9", formRef.current)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          Swal.fire({
            title: 'Message sent!',
            text: "Thanks for reaching out—I'll get back to you soon.",
            icon: 'success',
            timer: 3000,
            showConfirmButton: false
          });
        },
        (error) => {
          console.error("FAILED...", error);
          Swal.fire({
            title: 'Oops!',
            text: 'Failed to send message. Please try again.',
            icon: 'error',
            confirmButtonText: 'Close'
          });
        }
      )
      .finally(() => {
        setIsLoading(false);
      });

    e.target.reset();
  };
  return (
    <section id="contact" className="min-h-screen pt-32 pb-20 text-white px-6 flex flex-col items-center">
      <h2 className="text-2xl lg:text-3xl font-bold leading-tight glow-text mb-6">
        Contact <span className="text-[#536983]">Me</span>
      </h2>
      <p className="text-center mb-12 max-w-xl text-sm lg:text-base text-gray-300">
        Feel free to reach out for collaborations, project inquiries, or just a friendly hello.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-5xl text-sm lg:text-base items-start">
        <div className="space-y-4 self-start">
          <p className="flex items-center gap-3">
            <img src="/image/email.png" alt="Email" className="w-5 h-5 object-contain icon-glow" />
            baltazardelacruz74@gmail.com
          </p>
          <p className="flex items-center gap-3">
            <img src="/image/github.png" alt="GitHub" className="w-5 h-5 object-contain icon-glow" />
            https://github.com/BaltazarDelaCruz
          </p>
          <p className="flex items-center gap-3"> 
            <span>
               <img src="/image/facebook.png" 
                alt="Facebook" 
                className="w-5 h-5 object-contain icon-glow" /> 
                </span>
                 https://web.facebook.com/gaspar.sambo 
                 </p>
        </div>
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-gray-800 p-5 rounded-lg shadow-lg space-y-3 text-sm self-start w-full"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-3 py-2 rounded bg-white/5 border border-gray-500 text-white focus:outline-none focus:border-[#536983] text-sm"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full px-3 py-2 rounded bg-white/5 border border-gray-500 text-white focus:outline-none focus:border-[#536983] text-sm"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-3 py-2 rounded bg-white/5 border border-gray-500 text-white focus:outline-none focus:border-[#536983] text-sm"
          />
          <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-2 rounded bg-[#536983] text-white font-medium flex justify-center items-center space-x-2 ${
          isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#536983]/80 hover:shadow-[0_0_15px_#536983]"
        } transition duration-300`}
      >
        {isLoading && <span className="loading loading-spinner loading-xs"></span>}
        <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
      </button>
        </form>
      </div>
      <footer className="mt-12 text-gray-500 text-xs text-center">
  © {new Date().getFullYear()} Balty. All rights reserved.
  <br />
  Portfolio v1.0.0 – Last updated: {new Date().toLocaleDateString()}
</footer>


      <dialog id="success_modal" class="modal modal-middle">
  <div class="modal-box bg-gray-800 text-white">
    <h3 class="text-lg font-bold">Message Sent!</h3>
    <p class="py-4">Thank you for reaching out—I'll get back to you soon.</p>
    <div class="modal-action">
      <button id="close_modal_btn" class="btn bg-[#536983] text-white">Close</button>
    </div>
  </div>
</dialog>

    </section>

    
  );
}
>>>>>>> f31bf75 (Initial commit)
