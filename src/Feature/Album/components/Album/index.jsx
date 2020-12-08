import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

Album.propTypes = {
  albumnhen: PropTypes.object.isRequired,
};

function Album(props) {
  const { albumnhen } = props;
  return (
    <div className="album">
      <div className="album__thumbnail">
        <img src={albumnhen.thumbnailUrl} alt={albumnhen.name} />
      </div>
      <p className="album__name">{albumnhen.name}</p>
    </div>
  );
}

export default Album;
