const users = [
    {
        "id": "1",
        "name": "Alice Johnson",
        "phone": "+1-555-0100",
        "occupation": "Software Engineer",
        "email": "alice.johnson@example.com"
      },
      {
        "id": "2",
        "name": "Bob Smith",
        "phone": "+1-555-0101",
        "occupation": "Graphic Designer",
        "email": "bob.smith@example.com"
      },
      {
        "id": "3",
        "name": "Charlie Brown",
        "phone": "+1-555-0102",
        "occupation": "Product Manager",
        "email": "charlie.brown@example.com"
      },
      {
        "id": "4",
        "name": "David Wilson",
        "phone": "+1-555-0103",
        "occupation": "Data Scientist",
        "email": "david.wilson@example.com"
      },
      {
        "id": "5",
        "name": "Eva Davis",
        "phone": "+1-555-0104",
        "occupation": "Marketing Specialist",
        "email": "eva.davis@example.com"
      },
      {
        "id": "6",
        "name": "Frank Miller",
        "phone": "+1-555-0105",
        "occupation": "UX/UI Designer",
        "email": "frank.miller@example.com"
      },
      {
        "id": "7",
        "name": "Grace Lee",
        "phone": "+1-555-0106",
        "occupation": "Content Writer",
        "email": "grace.lee@example.com"
      },
      {
        "id": "8",
        "name": "Hannah Walker",
        "phone": "+1-555-0107",
        "occupation": "Financial Analyst",
        "email": "hannah.walker@example.com"
      },
      {
        "id": "9",
        "name": "Ivy Harris",
        "phone": "+1-555-0108",
        "occupation": "Business Development Manager",
        "email": "ivy.harris@example.com"
      },
      {
        "id": "10",
        "name": "Jack White",
        "phone": "+1-555-0109",
        "occupation": "Sales Manager",
        "email": "jack.white@example.com"
      },
      {
        "id": "11",
        "name": "Karen Clark",
        "phone": "+1-555-0110",
        "occupation": "Product Designer",
        "email": "karen.clark@example.com"
      },
      {
        "id": "12",
        "name": "Liam Lewis",
        "phone": "+1-555-0111",
        "occupation": "Customer Support Specialist",
        "email": "liam.lewis@example.com"
      },
      {
        "id": "13",
        "name": "Mia Walker",
        "phone": "+1-555-0112",
        "occupation": "Project Coordinator",
        "email": "mia.walker@example.com"
      },
      {
        "id": "14",
        "name": "Nathan Hall",
        "phone": "+1-555-0113",
        "occupation": "HR Manager",
        "email": "nathan.hall@example.com"
      },
      {
        "id": "15",
        "name": "Olivia Young",
        "phone": "+1-555-0114",
        "occupation": "Web Developer",
        "email": "olivia.young@example.com"
      },
      {
        "id": "16",
        "name": "Paul Allen",
        "phone": "+1-555-0115",
        "occupation": "Network Administrator",
        "email": "paul.allen@example.com"
      }
  ];
  
  export const getUsers = () => {
    return users;
  };
  
  export const getUserById = (id) => {
    return users.find(user => user.id === id);
  };
  
  export const searchUsersByName = (query) => {
    return users.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
  };
  