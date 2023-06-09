import styled from "styled-components";

export const StyledSearchContainer = styled.form`
    width: 100%;
    max-width: 23.875rem;
    height: fit-content;
    position: relative;

    input {
        min-width: 200px;
        width: 100%;
        height: 60px;
        border: 2px solid black;
        padding: 0 4.6875rem 0 1.25rem;
        background-color: var(--white);
        border-radius: 8px;
        border: 2px solid var(--gray100);
    }
    input:focus {
        border: 2px solid var(--gray600);
    }

    input::placeholder {
        color: var(--gray100);
    }

    button {
        background-color: var(--main-color);
        border: 2px solid var(--main-color);
        height: 2.5rem;
        padding: 0 1.25rem;
        border-radius: 8px;
        position: absolute;
        top: 50%;
        right: .625rem;
        cursor: pointer;
        transform: translateY(-50%);
    }
`