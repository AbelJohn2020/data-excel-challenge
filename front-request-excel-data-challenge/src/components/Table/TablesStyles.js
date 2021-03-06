import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../UI/colors";
import '../../App.css';

export const ContainerTable = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
`;

export const Table = styled.table(({shadow}) => css`
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 24px 0;
    font-size: 16px;
    overflow: hidden;
    box-shadow: ${shadow ? `0 3px 16px 4px ${colors.lightLightGray}` :  `0 0 16px 4px ${colors.shadow}`};
    border-radius: 8px 8px 0 0;
    font-family: 'Roboto';
`);

export const TrHeader = styled.tr`
    width: 100%;
    background: ${colors.blue};
    color: ${colors.white};
    text-align: left;
    box-sizing: border-box;
    font-weight: bold;
`;

export const ThHeader = styled.th`
    box-sizing: border-box;
    padding: 12px 16px;
    text-align: left;
    text-transform: capitalize;
`;

export const TdBody = styled.td`
    box-sizing: border-box;
    padding: 12px 16px;
`;

export const TdBodyNubers = styled.td`
    box-sizing: border-box;
    padding: 12px 16px;
    text-align: right;
`;

export const TrBody = styled.tr(({shadow}) => css`
    border-bottom: 1px solid ${colors.lightGray};
    color: ${ shadow ? colors.white : colors.lightBlack};
    box-sizing: border-box;
    background: ${shadow ? colors.gray : colors.darkDarwhite};

    &:nth-of-type(even) {
        background: ${shadow ? colors.lightBlack : colors.darkWhite};
    }

    &:last-of-type {
        border-bottom: 2px solid ${colors.blue};
    };
`);