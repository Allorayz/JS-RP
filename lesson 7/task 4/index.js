'use strict';

const getMessagesForBestStudents = (allStudentsList, studentsForRetake) =>
	allStudentsList
		.filter(name => !studentsForRetake.includes(name))
		.map(name => 'Good job, ' + name);

const allStudTest = ['Den', 'John', 'Mike', 'Ann'];
const retakeStudTest = ['John', 'Mike'];

console.log(getMessagesForBestStudents(allStudTest, retakeStudTest));
