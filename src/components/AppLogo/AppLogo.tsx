import React from 'react';
import styled from 'styled-components';
import Logo from '@/assets/app-logo.svg';
import { AppFlex } from '@components/AppFlex';
import { AppSVGIcon } from '../AppSVGIcon';

const StyledLogoTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  user-select: none;
`;

const AppLogo = () => {
  return (
    <AppFlex align='center'>
      <AppSVGIcon icon={Logo} width='46px' height='30px'></AppSVGIcon>
      <StyledLogoTitle>Modsen Films</StyledLogoTitle>
    </AppFlex>
  );
};

export default AppLogo;
