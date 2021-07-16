import { ChangeEvent, useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { debounce } from 'lodash';

import { Colors } from '../style/Colors';
import Logo from '../images/logo.jpeg';

type SearchBarProps = {
  onSearch: (value: string) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const delayedQuery = useRef(debounce((q) => onSearch(q), 500)).current;

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
    delayedQuery(e.target.value);
  };

  const handleHomeClick = useCallback(() => {
    setInputValue('');
  }, []);

  return (
    <Container data-test-id="SearchBar">
      <WidthContainer>
        <LogoButton onClick={handleHomeClick}>
          <ImageLogo src={Logo} alt="Mac Cosmetics Logo" />
        </LogoButton>
        <SearchInput
          type="text"
          placeholder="Search"
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearch(e)}
          value={inputValue}
          aria-label="search-input"
        />
      </WidthContainer>
    </Container>
  );
};

/*
 * Styles
 */

const Container = styled.div`
  padding: 8px;
  background-color: ${Colors.BLACK};
  display: flex;
  align-items: center;
`;

const WidthContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
`;

const LogoButton = styled.button`
  border: none;
  background-color: transparent;
`;

const ImageLogo = styled.img`
  width: 100px;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${Colors.DARK_GREY};
  background-color: ${Colors.BLACK};
  margin-left: 16px;
  padding: 0px;
  font-size: 14px;
  font-family: Helvetica, Arial, sans-serif;
  color: ${Colors.WHITE};
  ::placeholder {
    color: ${Colors.GREY};
  }
  :focus {
    outline: none;
    color: ${Colors.WHITE};
  }
`;
