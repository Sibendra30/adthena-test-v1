import React from 'react';
import {
  Content,
  DesignList,
  Heading,
  StyledList,
  Task
} from '@components/styled-components/Task';

import DataLoader from '@components/generic-components/DataLoader';
import Confirmation from '@components/generic-components/Confirmation';
import Modal from '@components/generic-components/Modal';
import DetailedConfirmation from '@components/generic-components/DetailedConfirmation';

const modals = [
  {
    title: 'Data loading modal: ',
    alt: 'Data loading modal',
    src: 'images/data_loading.png'
  },
  {
    title: 'Delete files modal: ',
    alt: 'Delete files modal',
    src: 'images/delete_files.png'
  },
  {
    title: 'Delete report and history modal: ',
    alt: 'Delete report and history modal',
    src: 'images/delete_report_and_history.png'
  },
];

const getDetailedConfirmationView = () => (
  <ul>
    <li>January 2020</li>
    <li>February 2020</li>
    <li>March 2020</li>
    <li>April 2020</li>
    <li>May 2020</li>
    <li>June 2020</li>
    <li>July 2020</li>
    <li>August 2020</li>
    <li>September 2020</li>
    <li>October 2020</li>
  </ul>
);

const TaskTwo = () => (
  <Task>
    <Heading>Task Two</Heading>
    <Content>
      <h4>Complete the following task:</h4>
      <p>
        This is to assess your ability to design and build React components.
        Assume that you are part of a team starting a new project,
        a consistent design language has been set by the Design Team,
        i.e. fonts, labels, button and input styles etc. Below are
        designs for some components for you to build. With unit tests
        and without 3rd party modal packages, build the modals shown in
        these designs and have re-usability in mind as what you build
        might be re-usable in other parts of the application.
      </p>
      <p>
        {`Include unit tests. React Testing Library is already 
          configured for you in the skeleton project.`}
      </p>
      Expected:
      <StyledList type="1">
        <li>
          <strong>No </strong>
          backdrop/page overlay is required for this exercise.
        </li>
        <li>All modals should expose a mechanism to allow them to be closed.</li>
        <li>There should be a way to consume button click events on modals with buttons.</li>
        <li>Create a demo page with three buttons that trigger each of the modals to show.</li>
      </StyledList>
      <DesignList>
        {modals.map(({ title, alt, src }, index) => (
          <div key={index.toString()}>
            <label htmlFor={`img-${index}`}>
              {title}
            </label>
            <img
              alt={alt}
              src={src}
              id={`img-${index}`}
            />
          </div>
        ))}
      </DesignList>
      <hr />
      <strong>
        Feel free to use this component as a demo page for your work.
      </strong>
    </Content>
    <Modal show={false}>
      <DataLoader textValue="Data is loading" />
    </Modal>
    <Modal show={false}>
      <Confirmation
        headingText="Are you sure you want to delete all your files?"
        contentText="This action cannot be undone"
      />
    </Modal>
    <Modal show>
      <DetailedConfirmation
        headingText="Are you sure you want to delete this report and history?"
          // eslint-disable-next-line max-len
        contentText={['If you delete the ', <strong key="ex1">Executive metrics</strong>, ' report, you will also delete the associated history:']}
        confirmInstr={['Please type the word \'Delete\' to remove the ', <strong key="ex2">Executive metrics</strong>, ' report and its associated history:']}
        detailedView={getDetailedConfirmationView()}
      />
    </Modal>
  </Task>
);

export default TaskTwo;
