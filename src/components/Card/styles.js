import styled from "styled-components";

export const StyledCard = styled.li`
    width: 18.75rem;
    min-width:18.75rem;
    height: 21.625rem;
    background-color: var(--white);
    border: 2px solid var(--gray100);
    border-radius: 5px;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 1.1875rem 1.4375rem 1.25rem;
    transition: all 0.5s ease-in-out;
    background-color: var(--white);

    :hover {
        border: 2px solid var(--main-color);
    }

    .nameProduct {
        margin-top: 1.25rem;  
    }

    .categoryProduct {
        margin-top: .3125rem;
    }

    .priceProduct {
        margin-top: .625rem;
        color: var(--main-color);
    }

    button {
        height: 2.5rem;
        padding: 0 1.25rem;
        cursor: pointer;
        background: #BDBDBD;
        border: 2px solid #BDBDBD;
        border-radius: 8px;
        margin-top: 1.25rem;
        font-weight: 600;
        font-size: .875rem;
        line-height: 1.0625rem;
        color: var(--white);
        transition: all 0.5s ease-in-out;
    }

    :hover > button {
        background: var(--main-color);
        border: 2px solid var(--main-color);
    }
`

export const StyledImage = styled.div`
  width: 100%;
  height: 9.375rem;
  background-image: url(${({image}) => image});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
`;