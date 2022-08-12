import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: var(--color-main-light);
  margin: 0 auto;
  height: 100%;

  @media screen and (min-width: 320px) {
    width: var(--mobile);
  }

  @media screen and (min-width: 768px) {
    width: var(--tablet);
  }

  @media screen and (min-width: 1360px) {
    width: var(--desktop);
  }
  /* min-width: 400px; */
  /* height: max-content; */
  display: flex;
  /* flex-direction: column;
  align-items: center; */
  align-items: flex-start;
  /* font-size: 40; */
  /* margin-left: 2%;
  margin-top: 5%; */
  color: var(--color-text-primary);
  /* border-radius: 10px; */
  padding: 10px 12px 12px 10px;
  box-shadow: 0 0 20px 15px rgba(0, 0, 0, 0.7);
  background-size: 100%;
  overflow: hidden;
  background-image: linear-gradient(
    to right,
    #614519 0%,
    #866319 20%,
    #fcbf32 50%,
    #866319 80%,
    #614519 100%
  );
`;

export const Title = styled.h1`
  font-size: 40;
`;

export const InnerContainer = styled.div`
  width: 90%;
  height: 96%;
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
  border-radius: inherit;
  background-image: linear-gradient(
    90deg,
    #e7e7e7 0%,
    #c4c4c7 25%,
    #eeeeee 50%,
    #f8f8f8 55%,
    #3a3a3a 88%,
    #d6d6d6 89%,
    #d8d8d8 90%,
    #a0a2a3 92%,
    #9b9b9b 93%,
    #252525 96%,
    #3f4041 97%,
    #3f3f3f 100%
  );
`;
// export const Container = styled.div`
//   max-width: 960px;
//   margin: 0 auto;
//   padding: 0 16px 40px;
//   min-height: 100vh;
//   box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
//   background-color: #d9dae0;
// `;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;
