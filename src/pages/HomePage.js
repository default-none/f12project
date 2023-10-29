import { useQuery } from 'react-query';
import BookingSection from '../components/layouts/homePage/BookingSection';
import EventSection from '../components/layouts/homePage/EventSection';
import GallerySection from '../components/layouts/homePage/GallerySection';
import GuideSection from '../components/layouts/homePage/GuideSection';
import IntroSection from '../components/layouts/homePage/IntroSection';
import NoticeSection from '../components/layouts/homePage/NoticeSection';
import ProgramSection from '../components/layouts/homePage/ProgramSection';
import fetchData from '../components/datas/fetchData';
import LoadingScreen from './LoadingScreen';

const HomePage = () => {
  const { data, isLoading } = useQuery('fetchData', fetchData);

  return (
    <main className="HomePage">
      <LoadingScreen loadingComplete={!isLoading} />
      <IntroSection></IntroSection>
      <GuideSection></GuideSection>
      <ProgramSection></ProgramSection>
      <GallerySection></GallerySection>
      <BookingSection></BookingSection>
      <NoticeSection></NoticeSection>
      <EventSection></EventSection>
      {/* 데이터 로딩이 완료되면 메시지를 출력합니다. */}
      {!isLoading && <div>{data.message}</div>}
    </main>
  );
};

export default HomePage;
