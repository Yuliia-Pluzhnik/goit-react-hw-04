const ImageCard = ({ image }) => {
  return (
    <div className="image-card">
      <img src={image.urls.small} alt={image.description || 'Unsplash Image'} />
    </div>
  );
};

export default ImageCard;
