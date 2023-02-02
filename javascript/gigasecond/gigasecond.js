//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (moment) => {
  const momentInTime = new Date(moment).getTime()
  const momentInGiga = momentInTime + 1000000000000
  return new Date(momentInGiga)
};

console.log(gigasecond('2019-06-11'));