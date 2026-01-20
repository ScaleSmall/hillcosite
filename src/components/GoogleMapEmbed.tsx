interface GoogleMapEmbedProps {
  title?: string;
  className?: string;
  height?: string;
  query?: string;
}

const GoogleMapEmbed = ({
  title = "Hill Country Painting Service Area - Austin, TX",
  className = "",
  height = "400",
  query = "Austin, TX"
}: GoogleMapEmbedProps) => {
  const encodedQuery = encodeURIComponent(query);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_EMBED_API_KEY;

  const mapSrc = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedQuery}&zoom=12`
    : `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.5!2d-97.7431!3d30.2672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${encodedQuery}!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus`;

  return (
    <div className={`w-full rounded-lg overflow-hidden shadow-lg ${className}`}>
      <iframe
        src={mapSrc}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
      />
    </div>
  );
};

export default GoogleMapEmbed;
