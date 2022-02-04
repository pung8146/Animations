import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Grid = styled.div`
  display:grid;
  grid-template-columns: repeat(2,1fr);
  width: 50vw;
  gap: 10px;

`;

const Box = styled(motion.div)`
  background-color:rgba(255,255,255,0.6);
  border-radius:40px;
  height: 200px;
  box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.4);
  display:grid;
 `;


const Circle = styled(motion.div)`
  background-color: white;
  width:50px;
  height:50px;
  border-radius:25px;
  border:2px solid blue;
  place-self:center;
`;

const Overlay = styled(motion.div)`
  width:100%;
  height:100%;
  position:absolute;
  display:flex;
  justify-content:center;
  align-items: center;
`;



function App() {
  const [id, setId] = useState<null | string>(null); 
  return (
    <Wrapper>
      <Grid >
        {["1","2","3","4"].map((n)=> ( 
          <Box onClick={() => setId(n)} key={n} layoutId={n} >
            <Circle />
          </Box>
        ))}
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay 
            onClick={() => setId(null)}
            initial={{backgroundColor:"rgba(0,0,0,0)"}} 
            animate={{backgroundColor:"rgba(0,0,0,0.4)"}} 
            exit={{backgroundColor:"rgba(0,0,0,0)"}}
          >
            <Box layoutId={id} style={{width:600, height:200} }/>
          </Overlay> 
        ) : null};
      </AnimatePresence>
    </Wrapper>
  );
}
export default App;