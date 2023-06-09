import { StyledTypography } from "../../styles/typography";
import { StyledCardCart, StyledImageCart } from "./styles";
import { FaTrash } from 'react-icons/fa';
import { MdAddCircle, MdRemoveCircle } from 'react-icons/md';

const CardCart = ({product,removeToCart,addItem,subtractItem}) => {
    return (
        <StyledCardCart>
            <div>
                <StyledImageCart  image={product.img} />
                <StyledTypography typographyStyle="heading3">
                    {product.name}
                </StyledTypography>
            </div>
            <div>
                <FaTrash color="#BDBDBD" size={14} onClick={() => {removeToCart(product)}} className="deleteBtn" />
                <div>
                    <MdRemoveCircle color="var(--second-color)" className="subBtn" onClick={() => subtractItem(product)}/>
                    <span>{product.amount}</span>
                    <MdAddCircle color="var(--main-color)" className="addBtn" onClick={() => {addItem(product)}}/>
                </div>
            </div>
        </StyledCardCart>
    )
}

export default CardCart;