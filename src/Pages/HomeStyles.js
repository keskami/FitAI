import styled from "styled-components";

export const HomePageContainer = styled.div`
  background-color: #F2F7FE;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CircleInitials = styled.div`
  background-color: #5C98EC;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const StartButton = styled.button`
  background-color: #5C98EC;
  color: white;
  padding: 20px 40px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  &:hover {
    background-color: #4A7CBF;
  }
`;