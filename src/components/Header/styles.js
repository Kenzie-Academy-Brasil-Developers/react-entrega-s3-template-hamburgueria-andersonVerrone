import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    min-height: 5rem;
    height: fit-content;
    justify-content: flex-start;
    background-color: var(--gray000);
    padding-top: 1.25rem;

    > div {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start; 
    }

    > div > div:first-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        width: 100%;
        max-width: 950px;
        margin: 1.25rem;
    }

    .cartContainer {
        height: fit-content;
        width: fit-content;
        position: relative;
        cursor: pointer;
    }

    .quantityContainer {
        position: absolute;
        top: -14px;
        left: 16px;
        height: 1.5rem;
        padding: 0 .3125rem;
        border-radius: 7px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--main-color);
        color: var(--white);
        font-weight: 900;
        font-size: .875rem;
    }
`