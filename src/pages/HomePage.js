import BookingSection from '../components/layouts/home/BookingSection';
import EventSection from '../components/layouts/home/EventSection';
import GallerySection from '../components/layouts/home/GallerySection';
import GuideSection from '../components/layouts/home/GuideSection';
import IntroSection from '../components/layouts/home/IntroSection';
import NoticeSection from '../components/layouts/home/NoticeSection';
import ProgramSection from '../components/layouts/home/ProgramSection';

const HomePage = () => {
  return (
    <main className="HomePage">
      <IntroSection></IntroSection>
      <GuideSection></GuideSection>
      <ProgramSection></ProgramSection>
      <GallerySection></GallerySection>
      <BookingSection></BookingSection>
      <NoticeSection></NoticeSection>
      <EventSection></EventSection>
    </main>
  );
};

export default HomePage;
