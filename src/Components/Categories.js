import styled from "styled-components";

const StyledButton = styled.button`
    outline: none;
    border: 1px solid #222;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    &:hover{
        background-color: #333;
        color: #eee;
    }
`;

const Categories = ({categories, onSelect}) => {
  return (
    <div>
      <h1>퀴즈 카테고리를 선택해 주세요</h1>
      <div className="category-wrap">
        {
            categories.map((value,idx)=>{
                return <StyledButton key={idx} onClick={()=>{onSelect(value)}}>{value}</StyledButton>;
            })
        }
      </div>
    </div>
  );
};

export default Categories;
