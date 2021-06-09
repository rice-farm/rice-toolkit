import React from "react";
import styled from "styled-components";
import {RiceRoundIcon} from "../../../components/Svg";
import Text from "../../../components/Text/Text";
// import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
    ricePriceUsd?: number
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const RicePrice: React.FC<Props> = ({ricePriceUsd}) => {
    return ricePriceUsd ? (
    <PriceLink href="https://pancakeswap.info/token/0xeA2cE3C20184C1814D372756360F4Be7621A70Bb" target="_blank">
      <RiceRoundIcon width="24px" mr="8px" />
            <Text color="textSubtle" bold>{`$${ricePriceUsd.toFixed(3)}`}</Text>
        </PriceLink>
    ) : (
        <PriceLink href="https://pancakeswap.info/token/0xeA2cE3C20184C1814D372756360F4Be7621A70Bb" target="_blank">
            <RiceRoundIcon width="24px" mr="8px" />
            <Text color="textSubtle" bold>-</Text>
        </PriceLink>
    );
};

export default React.memo(RicePrice);
