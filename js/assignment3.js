let person_name="imrAn khAn";
let name_lower_case=person_name.toLowerCase();
console.log("name in lower case : ", name_lower_case);
let name_upper_case=person_name.toUpperCase();
console.log("name in upper case : ", name_upper_case);
let name_title_casename=person_name.split(" ").map(w=>w.charAt(0).toUpperCase()+w.slice(1).toLowerCase()).join(" ");
console.log("name in title case : ", name_title_casename);