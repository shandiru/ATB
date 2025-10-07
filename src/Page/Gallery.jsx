import WorkGalleryHeader from "../components/Gallery/WorkGalleryHeader";
import WorkGallery from "../components/Gallery/WorkGallery"
import BeforeAfterTransformations from "../components/Gallery/BeforeAfterTransformations"

function Gallery() {
  return (
    <>
      <WorkGalleryHeader/>
      <WorkGallery />
      <BeforeAfterTransformations />
    </>
  );
}

export default Gallery;
