import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { pathOr } from 'ramda';
import { initAppState as initAppStateAction } from 'containers/Global/redux/actions';
import { makeSelectGetMetaTitle } from "containers/Products/redux/selectors";
import { makeSelectLoggedIn } from 'containers/Auth/redux/selectors';
import Header from 'shared/components/PageLayout/Header';
import Footer from 'shared/components/PageLayout/Footer';
import BaseMeta from 'shared/components/PageLayout/BaseMeta.js';
import GlobalStyle from 'theme/styles/globalStyles';
import theme from 'theme/index';
import { showLoginPopUp } from 'containers/Auth/redux/actions';
import StyledPage from './styled/StyledPage';
import LcpOptimisation from '../LcpOptimisation';

function Page({ children, metaTitle, showLoginPopUp, isLoggedIn }) {
  const router = useRouter();
  var newasPath;
  if(router.asPath && router.asPath.split("?")[0].includes('/')){
    newasPath = router.asPath.split("?")[0];
  }else if(router.asPath && router.asPath.split("?")[0].includes('/product-category/')){
    newasPath = router.asPath.split("?")[0];
  }else{
    newasPath=router.asPath;
  }

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <BaseMeta metaTitle={metaTitle} asPath={newasPath}/>
        <Header router={router}/>
        <LcpOptimisation />
        <StyledPage>
          {children}
        </StyledPage>
        {
          router.asPath.includes('skin-assessment') ? null : <Footer isLoggedIn={isLoggedIn} showLoginPopUp={showLoginPopUp} />
        }
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  );
}

const checkIfProduct = (state, ownProp) => {
  if (pathOr(null, ['router', 'route'], ownProp) === "/product") {

    return makeSelectGetMetaTitle();
  } else {

    return () => {
      return "The Derma Co. - Customized Skin & Hair Care Products";
    }
  }
}

const mapDispatchToProps = dispatch => ({
  initAppState:bindActionCreators(initAppStateAction, dispatch),
  showLoginPopUp: bindActionCreators(showLoginPopUp, dispatch),
});

const mapStateToProps = (state, ownProp) => createStructuredSelector({
  metaTitle: checkIfProduct(state, ownProp),
  isLoggedIn: makeSelectLoggedIn(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
