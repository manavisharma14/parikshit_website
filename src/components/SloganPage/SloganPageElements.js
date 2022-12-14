import styled from "styled-components";

export const SloganContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  min-height: 800px;
  position: relative;
  z-index: 1;

  @media only screen and (max-width: 768px) {
    min-height: 576px;
  }
  /* Add : before styles*/
`;

export const SloganBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const SloganContent = styled.div`
  z-index: 3;

  position: absolute;
`;

export const SloganH1 = styled.h1`
  color: #fff;
  font-size: 1.8rem;
  margin-top: 70px;
  margin-left: 20px;
  
  padding-left: 7rem;
  padding-right: 7rem;
  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const SloganP = styled.p`
 
  color: #fff;
  font-size: 1.2rem;
  padding-left: 8rem;
  padding-top: 2rem;
`;
