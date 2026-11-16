const CUSTOMERS = [
  { id: 'c1', firstName: 'Mila', lastName: 'de Vries', company: 'Zonneveld BV' },
  { id: 'c2', firstName: 'Adam', lastName: 'Young', company: 'Birch & Co' },
  { id: 'c3', firstName: 'Zoe', lastName: 'Abbott', company: 'Meridian' },
];

/**
 * The customer with the given id, as a result that says whether one was found.
 */
function findCustomer(id) {
  const customer = CUSTOMERS.find((candidate) => candidate.id === id);
  return customer ? { ok: true, value: customer } : { ok: false, error: `no customer ${id}` };
}

/**
 * Every customer, for the overview page.
 */
function customerList() {
  return [...CUSTOMERS];
}

export { customerList, findCustomer };
