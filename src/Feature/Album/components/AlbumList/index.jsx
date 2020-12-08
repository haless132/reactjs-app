import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './styles.scss';

AlbumList.propTypes = {
  albumList: PropTypes.array.isRequired,
};

function AlbumList(props) {
  const { albumList } = props;
  return (
    <ul className="album-list">
      {albumList.map((album) => (
        <li key={album.id}>
          <Album albumnhen={album} />
          {/* <p>Nothing</p>
          <p>{album.name}</p> */}
        </li>
      ))}
    </ul>
  );
}

export default AlbumList;
