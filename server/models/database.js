const users = [
  {
    id: 1,
    email: 'pacifique@gmail.com',
    first_name: 'Pacifique',
    last_name: 'kibaka',
    password: 'password',
    phoneNumber: '+0782641309',
    address: 'Kn 12 Kigali',
    is_admin: true
  }
];

const property = [
  {
    id: 1,
    owner: 'pacifique@gmail.com',
    status: 'available',
    price: '5800000',
    state: 'Rwanda',
    city: 'Kigali',
    address: 'Kn 12 Nyarutarama',
    type: 'Villa',
    created_on: new Date().toDateString(),
    /*image_url: '',*/
  },
  {
    id: 2,
    owner: 'john@gmail.com',
    status: 'available',
    price: '8500000',
    state: 'Rwanda',
    city: 'Gisenyi',
    address: 'Kn 58 makoro',
    type: 'Villa',
    created_on: new Date().toDateString(),
    /*image_url: '',*/
  },
  {
    id: 3,
    owner: 'Peter@gmail.com',
    status: 'available',
    price: '87500000',
    state: 'Rwanda',
    city: 'Kagugu',
    address: 'Kn 58 kagugu',
    type: 'Villa',
    created_on: new Date().toDateString(),
    /*image_url: '',*/
  },
  {
    id: 4,
    owner: 'Samu@gmail.com',
    status: 'available',
    price: '15800000',
    state: 'Rwanda',
    city: 'Nyarutarama',
    address: 'Kn 58 Nyarutarama',
    type: 'residential',
    created_on: new Date().toDateString(),
    /*image_url: '',*/
  },
];

const flags = [
  {
    id: 1,
    property_id: '1',
    created_on: '',
    reason: 'Cyamunara',
    description: 'The property is belong to bank'
  }
];

export default { users, property, flags };
