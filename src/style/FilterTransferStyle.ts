import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const primaryColor = '#EDEDED';
const secondaryColor = '#6C757D';
const accentColor = '#007BFF';

export const CustomDatePicker = styled(DatePicker)`
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  width: 85px;
  outline: none;
  background-color: ${primaryColor};
  padding-left: 10px;
  color: ${secondaryColor};
  margin-bottom: 10px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 50px 0;
  margin-bottom: -30px;
`;

export const BoxField = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const Span = styled.label`
  margin-top: 10px;
  position: relative;
  top: -80px;
  color: ${secondaryColor};
`;

export const InputField = styled.input`
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  width: 100px;
  outline: none;
  background-color: ${primaryColor};
  padding-left: 10px;
  color: ${secondaryColor};
  margin-bottom: 10px;
  text-align: center;
`;

export const ButtonSearch = styled.button`
  display: inline-block;
  padding: 12px 24px;
  background-color: ${accentColor};
  color: ${primaryColor};
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const Select = styled.select`
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  width: 180px;
  position: relative;
  top: -5px;
  outline: none;
  color: ${secondaryColor};
  background-color: ${primaryColor};
`;
