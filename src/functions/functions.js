//Local Storage - adding, removing, getting
export const addDataToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}
export const removeDataFromLocalStorage = (key) => {
  localStorage.removeItem(key)
}
export const getDataFromLocalStorage = (key) => {
  const resault = localStorage.getItem(key)
  const data = resault ? JSON.parse(resault) : null
  return data
}
export const clearLocalStorage = () => localStorage.clear()

//take number of tasks and return array [1. задатак, 2. задатак, ..., numOfTask. задатак]
export const createTaskArray = (numOfTasks) =>
  Array.from({ length: numOfTasks }, (_, i) => `${i + 1}. задатак`)

// count average mark, take only marks, count summ, delete with number of students
export const averageMark = (classResaultArray, numberOfStudentsWhoWorked) => {
  const summ = classResaultArray.reduce((acc, curr) => {
    acc = acc + curr.mark * 1
    return acc
  }, 0)
  return (summ / (numberOfStudentsWhoWorked * 1)).toFixed(2).replace('.', ',')
}

// take class resault(objects with marks, id, and points), remove marks and id,
//take only values, numbers, then there will be array of arrays
// flat them into one array, then count average
export const averagePoints = (classResaultArray, numberOfStudentsWhoWorked) => {
  const removedMarkAndStudentNumberSumm = classResaultArray
    .map((classResault) => {
      const objectCopy = { ...classResault }
      delete objectCopy.mark
      delete objectCopy.studentNumber
      return objectCopy
    })
    .map((points) => Object.values(points))
    .flat(1)
    .reduce((acc, curr) => {
      acc = acc + curr * 1
      return acc
    }, 0)
  return (removedMarkAndStudentNumberSumm / (numberOfStudentsWhoWorked * 1))
    .toFixed(2)
    .replace('.', ',')
}

//count number of every mark
export const numberOfEveryMark = (classResault) => {
  return classResault.reduce(
    (acc, curr) => {
      if (curr.mark === '1') acc.a++
      if (curr.mark === '2') acc.b++
      if (curr.mark === '3') acc.c++
      if (curr.mark === '4') acc.d++
      if (curr.mark === '5') acc.e++

      return acc
    },
    {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
    }
  )
}

export const percentageOfCorrectAnswersForEveryTask = (
  classResaultArray,
  taskLevels
) => {
  let onlyPointsPerTaskArray = classResaultArray
    .map((classResault) => {
      const objectCopy = { ...classResault }
      delete objectCopy.mark
      delete objectCopy.studentNumber
      return objectCopy
    })
    .map((resault) => Object.entries(resault))

  taskLevels = Object.entries(taskLevels)

  let tempObject = { basic: 0, medium: 0, advanced: 0 }

  //determinate which task are basic, medium, advanced
  const basicLevelTasks = taskLevels
    .filter((task) => task[1] === 'basic')
    .map((el) => el[0])
  const mediumLevelTasks = taskLevels
    .filter((task) => task[1] === 'medium')
    .map((el) => el[0])
  const advancedLevelTasks = taskLevels
    .filter((task) => task[1] === 'advanced')
    .map((el) => el[0])

  const basicPairs = onlyPointsPerTaskArray
    .flat(1)
    .filter((member) => basicLevelTasks.includes(member[0]))
  const mediumPairs = onlyPointsPerTaskArray
    .flat(1)
    .filter((member) => mediumLevelTasks.includes(member[0]))
  const advancedPairs = onlyPointsPerTaskArray
    .flat(1)
    .filter((member) => advancedLevelTasks.includes(member[0]))

  const basicPercentage = (
    (basicPairs.reduce((acc, curr) => {
      acc = acc + curr[1] * 1
      return acc
    }, 0) /
      basicPairs.length) *
    100
  ).toFixed(2)
  const mediumPercentage = (
    (mediumPairs.reduce((acc, curr) => {
      acc = acc + curr[1] * 1
      return acc
    }, 0) /
      mediumPairs.length) *
    100
  ).toFixed(2)

  const advancedPercentage = (
    (advancedPairs.reduce((acc, curr) => {
      acc = acc + curr[1] * 1
      return acc
    }, 0) /
      advancedPairs.length) *
    100
  ).toFixed(2)
  return { basicPercentage, mediumPercentage, advancedPercentage }
}

// taskLevel = [
//     ["1. задатак","basic"],["2. задатак","basic"],["3. задатак","medium"],["4. задатак","medium"],["5. задатак","advanced"]]

// only = [
//   [
//     ['1. задатак', '1'],
//     ['2. задатак', '1'],
//     ['3. задатак', '1'],
//     ['4. задатак', '1'],
//     ['5. задатак', '1'],
//   ],
//   [
//     ['1. задатак', '0'],
//     ['2. задатак', '0'],
//     ['3. задатак', '0'],
//     ['4. задатак', '1'],
//     ['5. задатак', '1'],
//   ],
//   [
//     ['1. задатак', '0.5'],
//     ['2. задатак', '0'],
//     ['3. задатак', '1'],
//     ['4. задатак', '0'],
//     ['5. задатак', '0'],
//   ],
//   [
//     ['1. задатак', '1'],
//     ['2. задатак', '1'],
//     ['3. задатак', '1'],
//     ['4. задатак', '0'],
//     ['5. задатак', '0'],
//   ],
// ]

export const percentageForSingleTask = (classResaultArray) => {
  let onlyPointsPerTaskArray = classResaultArray
    .map((classResault) => {
      const objectCopy = { ...classResault }
      delete objectCopy.mark
      delete objectCopy.studentNumber
      return objectCopy
    })
    .map((resault) => Object.entries(resault))
    .flat(1)
  const tasks = [
    ...new Set(onlyPointsPerTaskArray.map((member) => member.at(0))),
  ]

  const startObject = tasks.reduce((acc, curr) => {
    acc[curr] = 0
    return acc
  }, {})

  return onlyPointsPerTaskArray.reduce((acc, curr) => {
    acc[curr[0]] = (
      acc[curr[0]] * 1 +
      ((curr[1] * 1) / classResaultArray.length) * 100
    ).toFixed(2)

    return acc
  }, startObject)
}
