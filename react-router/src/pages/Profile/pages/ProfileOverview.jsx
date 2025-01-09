import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileOverview = () => {
  const navigate = useNavigate();

  function navigateToData(){
    navigate("/profile/data")
  }

  return (
    <div>
      <h3>ProfileOverview</h3>
      <button onClick={navigateToData} className='button'>data</button>
    </div>
  );
};

export default ProfileOverview;