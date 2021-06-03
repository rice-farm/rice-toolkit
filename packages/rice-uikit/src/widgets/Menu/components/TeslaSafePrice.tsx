import React from "react";
import styled from "styled-components";
import {TeslaSafeRoundIcon} from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

// import { useTheme } from "styled-components";

interface Props {
    teslaSafePriceUsd?: number;
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

const TeslaSafePrice: React.FC<Props> = ({teslaSafePriceUsd}) => {
    // const theme = useTheme();

    return teslaSafePriceUsd ? (
        <PriceLink href="https://pancakeswap.info/token/0x3504de9e61FDFf2Fc70f5cC8a6D1Ee493434C1Aa" target="_blank">
            <TeslaSafeRoundIcon width="24px" mr="8px"/>
            <Text color="textSubtle" bold>{`$${teslaSafePriceUsd.toFixed(3)}`}</Text>
        </PriceLink>
    ) : (
        <Skeleton width={80} height={24}/>
    );
};

export default React.memo(TeslaSafePrice);
