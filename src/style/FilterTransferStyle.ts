import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const primaryColor = '#EDEDED'
const secondaryColor = '#6C757D'

export const CustomDatePicker = styled(DatePicker)`
  padding: 2px 7px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  width: 150px;
  outline: none;
  background-color: ${primaryColor};
  color: ${secondaryColor};
  margin-bottom: 10px;
  text-align: left;
  height: 35px;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-around;
  width: 100%;
  padding: 50px 0;
  margin-bottom: 20px;
`;

export const BoxField = styled.section`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin-top: 10px;
  width: 200px; 
`;

export const Span = styled.label`
  color: rgb(50, 50, 50);
  margin-left: 2px;
`;

export const InputField = styled.input`
  border: none;
  border-radius: 8px;
  font-size: 16px;
  width: 150px;
  outline: none;
  background-color: ${primaryColor};
  padding: 2px 7px;
  color: ${secondaryColor};
  margin-bottom: 10px;
  text-align: left;
  height: 35px;
`;

export const ButtonSearch = styled.button`
  display: flex;
  background-color: #6b8e23;
  justify-content: center;
  align-items: center;
  color: ${primaryColor};
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  height: 40px;
  width: 150px;
  margin-top: 5px;

  &:hover{
    background-color: rgb(153 192 74);
  }
`;

export const Select = styled.select`
  padding: 2px 7px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  width: 150px;
  outline: none;
  background-color: ${primaryColor};
  color: ${secondaryColor};
  margin-bottom: 10px;
  text-align: left;
  height: 40px;
`;

export const DataNotFound = styled.h2`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  color: rgb(50, 50, 50);
  font-weight: semi-bold;
`