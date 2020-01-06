import React from 'react';
import { Tag } from 'antd';

const ItemDate = ({releaseDate}) => {
  return (
    <Tag color="#232323">{releaseDate}</Tag>
  );
}

export default ItemDate;