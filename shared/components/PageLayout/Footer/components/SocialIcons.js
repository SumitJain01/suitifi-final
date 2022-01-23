import React from 'react';
import styled from 'styled-components';
import Flex from 'shared/components/Flex';
import Icons from 'react-icons-kit';
import { socialAssets } from 'utils/constants';
import { mail } from 'shared/components/Icons';


function SocialIcons({
  className,
}) {
  return (
    <Flex justify="center" className={`${className} icons-container`}>
      {
       socialAssets.map((item,id) => 
       <a target="_blank" key={id} className={item.iconAsset === "mail" ? 'socialEmailIcon' : ''} href={item.linkTo}>
       <Icons icon={item.iconAsset} size="1.5rem" />
     </a>
       ) 
      }
      <a className="socialEmailIcon" href="mailto:care@thedermaco.com">
        <Icons icon={mail} size="1.5rem" />
      </a>
    </Flex>
  );
}

export default styled(SocialIcons)`
  a {
    font-size: 1.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

    i {
      color: #989898;
    }
  }
  .socialEmailIcon {
    cursor: pointer;
    /* pointer-events: none; */

  }

  @media only screen and (min-width: 768px) {
    a {
      font-size: 2rem;
      padding-left: 0.25em;
      padding-right: 0.5em;
    }
  }
`;
