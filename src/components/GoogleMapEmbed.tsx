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
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedQuery}&zoom=12`;

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
