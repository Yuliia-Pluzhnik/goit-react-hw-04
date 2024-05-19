import ImageCard from '../ImageCard/ImageCard.jsx';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    images.length > 0 && (
      <ul className="image-gallery">
        {images.map((image) => (
          <li key={image.id} onClick={() => onImageClick(image)}>
            <ImageCard image={image} />
          </li>
        ))}
      </ul>
    )
  );
};

export default ImageGallery;
