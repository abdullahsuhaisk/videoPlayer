import React from 'react';
import PropType from 'prop-types';
import Button from '../../../components/Button/Button';

const EditableAdressComponents = ({ setAddressEdit }) => {
  return (
    <>
      <div className="vb--tabs-profile-content-info">
        <div className="vb--tabs-profile-address">
          <div
            className="vb-tabs-profile-address-header"
            style={{ color: 'yellow' }}>
            Address Edit Screen is Under Development ! Miss UX
          </div>
          <Button
            className="vb--tabs-profile-content-info--button"
            onClick={() => {
              setAddressEdit(0);
            }}>
            Save
          </Button>
        </div>
      </div>
    </>
  );
};

// TODO: PROPTYPES

export default EditableAdressComponents;
