import React from 'react';
import { Badge } from 'antd';

export const FilmRating = (props) => {
  return (
    <Badge
      count={4.6}
      style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }}
    />
  );
}