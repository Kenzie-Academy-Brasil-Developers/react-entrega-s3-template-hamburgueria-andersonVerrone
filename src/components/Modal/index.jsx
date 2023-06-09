import { useEffect, useRef } from "react";
import { StyledTypography } from "../../styles/typography";
import CardCart from "../CardCart";
import { StyledModal } from "./styles";
import { RiCloseFill } from 'react-icons/ri';

const Modal = ({setIsOpen,cart, setCart,removeToCart,cartValue,addItem,subtractItem}) => {

    const modalRef = useRef(null);

    

    useEffect (() => {
        const handleOutClick = (event) => {
            if (!modalRef.current?.contains(event.target)) {
                setIsOpen(false);
            }
        }

        const handleKeydown = (event) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown",handleOutClick);
        document.addEventListener("keydown",handleKeydown);

        return () => {
            document.removeEventListener("mousedown",handleOutClick);
            document.removeEventListener("keydown",handleKeydown);
        }
    })
    
    return (
        <StyledModal role="dialog">
            <div ref={modalRef} className="modalBox">
                <header>
                    <StyledTypography typographyStyle="heading3">
                        Carrinho de compras
                    </StyledTypography>
                    <RiCloseFill color="rgba(255, 255, 255, 0.5)" size={25} className="closeBtn" onClick={() => setIsOpen(false)} />
                </header>
                <div className="modalContainer">
                    {cart.length > 0 ? 
                    
                        <ul>
                            {cart.map(product => (
                                <CardCart key={product.id} product={product} removeToCart={removeToCart} addItem={addItem} subtractItem={subtractItem} />
                            ))}
                        </ul> :

                        <div className="emptyContainer">
                            <StyledTypography typographyStyle="heading3" className="emptyText">
                                Carrinho Vazio
                            </StyledTypography>
                        </div>
                    }
                    
                    <div className="totalContainer">
                        <StyledTypography typographyStyle="body-600">
                            Total
                        </StyledTypography>
                        <StyledTypography typographyStyle="body-600">
                           {cartValue.toLocaleString("pt-BR", { style: "currency", currency: "BRL",})}
                        </StyledTypography>
                    </div>
                    {cart.length > 0 ?
                    <button onClick={() => setCart([])} className="deleteAllBtn">Remover todos</button> :
                    <button onClick={() => setIsOpen(false)} className="buyItensBtn">Voltar as compras</button>}
                </div>
            </div>
        </StyledModal>
    )
}

export default Modal;