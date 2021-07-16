import styled from 'styled-components';
import NumberFormat from 'react-number-format';

import { Colors } from '../style/Colors';
import { useState } from 'react';
import chevronUp from '../images/chevron-up.png';
import chevronDown from '../images/chevron-down.png';

/*
 * Types
 */

export type ItemType = {
  _id: string;
  about: string;
  isActive: boolean;
  name: string;
  picture: string;
  price: string;
  tags: string[];
};

type ItemProps = {
  item: ItemType;
};

/*
 * Item Component
 */

export const Item: React.FC<ItemProps> = ({ item }) => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <ContentContainer>
      <Image src={item.picture} alt={item.name} />
      <Spacer />
      <NumberFormat
        value={item.price}
        displayType={'text'}
        prefix={'$ '}
        data-testid="Price"
      />
      <Spacer />
      <TagsContainer>
        {item.tags.map((tag, index) => {
          return <Tag key={index}>{tag}</Tag>;
        })}
      </TagsContainer>
      <Spacer />
      <Title>{item.name}</Title>
      <DescriptionContainer
        onClick={() => setShowDescription(!showDescription)}
      >
        <DescriptionTitle>Product description</DescriptionTitle>
        <Arrow src={showDescription ? chevronUp : chevronDown} />
      </DescriptionContainer>
      {showDescription && <Description>{item.about}</Description>}
      <Spacer />
      <PurchaseButton isActive={item.isActive}>
        {item.isActive ? 'Add to cart' : 'Out of stock'}
      </PurchaseButton>
    </ContentContainer>
  );
};

/*
 * Styles
 */

const ContentContainer = styled.div`
  width: 220px;
  margin: 16px;
  padding: 16px;
  background-color: ${Colors.WHITE};
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  max-width: 100px;
  max-height: 200px;
  margin-right: 16px;
  grid-row-start: 1;
  grid-row-end: 3;
  justify-self: center;
  align-self: center;
`;

const TagsContainer = styled.ul`
  padding: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Tag = styled.li`
  list-style-type: none;
  margin: 2px;
  padding: 4px;
  background-color: ${Colors.GREY};
  color: ${Colors.DARK_GREY};
  font-size: 12px;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 18px;
  margin: 0px;
  align-self: flex-start;
`;

const Spacer = styled.div`
  height: 16px;
`;

const DescriptionContainer = styled.button`
  padding: 0px;
  margin: 8px 0px 8px 0px;
  background-color: ${Colors.WHITE};
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DescriptionTitle = styled.p`
  margin: 0px;
  font-size: 14px;
  color: ${Colors.DARK_GREY};
  font-weight: 100;
`;

const Arrow = styled.img`
  width: 14px;
  height: 14px;
`;

const Description = styled.p`
  font-size: 14px;
  color: ${Colors.GREY};
`;

const PurchaseButton = styled.button<{ isActive: boolean }>`
  border: none;
  padding: 8px;
  background-color: ${(props) => (props.isActive ? Colors.BLACK : Colors.GREY)};
  color: ${(props) => (props.isActive ? Colors.WHITE : Colors.BLACK)};
`;
