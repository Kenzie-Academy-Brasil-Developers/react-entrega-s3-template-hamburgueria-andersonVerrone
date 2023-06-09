import styled from "styled-components";

export const StyledMain = styled.main`
    height: fit-content;
    width: 100%;
    margin: 2rem auto 1rem;

    ul {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        gap: 3.5rem;

        @media screen and (max-width: 650px) {
            flex-wrap: nowrap;
            overflow: auto;
            padding-bottom: 1rem;
        }
    }
`