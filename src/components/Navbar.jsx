import {FaRegClock,FaUpload,FaRandom,FaGem} from "react-icons/fa"
import {NavLink} from "react-router-dom"
import styled from "styled-components"


const List = styled.li`
     display: flex;
     justify-content: center;
     margin: 2rem 0rem;
     

`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    border-radius: 3px;
    text-decoration: none;
    background: linear-gradient(to top,rgba(0,0,0,.5) 0,rgba(0,0,0,.1) 100%);
    width: 7rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(1);
    padding: 1em;
    

    h4{
        color: white;
        font-size: 1.3em;
        
        
       
        
    }

    svg{
        color: white;
        font-size: 2rem;
        
    }
`
const LatestLink = styled(SLink)`
h4{
    color: #ad3; 
}
svg{
    color: #ad3;     
}`;

const GemLink = styled(SLink)`
h4{
    color: #b760f0;
}
svg{
    color: #b760f0;
}`;



const RandomLink = styled(SLink)`
h4{
    color: #e73;
}
svg{
    color: #e73; 
}`;


const UploadLink = styled(SLink)`
h4{
    color: #d55;
}
svg{
    color: #d55;  
}`;



function Navbar() {
  return (
    <List>
        <LatestLink to={'/latest'}>
            <FaRegClock/>
            <h4>Latest</h4>
        </LatestLink>
        <GemLink to={'/top'}>
            <FaGem/>
            <h4>Toplist</h4>
        </GemLink>
        <RandomLink to={'/random'}>
            <FaRandom/>
            <h4>Random</h4>
        </RandomLink>
        <UploadLink to={'/upload'}>
            <FaUpload/>
            <h4>Upload</h4>
        </UploadLink>

    </List>
  )






}






export default Navbar