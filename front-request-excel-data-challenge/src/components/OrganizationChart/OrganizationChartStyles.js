import styled from "@emotion/styled";
import { colors } from "../UI/colors";
import '../../App.css';
import { css } from "@emotion/react";

export const Div = styled.div(({shadow}) => css`
    margin: 32px 0 48px 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
    color: ${shadow ? colors.lightGray : colors.lightBlack};
`);

export const Ul = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
`;


export const Li = styled.li( ({shadow}) => css`
    margin: 0;
    padding: 8px 12px;
    border: ${colors.blue} solid 3px;
    displat: flex;
    flex-direction: column;
    border-radius: 8px;
    box-sizing: border-box;
    background: ${shadow ? colors.lightLightBlack : colors.darkDarwhite};
`);

export const BoxAreas = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
`;

export const Areas = styled.div(({shadow}) => css`
    margin: 0;
    padding: 8px 12px;
    border: ${colors.blue} solid 3px;
    border-radius: 8px;
    box-sizing: border-box;
    background: ${shadow ? colors.lightLightBlack : colors.darkDarwhite};
    box-sizing: border-box;
`);

export const BoxSubareas = BoxAreas;

export const Subareas = Areas;

/*----------Styles Text-------------*/

export const Department = styled.div`
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.4px;
    margin: 4px 12px 8px 12px;
    box-sizing: border-box;
`;

export const DepartmentsName = styled.div`
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.4px;
    margin: 4px 12px 8px 12px;
    box-sizing: border-box;
`;

export const Lider = styled.div`
    width: 100%;
    box-sizing: border-box;
    text-align: left;
`;