import BookingSection from '../components/layouts/homePage/BookingSection';
import EventSection from '../components/layouts/homePage/EventSection';
import GallerySection from '../components/layouts/homePage/GallerySection';
import GuideSection from '../components/layouts/homePage/GuideSection';
import IntroSection from '../components/layouts/homePage/IntroSection';
import NoticeSection from '../components/layouts/homePage/NoticeSection';
import ProgramSection from '../components/layouts/homePage/ProgramSection';

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
