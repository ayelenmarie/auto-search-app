import styled from 'styled-components';
import { Colors } from '../style/Colors';

/*
 * Error Component
 */

export const Error: React.FC<{ error: string }> = ({ error }) => {
  return (
    <Container>
      <Text>{error}</Text>
    </Container>
  );
};

/*
 * Styles
 */

const Container = styled.div`
  background-color: ${Colors.WHITE};
`;

const Text = styled.p`
  font-size: 24px;
  color: ${Colors.BLACK};
`;
