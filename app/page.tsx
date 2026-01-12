import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-stone-900 tracking-tight">
            Pleasant Stay Motel
          </h1>
          <a
            href="tel:+19055161959"
            className="text-sky-900 hover:text-sky-700 font-medium transition-colors"
          >
            +1 905-516-1959
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen mt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 to-stone-900/20 z-10" />
        {/* Placeholder for main property image - replace with actual image */}
        <div className="absolute inset-0 bg-stone-300">
          <Image
            src="/images/DSC01938.jpg"
            alt="Pleasant Stay Motel - Hamilton, Ontario"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
            Your Comfort,<br />Our Priority
          </h2>
          <p className="text-xl md:text-2xl text-white/95 font-light mb-8 max-w-2xl">
            Conveniently located near Hamilton, Ontario
          </p>

          {/* Quick Info Bar */}
          <div className="flex flex-wrap gap-6 justify-center text-white/90 mb-12">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">3.1/5 Google Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Alberton, ON</span>
            </div>
          </div>

          <a
            href="#booking"
            className="bg-sky-900 hover:bg-sky-800 text-white px-10 py-4 rounded-sm text-lg font-medium transition-all shadow-lg hover:shadow-xl"
          >
            Book Your Stay
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-light text-stone-900 mb-6">
            Welcome to Pleasant Stay Motel
          </h3>
          <p className="text-lg text-stone-700 leading-relaxed max-w-2xl mx-auto">
            Experience comfortable, affordable accommodation in the heart of Ontario.
            Our motel offers clean, well-appointed rooms with modern amenities,
            making us the perfect choice for both business and leisure travelers
            visiting the Hamilton area.
          </p>
        </div>
      </section>

      {/* Rooms Gallery Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-light text-stone-900 mb-16 text-center">
            Our Rooms
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* King Room */}
            <div className="group cursor-pointer">
              <div className="relative h-64 bg-stone-200 overflow-hidden mb-4">
                <Image
                  src="/images/room1.jpg"
                  alt="King Room"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h4 className="text-xl font-medium text-stone-900 mb-2">King Room</h4>
              <p className="text-stone-600">Spacious room with a comfortable king-size bed</p>
            </div>

            {/* Queen Room */}
            <div className="group cursor-pointer">
              <div className="relative h-64 bg-stone-200 overflow-hidden mb-4">
                <Image
                  src="/images/room2.jpg"
                  alt="Queen Room"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h4 className="text-xl font-medium text-stone-900 mb-2">Queen Room</h4>
              <p className="text-stone-600">Cozy room with a comfortable queen-size bed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking/Contact Section */}
      <section id="booking" className="py-24 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-light text-stone-900 mb-6">
            Ready to Book Your Stay?
          </h3>
          <p className="text-lg text-stone-700 mb-12">
            Reserve your room today through Booking.com or call us directly
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://www.booking.com/hotel/ca/pleasant-stay-motel.html?aid=311088&label=pleasant-stay-motel-vYi63cmaAGE9O_UhMWMArQS166183255113%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3743302326%3Alp9073497%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YXdX6HrtnYy-XcOKkQlADBY&sid=2dd263b9f346d37161549b0d046f8fde&dest_id=900049543&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1768004852&srpvid=aece8e81ddc1f641518182456b8681cf&type=total&ucfs=1&"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-900 hover:bg-sky-800 text-white px-12 py-4 rounded-sm text-lg font-medium transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Book on Booking.com
            </a>

            <a
              href="tel:+19055161959"
              className="border-2 border-stone-900 hover:bg-stone-900 hover:text-white text-stone-900 px-12 py-4 rounded-sm text-lg font-medium transition-all w-full sm:w-auto"
            >
              Call +1 905-516-1959
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Pleasant Stay Motel</h4>
              <p className="text-stone-400">
                Your trusted accommodation near Hamilton, Ontario
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Location</h5>
              <p className="text-stone-400">
                2692 2, Alberton, ON<br />
                L0R 1A0, Canada
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <p className="text-stone-400">
                Phone: <a href="tel:+19055161959" className="hover:text-white transition-colors">+1 905-516-1959</a>
              </p>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8 text-center text-stone-500">
            <p>&copy; {new Date().getFullYear()} Pleasant Stay Motel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
