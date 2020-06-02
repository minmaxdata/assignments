import React from "react";

const ListItem = ({dept}) => (
  <li>
  <div>
    <b>{dept.department}</b>
  </div>
  <div>
    {dept.name}
  </div>
  <div>
    {dept.count} employees
  </div>
  <div>
    {dept.percent}
  </div>
</li>
)

export default ListItem

