app.controller('studentsCtrl', function ($http) {
    let vm = this;

    //this code can use Api json
    // $http.get("sope api https")
    //     .then(function (response) {
    //         vm.array = response.data.array;
    //     });
    

//array of all students
    vm.students = [
        {
            id: 1,
            student: 'Andrew',
            knowledge: 'Basic'
        },
        {
            id: 2,
            student: 'Dima',
            knowledge: 'Upper'
        },
        {
            id: 3,
            student: 'Ivan',
            knowledge: 'basic'
        },
        {
            id: 4,
            student: 'Anton',
            knowledge: 'Upper'
        },
        {
            id: 5,
            student: 'George',
            knowledge: 'basic'
        },
        {
            id: 6,
            student: 'Pavlo',
            knowledge: 'Upper'
        },
        {
            id: 7,
            student: 'Andrew',
            knowledge: 'basic'
        }
    ];

//the most simple way is use AngularJs filter, also we can write custom filter

//видалення студента з списку

    vm.removeItem = function (item) {
        this.students.students = this.students.students.filter(student => student !== item)
    };


})
