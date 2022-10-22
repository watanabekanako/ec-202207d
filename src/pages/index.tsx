import Image from 'next/image';
import { Nav } from '../compornents/nav_format';
import style from '../styles/login.module.css';
import styles from '../styles/common.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, EffectFade } from 'swiper';
import s from './TestCarousel.module.css'; //同じディレクトリにCSSを用意
SwiperCore.use([Pagination, Autoplay, EffectFade]);
const images = ['/TopImage3.jpg', '/TopImage2.jpg', '/TopImage.jpg'];
const TopPage = () => {
  return (
    <>
      <div className={`${styles.bodyColor}`}>
        <div className="container">
          <Head>
            <title>ラクラクヌードル</title>
          </Head>
          <Nav name="" />
          {/* <div className={`${style.imagecontainer}`}>
            <Image src="/TopImage.jpg" width={645} height={450} />
            <Image src="/TopImage2.jpg" width={645} height={450} />
          </div> */}
          <Swiper
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletClass: `swiper-pagination-bullet ${s.custom_bullet}`,
              bulletActiveClass: `swiper-pagination-bullet-active ${s.custom_bullet_active}`,
            }}
            autoplay={{ delay: 1000, disableOnInteraction: true }}
            speed={2000}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop={true}
          >
            {images.map((src: string, index: number) => {
              return (
                <SwiperSlide key={`${index}`}>
                  <Image
                    src={src}
                    layout="responsive"
                    width={600}
                    height={300}
                    alt="test_image"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <h1>ラクラクヌードル</h1>
        </div>
      </div>
    </>
  );
};
export default TopPage;
