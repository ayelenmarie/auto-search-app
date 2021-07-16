import { isEmpty } from 'lodash';
import styled from 'styled-components';

import { Item } from './Item';
import { Error } from './Error';

type ListProps = {
  items: any;
  error: string;
};

const List: React.FC<ListProps> = ({ items, error }) => {
  const hasItems = !isEmpty(items);
  const hasError = !isEmpty(error);

  return (
    <ContentContainer aria-label="search-results">
      {hasError && <Error error={error} />}
      {!hasError &&
        (hasItems ? (
          items?.map((item: any, id: number) => {
            return <Item item={item} key={id} />;
          })
        ) : (
          <p>No results for this search. Please, try something else.</p>
        ))}
    </ContentContainer>
  );
};

/*
 * Styles
 */

const ContentContainer = styled.div`
  margin: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export default List;
