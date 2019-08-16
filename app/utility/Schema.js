
export const STUDENT_INFO = "Student_Info";

export const student_info = {
    name: 'Student_Info',
    primaryKey: 'id',
    properties:
        {
            id: 'int',
            student_id: {type: 'int', default: 0},
            student_name: 'string',
            student_class: 'string',
            student_subject: 'string'
        }
};