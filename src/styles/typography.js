import styled, {css} from "styled-components";

export const StyledTypography = styled.p`
    ${({typographyStyle}) => {
        if (typographyStyle === "heading1") {
            return css`
                font-weight: 700;
                font-size: 1.625rem;
                line-height: 2.125rem;
                color: var(--gray600);
            `
        } else if (typographyStyle === "heading2") {
            return css`
                font-weight: 700;
                font-size: 1.375rem;
                line-height: 1.5rem;
                color: var(--gray600);
            `
        } else if (typographyStyle === "heading3") {
            return css`
                font-weight: 700;
                font-size: 1.125rem;
                line-height: 1.5rem;
                color: var(--gray600);
            `
        } else if (typographyStyle === "headline") {
            return css`
                font-weight: 400;
                font-size: 1rem;
                line-height: 1.5rem;
                color: var(--gray300);
            `
        } else if (typographyStyle === "body") {
            return css`
                font-weight: 400;
                font-size: .875rem;
                line-height: 1.5rem;
                color: var(--gray300);
            `
        } else if (typographyStyle === "body-600") {
            return css`
                font-weight: 600;
                font-size: .875rem;
                line-height: 1.5rem;
                color: var(--gray300);
            `
        } else if (typographyStyle === "caption") {
            return css`
                font-weight: 400;
                font-size: .75rem;
                line-height: 1rem;
                color: var(--gray300);
            `
        }
    }}
`