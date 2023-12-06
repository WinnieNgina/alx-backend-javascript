interface Teacher {
    readonly firstName : string;
    readonly lastName : string;
    fullTimeEmployee : boolean;
    location : string;
    yearsOfExperience? : number;
    [propName: string]: any;
}
interface Directors extends Teacher {
    numberOfReports : number;
}
function printTeacher(firstName : string, lastName : string)
{
    return `${firstName[0]}. ${lastName}`
}