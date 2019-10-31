import React from 'react';
import CollectionItem from '../collection-item/collection-item';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, n) => n < 4)
        .map(item => {
          return <CollectionItem key={item.id} item={item} />;
        })}
    </div>
  </div>
);

export default CollectionPreview;
