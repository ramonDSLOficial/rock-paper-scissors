import styled from 'styled-components';
import { Container as ModalRulesBtn} from '../ModalRulesBtn/styles'

export const Container = styled.div`
    display: flex;
    align-items: flex-end;
    width: 100%;
    
    ${ModalRulesBtn} {
        margin: 0 auto;
    }
`;
