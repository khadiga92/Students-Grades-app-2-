const fs = require("fs");

const addGrade = (id, name, grades, comment) => {
    const students = loadstudents();
    const duplicateTitles = students.filter((student) => {
        return student.id === id;
    });

    if (duplicateTitles.length === 0) {
        sum = 0 // [2,3,5]
        grades.forEach((grade)=>{
            sum+= grade  // sum = sum + grade 0 + 1 =1 //1st    1 + 2 = 3 // 2nd loop  3 +8 = 11 3rd loop
        })
        students.push({
            id,
            name,
            grades,
            comment,
            sum
            })
        ;
        saveStudents(students);
        console.log("Saved Successfully");
    } else {
        console.log("Error duplicate");
    }
};

/////////////////////////////////////////////////////////////////////////////////////

const loadstudents = () => {
    try {
        const dataBuffer = fs.readFileSync("students.json").toString();
        return JSON.parse(dataBuffer);
    } catch (e) {
        return [];
    }
};

///////////////////////////////////////////////////////////////////////////////////

const saveStudents = (student) => {
    const saveData = JSON.stringify(student);
    fs.writeFileSync("students.json", saveData);
};
//////////////////////////////////////////////////////////////////////////////////

// const total = () => {
//     const students = loadstudents();
//     students.forEach((student) => {
//         sum = 0
//         student.grades.forEach((grade) => sum += grade)  
//         console.log(sum)
//     })
// }

// const students = loadstudents();
// const total = 
//     students.forEach((student) => {
//         sum = 0
//         student.grades.forEach((grade) => sum += grade)  
//         console.log(sum)
//     })


////////////////////////////////////////////////////////////////////////////
const deleteGrade = (id) => {
    const students = loadstudents()
    const studentsToKeep = students.filter((student) => {
        return student.id !== id
    })
    console.log(studentsToKeep)
    saveStudents(studentsToKeep)
    console.log('Removed')
}
// /////////////////////////////////////////////////////////////////////////////////

const readGrade = (id) => {
    const students = loadstudents()
    const student = students.find((student) => {
        return student.id === id
    })
    //console.log(student)
    if (student) {
        console.log(student.id, student.grades, student.sum)
    } else {
        console.log('Sorry not found')
    }
}
//////////////////////////////////////////////////////////////////////////////

const listGrades = () => {
    const students = loadstudents()
    students.forEach((student) => {
        console.log(student.id, student.grades, student.sum)
    })
}

module.exports = {
    addGrade,
    deleteGrade,
    readGrade,
    listGrades
};