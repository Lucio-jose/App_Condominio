import styled from 'styled-components';

const CategoryStyle=styled.select`
    background-color: red;
`
export default CategoryStyle

const TipologiaStyle=styled(CategoryStyle)`
`;
const FinalidadeStyle=styled(CategoryStyle)`
`;
const TamanhoStyle=styled(CategoryStyle)`
`;

export {TipologiaStyle,FinalidadeStyle,TamanhoStyle}