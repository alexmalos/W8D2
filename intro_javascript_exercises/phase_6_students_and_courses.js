function Student(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    this.courses = [];
}

Student.prototype.name = function() {
    return this.fname + " " + this.lname;
};

Student.prototype.enroll = function(course) {
    if (!course.students.includes(this)) {
        if (this.hasConflict(course)) { throw "Time conflict"; }
        this.courses.push(course);
        course.students.push(this);
    }
};

Student.prototype.courseLoad = function() {
    hash = {};

    for (let i = 0; i < this.courses.length; i++) {
        let course = this.courses[i];
        if (hash[course.department] === undefined) {
            hash[course.department] = 0;
        }
        hash[course.department] += course.credits;
    }

    return hash;
}

function Course(name, department, credits, days, block) {
    this.name = name;
    this.department = department;
    this.credits = credits;
    this.days = days;
    this.block = block;
    this.students = [];
}

Course.prototype.addStudent = function(student) {
    student.enroll(this);
}

Course.prototype.conflictsWith = function(course) {
    return this.days.some(function(el) { return course.days.includes(el); }) && this.block === course.block;
}

Student.prototype.hasConflict = function(course) {
    for (let i = 0; i < this.courses.length; i++) {
        if (this.courses[i].conflictsWith(course)) { return true; }
    }
}