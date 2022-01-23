import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


function ProfileIcon({ name, className }) {
  const initials = getInitials(name);
  return (
    <Wrapper bgColor={getColor()} className={`${className} profile-icon`}>{initials}</Wrapper>
  );
}

function getInitials(name) {
  const nameParts = name.split(/[.*+\-?^${}()|[\]\\ ]/, 2);
  if (nameParts.length > 1) {
    return nameParts[0][0].concat(nameParts[1][0]);
  }
  return nameParts[0][0].concat(nameParts[0][1]);
}

const Wrapper = styled.div`
  padding: 6px 6px;
  background-color: ${props => props.bgColor};
  color: white;
  font-size: 0.9rem;
  text-align: center;
  text-transform: uppercase;
  border-radius: 50%;
  letter-spacing: 2px;
  font-family: Roboto, sans-serif;
  font-weight: 500;
`;

function getColor() {
  const colorCodes = [
    "#888DA7", "#FFD275", "#B2ABF2", "#7D80DA", "#2A7F62",
    "#878E76", "#E8AE68", "#04773B", "#058E3F", "#069E2D",
    "#736CED", "#B38D97", "#CB8589", "#CEBACF", "#89043D",
  ];
  return colorCodes[
    Math.floor(Math.random() * (colorCodes.length - 0 + 1)) + 0
  ];
}

const propTypes = {
  name: PropTypes.string.isRequired,
}

ProfileIcon.propTypes = propTypes;

const StyledProfileIcon = styled(ProfileIcon)``;

export default React.memo(StyledProfileIcon);
