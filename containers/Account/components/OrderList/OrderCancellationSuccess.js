import React, { useEffect } from 'react'
import detectMobile from 'utils/helpers/mobileDetect';
import Button from 'shared/components/Button';
import styled from 'styled-components';
import MemoCheckmarkDesktop from 'shared/components/SVGIcons/CheckmarkDesktop';
import MemoCheckmarkMobile from 'shared/components/SVGIcons/CheckmarkMobile'
import Flex from 'shared/components/Flex';
import Icons from 'react-icons-kit';
import facebookF from 'shared/components/Icons/social/Facebook';
import { youtube, instagram, mail, pinterest, twitter } from 'shared/components/Icons';
import Link from 'next/link';
import { isFalse } from 'ramda-adjunct';
import makeClevertap from 'lib/makeClevertap';
import { useRouter } from "next/router";

const OrderCancellationSuccess = ({ isCOD, user, trackingData }) => {

    const isMobile = detectMobile();
    const clevertap = makeClevertap();
    const router = useRouter();
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [])

    const selectContinueShoppingClevertap = () => {
        if (user) {
            clevertap.event.push('continueShopping', {
                ...trackingData,
                platform: 'mewebsite',
                timeStamp: new Date().getTime(),
                pageTitle: process.browser ? document.title : "",
                clickSource: router.asPath.split("/").slice(-1)[0],
                clickTarget: "shop",
                clickLabel: "Shop",
                clickUrl: "/shop",
                userName: user.firstName + ' ' + user.lastName,
                phone: user.phone,
                email: user.email,
            });
        }
    }

    if(isMobile){
        return (
            <MobileWrapper>
                <MemoCheckmarkMobile className='mobile-icon'/>
            <div className="main-text">
                Cancellation Successful
            </div>
            {(isFalse(isCOD)) && <ReasonMessage />}       
            <div className="line"></div>
            <div className="help-text">
                Need Help ? Contact Us Below
            </div>
            <div style={{                
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
                }}>
                <MobileButton style={{ color: '#279989', backgroundColor: '#fff', textTransform: 'none', marginRight: 20  }}>
                    care@thedermaco.com
                </MobileButton>
                <MobileButton style={{ color: '#279989', backgroundColor: '#fff'  }}>+91-8750476476</MobileButton>
            </div>
            <SocialIcons>
                <Flex justify="center" className={`icons-container`}>
                    <a href="https://www.facebook.com/thedermaco/">
                        <Icons icon={facebookF} size="1.5rem" />
                    </a>
                    <a href="https://twitter.com/thedermaco/">
                        <Icons icon={twitter} size="1.5rem" />
                    </a>
                    <a href="https://www.instagram.com/thedermacoindia/">
                        <Icons icon={instagram} size="1.5rem" />
                    </a>
                </Flex>
            </SocialIcons>
            <div onClick={selectContinueShoppingClevertap}>
            <Link prefetch={false} href="/products">
                <CustomButton>
                    Continue Shopping
                </CustomButton>
            </Link>
            </div>
            </MobileWrapper>
        );
    }

    return (
        <DesktopWrapper>
            <MemoCheckmarkDesktop className='desktop-icon'/>
            <div className="main-text">
                Cancellation Successful
            </div>
            {(isFalse(isCOD)) && <ReasonMessage />}
            <div onClick={selectContinueShoppingClevertap}>
            <Link prefetch={false} href="/products">
                <CustomButton>
                    Continue Shopping
                </CustomButton>
            </Link>
            </div>
        </DesktopWrapper>
    )
}

function ReasonMessage() {
    return (
        <RMWrapper>
            Your order amount will be refunded in next 8-10 working business days.
        </RMWrapper>
    );
}

const RMWrapper = styled.div`
    margin: 0 auto;
    font-size: 1.1rem;
    text-align: center;
    color: ${props => props.theme.general.primaryColor};
    
    @media (min-width: 1024px) {
        margin: 0 auto 2rem;
    }
`;

const DesktopWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: black;
    .main-text {
        font-size: 2rem;
        font-weight: 400;
    }
    .sub-text {
        font-size: 1.1rem;
        margin-bottom: 20px;
    }
    .desktop-icon{
        font-size: 4rem;
    }
`;
const MobileWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: black;
    margin-top: 50px;
    margin-bottom: 50px;
    .main-text {
        font-size: 2rem;
        font-weight: 400;
    }
    .sub-text {
        font-size: 1.1rem;
        margin-bottom: 20px;
        margin: 20px;
        text-align: center;
    }
    .help-text {
        margin: 20px;
        font-size: 1.1rem;
    }
    .mobile-icon{
        font-size: 4rem;
    }
    .line {
        height: 5px;
        width: 100%;
        background-color: #f2f9e8;
        margin: 20px;
    }
`;
const CustomButton = styled(Button)`
    background-color: ${props => props.theme.general.primaryColor};
    color: #fff;
    border-radius: 5px;
    border: 2px solid #279989;
    font-weight: bolder;
`;
const MobileButton = styled(Button)`
    width: 45vw;
    background-color: ${props => props.theme.general.primaryColor};
    border-radius: 5px;
    border: 1px solid #279989;
    margin-bottom: 5px;
    padding: 0.5rem 0.3rem;
    font-size: 0.8rem;
    font-weight: 800;
`;
const SocialIcons = styled.div`
    margin: 20px;
    a {
    font-size: 1.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

    i {
    color: #989898;
    }
}
.socialEmailIcon {
        cursor: auto;
        pointer-events: none;
    }

    @media only screen and (min-width: 768px) {
    a {
    font-size: 2rem;
    padding-left: 0.25em;
    padding-right: 0.5em;
    }
    }
`;

export default OrderCancellationSuccess;
