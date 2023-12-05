import React from 'react';
import { AppContainer } from '../AppContainer';
import styled from 'styled-components';
import { AppDivider } from '../AppDivider';
import FacebookIcon from '@/assets/Facebook.svg';
import TwitterIcon from '@/assets/Twitter.svg';
import InstagramIcon from '@/assets/Instagram.svg';
import LinkedinIcon from '@/assets/Linkedin.svg';
import { AppSVGIcon } from '../AppSVGIcon';
import { AppFlex } from '../AppFlex';

const StyledFooter = styled.footer`
  width: 100%;
  height: 200px;
`;

const AppFooter = () => {
  return (
    <StyledFooter>
      <AppContainer>
        <AppFlex>
          <AppSVGIcon icon={FacebookIcon}></AppSVGIcon>
          <AppSVGIcon icon={TwitterIcon}></AppSVGIcon>
          <AppSVGIcon icon={InstagramIcon}></AppSVGIcon>
          <AppSVGIcon icon={LinkedinIcon}></AppSVGIcon>
        </AppFlex>
      </AppContainer>
    </StyledFooter>
  );
};

export default AppFooter;
