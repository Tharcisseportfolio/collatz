import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../navbar/NavBar';

const Action = () => {
  const navigate = useNavigate();

  const handleGenerateClick = () => {
    navigate('/visualize');
  };

  const handleVisualizeClick = () => {
    navigate('/visualize');
  };

  const handleReadMoreClick = () => {
    navigate('/read-more');
  };

  const handleChallengeMeClick = () => {
    navigate('/quiz');
  };

  return (
    <>
      <NavBar />
      <div className='p-4 d-flex'>
        <button className='btn btn-visualize btn-primary m-4 rounded' onClick={handleGenerateClick}>Generate</button>
        <button className='btn btn-visualize btn-primary m-4 rounded' onClick={handleVisualizeClick}>Visualize</button>
        <button className='btn btn-read btn-danger m-4' onClick={handleReadMoreClick}>Read more</button>
        <button className='btn btn-challenge btn-warning m-4 ' onClick={handleChallengeMeClick}>Challenge me</button>
      </div>
    </>
  );
};

export default Action;