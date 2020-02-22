function biodata (){ // membuat function biodata
    let biodatapribadi = { //membuat object berisi biodata dengan ketentuan soal
        name : 'Bagus Nur Solayman',
        age : 18,
        address : 'Jalan Simprug Golf 2 Kebayoran Lama Jakarta Selatan',
        hobbies : ['Game Online', 'Nonton Film'],
        is_married : false,
        list_school : [
            {
                name_school : 'SDN Gunung 06 Petang',
                year_in : 2008,
                year_out : 2013,
                major : null
            },
            {
                name_school : 'SMP Negeri 12 Jakarta',
                year_in : 2013,
                year_out : 2016,
                major : null
            },
            {
                name_school : 'SMK Negeri 6 Jakarta',
                year_in : 2016,
                year_out : 2019,
                major : "Animasi"
            }
        ],
        skills : [
            {
                skill_name : 'Photoshop',
                level : 'Beginner'
            },
            {
                skill_name : 'Adobe Illustrator',
                level : 'Beginner'
            },
            {
                skill_name : 'HTML',
                level : 'Beginner'
            },
            {
                skill_name : 'CSS',
                level : 'Beginner'
            },
            {
                skill_name : 'Javascript',
                level : 'Beginner'
            },
        ],
        interest_in_coding : true
        }
        return JSON.stringify(biodatapribadi); //mereturn value menjadi JSON
}
console.log(biodata());