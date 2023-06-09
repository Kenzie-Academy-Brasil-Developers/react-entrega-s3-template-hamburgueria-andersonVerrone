import { StyledGlobalContainer } from "../../styles/globalContainer";
import { StyledMain } from "./styles"

const Main = ({children}) => {
    return (
        <StyledGlobalContainer>
            <StyledMain>
                <ul>
                    {children}
                </ul>
            </StyledMain>
        </StyledGlobalContainer>
    )
}

export default Main;