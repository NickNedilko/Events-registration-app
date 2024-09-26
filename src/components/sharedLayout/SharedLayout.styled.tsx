import styled from 'styled-components';

export const Container = styled.section`
    min-width: 270px;
    width: 100;
    flex: 1;
    padding: 20px 20px;
    margin: 0 auto;
 
    @media screen and (min-width: 768px) {
        padding: 0 30px;
    }

    @media screen and (min-width: 1280px) {
      
        padding: 0 40px;
    }
`



// export const Wrapper = styled.div`
// min-height: 100%;
//   display: flex;
//   flex-direction: column;
// `

// export const Main = styled.main`
//     flex: 1 1 auto;
// `