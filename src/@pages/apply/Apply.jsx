import React, { useState } from 'react';
import { FileInput, FormText, Input, InputGroup, InputGroupText } from '@goorm-dev/gds-components';
import * as S from './style';

function Apply() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    introduction: '',
    motivation: '',
    necessity: '',
    questions: '',
  });

  const [charCount, setCharCount] = useState({
    introduction: 0,
    motivation: 0,
    necessity: 0,
    questions: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Updating character count for text areas
    if (['introduction', 'motivation', 'necessity', 'questions'].includes(name)) {
      setCharCount({ ...charCount, [name]: value.length });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate email and phone
    if (!validateEmail(formData.email)) {
      alert('Invalid email format');
      return;
    }
    if (!validatePhone(formData.phone)) {
      alert('Invalid phone format');
      return;
    }
    console.log(formData);
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  const validatePhone = (phone) => {
    return phone.match(/^\d{3}-\d{4}-\d{4}$/);
  };

  return (
    <S.RecuritBody>
      <S.BodyTitle>Apply</S.BodyTitle>
      <S.FormDescription>
        <p>대표 모집 기간 및 중앙행사는 아래와 같습니다.</p>
        <ul>
          <li>
            <strong>신규대학 모집 신청:</strong> 12월 29일(금) ~ 1월 12일(금) - 총 14일
          </li>
          <li>
            <strong>인터뷰 기간:</strong> 신청 후 상시 인터뷰 진행
          </li>
          <li>
            <strong>대표 OT:</strong> 1월 00일(토)
          </li>
          <li>
            <strong>운영진 모집 기간:</strong> 1월 11일 ~ 2월 11일
          </li>
        </ul>
        <h4 style={{ color: '#FF4B4B' }}>유의사항</h4>
        <p>기존 등록된 학교가 있다면 대표 신청이 불가합니다.</p>
        <p>미등록된 학교에 2명 이상의 대표 신청이 올 시 인터뷰 진행 후 대표 선정됩니다.</p>
        <p>이를 유의해서 확인 후 지원해주세요!</p>
      </S.FormDescription>

      <S.FormContainer onSubmit={handleSubmit}>
        <S.FormGroup style={{ width: '15rem' }}>
          <S.InputGroup>
            <S.ApplyTitle>이름</S.ApplyTitle>
            <S.ApplyInput
              type="text"
              name="name"
              placeholder="이름을 입력하세요"
              onChange={handleInputChange}
              required
            />
          </S.InputGroup>
        </S.FormGroup>

        <S.FormGroup style={{ width: '15rem' }}>
          <S.InputGroup>
            <S.ApplyTitle>전화번호</S.ApplyTitle>
            <S.ApplyInput type="tel" name="phone" placeholder="000-0000-0000" onChange={handleInputChange} required />
          </S.InputGroup>
        </S.FormGroup>

        <S.FormGroup style={{ width: '20rem' }}>
          <S.InputGroup>
            <S.ApplyTitle>메일</S.ApplyTitle>
            <S.ApplyInput type="email" name="email" placeholder="이메일 주소" onChange={handleInputChange} required />
          </S.InputGroup>
          <FormText>제출해주신 메일로 연락갈 예정입니다.</FormText>
        </S.FormGroup>

        <S.FormGroup>
          <S.InputGroup>
            <S.ApplyTitle>1. 자기 소개 ({charCount.introduction}/300)</S.ApplyTitle>
            <S.ApplyTextArea
              name="introduction"
              maxLength="300"
              placeholder="300자 이하로 작성해주세요"
              onChange={handleInputChange}
              required
            />
          </S.InputGroup>
        </S.FormGroup>

        <S.FormGroup>
          <S.InputGroup>
            <S.ApplyTitle>2. 지원 동기 ({charCount.motivation}/500)</S.ApplyTitle>
            <S.ApplyTextArea
              name="motivation"
              maxLength={500}
              placeholder="500자 이하로 작성해주세요"
              onChange={handleInputChange}
              minLength={10}
              required
            />
          </S.InputGroup>
        </S.FormGroup>

        <S.FormGroup>
          <S.InputGroup>
            <S.ApplyTitle>
              3. 본인 학교에 구름톤 유니브 필요 이유가 무엇인가요? ({charCount.necessity}/ 500)
            </S.ApplyTitle>
            <S.ApplyTextArea
              name="necessity"
              maxLength={500}
              placeholder="500자 이하로 작성해주세요"
              onChange={handleInputChange}
              minLength={10}
              required
            />
          </S.InputGroup>
        </S.FormGroup>

        <S.FormGroup>
          <S.InputGroup>
            <S.ApplyTitle>4. 질문 및 궁금한 점이 있다면 작성해주세요! ({charCount.questions}/1000)</S.ApplyTitle>
            <S.ApplyTextArea
              name="questions"
              maxLength={500}
              placeholder="질문이나 궁금한 점을 작성해주세요"
              onChange={handleInputChange}
              minLength={10}
              required
            />
          </S.InputGroup>
        </S.FormGroup>
        <S.SubmitButton type="submit">제출하기</S.SubmitButton>
      </S.FormContainer>
    </S.RecuritBody>
  );
}

export default Apply;
