class Student
{
    constructor(name,grade) {
        this.name=name
        this.grade=grade
    }
    study()
    {
        console.log("Name of the student is",this.name);
    }
    getGrade()
    {
        console.log("Grade of the student is",this.grade)
    }
}
const s1=new Student("Surya","A1");
s1.study();
s1.getGrade();
const s2=new Student("Mani","B1");
s2.study();
s2.getGrade();
const s3=new Student("Giri","A2");
s3.study();
s3.getGrade();