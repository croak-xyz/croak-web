import styled from 'styled-components';
import PurpleCard from './PurpleCard';
import wallet from '../../assets/images/wallet.svg';
import tools from '../../assets/images/tools.svg';
import marketplace from '../../assets/images/marketplace.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { Navigation, Pagination, Scrollbar, EffectCards } from 'swiper';

const Mobile = styled.div`
  display: none;
  @media only screen and (max-device-width: 480px) {
    display: block;
    flex-direction: column;
  }
`;

const Desktop = styled.div`
  display: none;
  @media (min-device-width: 481px) {
    display: flex;
    flex-direction: column;
  }
`;


const data: any = [
    {
        title: 'Wallet set-up',
        description: 'Learn how to integrate a non-custodial, seedless, social login wallet with Stripe integration for fiat payments',
        image: wallet,
    },
    {
        title: 'NFT Marketplace',
        description: 'Learn how to build a marketplace todeploy & manage contracts, mint & airdrop NFT with trade & transfer',
        image: marketplace,
    },
    {
        title: 'NFT tools',
        description: 'Learn how to build with gasless relayer, fetch & update & get yourself a fancy analytics dashboard',
        image: tools,
    },
];

const FeaturesCards: any = ({}: any) => {
    const cards: any = data.map((item: any, index: any) => {
        return (
            <PurpleCard
                key={`purple-cards-list-${index}`}
                title={item.title}
                description={item.description}
                image={item.image} 
            />
        );
    });

  return (
      <>
        <Mobile>
            <Swiper
                effect="cards"
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                modules={[Navigation, Pagination, Scrollbar, EffectCards]}
                spaceBetween={10}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                    <PurpleCard
                        title={data[0].title}
                        description={data[0].description}
                        image={data[0].image} 
                    />
                </SwiperSlide>
                
                <SwiperSlide>
                    <PurpleCard
                        title={data[1].title}
                        description={data[1].description}
                        image={data[1].image} 
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <PurpleCard
                        title={data[2].title}
                        description={data[2].description}
                        image={data[2].image} 
                    />
                </SwiperSlide>
                
            </Swiper>
        </Mobile>
        <Desktop>
    
            <div 
                style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignContent: 'center',
                    marginTop: 88,
                    marginBottom: 32,
                    marginLeft: -13,
                    marginRight: -13,
                }}
                >
                {cards}
            </div>  
        </Desktop>
    </>
  );
}

export default FeaturesCards;
