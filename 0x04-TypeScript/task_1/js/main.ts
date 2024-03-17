export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export const printTeacher: printTeacherFunction = function (
  firstName: string,
  lastName: string
): string {
  return `${firstName[0]}. ${lastName}`;
};
