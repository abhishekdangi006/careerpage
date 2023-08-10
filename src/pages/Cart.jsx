import { Link } from "react-router-dom";
import {styled} from "styled-components";
function Cart(props) {

    const {job} = props;
  return (
    
        <Wrapper >
        <div>
            <h1>{job.job_title}</h1>
            <h4>Skills:  {job.skills}</h4>
            <hr></hr>
            <h4>Job Description</h4>
            <p>{job.description}</p>
        </div>
        <ButtonWrapper><Link to={"/jobs/apply"}><button type="button" class="btn btn-outline-info">Apply</button></Link></ButtonWrapper>
    </Wrapper>
    
  )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    border: 0.5px solid grey;
    margin: 1rem 10rem;
    border-radius: 1rem;
    padding: 1rem;
    background-color: white;


    div{
        h1{
            font-size: 2rem;
            font-family: 'Karla', sans-serif;
            font-weight: 800;
        }
        h4{
            font-size: 1rem;
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
        }
        hr{
            width: 80%;
        }
        p{
            width: 80%;
        }
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Cart;
