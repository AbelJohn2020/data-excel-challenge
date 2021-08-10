import styled from "@emotion/styled";
import { colors } from "../UI/colors";

export const ContainerTable = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Table = styled.table`
    border-collapse: collapse;
    margin: 24px 0;
    font-size: 16px;
    overflow: hidden;
    box-shadow: 0 0 16px 4px ${colors.shadow};
    border-radius: 8px 8px 0 0;
`;

export const TrHeader = styled.tr`
    background: ${colors.blue};
    color: ${colors.white};
    text-align: left;
    font-weight: bold;
`;

export const ThHeader = styled.th`
    padding: 12px 16px;
`;

export const TdBody = styled.td`
    padding: 12px 16px;
`;

export const TdBodyNubers = styled.td`
    padding: 12px 16px;
    text-align: right;
`;

export const TrBody = styled.tr`
    border-bottom: 1px solid ${colors.lightGray};

    &:nth-of-type(even) {
        background: ${colors.darkWhite};
    }

    &:last-of-type {
        border-bottom: 2px solid ${colors.blue};
    }
`;