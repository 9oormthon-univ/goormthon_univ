import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@goorm-dev/gds-components';
import * as S from './style';
import Universities from '../../../utilities/UnivData';

function RecruitModal({ isModalOpen, toggleModal }) {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredUniversities = Universities.filter((university) =>
    university.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleUniversityClick = (link) => {
    window.open(link, '_blank'); // Open the link in a new tab
  };

  return (
    <>
      <Modal isOpen={isModalOpen} direction="vertical" size="md" toggle={toggleModal} type="center">
        <ModalHeader toggle={toggleModal}>University Search</ModalHeader>
        <ModalBody>
          <input type="text" placeholder="Search for a university" value={searchTerm} onChange={handleSearchChange} />
          {filteredUniversities.map((university, index) => (
            <S.ProjectContent key={index} onClick={() => handleUniversityClick(university.link)}>
              <S.ProjectImg src={university.image} alt={university.name} />
              <div>{university.name}</div>
            </S.ProjectContent>
          ))}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default RecruitModal;
