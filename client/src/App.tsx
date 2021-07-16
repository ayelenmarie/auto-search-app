import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';

import { SearchBar } from './components/SearchBar';
import List from './components/List';
import { Colors } from './style/Colors';

type ResponseType = {
  config: any;
  data: ResponseDataType;
  headers: any;
  request: any;
  status: number;
  statusText: string;
};

type ResponseDataType = {
  _id: string;
  isActive: boolean;
  price: string;
  picture: string;
  name: string;
  about: string;
  tags: string[];
};

/*
 * Home App
 */

const App: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [searchResponse, setSearchResponse] = useState<ResponseDataType>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const getProducts = useCallback(async (product: string) => {
    setLoading(true);
    try {
      const response: ResponseType = await axios.get(
        `http://localhost:8082/api/products?name=${product}`
      );
      setSearchResponse(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError('An error occured. Please, try again.');
    }
  }, []);

  const handleSearch = (query: string) => {
    setSearch(query);
  };

  useEffect(() => {
    getProducts(search);
  }, [search, getProducts]);

  return (
    <Container>
      <SearchBar onSearch={(query: string) => handleSearch(query)} />
      {loading ? (
        <LoadingContainer>
          <ClipLoader color={Colors.BRICK} loading={loading} size={150} />
        </LoadingContainer>
      ) : (
        <List items={searchResponse} error={error} />
      )}
    </Container>
  );
};

/*
 * Styles
 */

const Container = styled.div`
  @media (min-width: 650px) {
    height: 100vh;
  }
`;

const LoadingContainer = styled.div`
  text-align: center;
`;

export default App;
