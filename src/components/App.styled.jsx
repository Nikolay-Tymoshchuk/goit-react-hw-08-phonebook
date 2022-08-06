import styled from '@emotion/styled';

export const Container = styled.div`
  min-width: 400px;
  height: max-content;
  display: inline-flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  font-size: 40;
  margin-left: 2%;
  margin-top: 5%;
  color: var(--color-text-primary);
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 20px 15px rgba(0, 0, 0, 0.7);
  background-color: var(--color-accent);
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
  padding: 15px;
  box-shadow: 6px 8px 15px 0px rgb(22, 22, 22);
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
