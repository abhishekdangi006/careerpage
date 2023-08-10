import React from 'react'
import { styled } from 'styled-components';

function Form() {
  return (
    <Wrapper>
      <FormWrapper action="">
        <div class="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="Enter your first name"/>
            <label for="floatingInput">First Name</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="Enter your last name"/>
            <label for="floatingInput">Last Name</label>
        </div>
        <div class="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mb-3">
            <input type="number" className="form-control" id="floatingInput" placeholder="7999XXXXXX"/>
            <label for="floatingInput">Contact Number</label>
        </div>

        <h5>Updated Resume</h5>
        <div class="form-floating mb-3">
            <input type="file" name="upload" placeholder='upload resume' accept="application/pdf" />
        </div>
        

        
        <ButtonWrapper><button type="button" className="btn btn-outline-success">Submit</button></ButtonWrapper>
      </FormWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 3rem;
    background-color: #c2c2c2;
`;

const FormWrapper = styled.form`
    width: 50%;
    padding: 2rem;
    border-radius: 1rem;
    background-color: white;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    button{
        width: 10rem;
    }
`

export default Form;
