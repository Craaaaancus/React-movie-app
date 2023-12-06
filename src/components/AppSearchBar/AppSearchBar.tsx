import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { AppFlex } from '@components/AppFlex';
import SearchIcon from '@/assets/search.svg';

const StyledSearchBar = styled.div`
  flex-basis: 560px;
  margin: 0 20px;
  transition: all 0.3 ease;
`;

const StyledSearchIcon = styled(SearchIcon)`
  width: 20px;
  height: 20px;
`;

const StyledSearchBox = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
`;

const StyledSearchButton = styled.button`
  width: 60px;
  outline: none;
  background: ${(props) => props.theme.colors.searchButton};
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-left: none;
  border-radius: 0 20px 20px 0;
`;

const StyledSearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 0 30px;
  color: ${(props) => props.theme.colors.searchText};
  background-color: ${(props) => props.theme.colors.search};
  outline: none;
  font-size: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 20px 0 0 20px;

  &:focus {
    border-color: #5252e6;
  }
`;

const StyledClearButton = styled.div`
  position: absolute;
  right: 6px;
  top: 6px;
  width: 20px;
  height: 100%;
  opacity: 0.3;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    content: '';
    height: 26px;
    width: 2px;
    background-color: ${(props) => props.theme.colors.searchClear};
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

const AppSearchBar = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(() => e.target.value);
  };

  const handleClear = () => {
    setSearch(() => '');
  };

  return (
    <StyledSearchBar>
      <AppFlex>
        <StyledSearchBox>
          <StyledSearchInput
            value={search}
            placeholder='Search...'
            onChange={handleSearch}
          ></StyledSearchInput>
          {search.length > 0 && <StyledClearButton onClick={handleClear}></StyledClearButton>}
        </StyledSearchBox>
        <StyledSearchButton>
          <StyledSearchIcon></StyledSearchIcon>
        </StyledSearchButton>
      </AppFlex>
    </StyledSearchBar>
  );
};

export default AppSearchBar;
