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
  min-height: 200px;

  & * {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
  }
`;

const StyledFooterLink = styled.a`
  font-size: 1.1rem;
  font-weight: 500;
`;

const StyledFooterCompany = styled.div`
  text-align: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 0.86rem;
  font-weight: 500;
  padding-bottom: 20px;
`;

const AppFooter = () => {
  return (
    <StyledFooter>
      <AppContainer>
        <AppFlex direction='column' justify='space-between'>
          <AppFlex direction='column-reverse'>
            <AppFlex direction='column' margin='0 10px 10px'>
              <StyledFooterLink>Terms Privacy Policy & Safety</StyledFooterLink>
              <StyledFooterLink>How Youtube works</StyledFooterLink>
              <StyledFooterLink>Test new features</StyledFooterLink>
            </AppFlex>
            <AppFlex direction='column' margin='0 10px 10px'>
              <StyledFooterLink>About press Copyright</StyledFooterLink>
              <StyledFooterLink>Contact Us</StyledFooterLink>
              <StyledFooterLink>Advertise</StyledFooterLink>
            </AppFlex>
          </AppFlex>

          <AppFlex justify='space-between' width='140px' margin='auto'>
            <AppSVGIcon icon={FacebookIcon}></AppSVGIcon>
            <AppSVGIcon icon={TwitterIcon}></AppSVGIcon>
            <AppSVGIcon icon={InstagramIcon}></AppSVGIcon>
            <AppSVGIcon icon={LinkedinIcon}></AppSVGIcon>
          </AppFlex>
        </AppFlex>

        <StyledFooterCompany>2023 Modsen Company</StyledFooterCompany>
      </AppContainer>
    </StyledFooter>
  );
};

export default AppFooter;
