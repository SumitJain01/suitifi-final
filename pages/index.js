import React from 'react';
import HomeContainer from 'containers/Home';
import { wrapper } from '../store';
import { END } from 'redux-saga';
import { homePageCarouselsRequest } from 'containers/Home/redux/actions';

export const getStaticProps = wrapper.getStaticProps(async ({ store, req, res, ...etc }) => {
  store.dispatch(homePageCarouselsRequest());
  store.dispatch(END);
  await store.sagaTask.toPromise();
  
  return {
    revalidate: 60
  }
});

export default function Home() {  
  return (
    <HomeContainer />    
  );
}
