import Modal from 'react-modal';
import css from './ImageModal.module.css'

Modal.setAppElement('#root');

const ImageModal = ({ image, onClose }) => (
  <Modal
    isOpen={!!image}
    onRequestClose={onClose}
    className={css.modal}
    overlayClassName={css.overlay}
  >
    <div className={css.modalContent}>
      <img src={image.urls.regular} alt={image.description || 'Unsplash Image'} />
      <button onClick={onClose} className={css.closeBtn}>Close</button>
    </div>
  </Modal>
);

export default ImageModal;
