import styled from 'styled-components';
import { Input } from '@goorm-dev/gds-components';

export const RecuritBody = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const BodyTitle = styled.h1`
  margin-bottom: 4rem;
  margin-top: 6.5rem;
`;

export const ApplyHeaderContainer = styled.div`
  background: var(--light-gray-gray-050, #f7f7fa);
  height: 20rem;
  width: 30%;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  padding: 1rem;
`;

// In your './style' file
export const SubmitButton = styled.button`
  background-color: #007bff; // Example color
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;

  &:hover {
    background-color: #0056b3; // Example hover color
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-bottom: 11rem;
`;

export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 4rem;
`;

export const CautionTitle = styled.h3`
  margin-left: 1.5rem;
  margin-bottom: 1.25rem;
`;

export const FormDescription = styled.div`
  width: 100%;
  font-size: 1rem;
  color: #333;
  text-align: left;
  border-radius: var(--Spacing-space-500, 1rem);
  border: 1px solid var(--light-gray-gray-300, #e1e1e8);
  background: var(--light-gray-gray-050, #f7f7fa);
  margin-bottom: 8rem;
  padding: 1.5rem;

  ul {
    padding-left: 20px; /* Add padding for bullet points */
  }

  li {
    margin-bottom: 0.5rem; /* Space between list items */
  }

  h4 {
    margin-top: 1rem; /* Space before the heading */
    margin-bottom: 0.5rem; /* Space after the heading */
    font-weight: bold;
  }
`;

export const Caution2Wrapper = styled.div`
  padding-left: 2.75rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CautionWrapper = styled.div`
  margin-top: 2.2rem;
`;
export const Caution2Li = styled.li`
  color: var(--hint);
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputGroupText = styled.span`
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const ApplyTitle = styled.h4`
  margin-bottom: 0.5rem;
`;
export const FormText = styled.p`
  font-size: 0.875rem;
  color: #666;
  margin-top: 0.5rem;
`;
export const ApplyTextArea = styled(Input)`
  padding: 0.88rem 1.5rem;
`;

export const ApplyInput = styled(Input)`
  width: 20rem;
`;
