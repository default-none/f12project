import './HomePage.scss';
import BookingSection from '../components/layers/home/BookingSection';
import EventSection from '../components/layers/home/EventSection';
import GallerySection from '../components/layers/home/GallerySection';
import GuideSection from '../components/layers/home/GuideSection';
import IntroSection from '../components/layers/home/IntroSection';
import NoticeSection from '../components/layers/home/NoticeSection';
import ProgramSection from '../components/layers/home/ProgramSection';

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
