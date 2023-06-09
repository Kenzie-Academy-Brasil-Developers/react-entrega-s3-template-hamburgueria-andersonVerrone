import styled from "styled-components";

export const StyledCardCart = styled.li`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background-color: var(--gray000);
    
    >div:first-child {
        height: 100%;
        width: fit-content;
        display: flex;
        gap: .58rem;
        align-items: flex-start;
    }

    >div:last-child {
        height: 100%;
        width: fit-content;
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        justify-content: space-between;

        .deleteBtn {
            cursor: pointer;
            margin-top: .5rem;
        }

        >div {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: .5rem;

            .subBtn, .addBtn {
                cursor: pointer;
            }

            span {
                font-weight: 600;
                font-size: .875rem;
                line-height: 1.5rem;
                color: var(--gray300);
            }
        }


    }


`

export const StyledImageCart = styled.div`
  width: 5.1413rem;
  height: 100%;
  background-image: url(${({image}) => image});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
  background-color: var(--gray100);
  border-radius: 5px;
`;