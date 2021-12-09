const fs = require("fs");

const addGrade = (id, name, grades, comment) => {
    const students = loadstudents();
    const duplicateTitles = students.filter((student) => {
        return student.id === id;
    });
    if (duplicateTitles.length === 0) {
        students.push({
            id,
            name,
            grades,
            comment,
            //total: students.forEach((student)=>{
            //sum = 0
            // student.grades.forEach((grade)=> sum+= grade)
            //})
        });
        saveStudents(students);
        console.log("Saved Successfully");
    } else {
        console.log("Error duplicate title");
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
const total = () => {
    const students = loadstudents();
    students.forEach((student) => {
        sum = 0
        student.grades.forEach((grade) => sum += grade)
        saveStudents(students);
    })
}

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
    console.log(student)
    if (student) {
        console.log(student.id, student.grades, total)
    } else {
        console.log('Sorry not found')
    }
}
//////////////////////////////////////////////////////////////////////////////

const listGrades = () => {
    const students = loadstudents()
    students.forEach((student) => {
        console.log(student.id, student.grades, total)
    })
}

module.exports = {
    addGrade,
    deleteGrade,
    readGrade,
    listGrades
};