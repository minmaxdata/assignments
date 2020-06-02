import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import getDepartmentInfo from '../helpers/index.js'
const List = () => {
  const [departments, setDepartments] = useState(getDepartmentInfo());

  return (
    <div>
      <ul>
        {departments.slice(0, 7).map((dept, index) => (
          <ListItem dept={dept} key={index} />
        ))}
      </ul>
    </div >
  );
};

export default List;