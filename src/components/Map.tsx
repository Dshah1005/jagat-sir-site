const Map = () => {
  return (
    <section className="section-dark py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-xl font-semibold mb-2 text-center">
          Visit Our Coaching Center
        </h3>

        <p className="text-sm text-gray-400 text-center mb-6">
          3rd Floor, Mahadev Bldg, Krishna Society, Sanjay Nagar, Charkop,
          Kandivali West, Mumbai – 400067
        </p>

        <div className="rounded-2xl overflow-hidden border border-white/10">
          <iframe
            title="Jagat Sir's Tutorial Location"
            src="https://www.google.com/maps?&q=3rd+Floor,+Mahadev+Bldg,+Krishna+Society,+Sanjay+Nagar,+Charkop,+Kandivali+West,+Mumbai+400067&z=17&output=embed"
            width="100%"
            height="350"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Map;
