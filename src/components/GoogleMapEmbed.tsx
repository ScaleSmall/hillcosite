interface GoogleMapEmbedProps {
  title?: string;
  className?: string;
  height?: string;
}

const GoogleMapEmbed = ({
  title = "Hill Country Painting Service Area - Austin, TX",
  className = "",
  height = "400"
}: GoogleMapEmbedProps) => {
  return (
    <div className={`w-full rounded-lg overflow-hidden shadow-lg ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220704.15428449987!2d-97.89354179453126!3d30.307182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1704729600000!5m2!1sen!2sus"
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
