import employees from "./employees.js"

const getDepartmentLead = (employee) => {
  const lead = {};
  lead["name"] = `${employee.firstName} ${employee.lastName}`;
  lead["count"] = 0;
  return lead;
}
function byDepts(departments, employee) {
  const key = employee["department"];

  if (!departments[key]) {
    departments[key] = getDepartmentLead(employee);
  }

  departments[key].count++;

  if (Array.isArray(employee)) {
    return employee.reduce(byDepts, departments);
  }
  if (Array.isArray(employee.reports)) {
    return employee.reports.reduce(byDepts, departments);
  }
  return departments;
}

const getDepartmentInfo = () => {
  const byDepartments = employees[0].reports.reduce(byDepts, {});
  const depts = Object.entries(byDepartments).map((dept) => {
    let firstProp = { 'department': dept[0] }
    return Object.assign(firstProp, dept[1])
  });
  const sortedByCount = depts.sort((a, b) => {
    return a.count > b.count ? -1 : 1;
  });
  const totalHeadCount = sortedByCount.reduce((total, dept) => {
    return total + dept.count;
  }, 0)
  const finalVersion = sortedByCount.map((dept) => {
    const percentage = ((dept.count / totalHeadCount) * 100).toFixed(0);
    return Object.assign(dept, { "percent": percentage });
  })
  return finalVersion;
}
//getDepartmentInfo();
export default getDepartmentInfo;