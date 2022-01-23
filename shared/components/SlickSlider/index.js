import dynamic from 'next/dynamic';

const SlickSliderWithNoSSR = dynamic(() => import('shared/components/SlickSlider/Slick'), { ssr: false });

export default SlickSliderWithNoSSR;

