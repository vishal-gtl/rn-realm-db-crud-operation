export default class Student {
    _id: 'string'
    _student_id: 'string'
    _student_name: 'string'
    _student_class: 'string'
    _student_subject:'string'

    constructor() {
        this._id = "id";
        this._student_id = "student_id";
        this._student_class = "student_class";
        this._student_name = "student_name";
        this._student_name = "student_name";
        this._student_subject= "student_subject";

    }

    get id(): "string" {
        return this._id;
    }

    set id(value: "string") {
        this._id = value;
    }

    get student_id(): "string" {
        return this._student_id;
    }

    set student_id(value: "string") {
        this._student_id = value;
    }

    get student_name(): "string" {
        return this._student_name;
    }

    set student_name(value: "string") {
        this._student_name = value;
    }

    get student_class(): "string" {
        return this._student_class;
    }

    set student_class(value: "string") {
        this._student_class = value;
    }

    get student_subject() {
        return this._student_subject;
    }

    set student_subject(value) {
        this._student_subject = value;
    }
}
