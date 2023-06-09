import styled from "styled-components";

export const StyledModal = styled.div`
    width: 100%;
    height: 100vh;
    background: #00000030;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    padding: 0 1.25rem;

    .modalBox {
        max-width: 31.25rem;
        width: 100%;
        background-color: var(--gray000);
    }

    header {
        width: 100%;
        background-color: var(--main-color);
        padding: .8125rem 1.375rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    header>p {
        color: var(--white);
    }

    .closeBtn {
        cursor: pointer;
    }

    .modalContainer {
        width: 100%;
        height: fit-content;
        padding: 1.25rem;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: fit-content;
        width: 100%;
        gap: 1.125rem;
        max-height: 60vh;
        min-height: 30vh;
        overflow-y: auto;
        margin-bottom: 1.125rem;
    }

    .emptyContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 30vh;
        margin-bottom: 1.125rem;
    }

    .totalContainer {
        width: 100%;
        display: flex;
        align-items: center;
        border-top: 2px solid var(--gray100);
        padding-top: .9375rem;
        padding-bottom: .875rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        >p:first-child {
            color: var(--gray600);
        }
    }

    button {
        width: 100%;
        height: 3.75rem;
        border-radius: 8px;
        padding: 0px 20px;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
    }

    .deleteAllBtn {
        background: var(--gray100);
        border: 2px solid var(--gray100);
        color: var(--gray300);
    }

    .deleteAllBtn:hover {
        background: var(--gray300);
        border: 2px solid var(--gray300);
        color: var(--gray100);
    }

    .buyItensBtn {
        background: var(--main-color);
        border: 2px solid var(--main-color);
        color: var(--white);
    }

    .buyItensBtn:hover {
        background: var(--main-color-hover);
        border: 2px solid var(--main-color-hover);
    }
`