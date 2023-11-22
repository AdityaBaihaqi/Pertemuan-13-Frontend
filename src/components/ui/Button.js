import styled from "styled-components";

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  margin: 0.4rem;
  margin-top: 20px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;

  background: ${function (props) {
    if (props.variant === "primary") {
      return "linear-gradient(90deg, rgba(6,0,11,1) 0%, rgba(5,5,224,1) 51%, rgba(3,95,113,1) 100%)";
    } else if (props.variant === "secondary") {
      return "linear-gradient(90deg, rgba(8,0,15,1) 0%, rgba(224,5,29,1) 51%, rgba(97,3,113,1) 100%)";
    } else {
      return "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(1,147,4,1) 51%, rgba(4,179,223,1) 100%)";
    }
  }};
`;

export default Button;
