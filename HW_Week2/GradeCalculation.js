function gradeCalculation(score)
{
    let grade;
    switch(true)
    {
        case (score >= 90 && score <= 100):
            grade = "A";
            break;
        case (score >= 80 && score < 90):
            grade = "B";
            break;
        case (score >= 70 && score < 80):
            grade = "C";
            break;
        default:
            grade = "Please enter a valid score !";

    }
    console.log(grade);

}
gradeCalculation(100);
gradeCalculation(88);
gradeCalculation(95);
gradeCalculation(76);
gradeCalculation();
gradeCalculation(101);