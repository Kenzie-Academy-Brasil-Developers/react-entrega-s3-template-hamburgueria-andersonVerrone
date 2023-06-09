import { StyledGlobalContainer } from "../../styles/globalContainer"
import {FaShoppingCart, FaSearch} from "react-icons/fa";
import logo from "../../assets/img/logo.svg"
import { StyledHeader } from "./styles";
import { StyledSearchContainer } from "../../styles/searchContainer";

const Header = ({setIsOpen, amountCart, filterList, inputSearch, setInputSearch}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        filterList();
        setInputSearch('');
    }
    return (
        <StyledHeader>
            <StyledGlobalContainer>
                <div>
                    <img src={logo} alt="Logo da Kenzie Burguer" />
                    <div className="cartContainer" onClick={() => setIsOpen(true)}>
                        <FaShoppingCart color="#BDBDBD" size={25}/>
                        <div className="quantityContainer">
                            <span>{amountCart}</span>
                        </div>
                    </div>
                </div>
                <StyledSearchContainer onSubmit={handleSubmit}>
                    <input type="text" value={inputSearch} placeholder="Digitar Pesquisa" onChange={(e) => setInputSearch(e.target.value)}/>
                    <button type="submit">
                        <FaSearch color="#FFFFFF" size={14}/>
                    </button>
                </StyledSearchContainer>
            </StyledGlobalContainer>
        </StyledHeader>
    )
}

export default Header;