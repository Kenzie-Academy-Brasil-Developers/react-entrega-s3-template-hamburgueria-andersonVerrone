import { StyledImage, StyledCard } from "./styles"
import { StyledTypography } from "../../styles/typography";

const Card = ({product,addToCart}) => {
    return (
        <StyledCard>
            <StyledImage image={product.img} />
            <StyledTypography typographyStyle="heading3" className="nameProduct" >
                {product.name}
            </StyledTypography>
            <StyledTypography typographyStyle="caption" className="categoryProduct" >
                {product.category}
            </StyledTypography>
            <StyledTypography typographyStyle="body-600" className="priceProduct" >
                {product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL",})}
            </StyledTypography>
            <button onClick={() => {addToCart(product)}}>Adicionar</button>
        </StyledCard>
    )
}

export default Card;