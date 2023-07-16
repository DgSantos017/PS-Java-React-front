import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const CustomDatePicker = styled(DatePicker)`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 200px;
  outline: none;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-around;
  width: 100%;
  
`;

export const BoxField = styled.section`
display: flex;
flex-direction: column;
align-items: center;

`;

export const Span = styled.label`
 
margin-top: 10px;
position: relative;
top: -70px;
`;

export const InputField = styled.input`
padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 200px;
  outline: none;
 
 

`;
export const ButtonSearch = styled.button`
display: inline-block;
padding: 12px 24px;
background-color: #4CAF50;
color: white;
border: none;
border-radius: 4px;
font-size: 16px;
cursor: pointer;
transition: background-color 0.3s ease;


`;
