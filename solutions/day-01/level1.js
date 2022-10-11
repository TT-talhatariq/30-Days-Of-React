// Arrays
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]
// Declare an empty array;
const emptyArray = []
// Declare an array with more than 5 number of elements
const moreThanFive = [1, 2, 3, 4, 5, 6]
// Find the length of your array
console.log(moreThanFive.length)
// Get the first item, the middle item and the last item of the array
console.log(moreThanFive[0])
console.log(moreThanFive[moreThanFive.length / 2])
console.log(moreThanFive[moreThanFive.length - 1])
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, 'a', true, null, undefined, { a: 1 }]
console.log(mixedDataTypes.length)
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon',
]

// Print the array using console.log()
console.log(itCompanies)
// Print the number of companies in the array
console.log(itCompanies.length)
// Print the first company, middle and last company
console.log(itCompanies[0])
// Print out each company
itCompanies.forEach((company) => console.log(company))
// Change each company name to uppercase one by one and print them out
itCompanies.forEach((company) => console.log(company.toUpperCase()))
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let str = itCompanies.join(', ')
console.log(str)
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const checkCompany = (company) => {
  if (itCompanies.includes(company)) {
    return company
  } else {
    return 'Company is not found'
  }
}
console.log(checkCompany('Facebook'))
// Filter out companies which have more than one 'o' without the filter method
const filterArray = []
itCompanies.forEach((company) => {
  count = 0
  for (let i = 0; i < company.length; i++) {
    if (company[i] === 'o') {
      count++
    }
  }
  if (count > 1) {
    filterArray.push(company)
  }
})
console.log(filterArray)

// Sort the array using sort() method
console.log(itCompanies.sort())
// Reverse the array using reverse() method
console.log(itCompanies.reverse())
// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3))
// Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length - 3))
// Slice out the middle IT company or companies from the array
console.log(
  itCompanies.slice(itCompanies.length / 2 - 1, itCompanies.length / 2 + 1)
)
// Remove the first IT company from the array
console.log(itCompanies.shift())
// Remove the middle IT company or companies from the array
console.log(itCompanies.splice(itCompanies.length / 2 - 1, 2))
// Remove the last IT company from the array
console.log(itCompanies.pop())
// Remove all IT companies
console.log(itCompanies.splice(0, itCompanies.length))
