var company1Data = {
  company: {
    'unit-1': {
      projects: [
        {
          people: [
            {
              person: 'developer-1',
            },
            {
              person: 'developer-2',
            },
            {
              person: 'developer-3',
            },
          ],
        },
      ],
    },
    'unit-2': {
      projects: [
        {
          people: [
            {
              person: 'developer-8',
            },
            {
              person: 'developer-9',
            },
            {
              person: 'developer-10',
            },
          ],
        },
        {
          people: [
            {
              person: 'developer-11',
            },
            {
              person: 'developer-12',
            },
          ],
        },
      ],
    },
  },
}
var company2Data = {
  company: {
    'unit-1': {
      people: [
        {
          person: 'developer-1',
        },
        {
          person: 'developer-2',
        },
        {
          person: 'developer-3',
        },
      ],
    },
    'unit-2': {
      people: [
        {
          person: 'developer-8',
        },
        {
          person: 'developer-9',
        },
        {
          person: 'developer-10',
        },
      ],
    },
  },
}

// console.log(company2Data.company['unit-1'].people.length)

//Developers in each unit of company1Data
const unit1Dev = company1Data.company['unit-1'].projects[0].people
const unit2Dev = company1Data.company['unit-2'].projects[0].people

// Developers in each unit of companyData
const unit1DevCom2 = company2Data.company['unit-1'].people
const unit2DevCom2 = company2Data.company['unit-2'].people

const totalNumDev = (arr1, arr2) => {
  return arr1.length + arr2.length
}

const result = totalNumDev(unit1Dev, unit2Dev)
//expected result 6
