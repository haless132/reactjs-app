import React from 'react';
import AlbumList from './components/AlbumList';

// AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: 'Nhạc Hoa Thịnh Hành',
      thumbnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/5/1/c/9/51c96b23e5b028def81255a2027a6282.jpg',
    },
    {
      id: 2,
      name: 'Nhạc Hoa Thịnh Hành',
      thumbnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/b/5/b/d/b5bd52dc56cb78f139067cd7ca5c96e8.jpg',
    },
    {
      id: 3,
      name: 'Nhạc Hoa Thịnh Hành',
      thumbnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/1/0/2/8/102813bdff325c11e2c2dc1b3e33bad4.jpg',
    },
  ];

  return (
    <div>
      <h2>Nghe là ghiền</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
