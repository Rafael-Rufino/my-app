import { theme } from '@rafael-rufino/my-react-component-library';

import styled from 'styled-components';


export const Container = styled.div`
  background: ${theme.colors.heading};
`;

export const Wrapper = styled.div`
    max-width: 432px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const ButtonContainer = styled.div`
  padding-top: 20px;
`;