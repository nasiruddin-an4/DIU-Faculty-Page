import faculties from '../data/faculties.json';
import departments from '../data/departments.json';
import facultyMembers from '../data/faculty-members.json';
import positions from '../data/faculty-positions.json';

export const getFaculties = () => faculties.faculties;

export const getDepartments = (facultyId = null) => {
    const allDepartments = departments.departments;
    if (facultyId) {
        return allDepartments.filter(dept => dept.facultyId === facultyId);
    }
    return allDepartments;
};

export const getFacultyMembers = (departmentId = null) => {
    const allMembers = facultyMembers.facultyMembers;
    if (departmentId) {
        return allMembers.filter(member => member.departmentId === departmentId);
    }
    return allMembers;
};

export const getFacultyMemberById = (id) => {
    return facultyMembers.facultyMembers.find(member => member.id === id);
};

export const getFacultyPositions = () => positions.positions;