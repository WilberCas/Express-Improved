let app = new Vue({
    el:'#app',
    data:{
        message: 'Hello Wilber!'
    },
    methods:{
        getAllCourses: () =>{
            fetch('/course')
            .then((res) => res.json())
            .then((data) => {
                let courses = data.map((course) => course.name);
                document.getElementById('result').innerHTML = courses;
            })
        },
        getCourse: () =>{
            let name = document.getElementById('courseIn').valueOf;
            if(name !== null && name !== ''){
                fetch('/course'+name)
                .then((res) => res.json())
                .then((data) =>{
                    document.getElementById('result').innerHTML = data;
                })
            }
        },
        deleteCourse: () =>{
            let name = document.getElementById('courseIn').valueOf;
            if(name !== null && name !== ''){
                fetch('/course'+name, {method:'DELETE'})
                .then((res) => res.json())
                .then((data) =>{
                    document.getElementById('result').innerHTML = data;
                })
            }
        },
        updateCourse: () =>{
            let name = document.getElementById('courseIn').valueOf;
            if(name !== null && name !== ''){
                fetch('/course'+name, {method:'PUT'})
                .then((res) => res.json())
                .then((data) =>{
                    document.getElementById('result').innerHTML = data;
                })
            }
        }
    }
});