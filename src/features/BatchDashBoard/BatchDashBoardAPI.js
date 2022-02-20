import mockData from './mockData';

// A mock function to mimic making an async request for data
export function fetchBatches(data = mockData){
  return new Promise((resolve) => {
    setTimeout(() => resolve({data}), 200)
  })
}
